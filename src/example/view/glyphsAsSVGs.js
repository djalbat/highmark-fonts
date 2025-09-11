"use strict";

import { svgUtilities } from "../../index"; ///
import { ajaxUtilities } from "necessary";

import View from "../view";

const { get } = ajaxUtilities,
      { characterToSVG } = svgUtilities;

export default class GlyphsAsSVGsView extends View {
  didMount() {
    const character = "A",
          fontName = "cmunbbx.ttf",
          host = "http://localhost:8888/",
          uri = `ttf/${fontName}`,
          query = {},
          headers = {
            "accept": "font/ttf"
          };

    get(host, uri, query, headers, (fontFileContent) => {
      const SVG = characterToSVG(character, fontFileContent);

      this.mount(

        <SVG/>

      )
    });
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "glyphs-as-svgs",
  };
}