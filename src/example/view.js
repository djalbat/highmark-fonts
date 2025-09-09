"use strict";

import { Element } from "easy";

export default class View extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
