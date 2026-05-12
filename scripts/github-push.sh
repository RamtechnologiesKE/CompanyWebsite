#!/bin/sh
# Auto-push to GitHub companywebsite repository
# Called by the post-commit git hook

GITHUB_USERNAME="${GITHUB_USERNAME}"
GITHUB_TOKEN="${GITHUB_TOKEN}"

if [ -z "$GITHUB_USERNAME" ] || [ -z "$GITHUB_TOKEN" ]; then
  echo "[github-push] GITHUB_USERNAME or GITHUB_TOKEN not set — skipping push"
  exit 0
fi

REPO_URL="https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/CompanyWebsite.git"

echo "[github-push] Pushing to GitHub..."
git push "$REPO_URL" main:main --quiet 2>&1 | sed "s/$GITHUB_TOKEN/***REDACTED***/g"

if [ $? -eq 0 ]; then
  echo "[github-push] Successfully pushed to GitHub"
else
  echo "[github-push] Push failed — check credentials or network"
fi
