#!/usr/bin/env sh

# abort on errors
set -e

# build
#npm run build

# navigate into the build output directory
cd dist

git init
# git config --global user.email "yubmaharjan322@gmail.com"
# git config --global user.name "Yub-0"
git add -A
git commit -m 'deploy'

git push -f git@github.com:Yub-0/Yub-0.github.io.git main:gh-pages

cd -