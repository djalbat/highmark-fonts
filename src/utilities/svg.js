"use strict";

import fontkit from "fontkit";

import { Buffer } from "buffer";

export function svgFromCodePoint(codePoint, arrayBuffer) {
  const buffer = Buffer.from(arrayBuffer),
        font = fontkit.create(buffer),
        glyph = font.glyphForCodePoint(codePoint);

  const { path, bbox } = glyph,
        { maxX, maxY, minX, minY } = bbox,
        x = minX, ///
        y = minY, ///
        width = maxX - minX,
        height = maxY - minY,
        viewBox = `${x} ${y} ${width} ${height}`,
        d = path.toSVG();

  return (

    <svg viewBox={viewBox}>
      <path d={d} />
    </svg>

  );
}

export default {
  svgFromCodePoint
};
