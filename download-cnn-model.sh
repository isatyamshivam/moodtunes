#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
# download-cnn-model.sh
# Downloads a pre-trained FER-2013 emotion CNN (TF.js format)
# into public/models/mobilenet-emotion/
#
# Source: floriankapaun/tfjs-emotion-classification (MIT licence)
# Architecture: oarriaga/face_classification CNN
#   Input:  48x48x1 grayscale face crop
#   Output: 7-class softmax (angry, disgusted, fearful,
#           happy, neutral, sad, surprised)
# ──────────────────────────────────────────────────────────────

set -e

OUTPUT_DIR="./models/mobilenet-emotion"
BASE_URL="https://raw.githubusercontent.com/floriankapaun/tfjs-emotion-classification/main/src/assets/model"

# model.json + 19 weight shard files
FILES=("model.json")
for i in $(seq 1 19); do
    FILES+=("group${i}-shard1of1")
done

mkdir -p "$OUTPUT_DIR"

echo ""
echo "========================================================"
echo "  MoodTunes  —  Emotion CNN Model Download"
echo "  FER-2013 trained • 7 emotions • TF.js format"
echo "  Source: floriankapaun/tfjs-emotion-classification (MIT)"
echo "========================================================"
echo ""

SUCCESS=true

for FILE in "${FILES[@]}"; do
    URL="${BASE_URL}/${FILE}"
    OUTPUT="${OUTPUT_DIR}/${FILE}"
    printf "  Downloading %s ... " "$FILE"
    if curl -fSL -o "$OUTPUT" "$URL" 2>/dev/null; then
        SIZE=$(wc -c < "$OUTPUT" | tr -d ' ')
        echo "OK (${SIZE} bytes)"
    else
        echo "FAILED"
        SUCCESS=false
    fi
done

# Fix weight paths in model.json so they point to local shard files
if [ "$SUCCESS" = true ]; then
    echo ""
    echo "  Fixing weight paths in model.json ..."
    if command -v sed &>/dev/null; then
        sed -i.bak 's|tfjs-emotion-classification/static/\(group[0-9]*-shard[0-9]*of[0-9]*\)\.bin|\1|g' "${OUTPUT_DIR}/model.json"
        rm -f "${OUTPUT_DIR}/model.json.bak"
        echo "    OK — paths rewritten to local references."
    fi
fi

echo ""
if [ "$SUCCESS" = true ]; then
    echo "✅ All model files downloaded to ${OUTPUT_DIR}"
    echo "   Run 'npm run dev' to start MoodTunes."
else
    echo "⚠  Some downloads failed. Check your network and retry."
fi
