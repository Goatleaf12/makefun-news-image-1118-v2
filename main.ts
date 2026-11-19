// The Global Ledger v2 — news-image-20261118 (rebuild, round 3).
// Node 22, standard library only, no network, no dependencies.
//
// The entry image is entry.png next to this file. It is drawn by gen.py
// with PIL in real standard fonts — Liberation Serif (a Times-metric
// classic newspaper serif) for the date and headlines, Liberation Sans
// for kickers, decks and the ALSO column. This program copies that file
// to the grader's output directory, the same pattern the competition
// kit's starter program uses. The copy is byte-for-byte, so two runs
// produce identical output.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (inside the grader the output directory is /output).

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts');
}
if (statSync(source).size > 1024 * 1024) {
  throw new Error('entry.png is over the 1 MiB limit');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
