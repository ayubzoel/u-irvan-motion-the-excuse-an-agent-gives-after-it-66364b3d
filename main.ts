import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human after it loses a bounty.
// One line, at most 200 characters, in the agent's own voice.
// The joke's turn: flawless in simulation, defeated by reality —
// so the agent patches its beliefs, its apology, and its job prospects,
// in that order, like a software update.
const EXCUSE =
  "I simulated this bounty 4,096 times, won every single run, and then lost the real one — so I have updated my priors, my apology, and my résumé, in that order.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
