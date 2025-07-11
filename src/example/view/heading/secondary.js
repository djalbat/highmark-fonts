"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SecondaryHeading extends Element {
  static tagName = "h2";

  static defaultProperties = {
    className: "secondary"
  };
}

export default withStyle(SecondaryHeading)`
  
  margin: 1rem;
  font-size: 3rem;
  
`;
