#!/usr/bin/env bash
cd ~/RiddBlog &&
git fetch --all &&
git reset --hard origin/master &&
git pull &&
npm install &&
npm run docs:build &&
rm -rf /usr/share/nginx/blog/* &&
cp -r ./dist/* /usr/share/nginx/blog &&
nginx -s reload &&
echo "Deployed."
