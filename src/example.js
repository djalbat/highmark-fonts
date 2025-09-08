"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { computerModernStyle } from "./index";  ///

import juliaMonoStyle from "./example/style/juliaMono";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";

const body = new Body();

renderStyles();

renderStyle(computerModernStyle);

renderStyle(juliaMonoStyle);

body.mount(

  <View/>

);
