"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class Span extends Element {
  static tagName = "span";
}

export default withStyle(Span)`

  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

`;
