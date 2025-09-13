"use strict";

import withStyle from "easy-with-style";  ///

import GlyphSpan from "../../span/glyph";

class STIXGlyphSpan extends GlyphSpan {
  static defaultProperties = {
    className: "stix"
  }
}

export default withStyle(STIXGlyphSpan)`

  font-size: 3rem;
  font-style: normal;
  font-weight: normal;
  font-family: "STIXTwoText STIXTwoMath";
  font-kerning: none;
  font-synthesis: none;
  font-variant-ligatures: none;  

  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }
  
`;