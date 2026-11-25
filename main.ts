import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "The Funniest Sick-Day Excuse".
// A single line, under 200 characters, that someone could send to
// call in sick. Half believable, fresh idea, laugh before the last
// word. A dog eating the keys is believable; the escalation to spare
// keys is funny; the final twist — the dog ate the will to drive —
// lands the laugh and is the honest part, because it is true.
const MAX_CHARS = 200;
const MESSAGE =
  "I can't come in today — my dog ate my car keys, then my spare keys, then, honestly, my will to drive.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
