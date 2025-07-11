"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import GlyphsTableRow from "../tableRow/glyphs";

class GlyphsTable extends Element {
  childElements() {
    const { characterMap } = this.properties,
          unicodeCharacters = Object.keys(characterMap),
          glyphsTableRows = unicodeCharacters.map((unicodeCharacter) => {
            return (

              <GlyphsTableRow unicodeCharacter={unicodeCharacter} />

            );
          }),
          childElements = glyphsTableRows;  ///

    return childElements;
  }

  static tagName = "table";

  static ignoredProperties = [
    "characterMap"
  ];

  static defaultProperties = {
    className: "glyphs"
  };
}

export default withStyle(GlyphsTable)`

  border-collapse: collapse;
  
`;

