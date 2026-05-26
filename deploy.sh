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

echo "📦 Installing dependencies..."
npm ci

echo "🕸️  Running scraper..."
if [ -f requirements.txt ]; then
  pip3 install -q -r requirements.txt 2>/dev/null || pip install -q -r requirements.txt
fi
python scrape.py

echo "🏗️  Building site..."
npm run build

echo "🚀 Deploying to gh-pages branch..."
npx gh-pages --dist dist --dotfiles --message "deploy: $(date '+%Y-%m-%d %H:%M')"

echo "✅ Deploy complete! Site live at https://vidyasagarmsc.github.io"
