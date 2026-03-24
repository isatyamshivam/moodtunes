/**
 * download-cnn-model.mjs
 * ─────────────────────────────────────────────────────────────
 * Node.js script to download the pre-trained FER-2013 emotion
 * CNN model (TF.js LayersModel format) into public/models/.
 *
 * Source: floriankapaun/tfjs-emotion-classification (MIT licence)
 * Architecture: oarriaga/face_classification CNN
 *   - Input:  48×48×1 grayscale face crop
 *   - Output: 7-class softmax (angry, disgusted, fearful,
 *             happy, neutral, sad, surprised)
 *
 * Run via: npm run download-model
 *          — or —  node download-cnn-model.mjs
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { get } from 'https';

const OUTPUT_DIR = join('models', 'mobilenet-emotion');

const RAW_BASE =
  'https://raw.githubusercontent.com/floriankapaun/tfjs-emotion-classification/main/src/assets/model';

/** The 19 weight-shard files + model.json */
const SHARD_FILES = Array.from({ length: 19 }, (_, i) => `group${i + 1}-shard1of1`);
const ALL_FILES = ['model.json', ...SHARD_FILES];

/** Simple HTTPS GET that follows redirects and returns a Buffer. */
function download(url) {
  return new Promise((resolve, reject) => {
    const request = (href) => {
      get(href, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          request(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${href}`));
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      }).on('error', reject);
    };
    request(url);
  });
}

/**
 * The upstream model.json has weight paths like
 *   "tfjs-emotion-classification/static/group1-shard1of1.bin"
 * We rewrite them to just "group1-shard1of1" (relative to model.json,
 * no .bin extension since the upstream files have no extension).
 */
function fixModelPaths(modelJsonPath) {
  const raw = readFileSync(modelJsonPath, 'utf8');
  const fixed = raw.replace(
    /tfjs-emotion-classification\/static\/(group\d+-shard\d+of\d+)\.bin/g,
    '$1'
  );
  writeFileSync(modelJsonPath, fixed, 'utf8');
}

async function main() {
  console.log('');
  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║  MoodTunes — Emotion CNN Model Download           ║');
  console.log('║  FER-2013 trained • 7 emotions • TF.js format     ║');
  console.log('╚═══════════════════════════════════════════════════╝');
  console.log('');
  console.log(`Source: floriankapaun/tfjs-emotion-classification (MIT)`);
  console.log('');

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}`);
  }

  let allOk = true;

  for (const file of ALL_FILES) {
    const url = `${RAW_BASE}/${file}`;
    const dest = join(OUTPUT_DIR, file);
    process.stdout.write(`⬇  Downloading ${file} ... `);
    try {
      const buf = await download(url);
      writeFileSync(dest, buf);
      console.log(`✓ ${buf.length} bytes`);
    } catch (err) {
      console.log(`✗ FAILED — ${err.message}`);
      allOk = false;
    }
  }

  // Fix weight paths in model.json
  if (allOk) {
    const modelJsonPath = join(OUTPUT_DIR, 'model.json');
    console.log('\n🔧 Fixing weight paths in model.json ...');
    fixModelPaths(modelJsonPath);
    console.log('   ✓ Paths rewritten to local relative references.');
  }

  console.log('');
  if (allOk) {
    console.log(`✅ All model files saved to ${OUTPUT_DIR}`);
    console.log("   Run 'npm run dev' to start MoodTunes.");
  } else {
    console.log('⚠  Some downloads failed. Check your network and retry.');
  }
}

main();
