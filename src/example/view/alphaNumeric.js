"use strict";

import { arrayUtilities } from "necessary";

import View from "../view";
import GlyphsTable from "../view/table/glyphs";
import collectionMap from "../collectionMap";
import CollectionSelect from "../view/select/collection";

import { collectionNames } from "../collectionMap";

const { first } = arrayUtilities;

export default class AlphaNumericView extends View {
  collectionSelectChangeHandler = (event, element) => {
    const collectionSelect = element, ///
          collectionName = collectionSelect.getCollectionName();

    this.unmountGlyphTable();

    this.mountGlyphTable(collectionName);
  }

  mountGlyphTable(collectionName) {
    const collection = collectionMap[collectionName],
          { characterMap } = collection,
          glyphTable =

        <GlyphsTable characterMap={characterMap} />;

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
    const firstCollectionName = first(collectionNames),
          collectionName = firstCollectionName; ///

    this.mountGlyphTable(collectionName);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return ([

      <CollectionSelect onChange={this.collectionSelectChangeHandler} />

    ]);
  }
}
