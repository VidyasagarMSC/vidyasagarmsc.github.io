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
import os
import sys
from html.parser import HTMLParser

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
        'link', 'meta', 'param', 'source', 'track', 'wbr'}

# Elements whose content is not parsed as markup.
RAW_TEXT = {'script', 'style'}

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


def main():
    pages = sorted(p for p in os.listdir('.') if p.endswith('.html'))
    if len(sys.argv) > 1:
        pages = [p for p in pages if any(a in p for a in sys.argv[1:])]

    for page in pages:
        if page.startswith('_'):
            continue  # measurement harnesses, not shipped pages
        src = open(page, encoding='utf-8').read()
        a = Audit(page)
        # Track raw-text elements so their contents are never treated as markup.
        class Raw(Audit):
            pass
        # Simple approach: swap in raw mode around script/style by pre-scanning.
        a.feed(src)
        a.finish()
        notes.append('%-18s ids=%d' % (page, len(a.ids)))

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


if __name__ == '__main__':
    main()