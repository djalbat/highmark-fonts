"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import GlyphsTableRow from "../tableRow/glyphs";

class GlyphsTable extends Element {
  childElements() {
    const { charactersMap } = this.properties,
          unicodeCharacters = Object.keys(charactersMap),
          glyphsTableRows = unicodeCharacters.map((unicodeCharacter) => {
            return (

              <GlyphsTableRow charactersMap={charactersMap} unicodeCharacter={unicodeCharacter} />

            );
          }),
          childElements = glyphsTableRows;  ///

    return childElements;
  }

  static tagName = "table";

  static ignoredProperties = [
    "charactersMap"
  ];

  static defaultProperties = {
    className: "glyphs"
  };
}

export default withStyle(GlyphsTable)`

  border-collapse: collapse;
  
`;

