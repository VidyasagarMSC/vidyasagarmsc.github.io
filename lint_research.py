#!/usr/bin/env python3
"""Lint js/research.js.

Parses the article array out of the JS with a regex rather than evaluating it, so
this runs with no JS toolchain and cannot be fooled by the renderer's own
assumptions -- a check that shares code with the code it checks proves nothing.

Fails loudly on anything that would break a page at runtime:
  getFilteredArticles() calls a.topics.includes() and a.topics.some() with no
  guard, so a missing or empty topics array throws and takes the whole
  publications grid down with it.
"""
import json
import re
import sys
from collections import Counter

PATH = 'js/research.js'
SRC = open(PATH, encoding='utf-8').read().split('\n')

STR = r'"((?:[^"\\]|\\.)*)"'
NUM = r'(\d+)'

start = next(i for i, l in enumerate(SRC) if re.match(r'^\s*articles:\s*\[\s*$', l))
end = next(i for i in range(start + 1, len(SRC)) if re.match(r'^\s*\],\s*$', SRC[i]))

articles = []
for line in SRC[start + 1:end]:
    m = re.match(r'^\s*\{\s*id:\s*' + NUM + r',', line)
    if not m:
        continue
    rec = line

    def s(field):
        mm = re.search(field + r':\s*' + STR, rec)
        return mm.group(1).encode().decode('unicode_escape') if mm else None

    def arr(field):
        mm = re.search(field + r':\s*\[([^\]]*)\]', rec)
        return re.findall(STR, mm.group(1)) if mm else None

    def also_pub(text):
        """Extra publications folded into a row, as a list of dicts."""
        mm = re.search(r'alsoPublished:\s*\[(.*)\]\s*[,}]', text)
        if not mm:
            return []
        out = []
        for entry in re.findall(r'\{[^{}]*\}', mm.group(1)):
            d = (re.search(r'date:\s*"([^"]*)"', entry) or [None, None])[1]
            v = (re.search(r'venue:\s*"([^"]*)"', entry) or [None, None])[1]
            u = (re.search(r'url:\s*"([^"]*)"', entry) or [None, None])[1]
            out.append({'venue': v, 'date': d, 'url': u})
        return out

    articles.append({
        'line': SRC.index(line) + 1,
        'id': int(m.group(1)),
        'title': s('title'),
        'platform': s('platform'),
        'platforms': arr('platforms'),
        'year': int(re.search(r'year:\s*' + NUM, rec).group(1)) if re.search(r'year:\s*' + NUM, rec) else None,
        'date': s('date'),
        'topics': arr('topics'),
        'url': s('url'),
        'views': s('views'),
        'legacy': 'legacy: true' in rec,
        'archived': 'archived: true' in rec,
        'isBook': 'isBook' in rec,
        'alsoPublished': also_pub(rec),
    })

# The topic registry and venue colours must both cover everything in use.
TEXT = '\n'.join(SRC)
topics_declared = set(re.findall(r'^\s*"([^"]+)":', TEXT, re.M))
platform_colors = set(re.findall(r'^\s*"([^"]+)":\s*\{ bg:', TEXT, re.M))
platform_icons = set(re.findall(r'"([^"]+)":\s*"fa[bs] fa-', TEXT))

problems = []
warn = []


def err(msg):
    problems.append(msg)


def note(msg):
    warn.append(msg)


seen_ids = Counter(a['id'] for a in articles)
for i, c in seen_ids.items():
    if c > 1:
        err('duplicate id %d x%d' % (i, c))

for a in articles:
    tag = 'id %s (%s)' % (a['id'], (a['title'] or '')[:40])
    if not a['title']:
        err('%s: no title' % tag)
    if not a['platform']:
        err('%s: no platform' % tag)
    if not a['topics']:
        # Would throw in getFilteredArticles().
        err('%s: topics is empty or missing -- getFilteredArticles() will throw' % tag)
    if not a['year']:
        err('%s: no year' % tag)
    if not a['date']:
        err('%s: no date' % tag)
    else:
        if not re.fullmatch(r'\d{4}(-\d{2}(-\d{2})?)?', a['date']):
            err('%s: date %r is not ISO year[/month[/day]]' % (tag, a['date']))
        if a['year'] and a['date'][:4] != str(a['year']):
            err('%s: year %s disagrees with date %s' % (tag, a['year'], a['date']))
    venues = a['platforms'] or []
    if not venues:
        err('%s: platforms[] empty' % tag)
    if a['platform'] and a['platform'] not in venues:
        err('%s: primary %r missing from platforms[] %s' % (tag, a['platform'], venues))
    for v in venues:
        if v not in platform_colors:
            err('%s: venue %r has no platformColors entry' % (tag, v))
        if v not in platform_icons:
            err('%s: venue %r has no getPlatformIcon entry' % (tag, v))
    for t in (a['topics'] or []):
        if t not in topics_declared:
            # A warning, not an error. The topic chips are built from
            # researchData.topics, so an undeclared tag means this article cannot
            # be reached through a topic chip -- but text search still matches it,
            # getFilteredArticles() still handles it, and nothing throws. It is a
            # discoverability gap in the taxonomy, not a broken page.
            note('%s: topic %r is not in researchData.topics, so no chip leads to it'
                 % (tag, t))
    if a['legacy']:
        # A legacy row must never send a reader to DZone: those articles were
        # taken down and the paths now answer 410. If a legacy row has a url it
        # is either an archive copy, or a live copy on another venue -- which
        # happens when the same piece is still published on Medium or Dev.to.
        if a['url'] and 'dzone.com/articles/' in a['url'] and 'web.archive.org' not in a['url']:
            err('%s: legacy row points at a live dzone.com URL that 410s: %s' % (tag, a['url']))
        if a['url'] and a['archived'] and 'web.archive.org' not in a['url']:
            err('%s: archived is true but the url is not an archive copy' % tag)
        if not a['url'] and a['archived']:
            err('%s: archived is true but there is no url' % tag)

    # Every extra publication must name a venue the row actually lists, carry an
    # ISO date, and not resolve to removed DZone content.
    for extra in a['alsoPublished']:
        etag = '%s alsoPublished %s' % (tag, extra['venue'] or '?')
        if extra['venue'] not in a['platforms']:
            err('%s: names a venue absent from platforms[]' % etag)
        if not re.fullmatch(r'\d{4}-\d{2}-\d{2}', extra['date'] or ''):
            err('%s: date %r is not ISO' % (etag, extra['date']))
        if extra['url'] and 'dzone.com/articles/' in extra['url'] \
                and 'web.archive.org' not in extra['url']:
            err('%s: points at a live dzone.com URL that 410s' % etag)

# Order must be strictly non-increasing by date.
def key(d):
    return d if len(d) == 10 else (d + '-01-01') if len(d) == 7 else d + '-01-01'


prev = None
for a in articles:
    k = key(a['date'])
    if prev and k > prev[0]:
        err('order inversion: id %s (%s) follows id %s (%s)' % (a['id'], a['date'], prev[1], prev[2]))
    prev = (k, a['id'], a['date'])

years = Counter(a['year'] for a in articles)
if sorted(years) != list(range(min(years), max(years) + 1)):
    note('year gaps in the bibliography: %s' % sorted(set(range(min(years), max(years) + 1)) - set(years)))

# Every year must land inside a declared era band, or it silently drops out of
# the grouped index.
bands = re.findall(r"\{ id: '([a-z]+)', from: (\d{4}), to: (\d{4})", '\n'.join(SRC))
covered = set()
for _, lo, hi in bands:
    covered |= set(range(int(lo), int(hi) + 1))
uncovered = sorted(set(years) - covered)
if uncovered:
    err('years outside every ERAS band (would render ungrouped): %s' % uncovered)

legacy = [a for a in articles if a['legacy']]
print('articles: %d   years: %d (%d-%d)   bands: %s'
      % (len(articles), len(years), min(years), max(years),
         ', '.join('%s %s-%s' % b for b in bands)))
print('legacy guides: %d   with archive url: %d   unlinked: %d'
      % (len(legacy), sum(1 for a in legacy if a['url']), sum(1 for a in legacy if not a['url'])))
print('books: %d   venues: %s' % (sum(1 for a in articles if a['isBook']),
                                  sorted({v for a in articles for v in (a['platforms'] or [])})))
print('index rows: %d   (openable: %d   archived-only: %d   no surviving copy: %d)'
      % (len([a for a in articles if not a['isBook']]),
         sum(1 for a in articles if not a['isBook'] and a['url'] and a['url'] != '#'),
         sum(1 for a in articles if not a['isBook'] and a['archived']),
         sum(1 for a in articles if not a['isBook'] and not a['url'])))
print()
# ---------------------------------------------------------------- talks
# The speaking engagements are the one place on the site where the site asserts
# facts about a third party's event. A missing source link turns a checkable
# claim into an assertion, so a source is mandatory rather than optional.
#
# `evidence` is provenance, not presentation: it is not rendered. It records which
# rows an organiser confirmed, which rest on a surviving deck, and which rest on
# the author's own list, so a future edit knows what to re-verify. It still has to
# be one of the known values -- a typo there would silently misfile the row.

talk_block = '\n'.join(SRC[SRC.index('  talks: ['):SRC.index('  platforms: [')]) if '  talks: [' in SRC else ''
if talk_block:
    entries = re.findall(r"\{\s*\n\s*date: '([^']+)',\s*year: (\d{4}),\s*kind: '([^']+)'(.*?)\n    \}", talk_block, re.S)
    KNOWN_EVIDENCE = {'recording', 'deck', 'self'}

    for d, y, kind, rest in entries:
        label = '%s %s' % (d, kind)
        if not re.match(r'^\d{4}(-\d{2}(-\d{2})?)?$', d):
            err('talk %s: date must be YYYY, YYYY-MM or YYYY-MM-DD' % label)
        if not d.startswith(y):
            err('talk %s: date and year disagree' % label)
        # A typo in the tier would silently misfile the row rather than fail to render,
        # since nothing on the page reads it.
        m = re.search(r"evidence: '([^']+)'", rest)
        if not m:
            err('talk %s: no evidence tier' % label)
        elif m.group(1) not in KNOWN_EVIDENCE:
            err("talk %s: evidence '%s' is not one of %s"
                % (label, m.group(1), sorted(KNOWN_EVIDENCE)))
        for field in ('title', 'venue', 'role', 'url', 'source'):
            if not re.search(r"\b%s: '" % field, rest):
                err('talk %s: missing %s' % (label, field))

    tiers = Counter(re.findall(r"evidence: '([^']+)'", talk_block))
    kinds = Counter(k for _, _, k, _ in entries)
    print('talks: %d   by evidence: %s'
          % (len(entries), ', '.join('%s %d' % (k, v) for k, v in sorted(tiers.items()))))
    print('        by kind: %s'
          % ', '.join('%s %d' % (k, v) for k, v in sorted(kinds.items())))

    if len(entries) != len(re.findall(r"evidence: '", talk_block)):
        err('a talk entry is missing its evidence tier (parsed %d of %d)'
            % (len(entries), len(re.findall(r"evidence: '", talk_block))))

print()
if warn:
    for w in warn:
        print('WARN  %s' % w)
if problems:
    for p in problems:
        print('ERROR %s' % p)
    print('\n%d problem(s)' % len(problems))
    sys.exit(1)
print('lint clean: %d articles' % len(articles))