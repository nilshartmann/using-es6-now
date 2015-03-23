#!/usr/bin/env bash

function usage() {
	echo "$0 ORG TAG"
}

ORG=$1
TAG=$2

if [ -z "$ORG" ] || [ -z "$TAG" ]; then
	usage;
	exit 1;
fi;

TAG=$2

LIB=`echo $ORG |cut -d / -f 2`

echo "LIB $LIB"

git subtree add --prefix libs/$LIB --squash https://github.com/$ORG.git $TAG