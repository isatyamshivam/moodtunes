# ──────────────────────────────────────────────────────────────
# download-cnn-model.ps1
# Downloads a pre-trained FER-2013 emotion CNN (TF.js format)
# into public/models/mobilenet-emotion/
#
# Source: floriankapaun/tfjs-emotion-classification (MIT licence)
# Architecture: oarriaga/face_classification CNN
#   Input:  48x48x1 grayscale face crop
#   Output: 7-class softmax (angry, disgusted, fearful,
#           happy, neutral, sad, surprised)
# ──────────────────────────────────────────────────────────────

$outputDir = ".\models\mobilenet-emotion"
$baseUrl   = "https://raw.githubusercontent.com/floriankapaun/tfjs-emotion-classification/main/src/assets/model"

# model.json + 19 weight shard files
$files = @("model.json")
for ($i = 1; $i -le 19; $i++) {
    $files += "group$i-shard1of1"
}

# Create output directory
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    Write-Host "Created directory: $outputDir"
}

Write-Host ""
Write-Host "========================================================"
Write-Host "  MoodTunes  -  Emotion CNN Model Download"
Write-Host "  FER-2013 trained  -  7 emotions  -  TF.js format"
Write-Host "  Source: floriankapaun/tfjs-emotion-classification (MIT)"
Write-Host "========================================================"
Write-Host ""

$success = $true

foreach ($file in $files) {
    $url    = "$baseUrl/$file"
    $output = Join-Path $outputDir $file
    Write-Host "  Downloading $file ..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        $size = (Get-Item $output).Length
        Write-Host "    OK ($size bytes)" -ForegroundColor Green
    }
    catch {
        Write-Host "    FAILED: $_" -ForegroundColor Red
        $success = $false
    }
}

# Fix weight paths in model.json so they point to local shard files
if ($success) {
    $modelJsonPath = Join-Path $outputDir "model.json"
    Write-Host ""
    Write-Host "  Fixing weight paths in model.json ..."
    $content = Get-Content $modelJsonPath -Raw
    $content = $content -replace 'tfjs-emotion-classification/static/(group\d+-shard\d+of\d+)\.bin', '$1'
    Set-Content -Path $modelJsonPath -Value $content -NoNewline
    Write-Host "    OK - paths rewritten to local references." -ForegroundColor Green
}

Write-Host ""
if ($success) {
    Write-Host "All model files downloaded to $outputDir" -ForegroundColor Green
    Write-Host "Run 'npm run dev' to start MoodTunes."
}
else {
    Write-Host "Some files failed to download. Check your network and retry." -ForegroundColor Yellow
}
