"use strict";

import {
  shapeCharacterMap,
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
  circleCircledCharacterMap,
  tackTurnstileCharacterMap,
  classTheoreticCharacterMap,
  logicalOperatorCharacterMap,
  doubleTripleArrowCharacterMap,
  parenthesisBracketCharacterMap,
  superscriptSubscriptCharacterMap,
  mathematicalScriptCharacterMap,
  mathematicalFrakturCharacterMap,
  mathematicalMonospaceCharacterMap,
  mathematicalDoubleStruckCharacterMap,
  mathematicalBoldCharacterMap,
  mathematicalItalicCharacterMap,
  mathematicalSansSerifCharacterMap,
  mathematicalBoldItalicCharacterMap,
  mathematicalSansSerifBoldCharacterMap,
  mathematicalSansSerifItalicCharacterMap,
  mathematicalSansSerifBoldItalicCharacterMap } from "../characterMap";

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
  circleCircledCharacter: {
    title: "Circles and Circled",
    characterMap: circleCircledCharacterMap
  },
  tackTurnstileCharacter: {
    title: "Tacks and Turnstiles",
    characterMap: tackTurnstileCharacterMap
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
  superscriptSubscriptCharacter: {
    title: "Superscripts and Subscripts",
    characterMap: superscriptSubscriptCharacterMap
  },
  mathematicalScriptCharacter: {
    title: "Mathematical Script",
    characterMap: mathematicalScriptCharacterMap
  },
  mathematicalFrakturCharacter: {
    title: "Mathematical Fraktur",
    characterMap: mathematicalFrakturCharacterMap
  },
  mathematicalMonospaceCharacter: {
    title: "Mathematical Monospace",
    characterMap: mathematicalMonospaceCharacterMap
  },
  mathematicalDoubleStruckCharacter: {
    title: "Mathematical Double Struck",
    characterMap: mathematicalDoubleStruckCharacterMap
  },
  mathematicalBoldCharacter: {
    title: "Mathematical Bold",
    characterMap: mathematicalBoldCharacterMap
  },
  mathematicalItalicCharacter: {
    title: "Mathematical Italic",
    characterMap: mathematicalItalicCharacterMap
  },
  mathematicalSansSerifCharacter: {
    title: "Mathematical Sans Serif",
    characterMap: mathematicalSansSerifCharacterMap
  },
  mathematicalBoldItalicCharacter: {
    title: "Mathematical Bold Italic",
    characterMap: mathematicalBoldItalicCharacterMap
  },
  mathematicalSansSerifBoldCharacter: {
    title: "Mathematical Sans Serif Bold",
    characterMap: mathematicalSansSerifBoldCharacterMap
  },
  mathematicalSansSerifItalicCharacter: {
    title: "Mathematical Sans Serif Italic",
    characterMap: mathematicalSansSerifItalicCharacterMap
  },
  mathematicalSansSerifBoldItalicCharacter: {
    title: "Mathematical Sans Serif Bold Italic",
    characterMap: mathematicalSansSerifBoldItalicCharacterMap
  }
};

export default collectionMap;

export const collectionNames = Object.keys(collectionMap);
