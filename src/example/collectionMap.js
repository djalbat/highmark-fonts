"use strict";

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
         superscriptSubscriptCharacterMap } from "../characterMap";

const collectionMap = {
  shapeCharacter: {
    title: "Shapes",
    characterMap: shapeCharacterMap
  },
  angleCharacter: {
    title: "Angles",
    characterMap: angleCharacterMap
  },
  arrowCharacter: {
    title: "Arrows",
    characterMap: arrowCharacterMap
  },
  harpoonCharacter: {
    title: "Harpoons",
    characterMap: harpoonCharacterMap
  },
  equalityCharacter: {
    title: "Equality",
    characterMap: equalityCharacterMap
  },
  orderingCharacter: {
    title: "Ordering",
    characterMap: orderingCharacterMap
  },
  calculusCharacter: {
    title: "Calculus",
    characterMap: calculusCharacterMap
  },
  relationalCharacter: {
    title: "Relational",
    characterMap: relationalCharacterMap
  },
  arithmeticCharacter: {
    title: "Arithmetic",
    characterMap: arithmeticCharacterMap
  },
  headedArrowCharacter: {
    title: "Headed Arrows",
    characterMap: headedArrowCharacterMap
  },
  greekLetterCharacter: {
    title: "Greek Letters",
    characterMap: greekLetterCharacterMap
  },
  miscellaneousCharacter: {
    title: "Miscellaneous",
    characterMap: miscellaneousCharacterMap
  },
  scriptLettersCharacter: {
    title: "Script Letters",
    characterMap: scriptLettersCharacterMap
  },
  circleCircledCharacter: {
    title: "Circles and Circled",
    characterMap: circleCircledCharacterMap
  },
  tackTurnstileCharacter: {
    title: "Tacks and Turnstiles",
    characterMap: tackTurnstileCharacterMap
  },
  frakturLettersCharacter: {
    title: "Fraktur Letters",
    characterMap: frakturLettersCharacterMap
  },
  classTheoreticCharacter: {
    title: "Class Theoretic",
    characterMap: classTheoreticCharacterMap
  },
  logicalOperatorCharacter: {
    title: "Logical Operators",
    characterMap: logicalOperatorCharacterMap
  },
  doubleTripleArrowCharacter: {
    title: "Double and Triple Arrows",
    characterMap: doubleTripleArrowCharacterMap
  },
  parenthesisBracketCharacter: {
    title: "Parentheses and brackets",
    characterMap: parenthesisBracketCharacterMap
  },
  doubleStruckLettersCharacter: {
    title: "Double Struck Letters",
    characterMap: doubleStruckLettersCharacterMap
  },
  superscriptSubscriptCharacter: {
    title: "Superscripts and Subscripts",
    characterMap: superscriptSubscriptCharacterMap
  }
};

export default collectionMap;

export const collectionNames = Object.keys(collectionMap);
