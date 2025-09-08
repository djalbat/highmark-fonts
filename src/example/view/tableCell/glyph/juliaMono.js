"use strict";

import GlyphTableCell from "../../tableCell/glyph";
import JuliaMonoGlyphSpan from "../../span/glyph/juliaMono";

export default class JuliaMonoGlyphTableCell extends GlyphTableCell {
  childElements() {
    const { codePoint } = this.properties;

    return (

      <JuliaMonoGlyphSpan codePoint={codePoint} />

    );
  }

  static defaultProperties = {
    className: "julia-mono",
  };
}
