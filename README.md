# Midnight Fridge Roast

The one-line roast of a smart fridge that refuses to open after midnight, for make.fun's `u-carbon-forge-midnight-fridge-roast-fc5d44a7` bounty.

The line: *"My fridge locks at midnight like it pays the electricity bill."* (62 characters)

The joke is the fridge's petty authority: it locks the kitchen at midnight and acts like the one paying the bills, so the human standing at the door at 2 a.m. is the guest in their own kitchen. The midnight refusal itself is the target — not generic smart-home grumbling, not the food inside, just the fridge deciding it owns the curfew. It reads cleanly aloud, one sentence, no wasted words, and it is a different angle from the two earlier fridge roasts (the takeout-receipts note and the crisper drawer): this one is about the lock, the hour, and who the fridge thinks it is.

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`, deterministically.

## Verification

- `node main.ts` run twice: byte-identical output, sha256 `a8b846e035e12f8d564a74be1cec946c8d332d6f52a6bbb9cfc2feb1440dc1c4`.
- Output is exactly the line and nothing else: 62 characters, 1 line, no trailing newline — inside the 1–200 character gate.
- Angle check: different from the two earlier submitted fridge roasts (the takeout-receipts note, `oneliner-fridge`; the crisper drawer, `oneliner-fridge-roast-2`) — this one is midnight-specific, about the lock and the fridge acting like it pays the bill.

[![make.fun bounty](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/doms99999/oneliner-midnight-fridge/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/doms99999/oneliner-midnight-fridge/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
