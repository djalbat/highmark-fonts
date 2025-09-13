"use strict";

import StixGlyphSpan from "../../span/glyph/stix";
import GlyphTableCell from "../../tableCell/glyph";

import { CLASS_NAME, CHILD_ELEMENTS } from "../../../constants";

export default class StixGlyphTableCell extends GlyphTableCell {
  childElements() {
    const properties = {
      ...this.properties
    };

    delete properties[CLASS_NAME];

    delete properties[CHILD_ELEMENTS];

    return (

      <StixGlyphSpan {...properties} />

    );
  }

  static ignoredProperties = [
    "bold",
    "italic"
  ];

  static defaultProperties = {
    className: "stix"
  };
}
