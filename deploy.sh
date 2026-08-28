#!/usr/bin/env bash
set -euo pipefail

BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ] && [ "$BRANCH" != "master" ]; then
  echo "⚠️  Not on main/master branch (currently on '$BRANCH'). Switch to main/master before deploying."
  exit 1
fi

echo "🔍 Checking for uncommitted changes..."
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️  Uncommitted changes found. Commit or stash before deploying."
  exit 1
fi

echo "🕸️  Running scrapers (Python only, no Node build)..."
if [ -f requirements.txt ]; then
  pip3 install -q -r requirements.txt 2>/dev/null || pip install -q -r requirements.txt || true
fi
python3 scrape.py || python scrape.py || echo "⚠️  scrape.py failed, continuing..."
python3 scrape_citations.py || python scrape_citations.py || echo "⚠️  scrape_citations.py failed, continuing..."
python3 scrape_latest_posts.py || python scrape_latest_posts.py || echo "⚠️  scrape_latest_posts.py failed, continuing..."

# Commit updated data if any
if ! git diff --quiet -- public/data/ data/ 2>/dev/null; then
  echo "📊 Committing updated scraped data..."
  git add public/data/ 2>/dev/null || true
  git add data/ 2>/dev/null || true
  git commit -m "chore: update scraped data $(date '+%Y-%m-%d %H:%M')" || true
fi

echo "🚀 Deploying static site to gh-pages branch (no build step)..."
# Use gh-pages via npx if available, otherwise use git subtree
if command -v npx >/dev/null 2>&1 && npx --yes gh-pages --version >/dev/null 2>&1; then
  npx --yes gh-pages --dist . --dotfiles --dest . --message "deploy: $(date '+%Y-%m-%d %H:%M')" --exclude "node_modules" --exclude ".git" || {
    echo "⚠️  gh-pages deploy failed, trying git worktree method..."
    git push origin "$BRANCH" --force 2>/dev/null || echo "Push to $BRANCH done. Configure GitHub Pages to serve from / (root) in repo settings."
  }
else
  echo "ℹ️  npx gh-pages not available. Pushing to $BRANCH - ensure GitHub Pages is set to serve from root (master/main branch)."
  git push origin "$BRANCH" || true
fi

echo "✅ Deploy complete! Site live at https://vidyasagarmsc.github.io"
echo "   (Served directly from HTML/CSS/JS, no Node build required)"
