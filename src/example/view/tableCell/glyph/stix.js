"use strict";

import StixGlyphSpan from "../../span/glyph/stix";
import GlyphTableCell from "../../tableCell/glyph";

export default class StixGlyphTableCell extends GlyphTableCell {
  childElements() {
    const { codePoint } = this.properties;

    return (

      <StixGlyphSpan codePoint={codePoint} />

    );
  }

  static defaultProperties = {
    className: "stix"
  };
}
