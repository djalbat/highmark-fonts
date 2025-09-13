"use strict";

import { Element } from "easy";

import CodePointTableCell from "../tableCell/codePoint";
import CharacterTableCell from "../tableCell/character";
import STIXGlyphTableCell from "../tableCell/glyph/stix";
import JuliaMonoGlyphTableCell from "../tableCell/glyph/juliaMono";

export default class GlyphsTableRow extends Element {
  childElements() {
    const { showCharacter, characterMap, character } = this.properties,
          codePoint = characterMap[character],
          childElements = [

            <CodePointTableCell codePoint={codePoint} />,

            <JuliaMonoGlyphTableCell codePoint={codePoint} />,

            <STIXGlyphTableCell codePoint={codePoint} />,
            <STIXGlyphTableCell codePoint={codePoint} bold />,
            <STIXGlyphTableCell codePoint={codePoint} italic />,
            <STIXGlyphTableCell codePoint={codePoint} bold italic />,

          ];

    if (showCharacter) {
      childElements.unshift(

        <CharacterTableCell character={character} />

      );
    }

    return childElements;
  }

  static tagName = "tr";

  static ignoredProperties = [
    "character",
    "characterMap",
    "showCharacter"
  ]

  static defaultProperties = {
    className: "glyphs"
  };
}
