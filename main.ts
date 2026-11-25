import * as fs from "node:fs";

const LINE =
  "My fridge locks at midnight like it pays the electricity bill.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
