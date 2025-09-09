"use strict";

import { arrayUtilities } from "necessary";
import { symbolicCharactersMaps } from "../../index"; ///

import View from "../view";
import GlyphsTable from "../view/table/glyphs";
import SymbolicCharactersSelect from "./select/symbolicCharacters";

const { first } = arrayUtilities;

export default class SymbolicView extends View {
  selectChangeHandler = (event, element) => {
    const charactersSelect = element, ///
          charactersName = charactersSelect.getCharactersName();

    this.unmountGlyphTable();

    this.mountGlyphTable(charactersName);
  }

  mountGlyphTable(charactersName) {
    const symbolicCharactersMap = symbolicCharactersMaps[charactersName],
          charactersMap = symbolicCharactersMap,
          glyphTable =

            <GlyphsTable charactersMap={charactersMap} />

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
    const charactersMaps = symbolicCharactersMaps,
          charactersNames = Object.keys(charactersMaps),
          firstCharactersName = first(charactersNames),
          charactersName = firstCharactersName; ///

    this.mountGlyphTable(charactersName);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return ([

      <SymbolicCharactersSelect onChange={this.selectChangeHandler} />

    ]);
  }
}
