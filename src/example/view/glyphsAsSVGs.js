"use strict";

import { svgUtilities } from "../../index"; ///
import { ajaxUtilities } from "necessary";

import View from "../view";

const { get } = ajaxUtilities,
      { svgFromCodePoint } = svgUtilities;

export default class GlyphsAsSVGsView extends View {
  didMount() {
    const codePoint = 0x1d538,
          fontName = "STIXTwoMath-Regular.otf",
          host = "http://localhost:8888/",
          uri = `ttf/${fontName}`,
          query = {},
          headers = {
            "accept": "font/ttf"
          },
          responseType = "arraybuffer";

    get(host, uri, query, headers, responseType, (arrayBuffer) => {
      const svg = svgFromCodePoint(codePoint, arrayBuffer);

      this.mount(svg)
    });
  }

  willUnmount() {
    ///
  }

  static defaultProperties = {
    className: "glyphs-as-svgs",
  };
}