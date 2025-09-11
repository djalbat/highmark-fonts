"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { computerModernStyle } from "./index";  ///

import juliaMonoStyle from "./example/style/juliaMono";
import GlyphsAsSVGsView from "./example/view/glyphsAsSVGs";
import SymbolicCharactersView from "./example/view/characters/symbolic";
import AlphaNumericCharactersView from "./example/view/characters/alphaNumeric";

const { renderStyle, renderStyles } = withStyle;

const body = new Body(),
      example = window.location.search.substring(1);  ///

let View;

switch (example) {
  case "glyphs-as-svgs" : View = GlyphsAsSVGsView; break;
  case "symbolic-characters" : View = SymbolicCharactersView; break;
  case "alpha-numeric-characters" : View = AlphaNumericCharactersView; break;
}

renderStyles();

renderStyle(computerModernStyle);

renderStyle(juliaMonoStyle);

body.mount(

  <View/>

);
