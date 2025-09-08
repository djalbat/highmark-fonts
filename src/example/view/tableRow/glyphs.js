"use strict";

import { Element } from "easy";

import JuliaMonoGlyphTableCell from "../tableCell/glyph/juliaMono";
import UnicodeCharacterTableCell from "../tableCell/unicodeCharacter";
import ComputerModernGlyphTableCell from "../tableCell/glyph/computerModern";

import unicodeCharacterMap from "../../../characterMap";

export default class GlyphsTableRow extends Element {
  childElements() {
    const { unicodeCharacter } = this.properties,
          codePoint = unicodeCharacterMap[unicodeCharacter];

    return ([

      <UnicodeCharacterTableCell unicodeCharacter={unicodeCharacter} />,

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
    ]);
  }

  static tagName = "tr";

  static ignoredProperties = [
    "unicodeCharacter"
  ]

  static defaultProperties = {
    className: "glyphs"
  };
}
