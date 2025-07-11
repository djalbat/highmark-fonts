"use strict";

import withStyle from "easy-with-style";  ///

import GlyphSpan from "../../span/glyph";

import { CLASS_NAME, CHILD_ELEMENTS } from "../../../constants";

class ComputerModernGlyphSpan extends GlyphSpan {
  didMount() {
    for (let propertyName in this.properties) {
      if ((propertyName !== CLASS_NAME) && (propertyName !== CHILD_ELEMENTS)) {
        const className = propertyName; ///

        this.addClass(className);
      }
    }
  }

  willUnmount() {
    ///
  }

  static ignoredAttributes = [
    "italic",
    "bold",
    "sans",
    "serif",
    "bright",
    "concrete",
    "typewriter"
  ];

  static defaultProperties = {
    className: "computer-modern"
  }
}

export default withStyle(ComputerModernGlyphSpan)`

  padding: 1rem;
  font-size: 3rem;
  font-style: normal;
  font-weight: normal;

  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  .sans {
    font-family: "Computer Modern Sans";
  }
  
  .serif {
    font-family: "Computer Modern Serif";
  }
  
  .bright {
    font-family: "Computer Modern Bright";
  }
  
  .concrete {
    font-family: "Computer Modern Concrete";
  }
  
  .typewriter {
    font-family: "Computer Modern Typewriter";
  }
  
`;