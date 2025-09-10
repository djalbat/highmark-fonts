"use strict";

import TableCell from "../tableCell";
import CharacterSpan from "../span/character";

export default class CharacterTableCell extends TableCell {
  childElements() {
    const { character } = this.properties;

    return (

      <CharacterSpan character={character} />

    );
  }

  static ignoredProperties = [
    "character"
  ];

  static defaultProperties = {
    className: "character"
  };
}
