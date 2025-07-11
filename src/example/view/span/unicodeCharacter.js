"use strict";

import withStyle from "easy-with-style";  ///

import Span from "../span";

class UnicodeCharacterSpan extends Span {
  childElements() {
    const { unicodeCharacter } = this.properties,
          childElements = unicodeCharacter; ///

    return childElements;
  }

  static ignoredProperties = [
    "unicodeCharacter"
  ];

  static defaultProperties = {
    className: "unicode-character"
  };
}

export default withStyle(UnicodeCharacterSpan)`

  width: 64rem;
  display: inline-block;
  padding: 1rem;
  overflow: hidden;
  font-size: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  
`;
