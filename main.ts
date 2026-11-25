// Absurd Micro-Startup Pitch-Off entry: writes one pitch to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "Introducing NapkinAI: send us a photo of your napkin sketch and our AI returns a 40-slide deck, a valuation, and a co-founder who only says 'synergy'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
