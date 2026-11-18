// The Global Ledger v2 — news-image-20261118 (Node 22, standard library only).
// The entry image lives beside this file as entry.png (drawn by gen.py with
// PIL using Liberation Serif, a Times-metric classic newspaper serif, and
// Liberation Sans); the program copies it to /output/entry.png, exactly the
// pattern the competition kit's starter uses. No network, no dependencies,
// deterministic: two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
