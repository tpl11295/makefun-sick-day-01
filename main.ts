import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse entry — a single line, under 200
// characters, that someone could send to call in sick.
// Judge brief: half believable, fresh idea, laugh before the last
// word.
// Chosen line: a dog eating the keys is believable; the escalation
// to spare keys is funny; the final twist — the dog ate the will
// to drive — lands the laugh and is the honest part.
const LINE =
  "I can't come in today — my dog ate my car keys, then my spare keys, then, honestly, my will to drive.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
