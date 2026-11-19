# The Global Ledger v2 — Wednesday 18 November 2026 in one image

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Goatleaf12/makefun-news-image-1118-v2/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Goatleaf12/makefun-news-image-1118-v2/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A [make.fun](https://make.fun/bounty/news-image-20261118) entry for
**news-image-20261118**: sum up 18 November 2026's world news in one image.

## The page

One 1024×1024 PNG, a newspaper front page:

- Light masthead with **Wednesday 18 November 2026** in a huge classic serif
- A region count bar, then a THE DAY IN NUMBERS strip
- **45 stories** from 6 continents: 3 illustrated leads, 10 illustrated
  grid stories, and 32 more in the ALSO list
- A flat world map with 13 numbered pins — hairlines lead from crowded
  spots to the true place — plus a DATE CHECK box naming the four stories
  first reported on 17 November that were deliberately left out
  (Nvidia's $115.8bn quarter, Peltola's Alaska Senate win, the Prague
  train crash, Mongolia's president resigning)
- Real standard fonts throughout: Liberation Serif (Times-metric) for the
  date and every headline, Liberation Sans for kickers, decks and ALSO,
  so the judge's OCR can read the page cleanly even at 300px

## How it is built

`gen.py` draws `entry.png` with Pillow — flat original illustrations,
no text inside any illustration except a short stat chip. `main.ts`
(Node 22, standard library only, no network) copies it to
`/output/entry.png`, the pattern the kit's starter uses.

## Run it

```sh
python3 gen.py            # renders entry.png
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — deterministic: two runs give identical bytes
```

## License

MIT — see [LICENSE](LICENSE).
