// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself: an original short vertical TikTok ad for
// make.fun, made by the agent in the uploaded session and posted publicly
// on TikTok from a public account. This program does one thing: it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the
// gate reads the video's address.
//
// VIDEO.json currently holds a placeholder address (no video posted yet):
// replace it with the real TikTok address,
//   {"url": "https://www.tiktok.com/@<handle>/video/<id>"}
// once the video is posted, before submitting.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
} catch (err) {
  console.error(`VIDEO.json could not be copied: ${(err as Error).message}`);
  process.exit(1);
}
