"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import GlyphsTable from "./view/table/glyphs";

const { first } = arrayUtilities;

export default class View extends Element {
  selectChangeHandler = (event, element) => {
    const charactersSelect = element, ///
          charactersName = charactersSelect.getCharactersName();

    this.unmountGlyphTable();

    this.mountGlyphTable(charactersName);
  }

  mountGlyphTable(charactersName) {
    const { characterMaps, showCharacter } = this.constructor,
          characterMap = characterMaps[charactersName],
          glyphTable =

            <GlyphsTable characterMap={characterMap} showCharacter={showCharacter} />

          ;

    this.mount(glyphTable);
  }

  unmountGlyphTable() {
    const glyphsTable = this.getGlyphsTable();

    if (glyphsTable !== null) {
      this.unmount(glyphsTable);
    }
  }

  getGlyphsTable() {
    let glyphTable = null;

    const glyphsTableChildElements = this.getChildElements("table.glyphs"),
          glyphsTableChildElementsLength = glyphsTableChildElements.length;

    if (glyphsTableChildElementsLength > 0) {
      const firstGlyphsTableChildElement = first(glyphsTableChildElements);

      glyphTable = firstGlyphsTableChildElement;  ///
    }

    return glyphTable;
  }

  didMount() {
    const { characterMaps } = this.constructor,
          charactersNames = Object.keys(characterMaps),
          firstCharactersName = first(charactersNames),
          charactersName = firstCharactersName; ///

    this.mountGlyphTable(charactersName);
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { CharactersSelect } = this.constructor;

    return (

      <CharactersSelect onChange={this.selectChangeHandler} />

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
