"use strict";

import withStyle from "easy-with-style";  ///

import GlyphSpan from "../../span/glyph";

import { CODE_POINT, CLASS_NAME, CHILD_ELEMENTS } from "../../../constants";

class STIXGlyphSpan extends GlyphSpan {
  didMount() {
    const classNames = {  ///
      ...this.properties
    };

    delete classNames[CODE_POINT];

    delete classNames[CLASS_NAME];

    delete classNames[CHILD_ELEMENTS];

    for (var className in classNames) {
      this.addClass(className);
    }
  }

  willUnmount() {
    ///
  }

  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "stix"
  }
}

export default withStyle(STIXGlyphSpan)`

  font-size: 3rem;
  font-style: normal;
  font-weight: normal;
  font-family: "STIXTwoText STIXTwoMath";

  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }
  
`;