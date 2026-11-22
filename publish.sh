#!/bin/bash

find . -size +1M -iname '*.jpeg' -o -size +1M -iname '*.jpg' | while read p; do
  tar=$(mktemp XXX.jpg)
  convert "$p" -define jpeg:extent=900kb "$tar"
  mv -f "$tar" "$p"
done

git add .

git commit -am 'new version'
git push
