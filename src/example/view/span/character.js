"use strict";

import withStyle from "easy-with-style";  ///

import Span from "../span";

class CharacterSpan extends Span {
  childElements() {
    const { character } = this.properties,
          childElements = character; ///

    return childElements;
  }

  static ignoredProperties = [
    "character"
  ];

  static defaultProperties = {
    className: "character"
  };
}

export default withStyle(CharacterSpan)`

  width: 64rem;
  font-size: 2rem;
  white-space: nowrap;
  justify-content: flex-start;
  
`;
