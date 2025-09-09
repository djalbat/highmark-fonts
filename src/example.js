"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { computerModernStyle } from "./index";  ///

import SymbolicView from "./example/view/symbolic";
import juliaMonoStyle from "./example/style/juliaMono";
import AlphaNumericView from "./example/view/alphaNumeric";

const { renderStyle, renderStyles } = withStyle;

const body = new Body(),
      example = window.location.search.substring(1);  ///

let View;

switch (example) {
  case "symbolic" : View = SymbolicView; break;
  case "alpha-numeric" : View = AlphaNumericView; break;
}

renderStyles();

renderStyle(computerModernStyle);

renderStyle(juliaMonoStyle);

body.mount(

  <View/>

);
