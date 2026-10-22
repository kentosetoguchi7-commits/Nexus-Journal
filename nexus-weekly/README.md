# Nexus Weekly

A standalone website that gives clients a weekly summary of the major market and policy news (Fed meetings,
White House press conferences, economic data and market moves), explained in plain English.

It's a static site with no build step and no server: open `index.html` in a browser, or host the folder anywhere
(GitHub Pages, Netlify, S3…).

## What's on the page

- **The week in 60 seconds:** five-bullet summary
- **Market scoreboard:** S&P 500, Nasdaq, chips, 10-year yield, oil, gold, fed funds rate
- **Top stories:** filterable by Fed / White House / Economic data / Markets / World. Each story has
  *In plain English*, *What happened*, *Why it matters*, data tables (actual vs. expected), an expandable
  *Trader's take*, and source links
- **Explained:** step-by-step breakdowns of the week's big meetings and press conferences, with Q&A,
  "what they said → what it means" quote translations, "what it means for you" and a bottom line
- **On the calendar:** the coming week's events, ranked by how much they could move markets
- **Glossary:** dotted terms show a definition when tapped
- Issue archive, copy-link, print/save-as-PDF, light/dark mode, mobile layout

## Files

```
index.html               the site (layout, styles, rendering)
data/manifest.js         list of issues, newest first
data/issues/<id>.js      one file per week; <id> is the Friday that ends the week
data/glossary.js         plain-English definitions used by [[term]] links
scripts/validate.mjs     checks data files before publishing
ROUTINE.md               the weekly playbook the Saturday Claude routine follows
```

## Publishing a new issue

A scheduled Claude routine runs every **Saturday at about 7:45 am ET**. It follows `ROUTINE.md`: it researches the
week from official sources, wire services and the financial press, writes the new issue file, updates the
manifest, runs the validator, and pushes to `main`.

To publish by hand, follow the same steps in `ROUTINE.md` and run:

```bash
node nexus-weekly/scripts/validate.mjs
```
