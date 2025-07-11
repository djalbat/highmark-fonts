"use strict";

import TableCell from "../tableCell";

export default class GlyphTableCell extends TableCell {
  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "glyph"
  };
}

