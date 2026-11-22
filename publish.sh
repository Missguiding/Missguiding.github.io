#!/bin/bash

cd "$(dirname "$0")"

find . -size +300k -iname '*.jpeg' -o -size +300k -iname '*.jpg' | while read p; do
  tar=$(mktemp XXX.jpg)
  convert "$p" -define jpeg:extent=290kb "$tar"
  mv -f "$tar" "$p"
done

git add .

git commit -am 'new version'
git push
