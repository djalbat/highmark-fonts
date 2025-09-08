"use strict";

import GlyphTableCell from "../../tableCell/glyph";
import ComputerModernGlyphSpan from "../../span/glyph/computerModern";

import { CLASS_NAME, CHILD_ELEMENTS } from "../../../constants";

export default class ComputerModernGlyphTableCell extends GlyphTableCell {
  childElements() {
    const properties = {
      ...this.properties
    };

    delete properties[CLASS_NAME];

    delete properties[CHILD_ELEMENTS];

    return (

      <ComputerModernGlyphSpan {...properties} />

    );
  }

  static defaultProperties = {
    className: "computer-modern"
  };
}
