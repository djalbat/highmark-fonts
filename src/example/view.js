"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import GlyphsTable from "./view/table/glyphs";
import CollectionSelect from "./view/select/collection";

import { shapeCharacterMap,
         angleCharacterMap,
         arrowCharacterMap,
         harpoonCharacterMap,
         equalityCharacterMap,
         orderingCharacterMap,
         calculusCharacterMap,
         relationalCharacterMap,
         arithmeticCharacterMap,
         headedArrowCharacterMap,
         greekLetterCharacterMap,
         miscellaneousCharacterMap,
         scriptLettersCharacterMap,
         circleCircledCharacterMap,
         tackTurnstileCharacterMap,
         frakturLettersCharacterMap,
         classTheoreticCharacterMap,
         logicalOperatorCharacterMap,
         doubleTripleArrowCharacterMap,
         parenthesisBracketCharacterMap,
         doubleStruckLettersCharacterMap,
         superscriptSubscriptCharacterMap  } from "../characterMap";

const { first } = arrayUtilities;

const characterMapMap = {
  shapeCharacter: shapeCharacterMap,
  angleCharacter: angleCharacterMap,
  arrowCharacter: arrowCharacterMap,
  harpoonCharacter: harpoonCharacterMap,
  equalityCharacter: equalityCharacterMap,
  orderingCharacter: orderingCharacterMap,
  calculusCharacter: calculusCharacterMap,
  relationalCharacter: relationalCharacterMap,
  arithmeticCharacter: arithmeticCharacterMap,
  headedArrowCharacter: headedArrowCharacterMap,
  greekLetterCharacter: greekLetterCharacterMap,
  miscellaneousCharacter: miscellaneousCharacterMap,
  scriptLettersCharacter: scriptLettersCharacterMap,
  circleCircledCharacter: circleCircledCharacterMap,
  tackTurnstileCharacter: tackTurnstileCharacterMap,
  frakturLettersCharacter: frakturLettersCharacterMap,
  classTheoreticCharacter: classTheoreticCharacterMap,
  logicalOperatorCharacter: logicalOperatorCharacterMap,
  doubleTripleArrowCharacter: doubleTripleArrowCharacterMap,
  parenthesisBracketCharacter: parenthesisBracketCharacterMap,
  doubleStruckLettersCharacter: doubleStruckLettersCharacterMap,
  superscriptSubscriptCharacter: superscriptSubscriptCharacterMap
};

export default class View extends Element {
  collectionSelectChangeHandler = (event, element) => {
    const glyphsTable = this.getGlyphsTable();

    if (glyphsTable !== null) {
      this.unmount(glyphsTable);
    }

    const collectionSelect = element, ///
          name = collectionSelect.getName(),
          characterMap = characterMapMap[name],
          glyphTable =

            <GlyphsTable characterMap={characterMap} />;

    this.mount(glyphTable);
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

  childElements() {
    return ([

      <CollectionSelect onChange={this.collectionSelectChangeHandler} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
