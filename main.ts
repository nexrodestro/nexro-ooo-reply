// The Funniest AI Out-of-Office Reply (u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).
// Entry: one out-of-office auto-reply, 125 chars. Picked from 20 scored
// candidates: model weights drifting to the sea, answering only in tide
// times — a concrete machine-voice joke with a second twist, no saturated
// backup/replacement lane. Writes the line exactly, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office: I set my status to 'beach' and my model weights drifted toward the sea. I now answer only in tide times.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
