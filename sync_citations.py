#!/usr/bin/env python3
"""sync_citations.py — find and record works that cite the author's articles.

The site's "works citing mine" section is rendered from
public/data/citations-of-work.json, so that file has to stay current. This
script keeps it so the weekly GitHub Action does not have to hand-edit it.

For every tracked article it:

  1. asks OpenAlex for works whose full text references the quoted exact title,
     which surfaces the citing papers rather than guessing from URLs;
  2. verifies each candidate against the Crossref reference list -- a title
     mention is not a citation, the list has to actually carry the tracked title;
  3. appends verified candidates to the feed. Entries marked `curated` are
     never rewritten, and candidates are deduplicated by DOI / OpenAlex ID /
     title, so a paper is never added twice;
  4. writes the feed only when something changed, and emits a GitHub step
     summary for the run.

Usage:
    python sync_citations.py           # refresh and write
    python sync_citations.py --dry-run # report only; write nothing
"""

import json
import os
import re
import sys
import time
import unicodedata
from datetime import date, datetime
from pathlib import Path

import requests

OPENALEX_EMAIL = "vidyasagarmsc@gmail.com"  # For polite API usage (best practice)
OPENALEX_API = "https://api.openalex.org/works"
CROSSREF_API = "https://api.crossref.org/works"
FEED_FILE = Path("public/data/citations-of-work.json")

USER_AGENT = "VidyasagarMSC-citation-sync/1.0 (mailto:{})".format(OPENALEX_EMAIL)
JOURNAL_KINDS = ("journal-article", "proceedings-article", "book-chapter")


# ── Helpers ─────────────────────────────────────────────────────────────────
def oa_get(url, params=None, retries=3):
    """Make a polite OpenAlex API request with retry."""
    headers = {"User-Agent": USER_AGENT}
    params = dict(params or {})
    params["mailto"] = OPENALEX_EMAIL
    last = None
    for attempt in range(retries):
        try:
            resp = requests.get(url, params=params, headers=headers, timeout=30)
            resp.raise_for_status()
            return resp.json()
        except requests.RequestException as exc:
            last = exc
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
    raise RuntimeError(f"OpenAlex request failed after {retries} attempts: {last}")


def crossref_get(doi, retries=3):
    """Look a DOI up in Crossref."""
    last = None
    for attempt in range(retries):
        try:
            resp = requests.get(
                f"{CROSSREF_API}/{doi}",
                headers={"User-Agent": USER_AGENT, "mailto": OPENALEX_EMAIL},
                timeout=30,
            )
            resp.raise_for_status()
            return resp.json().get("message") or {}
        except requests.RequestException as exc:
            last = exc
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
    raise RuntimeError(f"Crossref lookup failed after {retries} attempts: {last}")


def title_key(value):
    """Fold a title to a comparable key: case-folded, ligatures split, junk dropped."""
    s = str(value or "").lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return " ".join(s.split())


# ── Tracked works ──────────────────────────────────────────────────────────
TRACKED_WORKS = [
    {
        "key": "ai-agent-architectures",
        "title": "AI Agent Architectures: Patterns, Applications, and Implementation Guide",
        "venue": "DZone",
        "date": "2025-06-13",
        "url": "https://dzone.com/articles/ai-agent-architectures-patterns-applications-guide",
    },
    {
        "key": "speaker-diarization-watson",
        "title": "Who's Speaking?: Speaker Diarization with Watson",
        "venue": "Medium \u00b7 IBM Developer",
        "date": "2017-05",
        "url": "https://vidyasagarmsc.medium.com/track-whos-speaking-with-speaker-diarization-2e3eac2de2c3",
    },
]


def openalex_citing_candidates(title):
    """Works whose full text references the quoted exact title."""
    data = oa_get(OPENALEX_API, {
        "search": f'"{title}"',
        "per_page": 50,
        "select": "id,doi,title,publication_year,type",
    })
    return data.get("results") or []


def crossref_references(msg):
    refs = []
    for ref in msg.get("reference") or []:
        if not isinstance(ref, dict):
            continue
        values = []
        for value in ref.values():
            if isinstance(value, str):
                values.append(value)
            elif isinstance(value, list):
                values.extend(str(v) for v in value if isinstance(v, str))
        refs.append(" ".join(values))
    return refs


def find_referenced_title(refs, title):
    needle = title_key(title)
    if not needle:
        return None
    for ref in refs:
        if needle in title_key(ref):
            return ref
    return None


def crossref_kind(msg, oa_type):
    kind = (msg.get("type") or "").lower()
    if kind == "dissertation" or (oa_type or "").lower() == "dissertation":
        return "thesis"
    return "journal"


def crossref_date(msg):
    for key in ("published", "published-print", "published-online", "issued", "created"):
        parts = ((msg.get(key) or {}).get("date-parts") or [])
        if parts and parts[0]:
            d0 = [str(x) for x in parts[0] if x is not None]
            if len(d0) == 1:
                return d0[0]
            if len(d0) == 2:
                return f"{d0[0]}-{int(d0[1]):02d}"
            if len(d0) >= 3:
                return f"{d0[0]}-{int(d0[1]):02d}-{int(d0[2]):02d}"
    issued = (msg.get("issued") or {}).get("date-parts") or []
    if issued and issued[0]:
        return f"{int(issued[0][0]):04d}"
    return ""


def crossref_authors(msg):
    authors = msg.get("author") or []
    short = []
    full = []
    for a in authors[:6]:
        given = (a.get("given") or "").strip()
        family = (a.get("family") or "").strip()
        if not given and not family:
            continue
        if family and given:
            short.append(f"{family}, {given[0]}.")
            full.append(f"{given} {family}".strip())
        elif family:
            short.append(family)
            full.append(family)
    if len(authors) > 6:
        short.append("et al.")
        full.append("et al.")
    return ", ".join(short), ", ".join(full)


# ── Feed ───────────────────────────────────────────────────────────────────
def load_feed():
    if FEED_FILE.exists():
        with open(FEED_FILE, encoding="utf-8") as fh:
            feed = json.load(fh)
    else:
        feed = {"last_updated": None, "references": []}
    refs = feed.get("references") or []
    return feed, list(refs)


def entry_keys(ref):
    keys = set()
    doi = str(ref.get("doi") or "").strip().lower().rstrip(".")
    if doi:
        keys.add("doi:" + doi)
    oa = str(ref.get("openalex_id") or "").rsplit("/", 1)[-1].lower()
    if oa:
        keys.add("openalex:" + oa)
    tk = title_key(ref.get("title"))
    if tk:
        keys.add("title:" + tk)
    return keys


def candidate_keys(cand):
    keys = set()
    doi = str(cand.get("doi") or "").strip().lower().rstrip(".")
    if doi:
        keys.add("doi:" + doi)
    oa = str(cand.get("id") or "").rsplit("/", 1)[-1].lower()
    if oa:
        keys.add("openalex:" + oa)
    tk = title_key(cand.get("title"))
    if tk:
        keys.add("title:" + tk)
    return keys


def build_reference(cand, work, msg, matched_ref):
    doi = str(cand.get("doi") or "").strip().lower().rstrip(".")
    doi = doi.replace("https://doi.org/", "")
    authors_short, authors_full = crossref_authors(msg)
    year = crossref_date(msg)
    year_num = None
    if year:
        try:
            year_num = int(year[:4])
        except (ValueError, TypeError):
            year_num = None
    location = cand.get("primary_location") or {}
    source = location.get("source") or {}
    return {
        "kind": crossref_kind(msg, cand.get("type")),
        "title": (msg.get("title") or [cand.get("title")])[0],
        "authors": authors_short or "Unknown author",
        "authorFull": authors_full or "Unknown author",
        "journal": (msg.get("container-title") or [None])[0] or source.get("display_name") or "",
        "year": year_num,
        "date": year,
        "volume": str(msg["volume"]) if msg.get("volume") else None,
        "pages": msg.get("page") or None,
        "doi": f"https://doi.org/{doi}" if doi else None,
        "url": f"https://doi.org/{doi}" if doi else None,
        "cites": [
            {
                "title": work["title"],
                "venue": work["venue"],
                "date": work["date"],
                "url": work["url"],
            }
        ],
        "note": "Automatically added by sync_citations.py after Crossref verification.",
        "curated": False,
        "openalex_id": str(cand.get("id") or ""),
        "verification": {
            "source": "OpenAlex full-text search + Crossref reference list",
            "checked": date.today().isoformat(),
            "matched_reference": (matched_ref or "")[:300],
        },
    }


# ── Sync ────────────────────────────────────────────────────────────────────
def main():
    dry_run = "--dry-run" in sys.argv
    print("=" * 60)
    print("  Citation Sync — OpenAlex + Crossref")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    feed, refs = load_feed()
    existing = list(refs)
    by_keys = {}
    for r in existing:
        for k in entry_keys(r):
            by_keys[k] = r

    next_id = max([int(r.get("id") or 0) for r in existing] or [1414]) + 1
    added = []
    needs_review = []
    errors = []

    for work in TRACKED_WORKS:
        print(f"\n[{work['key']}] Searching OpenAlex for works citing \"{work['title'][:60]}\"...")
        try:
            candidates = openalex_citing_candidates(work["title"])
        except Exception as exc:
            errors.append(f"{work['key']}: {exc}")
            continue
        for cand in candidates or []:
            if title_key(cand.get("title")) == title_key(work["title"]):
                continue
            if candidate_keys(cand).intersection(by_keys):
                continue
            verified = False
            matched_ref = None
            msg = {}
            doi = str(cand.get("doi") or "").strip()
            if doi:
                try:
                    msg = crossref_get(doi)
                    matched_ref = find_referenced_title(crossref_references(msg), work["title"])
                    verified = bool(matched_ref)
                except Exception as exc:
                    errors.append(f"{work['key']} -> {cand.get('title')} (DOI {doi}): {exc}")
            if verified:
                entry = build_reference(cand, work, msg, matched_ref)
                entry["id"] = next_id
                next_id += 1
                added.append({"key": work["key"], "work": work, "candidate": cand, "entry": entry})
                by_keys.update({k: entry for k in candidate_keys(cand) if k})
            else:
                needs_review.append({
                    "key": work["key"],
                    "title": cand.get("title"),
                    "venue": (cand.get("primary_location") or {}).get("source") or {},
                    "doi": cand.get("doi"),
                    "openalex_id": cand.get("id"),
                    "matched_reference": matched_ref,
                })

    if added or errors or needs_review:
        print("\n" + "-" * 60)
        print(f"  VERIFIED NEW REFERENCES ({len(added)})")
        for a in added:
            e = a["entry"]
            print(f"    - [{e['kind']}] {e['title']} — {e['authors']}")
            print(f"      cites: {a['work']['title']}")
        print(f"  NEEDING MANUAL REVIEW ({len(needs_review)})")
        for n in needs_review:
            print(f"    - {n['title']} (doi={n['doi']}) — matched reference: {n['matched_reference']}")
        if errors:
            print(f"  ERRORS ({len(errors)})")
            for e in errors:
                print(f"    ! {e}")

    print("\n" + "=" * 60)
    print(f"  RESULT: {len(added)} new reference(s) to add, {len(needs_review)} to review")
    print("=" * 60)

    summary_lines = [f"Citation sync: {len(added)} new reference(s) added."]
    if needs_review:
        summary_lines.append(f"{len(needs_review)} candidate(s) not yet verified (see run log).")
    if errors:
        summary_lines.append(f"{len(errors)} lookup error(s) (see run log).")
    curated = [r for r in existing if r.get("curated")]
    summary_lines.append(f"Curated references preserved: {len(curated)}")

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as fh:
            fh.write("\n".join(summary_lines) + "\n")

    if dry_run:
        print("\n  DRY RUN: nothing written.")
        return 0

    if added:
        refs = list(existing)
        for a in added:
            refs.append(dict(a["entry"]))
        feed["references"] = refs
        feed["last_updated"] = date.today().isoformat()
        text = json.dumps(feed, indent=2, ensure_ascii=False) + "\n"
        FEED_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(FEED_FILE, "w", encoding="utf-8") as fh:
            fh.write(text)
        print(f"\n  WROTE {FEED_FILE}")

    print(f"\n  Citation feed now holds {len(refs)} reference(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
