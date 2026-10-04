#!/usr/bin/env python3
"""Verify the reconciled dataset against both source documents.

Checks the properties that actually matter and that no single step guaranteed:

  coverage    every one of the 71 Medium posts is represented exactly once -- as
              its own row, or merged into an existing one. A count is not enough:
              one post could be counted twice and another dropped.
  order       the array is still date-descending, since new rows were inserted
  duplicates  no two rows share a title any more, except the series that really
              were posted more than once
  alsoPublished every folded record names a real venue and a real ISO date, and
              any url it carries resolves to an archive rather than to DZone
  merge trace every merged legacy row is accounted for in some alsoPublished
              record, so nothing was silently deleted
"""
import json
import re
import sys
from collections import Counter, defaultdict

sys.path.insert(0, '/private/var/folders/1s/1193p4wn5t501p60l32t8qmh0000gn/T/opencode')
from reconcile_medium import norm  # noqa: E402

SITE = '/Users/leef/Documents/code/vidyasagarmsc.github.io/js/research.js'
TMP = '/private/var/folders/1s/1193p4wn5t501p60l32t8qmh0000gn/T/opencode'
VALID_VENUES = {'DZone', 'DZone Legacy', 'Medium', 'Dev.to', 'Hackernoon',
                'Substack', 'VMacWrites', 'Featured'}

SRC = open(SITE, encoding='utf-8').read().split('\n')
START = next(i for i, l in enumerate(SRC) if re.match(r'^\s*articles:\s*\[\s*$', l))
END = next(i for i in range(START + 1, len(SRC)) if re.match(r'^\s*\],\s*$', SRC[i]))

rows = []
for i, line in enumerate(SRC[START + 1:END], START + 2):
    if not re.match(r'^\s*\{\s*id:\s*\d+,', line):
        continue

    def s(f):
        m = re.search(f + r':\s*"((?:[^"\\]|\\.)*)"', line)
        return m.group(1) if m else None

    def arr(f):
        m = re.search(f + r':\s*\[(.*?)\](?=\s*[,}]|\s*$)', line)
        return re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(1)) if m else []

    ap = []
    m = re.search(r'alsoPublished:\s*\[(.*)\]\s*[,}]', line)
    if m:
        for e in re.findall(r'\{[^{}]*\}', m.group(1)):
            ap.append({
                'venue': (re.search(r'venue:\s*"([^"]*)"', e) or [None, None])[1],
                'date': (re.search(r'date:\s*"([^"]*)"', e) or [None, None])[1],
                'url': (re.search(r'url:\s*"([^"]*)"', e) or [None, None])[1],
                'views': (re.search(r'views:\s*"([^"]*)"', e) or [None, None])[1],
            })
    rows.append({'id': int(re.search(r'id:\s*(\d+)', line).group(1)),
                 'title': s('title'), 'primary': s('platform'),
                 'platforms': arr('platforms'), 'date': s('date'),
                 'url': s('url'), 'alsoPublished': ap,
                 'legacy': 'legacy: true' in line,
                 'isBook': 'isBook' in line})

problems = []


def err(m):
    problems.append(m)


records = json.load(open(TMP + '/medium_records.json'))
plan = json.load(open(TMP + '/full_plan.json'))

# ---- 1. every Medium post represented exactly once ----
medium_urls = set(re.findall(r'https://vidyasagarmsc\.medium\.com/[a-z0-9\-]+',
                             open(SITE, encoding='utf-8').read()))
seen = Counter()
for r in rows:
    if r['url'] and 'medium.com' in r['url'] and '/@' not in r['url']:
        seen[r['url']] += 1
    for a in r['alsoPublished']:
        if a['url'] and 'medium.com' in a['url']:
            seen[a['url']] += 1

missing = []
for rec in records:
    if rec['url'] not in seen:
        missing.append(rec)
for u, c in seen.items():
    if c > 1:
        err('Medium permalink present on %d rows: %s' % (c, u))

print('Medium posts in the PDF:            %d' % len(records))
print('Medium permalinks now in the file: %d  (on %d rows, plus %d as alsoPublished)'
      % (len(seen), sum(1 for r in rows if r['url'] and 'medium.com' in r['url'] and '/@' not in r['url']),
         sum(1 for r in rows for a in r['alsoPublished'] if a['url'] and 'medium.com' in a['url'])))
if missing:
    err('%d Medium posts are not represented: %s'
        % (len(missing), [m['title'][:40] for m in missing]))

# ---- 2. still date-descending ----
def key(d):
    return d if len(d) == 10 else (d + '-01-01') if len(d) == 7 else d + '-01-01'


prev = None
for r in rows:
    k = key(r['date'])
    if prev and k > prev[0]:
        err('order inversion: id %s (%s) follows id %s (%s)'
            % (r['id'], r['date'], prev[1], prev[2]))
    prev = (k, r['id'], r['date'])

# ---- 3. duplicate titles ----
by_title = defaultdict(list)
for r in rows:
    by_title[norm(r['title'])].append(r)
dups = {k: v for k, v in by_title.items() if len(v) > 1}
print()
print('rows: %d   distinct titles: %d   titles on more than one row: %d'
      % (len(rows), len(by_title), len(dups)))
for k, v in dups.items():
    print('  %s' % v[0]['title'][:58])
    for r in v:
        print('     id %-5d %-22s %s' % (r['id'], '+'.join(r['platforms']), r['date']))

# ---- 4. alsoPublished sanity ----
n_ap = 0
for r in rows:
    for a in r['alsoPublished']:
        n_ap += 1
        if a['venue'] not in VALID_VENUES:
            err('id %s: alsoPublished venue %r unknown' % (r['id'], a['venue']))
        if not a['date'] or not re.fullmatch(r'\d{4}-\d{2}-\d{2}', a['date']):
            err('id %s: alsoPublished date %r not ISO' % (r['id'], a['date']))
        if a['venue'] not in r['platforms']:
            err('id %s: alsoPublished names %s but platforms[] omits it'
                % (r['id'], a['venue']))
        if a['url'] and 'dzone.com/articles/' in a['url'] and 'web.archive.org' not in a['url']:
            err('id %s: alsoPublished points at a live dzone.com URL that 410s: %s'
                % (r['id'], a['url']))
print()
print('alsoPublished records: %d across %d rows'
      % (n_ap, sum(1 for r in rows if r['alsoPublished'])))

# ---- 5. nothing lost ----
merged_ids = {m['legacy_id'] for m in plan['merges']}
live_ids = {r['id'] for r in rows}
lost = sorted(merged_ids & live_ids)
if lost:
    err('these legacy rows should have been merged away but are still present: %s' % lost)
recorded = sum(1 for r in rows for a in r['alsoPublished'] if a['venue'] == 'DZone Legacy')
print('legacy rows merged away: %d   DZone publications recorded in alsoPublished: %d'
      % (len(merged_ids), recorded))
if recorded != len(merged_ids):
    err('%d merges but %d DZone alsoPublished records' % (len(merged_ids), recorded))

print()
if problems:
    print('PROBLEMS (%d):' % len(problems))
    for p in problems:
        print('  ! %s' % p)
    sys.exit(1)
print('verification clean')