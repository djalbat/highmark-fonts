"use strict";

import withStyle from "easy-with-style";  ///

import Span from "../span";

class CodePointSpan extends Span {
  childElements() {
    const { codePoint } = this.properties,
          hexCodePoint = codePoint.toString(16),
          childElements = `0x${hexCodePoint}`;

    return childElements;
  }

  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "code-point"
  };
}

export default withStyle(CodePointSpan)`

  width: 12rem;
  font-size: 2rem;
  padding-right: 1rem;
  font-family: monospace;
  justify-content: flex-end;
  
`;
