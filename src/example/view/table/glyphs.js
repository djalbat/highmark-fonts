"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import GlyphsTableRow from "../tableRow/glyphs";

class GlyphsTable extends Element {
  childElements() {
    const { characterMap, showCharacter } = this.properties,
          characters = Object.keys(characterMap),
          glyphsTableRows = characters.map((character) => {
            return (

              <GlyphsTableRow showCharacter={showCharacter} characterMap={characterMap} character={character} />

            );
          }),
          childElements = glyphsTableRows;  ///

    return childElements;
  }

  static tagName = "table";

  static ignoredProperties = [
    "characterMap",
    "showCharacter"
  ];

  static defaultProperties = {
    className: "glyphs"
  };
}

export default withStyle(GlyphsTable)`

  margin: 2rem;
  border-collapse: collapse;
  
`;

