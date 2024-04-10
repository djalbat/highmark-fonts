"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { computerModernStyle } from "./index";  ///

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";

const body = new Body();

renderStyles();

renderStyle(computerModernStyle);

body.mount(

  <View/>

);
