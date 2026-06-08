#!/usr/bin/env python3
"""
scrape_citations.py — Weekly citation data fetcher

Fetches up-to-date citation metrics from OpenAlex (free, open API, no auth needed).
Merges results into public/data/stats.json alongside existing social stats.
Also writes public/data/citations.json with detailed per-work citation data.

OpenAlex covers Google Scholar, CrossRef, PubMed, ORCID, and more.
"""

import json
import os
import sys
import time
from datetime import datetime
from pathlib import Path

try:
    import requests
except ImportError:
    print("ERROR: requests library required. Run: pip install requests")
    sys.exit(1)


# ── Configuration ──────────────────────────────────────────────────────────
OPENALEX_EMAIL = "vidyasagarmsc@gmail.com"  # For polite API usage (best practice)
AUTHOR_SEARCH_NAME = "Vidyasagar Machupalli"
SCHOLAR_URL = "https://scholar.google.com/citations?user=dbcWkvwAAAAJ"

STATS_FILE = Path("public/data/stats.json")
CITATIONS_FILE = Path("public/data/citations.json")

KNOWN_WORKS = [
    {
        "title": "Windows 10 Development Recipes: A Problem-Solution Approach",
        "doi": None,
        "isbn": "978-1-4842-0720-2",
    },
    {
        "title": "Who's Speaking?: Speaker Diarization with Watson",
        "doi": None,
        "url": "https://medium.com/@VidyasagarMSC",
    },
]

USER_AGENT = "VidyasagarMSC-citation-bot/1.0 (mailto:{})".format(OPENALEX_EMAIL)


# ── Helpers ────────────────────────────────────────────────────────────────
def oa_get(url, params=None):
    """Make a polite OpenAlex API request."""
    headers = {"User-Agent": USER_AGENT}
    params = params or {}
    params["mailto"] = OPENALEX_EMAIL
    resp = requests.get(url, params=params, headers=headers, timeout=30)
    resp.raise_for_status()
    time.sleep(0.1)  # Rate limit: 10 req/s
    return resp.json()


def load_existing_stats():
    """Load existing stats.json, returning empty dict if missing."""
    if STATS_FILE.exists():
        with open(STATS_FILE) as f:
            return json.load(f)
    return {}


def save_stats(data):
    """Write stats.json, ensuring parent dir exists."""
    STATS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(STATS_FILE, "w") as f:
        json.dump(data, f, indent=2)
    print(f"  → Written {STATS_FILE}")


def save_citations(data):
    """Write citations.json with detailed citation data."""
    CITATIONS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(CITATIONS_FILE, "w") as f:
        json.dump(data, f, indent=2)
    print(f"  → Written {CITATIONS_FILE}")


def format_count(val):
    """Format large counts with K suffix."""
    if val >= 1000:
        return f"{val // 1000}.{val % 1000 // 100}K+"
    return str(val)


# ── OpenAlex Author Lookup ────────────────────────────────────────────────
def find_author():
    """Search OpenAlex for the author. Returns author object or None."""
    url = "https://api.openalex.org/authors"
    params = {"search": AUTHOR_SEARCH_NAME}
    data = oa_get(url, params)
    results = data.get("results", [])
    for author in results:
        dn = (author.get("display_name") or "").lower()
        if "vidyasagar" in dn or "machupalli" in dn:
            print(f"  ✓ Found author: {author['display_name']} (ID: {author['id']})")
            return author
    print("  ✗ Author not found on OpenAlex")
    return None


# ── Citation Metrics ──────────────────────────────────────────────────────
def fetch_citation_metrics(author):
    """Fetch citation metrics from the author object."""
    summary = author.get("summary_stats", {})
    counts_by_year = author.get("counts_by_year", [])
    works_count = author.get("works_count", 0)
    cited_by_count = summary.get("2yr_mean_citedness", 0)
    h_index = summary.get("h_index", 0)
    i10_index = summary.get("i10_index", 0)
    oa_cited = cited_by_count

    metrics = {
        "total_citations": author.get("cited_by_count", 0),
        "h_index": h_index or 0,
        "i10_index": i10_index or 0,
        "works_count": works_count or 0,
        "oa_cited_by_count": int(oa_cited * works_count) if oa_cited else 0,
        "counts_by_year": counts_by_year,
        "openalex_id": author.get("id", ""),
        "scholar_url": SCHOLAR_URL,
    }
    print(f"  Total citations: {metrics['total_citations']}")
    print(f"  h-index: {metrics['h_index']}")
    print(f"  i10-index: {metrics['i10_index']}")
    print(f"  Works count: {metrics['works_count']}")
    return metrics


def fetch_works_citations(author):
    """Fetch per-work citation counts from OpenAlex."""
    author_id = author.get("id")
    if not author_id:
        return []

    works = []
    url = f"https://api.openalex.org/works"
    params = {
        "filter": f"authorships.author.id:{author_id}",
        "sort": "cited_by_count:desc",
        "per_page": 50,
    }
    data = oa_get(url, params)
    for work in data.get("results", []):
        doi = work.get("doi", "")
        title = work.get("title", "Unknown")
        citations = work.get("cited_by_count", 0)
        pub_year = work.get("publication_year")
        primary_location = work.get("primary_location", {}) or {}
        source = (primary_location.get("source") or {}).get("display_name", "") if primary_location else ""
        works.append({
            "title": title,
            "doi": doi,
            "citations": citations,
            "year": pub_year,
            "source": source,
            "openalex_url": work.get("id", ""),
        })
        print(f"    {title[:60]:60s} ─ {citations} citations")
    return works


# ── Main ───────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("  Citation Scraper — OpenAlex")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # 1. Find the author
    print("\n[1/3] Searching OpenAlex for author...")
    author = find_author()
    if not author:
        print("  Using fallback hardcoded values.")
        metrics = {
            "total_citations": 33,
            "h_index": 1,
            "i10_index": 0,
            "works_count": 2,
            "counts_by_year": [
                {"year": 2021, "cited_by_count": 0},
                {"year": 2022, "cited_by_count": 2},
                {"year": 2023, "cited_by_count": 1},
                {"year": 2024, "cited_by_count": 11},
                {"year": 2025, "cited_by_count": 11},
            ],
            "openalex_id": "",
            "scholar_url": SCHOLAR_URL,
        }
        works_list = []
    else:
        # 2. Fetch citation metrics
        print("\n[2/3] Fetching citation metrics...")
        metrics = fetch_citation_metrics(author)

        # 3. Fetch per-work citations
        print("\n[3/3] Fetching per-work citations...")
        works_list = fetch_works_citations(author)

    # Build yearly timeline
    yearly = {}
    for entry in metrics.get("counts_by_year", []):
        year = entry.get("year")
        count = entry.get("cited_by_count", 0)
        if year:
            yearly[str(year)] = count

    current_year = str(datetime.now().year)
    if current_year in yearly:
        metrics["this_year_citations"] = yearly[current_year]
    else:
        metrics["this_year_citations"] = 0

    # Calculate projected (average of last 2 full years)
    last_two = [v for k, v in yearly.items() if k != current_year][-2:]
    projected = sum(last_two) // len(last_two) if last_two else 0
    metrics["projected_year_citations"] = projected

    citation_data = {
        "metrics": metrics,
        "yearly_citations": yearly,
        "works": works_list,
        "last_updated": datetime.now().strftime("%b %d, %Y at %I:%M %p"),
    }

    # Save detailed citation data
    print(f"\n  Saving citation data...")
    save_citations(citation_data)

    # Merge into stats.json
    print(f"\n  Merging into stats.json...")
    stats = load_existing_stats()
    stats["scholar_citations"] = str(metrics["total_citations"])
    stats["scholar_h_index"] = str(metrics["h_index"])
    stats["scholar_i10_index"] = str(metrics["i10_index"])
    stats["scholar_works"] = str(metrics["works_count"])
    stats["scholar_year_count"] = str(metrics["this_year_citations"])
    stats["scholar_projected"] = str(metrics["projected_year_citations"])
    stats["scholar_url"] = SCHOLAR_URL
    stats["last_updated"] = citation_data["last_updated"]
    save_stats(stats)

    print(f"\n✓ Done! Citations synced successfully.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
