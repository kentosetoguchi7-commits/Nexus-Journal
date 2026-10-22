# Nexus Weekly: weekly publishing playbook

This playbook is followed by the Saturday-morning Claude routine, and by anyone producing an issue by hand.
Goal: one new issue each week covering **Monday–Friday of the week that just ended**, written so a client
with no finance background understands it, with an optional deeper "Trader's take" for active traders.

## 1. Work out the week

- The issue id is the **Friday** that ends the covered week, as `YYYY-MM-DD` (US Eastern time).
- If `nexus-weekly/data/issues/<id>.js` already exists, stop: that week is already published.

## 2. Research (sources the owner approved)

Use only these three source types, and prefer the first:

1. **Official primary sources:** federalreserve.gov (FOMC statements, minutes, press-conference transcripts,
   Beige Book, speeches), whitehouse.gov (briefings, fact sheets, presidential actions), bls.gov (CPI, PPI, jobs),
   bea.gov (GDP, PCE), census.gov (retail sales, housing), treasury.gov, dol.gov (jobless claims).
2. **Wire services:** Reuters and AP. Their own domains can't be searched directly; find their stories through
   syndicated copies such as finance.yahoo.com, money.usnews.com, investing.com ("By Reuters") and local
   news sites carrying AP. Label these as `"Reuters (via US News)"` or `"AP (via <site>)"`.
3. **Financial press:** Bloomberg, CNBC, Wall Street Journal, Financial Times, MarketWatch, Fox Business,
   Yahoo Finance, Investing.com.

Do **not** cite general/political outlets (CNN, NBC, NYT, WaPo, Al Jazeera, blogs, newsletters). If a fact
only appears there, leave it out.

Rules:
- Run several `WebSearch` queries in parallel (Fed, White House/Trump, economic data releases, markets
  weekly recap, oil/energy, geopolitics, next week's calendar). `WebFetch` may be blocked in the cloud
  container, so expect to work from search results.
- **Every number must match at least one approved source,** and ideally two. When sources disagree, say
  "about" and/or use the official release. Never invent a figure, quote or date.
- Quotes in explainers must be verbatim from a transcript or a reputable report.
- Confirm weekdays against a calendar before writing "Wed, Oct 14".

## 3. What to cover

The owner's focus areas, in priority order:

- **Fed & interest rates:** FOMC decisions, the chair's press conference, minutes, Beige Book, notable Fed speakers, rate expectations.
- **White House & policy:** Trump press conferences, executive orders, tariffs and trade, sanctions, fiscal policy.
- **Economic data:** CPI, PPI, jobs report, GDP, retail sales, jobless claims. Show actual vs. expected vs. prior.
- **Markets & futures impact:** weekly moves in the S&P 500, Nasdaq, 10-year yield, oil, gold and the fed funds rate, and why they moved.

Aim for 5–8 stories and 1–3 explainers. **Any week with an FOMC meeting or a major presidential press conference
must get an explainer for it.** Other good explainer topics: a big jobs/CPI surprise, a major policy shift,
a geopolitical event moving markets.

## 4. Writing style

- Plain English first. Short sentences. Explain jargon or link it to the glossary with `[[term]]` or `[[term|shown text]]`.
  Add any new term to `data/glossary.js` (lowercase key, one or two plain sentences).
- Each story: `plainEnglish` (one sentence a non-investor gets), `whatHappened` (facts), `whyItMatters` (so what),
  optional `traderTake` (levels, positioning, what to watch; never a buy/sell recommendation).
- Neutral and non-partisan. Report what officials said and did; attribute opinions.
- `**bold**` is allowed sparingly (TL;DR lead-ins, "For you" bullet lead-ins).

## 5. Files to write

1. **New issue:** `nexus-weekly/data/issues/<id>.js`. Copy the structure of the most recent issue exactly:
   `(window.NEXUS_WEEKLY_ISSUES = window.NEXUS_WEEKLY_ISSUES || {})["<id>"] = { ... };`
   Fields: `id`, `weekLabel` (e.g. `"Oct 19 – 23, 2026"`), `published` (today, YYYY-MM-DD), `headline`, `intro`,
   `mood {label, tone: up|down|flat, note}`, `tldr[]` (5 bullets), `markets[]`, `stories[]`
   (category: `fed` | `whitehouse` | `data` | `markets` | `world`), `explainers[]`, `weekAhead[]` (importance 1–3).
2. **Manifest:** add `{ id, weekLabel, headline }` to the **top** of `nexus-weekly/data/manifest.js` (newest first;
   `weekLabel` and `headline` must match the issue file).
3. **Glossary:** add any new terms to `nexus-weekly/data/glossary.js`.

Do not edit `index.html` as part of a weekly run.

## 6. Check, then publish

```bash
node nexus-weekly/scripts/validate.mjs   # must print ✓
```

Fix anything it reports. Then re-read the new issue once, adversarially: is every number sourced? Are dates and
weekdays right? Would a client with no finance background follow it?

Publish by committing the three files with the message `Nexus Weekly: week of <weekLabel>` and pushing to the
branch the site is served from (`main`). If the push fails for network reasons, retry up to 4 times with
backoff (2s, 4s, 8s, 16s). If validation fails and you can't fix it, or the push is rejected, don't force anything.
Leave the work on a branch and report what blocked publishing.
