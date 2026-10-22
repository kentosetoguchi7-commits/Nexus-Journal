// Checks Nexus Weekly data files before publishing.
// Usage: node nexus-weekly/scripts/validate.mjs
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const sandbox = { window: {} };
vm.createContext(sandbox);
function load(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) { err(rel, "file is missing"); return; }
  try { vm.runInContext(readFileSync(path, "utf8"), sandbox, { filename: rel }); }
  catch (e) { err(rel, `does not parse: ${e.message}`); }
}

load("data/manifest.js");
load("data/glossary.js");
const manifest = sandbox.window.NEXUS_WEEKLY_MANIFEST;
const glossary = sandbox.window.NEXUS_WEEKLY_GLOSSARY || {};
if (!Array.isArray(manifest) || !manifest.length) err("data/manifest.js", "NEXUS_WEEKLY_MANIFEST must be a non-empty array");

const CATS = ["fed", "whitehouse", "data", "markets", "world"];
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const isStr = (v) => typeof v === "string" && v.trim().length > 0;

function checkText(where, s) {
  if (!isStr(s)) { err(where, "must be a non-empty string"); return; }
  for (const m of s.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const k = m[1].trim().toLowerCase();
    if (!glossary[k]) err(where, `glossary term "${k}" is not defined in data/glossary.js`);
  }
  if ((s.match(/\*\*/g) || []).length % 2) err(where, "unbalanced ** bold markers");
}
function checkSources(where, list, required) {
  if (!Array.isArray(list) || !list.length) { if (required) err(where, "needs at least one source"); return; }
  list.forEach((s, i) => {
    if (!isStr(s.name)) err(`${where}[${i}]`, "source needs a name");
    if (!/^https:\/\//.test(s.url || "")) err(`${where}[${i}]`, "source url must start with https://");
  });
}

const ids = new Set();
(manifest || []).forEach((m, i) => {
  const w = `manifest[${i}]`;
  if (!ISO.test(m.id || "")) err(w, `id "${m.id}" must be YYYY-MM-DD`);
  if (ids.has(m.id)) err(w, `duplicate id ${m.id}`);
  ids.add(m.id);
  if (i > 0 && m.id >= manifest[i - 1].id) err(w, "manifest must be sorted newest first");
  if (!isStr(m.weekLabel)) err(w, "weekLabel missing");
  if (!isStr(m.headline)) err(w, "headline missing");

  const rel = `data/issues/${m.id}.js`;
  load(rel);
  const is = (sandbox.window.NEXUS_WEEKLY_ISSUES || {})[m.id];
  if (!is) { err(rel, `does not register NEXUS_WEEKLY_ISSUES["${m.id}"]`); return; }

  if (is.id !== m.id) err(rel, "id does not match the manifest");
  if (is.headline !== m.headline) err(rel, "headline does not match the manifest");
  if (is.weekLabel !== m.weekLabel) err(rel, "weekLabel does not match the manifest");
  if (!ISO.test(is.published || "")) err(rel, "published must be YYYY-MM-DD");
  checkText(`${rel} intro`, is.intro);
  if (is.mood && !["up", "down", "flat"].includes(is.mood.tone)) err(rel, 'mood.tone must be "up", "down" or "flat"');

  if (!Array.isArray(is.tldr) || is.tldr.length < 3) err(rel, "tldr needs at least 3 bullets");
  (is.tldr || []).forEach((t, j) => checkText(`${rel} tldr[${j}]`, t));

  (is.markets || []).forEach((mk, j) => {
    const w2 = `${rel} markets[${j}]`;
    if (!isStr(mk.name) || !isStr(mk.value)) err(w2, "needs name and value");
    if (mk.change != null && typeof mk.change !== "number") err(w2, "change must be a number or null");
  });

  if (!Array.isArray(is.stories) || !is.stories.length) err(rel, "needs at least one story");
  (is.stories || []).forEach((s, j) => {
    const w2 = `${rel} stories[${j}]`;
    if (!CATS.includes(s.category)) err(w2, `category must be one of ${CATS.join(", ")}`);
    if (!isStr(s.title)) err(w2, "title missing");
    checkText(`${w2}.whatHappened`, s.whatHappened);
    checkText(`${w2}.whyItMatters`, s.whyItMatters);
    if (s.plainEnglish != null) checkText(`${w2}.plainEnglish`, s.plainEnglish);
    if (s.traderTake != null) checkText(`${w2}.traderTake`, s.traderTake);
    (s.numbers || []).forEach((n, k) => { if (!isStr(n.label) || !isStr(n.actual)) err(`${w2}.numbers[${k}]`, "needs label and actual"); });
    checkSources(`${w2}.sources`, s.sources, true);
  });

  (is.explainers || []).forEach((x, j) => {
    const w2 = `${rel} explainers[${j}]`;
    if (!isStr(x.kind) || !isStr(x.title)) err(w2, "needs kind and title");
    checkText(`${w2}.inOneSentence`, x.inOneSentence);
    if (!Array.isArray(x.qa) || !x.qa.length) err(w2, "needs at least one qa item");
    (x.qa || []).forEach((q, k) => { if (!isStr(q.q)) err(`${w2}.qa[${k}]`, "question missing"); checkText(`${w2}.qa[${k}].a`, q.a); });
    (x.quotes || []).forEach((q, k) => { if (!isStr(q.quote) || !isStr(q.speaker)) err(`${w2}.quotes[${k}]`, "needs quote and speaker"); checkText(`${w2}.quotes[${k}].meaning`, q.meaning); });
    (x.forYou || []).forEach((f, k) => checkText(`${w2}.forYou[${k}]`, f));
    if (x.bottomLine != null) checkText(`${w2}.bottomLine`, x.bottomLine);
    checkSources(`${w2}.sources`, x.sources, true);
  });

  (is.weekAhead || []).forEach((e, j) => {
    const w2 = `${rel} weekAhead[${j}]`;
    if (!isStr(e.date) || !isStr(e.event)) err(w2, "needs date and event");
    checkText(`${w2}.why`, e.why);
    if (![1, 2, 3].includes(e.importance)) err(w2, "importance must be 1, 2 or 3");
  });
});

// Issue files that exist on disk but aren't listed in the manifest.
for (const f of readdirSync(join(root, "data/issues"))) {
  const id = f.replace(/\.js$/, "");
  if (!ids.has(id)) err(`data/issues/${f}`, "is not listed in data/manifest.js");
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  - ` + errors.join("\n  - "));
  process.exit(1);
}
console.log(`✓ ${manifest.length} issue(s) valid; ${Object.keys(glossary).length} glossary terms.`);
