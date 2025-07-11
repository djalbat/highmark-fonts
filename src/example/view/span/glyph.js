"use strict";

import Span from "../span";

export default class GlyphSpan extends Span {
  childElements() {
    const { codePoint } = this.properties,
          string = String.fromCodePoint(codePoint),
          childElements = string; ///

    return childElements;
  }

  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "glyph"
  };
}
