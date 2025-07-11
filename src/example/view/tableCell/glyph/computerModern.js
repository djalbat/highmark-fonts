"use strict";

import GlyphTableCell from "../../tableCell/glyph";
import ComputerModernGlyphSpan from "../../span/glyph/computerModern";

import { CLASS_NAME, CHILD_ELEMENTS } from "../../../constants";

export default class ComputerModernGlyphTableCell extends GlyphTableCell {
  childElements() {
    const properties = {};

    for (let propertyName in this.properties) {
      if ((propertyName !== CLASS_NAME) && (propertyName !== CHILD_ELEMENTS)) {
        const propertyValue = this.properties[propertyName];

        properties[propertyName] = propertyValue;
      }
    }

    return (

      <ComputerModernGlyphSpan {...properties} />

    );
  }

  static defaultProperties = {
    className: "computer-modern"
  };
}
