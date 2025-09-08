"use strict";

import withStyle from "easy-with-style";  ///

import GlyphSpan from "../../span/glyph";

class JuliaMonoGlyphSpan extends GlyphSpan {
  static defaultProperties = {
    className: "julia-mono"
  }
}

export default withStyle(JuliaMonoGlyphSpan)`

  color: white;
  padding: 1rem;
  font-size: 3rem;
  font-style: normal;
  font-weight: normal;
  background-color: black;
  
  font-family: "JuliaMono";
  font-kerning: none;
  font-synthesis: none;
  font-variant-ligatures: none;  

`;
