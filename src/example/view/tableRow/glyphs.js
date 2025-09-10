"use strict";

import { Element } from "easy";

import CodePointTableCell from "../tableCell/codePoint";
import CharacterTableCell from "../tableCell/character";
import JuliaMonoGlyphTableCell from "../tableCell/glyph/juliaMono";
import ComputerModernGlyphTableCell from "../tableCell/glyph/computerModern";

export default class GlyphsTableRow extends Element {
  childElements() {
    const { showCharacter, characterMap, character } = this.properties,
          codePoint = characterMap[character],
          childElements = [

            <CodePointTableCell codePoint={codePoint} />,

            <JuliaMonoGlyphTableCell codePoint={codePoint} />,

            <ComputerModernGlyphTableCell codePoint={codePoint} sans />,
            <ComputerModernGlyphTableCell codePoint={codePoint} sans bold />,
            <ComputerModernGlyphTableCell codePoint={codePoint} sans italic />,
            <ComputerModernGlyphTableCell codePoint={codePoint} sans bold italic />,

            <ComputerModernGlyphTableCell codePoint={codePoint} serif />,
            <ComputerModernGlyphTableCell codePoint={codePoint} serif bold />,
            <ComputerModernGlyphTableCell codePoint={codePoint} serif italic />,
            <ComputerModernGlyphTableCell codePoint={codePoint} serif bold italic />,

            <ComputerModernGlyphTableCell codePoint={codePoint} bright />,
            <ComputerModernGlyphTableCell codePoint={codePoint} bright bold />,
            <ComputerModernGlyphTableCell codePoint={codePoint} bright italic />,
            <ComputerModernGlyphTableCell codePoint={codePoint} bright bold italic />,

            <ComputerModernGlyphTableCell codePoint={codePoint} concrete />,
            <ComputerModernGlyphTableCell codePoint={codePoint} concrete bold />,
            <ComputerModernGlyphTableCell codePoint={codePoint} concrete italic />,
            <ComputerModernGlyphTableCell codePoint={codePoint} concrete bold italic />,

            <ComputerModernGlyphTableCell codePoint={codePoint} typewriter />,
            <ComputerModernGlyphTableCell codePoint={codePoint} typewriter bold />,
            <ComputerModernGlyphTableCell codePoint={codePoint} typewriter italic />,
            <ComputerModernGlyphTableCell codePoint={codePoint} typewriter bold italic />,

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
