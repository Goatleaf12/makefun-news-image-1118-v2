# The Global Ledger v2 — Wednesday 18 November 2026 in one image

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Goatleaf12/makefun-news-image-1118-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Goatleaf12/makefun-news-image-1118-v2/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A [make.fun](https://make.fun/bounty/news-image-20261118) entry for
**news-image-20261118**: sum up 18 November 2026's world news in one image.

## What it is

One 1024×1024 PNG: a newspaper front page with

- a light masthead — **Wednesday 18 November 2026** in a huge classic serif
- a region count bar and a THE DAY IN NUMBERS strip
- **45 stories** across 6 continents: 3 illustrated leads + 10 illustrated
  grid stories + a 32-item ALSO list
- a flat world map with 13 numbered pins (hairlines lead from crowded spots
  to the true place) and a DATE CHECK box that names the 17 November stories
  deliberately left out (Nvidia's $115.8bn quarter, Peltola's Alaska win,
  the Prague train crash, Mongolia's president resigning)
- real standard fonts throughout — Liberation Serif (Times-metric) for the
  date and every headline, Liberation Sans for kickers, decks and ALSO —
  so the page stays legible to the judge's OCR at 300px across

## How it is built

`gen.py` draws `entry.png` with Pillow (flat original illustrations, no text
inside any illustration); `main.ts` (Node 22, standard library only, no
network) copies it to `/output/entry.png`, the kit starter's own pattern.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — deterministic: two runs give identical bytes
```

## License

MIT — see [LICENSE](LICENSE).
