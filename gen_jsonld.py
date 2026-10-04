#!/usr/bin/env python3
"""Regenerate latest-posts.html's TechArticle/BlogPosting JSON-LD from
js/research.js so the structured data can never drift from the index again.

The previous block was hand-written and had already rotted: every DZone entry
carried 2025 where the data says 2026, and one entry pointed at a bare author
page (https://dzone.com/authors/vidyasagarmsc) rather than an article — one of
the fabricated placeholders that was dropped from the dataset.

Usage: python3 gen_jsonld.py [--dry]
"""
import json
import re
import sys

SRC = 'js/research.js'
PAGE = 'latest-posts.html'
N = 8
AUTHOR = 'Vidyasagar Machupalli'

# Records are one-per-line inside the articles array.
LINE = re.compile(r'^\s*\{\s*id:\s*(\d+),\s*(.*)$')


def unescape(s):
    return (s.replace('\\"', '"').replace("\\'", "'")
             .replace('\\n', ' ').replace('\\u2019', '’'))


def field(rec, name):
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', rec)
    return unescape(m.group(1)) if m else None


def load_articles():
    """Return the article records, skipping the platforms metadata block."""
    arts, in_articles = [], False
    for line in open(SRC, encoding='utf-8'):
        if not in_articles:
            # The articles array is the first `articles: [` in researchData.
            if re.match(r'^\s*articles:\s*\[\s*$', line):
                in_articles = True
            continue
        if re.match(r'^\s*\],?\s*$', line):
            break
        m = LINE.match(line)
        if m:
            rec = m.group(2)
            arts.append({
                'id': int(m.group(1)),
                'title': field(rec, 'title'),
                'url': field(rec, 'url'),
                'summary': field(rec, 'summary'),
                'date': field(rec, 'date'),
                'platform': field(rec, 'platform'),
                'isBook': 'isBook: true' in rec,
            })
    return arts


def sort_key(a):
    # ISO sorts lexically once year-only / month-precision are padded, which is
    # exactly how the page's own splitDate() treats a coarse date.
    d = (a['date'] or '')
    return d if len(d) == 10 else (d + '-01-01')[:10]


def main():
    dry = '--dry' in sys.argv
    arts = [a for a in load_articles() if a['url'] and a['url'] != '#' and not a['isBook']]
    arts.sort(key=sort_key, reverse=True)
    top = arts[:N]

    nodes = []
    for a in top:
        # The site itself is the publisher of nothing here — these are articles
        # hosted elsewhere, so the publishing venue is the right `publisher`.
        desc = re.sub(r'\s+', ' ', a['summary'] or '').strip()
        if len(desc) > 220:
            desc = desc[:217].rsplit(' ', 1)[0] + '…'
        nodes.append({
            '@type': 'TechArticle' if a['platform'] == 'DZone' else 'BlogPosting',
            'headline': a['title'],
            'author': {'@type': 'Person', 'name': AUTHOR},
            'datePublished': sort_key(a),
            'publisher': a['platform'],
            'url': a['url'],
            'description': desc,
        })

    graph = {'@context': 'https://schema.org', '@graph': nodes}
    payload = json.dumps(graph, ensure_ascii=False, separators=(',', ':'))

    # Guard: never emit a URL that is not an article permalink.
    for n in nodes:
        if re.search(r'/authors?/', n['url']):
            sys.exit('refusing to emit author-page URL: ' + n['url'])

    if dry:
        print(payload)
        print('\n%d of %d articles' % (len(top), len(arts)), file=sys.stderr)
        return

    html = open(PAGE, encoding='utf-8').read()
    pattern = re.compile(
        r'(<script type="application/ld\+json">)'
        r'(\{"@context":"https://schema\.org","@graph":.*?\})'
        r'(</script>)', re.S)
    if not pattern.search(html):
        sys.exit('could not find the @graph JSON-LD block in ' + PAGE)
    html, n_sub = pattern.subn(lambda m: m.group(1) + payload + m.group(3), html, count=1)
    if n_sub != 1:
        sys.exit('expected exactly one replacement, made %d' % n_sub)
    open(PAGE, 'w', encoding='utf-8').write(html)
    print('wrote %d nodes into %s' % (len(nodes), PAGE))
    for n in nodes:
        print('  %s  %-11s %s' % (n['datePublished'], n['publisher'], n['headline'][:56]))


if __name__ == '__main__':
    main()
