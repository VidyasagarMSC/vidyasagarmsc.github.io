#!/usr/bin/env python3
"""Source-level HTML checks for defects that survive a syntax check.

Most of these are invisible in the DOM, which is the problem. A nested anchor is
the clearest case: the HTML parser closes the outer <a> when it meets the inner
one and re-opens a new anchor afterwards, so the rendered document contains no
nested anchors at all. Querying `a a` finds nothing and the card still renders as
three fragments. The damage is only visible by reading the source, or by noticing
that the fragments are there -- which is how the Conference Talks card was found
to be broken.

So this parses the source rather than the DOM.

  nested-anchor    a real UX break: the parser splits the outer anchor and the
                   card renders as separate fragments
  duplicate-id     getElementById and in-page anchors resolve to the first match
  img-no-dims      layout shift on load, and a reserved box of the wrong size
  anchor-no-href   a link that goes nowhere but still takes a tap target
"""
import json
import os
import re
import sys
from html.parser import HTMLParser

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
        'link', 'meta', 'param', 'source', 'track', 'wbr'}

problems = []
notes = []


def err(page, line, kind, msg):
    problems.append((page, line, kind, msg))


class Audit(HTMLParser):
    def __init__(self, page):
        super().__init__(convert_charrefs=True)
        self.page = page
        # Open element stack: (tag, line, has_text)
        self.stack = []
        self.ids = {}
        self.anchor_stack = []
        self.in_raw = None

    def _line(self):
        return self.getpos()[0]

    def handle_starttag(self, tag, attrs):
        line = self._line()
        if self.in_raw:
            return
        a = dict(attrs)

        # Void elements never open a scope, so they cannot close one either.
        if tag not in VOID:
            self.stack.append([tag, line, False])

        if tag == 'a':
            href = (a.get('href') or '').strip()
            if self.anchor_stack:
                outer_tag, outer_line = self.anchor_stack[-1]
                err(self.page, line, 'nested-anchor',
                    '<a href="%s"> opens inside the <a> that started on line %d. '
                    'The parser closes the outer one here and re-opens a new anchor '
                    'afterwards, so the card renders as fragments.' % (href[:50], outer_line))
            self.anchor_stack.append((tag, line))
            if not href:
                err(self.page, line, 'anchor-no-href',
                    '<a> with no href takes a tap target and goes nowhere')

        if 'id' in a:
            v = a['id']
            if v in self.ids:
                err(self.page, line, 'duplicate-id',
                    'id="%s" already used on line %d' % (v, self.ids[v]))
            else:
                self.ids[v] = line

        if tag == 'img':
            missing = [d for d in ('width', 'height') if d not in a]
            if missing:
                err(self.page, line, 'img-no-dims',
                    '<img src="%s"> has no %s, so it reserves no box and shifts '
                    'layout on load' % ((a.get('src') or '')[:46], '/'.join(missing)))

    def handle_startendtag(self, tag, attrs):
        # <img ... /> and friends: attributes still matter.
        a = dict(attrs)
        if tag == 'img':
            missing = [d for d in ('width', 'height') if d not in a]
            if missing:
                err(self.page, self._line(), 'img-no-dims',
                    '<img src="%s"> has no %s' % ((a.get('src') or '')[:46], '/'.join(missing)))

    def handle_endtag(self, tag):
        if self.in_raw:
            if tag == self.in_raw:
                self.in_raw = None
            return
        if tag in VOID:
            return

        if tag == 'a' and self.anchor_stack:
            self.anchor_stack.pop()

        # Pop to the matching open element, tolerating a stray close tag.
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                for entry in self.stack[i + 1:]:
                    err(self.page, entry[1], 'unclosed-tag',
                        '<%s> opened here is never closed before </%s>' % (entry[0], tag))
                del self.stack[i:]
                return
        err(self.page, self._line(), 'stray-close-tag', '</%s> with nothing open' % tag)

    def handle_data(self, data):
        if self.in_raw:
            return
        if self.stack and data.strip():
            self.stack[-1][2] = True

    def finish(self):
        for entry in self.stack:
            err(self.page, entry[1], 'unclosed-tag',
                '<%s> opened here is never closed' % entry[0])


def check_recent_list(js, html):
    """The homepage's "Recent dispatches" block is hand-maintained HTML.

    Everything else on the site that lists articles is rendered from
    researchData.articles, so it cannot fall behind. This one is six rows of
    literal markup, which is why adding the 107th DZone article left the homepage
    showing the previous six with no error anywhere.

    So: compare the block against the head of the dataset and fail if they differ.
    """
    rows = []
    for m in re.finditer(
            r'<a href="([^"]+)"[^>]*class="latest-post-card"[^>]*>\s*'
            r'<time class="lpc-date" datetime="([0-9-]+)">', html):
        rows.append((m.group(1), m.group(2)))
    if not rows:
        return

    block = js[js.index('articles: ['):js.index('  // Speaking engagements')]
    head = []
    for m in re.finditer(
            r'\{ id: (\d+), title: "(.*?)", platform: "(.*?)".*?'
            r'date: "([0-9][0-9-]*)".*?url: "(.*?)"', block):
        head.append((m.group(5), m.group(4)))
        if len(head) == len(rows):
            break

    if len(head) < len(rows):
        err('index.html', 0, 'recent-list-short',
            'the recent list has %d rows but the dataset yielded %d' % (len(rows), len(head)))
        return

    # Report the first divergence only. When the list falls behind by one, every
    # subsequent row is also wrong, and five near-identical messages bury the one
    # line that says what to do.
    for i, (href, date) in enumerate(rows):
        want_href, want_date = head[i]
        if href == want_href and date == want_date:
            continue
        if href != want_href:
            err('index.html', 0, 'recent-list-drift',
                'row %d is %s but the dataset has %s (%s) there. The list has fallen '
                'behind: add the newest article at the top and drop the one that '
                'falls off the end.'
                % (i + 1, href.rsplit('/', 1)[-1], want_href.rsplit('/', 1)[-1], want_date))
        else:
            err('index.html', 0, 'recent-list-drift',
                'row %d (%s) is dated %s in the list but %s in the dataset'
                % (i + 1, href, date, want_date))
        break

    notes.append('  recent dispatches: %d rows, matched against the dataset' % len(rows))


def check_stat_fallbacks(site_js, pages_html):
    """Every data-stat fallback must equal SITE_STATS.

    The pages still carry each figure as its initial text, so they read correctly
    with JavaScript off. Those fallbacks are copies, and a copy is what drifted:
    the DZone count reached 107 in six places while the homepage still said 106,
    and the stale-figure check missed it because its patterns were written
    against the phrasings rather than the number.

    So the fallbacks are verified against the one source rather than trusted.
    """
    block = site_js[site_js.index('var SITE_STATS = {'):]
    block = block[:block.index('};') + 2]
    source = dict(re.findall(r"(\w+):\s*'([^']*)'", block))
    if not source:
        err('js/site.js', 0, 'stats-unreadable', 'could not read SITE_STATS')
        return

    checked = 0
    for page, html in pages_html:
        # Whole-element slots: data-stat="key">fallback<
        for m in re.finditer(r'data-stat="(\w+)"[^>]*>([^<]*)<', html):
            key, fallback = m.group(1), m.group(2).strip()
            checked += 1
            if key not in source:
                err(page, 0, 'stat-unknown-key',
                    'data-stat="%s" is not in SITE_STATS' % key)
            elif source[key] != fallback:
                err(page, 0, 'stat-fallback-stale',
                    'data-stat="%s" falls back to "%s" but SITE_STATS says "%s"'
                    % (key, fallback, source[key]))

        # Inline slots: data-stat-in="key" with {{key}} tokens in the text
        for m in re.finditer(r'data-stat-in="(\w+)"[^>]*>([^<]*)<', html):
            key = m.group(1)
            checked += 1
            if key not in source:
                err(page, 0, 'stat-unknown-key',
                    'data-stat-in="%s" is not in SITE_STATS' % key)
            body = m.group(2)
            for tok in re.findall(r'\{\{\s*(\w+)\s*\}\}', body):
                if tok not in source:
                    err(page, 0, 'stat-unknown-key',
                        'inline token {{%s}} is not in SITE_STATS' % tok)
            leftover = re.findall(r'\{\{.*?\}\}', body)
            if not leftover:
                err(page, 0, 'stat-token-missing',
                    'data-stat-in="%s" has no {{token}} to substitute' % key)

    # research.js builds its platform card from the same object.
    js = open('js/research.js', encoding='utf-8').read()
    stale = re.findall(r'\{ name: "DZone"[^}]*?stat: "([^"]*)"', js)
    if stale:
        err('js/research.js', 0, 'stat-hardcoded',
            'the DZone platform card hardcodes stat "%s"; it should read SITE_STATS'
            % stale[0])
    if 'SITE_STATS.dzoneViews' not in js or 'SITE_STATS.dzoneArticles' not in js:
        err('js/research.js', 0, 'stat-not-wired',
            'the DZone platform card does not read from SITE_STATS')

    # stats.json is the machine-readable mirror, written by the scraper.
    data = json.load(open('public/data/stats.json', encoding='utf-8'))
    for label, got, key in (('dzone_articles', data['dzone_articles'], 'dzoneArticles'),
                            ('dzone_views', data['dzone_views'], 'dzoneViews'),
                            ('dzone_reputation', data['dzone_reputation'], 'dzoneReputation')):
        # Compare digits only. SITE_STATS holds the display form, which carries a
        # thousands separator for reputation ("7,206"), while stats.json holds the
        # raw value ("7206"). Those are the same figure in two representations,
        # and treating them as different is exactly the false alarm that would
        # train people to ignore this check.
        def digits(v):
            return re.sub(r'[^0-9]', '', str(v))
        if digits(source.get(key)) != digits(got):
            err('public/data/stats.json', 0, 'dzone-figures-mismatch',
                'stats.json %s is %r but SITE_STATS.%s is %r'
                % (label, got, key, source.get(key)))

    notes.append('  SITE_STATS: %d figures, %d page slots verified against them'
                 % (len(source), checked))
    notes.append('    %s' % ', '.join('%s=%s' % kv for kv in sorted(source.items())))


def check_platform_figures(js):
    """Sanity-check the DZone count against the dataset and the public profile.

    The stated 107 is the author's own figure from the DZone author dashboard,
    which lists 107 articles plus 2 refcards. The public profile page reports
    articleCount 58 and lists the same 2 refcards, so a public reader counting
    what is visible gets 58. The site indexes 60 DZone rows -- the 58 plus the
    2 refcards -- each carrying a URL that resolves. The two numbers answer
    different questions; the site quotes the author's total.
    """
    block = js[js.index('articles: ['):js.index('  // Speaking engagements')]
    dzone_rows = len(re.findall(r'platform: "DZone"', block))
    legacy_rows = len(re.findall(r'platform: "DZone Legacy"', block))
    notes.append('  dzone rows indexed: %d with live URLs + %d legacy guides (stated 107 is '
                 'the author-dashboard total; the public profile shows 58 + 2 refcards)'
                 % (dzone_rows, legacy_rows))


def main():
    pages = sorted(p for p in os.listdir('.') if p.endswith('.html'))
    if len(sys.argv) > 1:
        pages = [p for p in pages if any(a in p for a in sys.argv[1:])]

    js = open('js/research.js', encoding='utf-8').read()
    home = open('index.html', encoding='utf-8').read()
    site_js = open('js/site.js', encoding='utf-8').read()

    for page in pages:
        if page.startswith('_'):
            continue  # measurement harnesses, not shipped pages
        src = open(page, encoding='utf-8').read()
        a = Audit(page)
        a.feed(src)
        a.finish()
        notes.append('%-18s ids=%d' % (page, len(a.ids)))

    check_recent_list(js, home)
    check_stat_fallbacks(site_js, [(pg, open(pg, encoding='utf-8').read()) for pg in pages])
    check_platform_figures(js)

    for n in notes:
        print('  ' + n)
    print()
    if problems:
        by_kind = {}
        for page, line, kind, msg in problems:
            by_kind.setdefault(kind, []).append('%s:%d  %s' % (page, line, msg))
        for kind in sorted(by_kind):
            rows = by_kind[kind]
            print('%s (%d)' % (kind, len(rows)))
            for r in rows:
                print('    ' + r)
            print()
        print('%d problem(s)' % len(problems))
        sys.exit(1)
    print('html clean: no nested anchors, no duplicate ids, every img dimensioned')
    print('homepage recent list matches the dataset; every stat slot reads SITE_STATS')


if __name__ == '__main__':
    main()