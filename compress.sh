#!/bin/bash

SOURCE_DIRECTORY="ttf"
DESTINATION_DIRECTORY="font"

for ttfFile in "$SOURCE_DIRECTORY"/*.ttf; do
    [ -e "$ttfFile" ] || continue

    woff2_compress "$ttfFile"

    base_name=$(basename "$ttfFile" .ttf)

    sourceWoff2File="$SOURCE_DIRECTORY/$base_name.woff2"

    destinationWoff2File="$DESTINATION_DIRECTORY/$base_name.woff2"

    mv "$sourceWoff2File" "$destinationWoff2File"
done
