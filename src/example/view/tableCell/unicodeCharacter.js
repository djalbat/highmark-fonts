"use strict";

import TableCell from "../tableCell";
import UnicodeCharacterSpan from "../span/unicodeCharacter";

export default class UnicodeCharacterTableCell extends TableCell {
  childElements() {
    const { unicodeCharacter } = this.properties;

    return (

      <UnicodeCharacterSpan unicodeCharacter={unicodeCharacter} />

    );
  }

  static ignoredProperties = [
    "unicodeCharacter"
  ];

  static defaultProperties = {
    className: "unicode-character"
  };
}
