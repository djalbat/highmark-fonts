"use strict";

import { Element } from "easy";

import GlyphsTable from "./view/table/glyphs";
import SecondaryHeading from "./view/heading/secondary"

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

export default class View extends Element {
  childElements() {
    const parameters = parametersFromNothing(),
          { name, title } = parameters,
          characterMap = characterMapFromName(name);

    return ([

      <SecondaryHeading>
        {title}
      </SecondaryHeading>,
      <GlyphsTable characterMap={characterMap} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

function parametersFromNothing() {
  const { search } = location,
        start = 1,
        queryString = search.substring(start),
        nameValueStrings = queryString.split("&"),
        parameters = nameValueStrings.reduce((parameters, nameValueString) => {
          const [ name, encodedValue ] = nameValueString.split("="),
                value = encodedValue.replace(/\+/g, " ");

          parameters[name] = value;

          return parameters;
        }, {});

  return parameters;
}

function characterMapFromName(name) {
  let characterMap;

  switch (name) {
    case "shapeCharacter": characterMap = shapeCharacterMap; break;
    case "angleCharacter": characterMap = angleCharacterMap; break;
    case "arrowCharacter": characterMap = arrowCharacterMap; break;
    case "harpoonCharacter": characterMap = harpoonCharacterMap; break;
    case "equalityCharacter": characterMap = equalityCharacterMap; break;
    case "orderingCharacter": characterMap = orderingCharacterMap; break;
    case "calculusCharacter": characterMap = calculusCharacterMap; break;
    case "relationalCharacter": characterMap = relationalCharacterMap; break;
    case "arithmeticCharacter": characterMap = arithmeticCharacterMap; break;
    case "headedArrowCharacter": characterMap = headedArrowCharacterMap; break;
    case "greekLetterCharacter": characterMap = greekLetterCharacterMap; break;
    case "miscellaneousCharacter": characterMap = miscellaneousCharacterMap; break;
    case "scriptLettersCharacter": characterMap = scriptLettersCharacterMap; break;
    case "circleCircledCharacter": characterMap = circleCircledCharacterMap; break;
    case "tackTurnstileCharacter": characterMap = tackTurnstileCharacterMap; break;
    case "frakturLettersCharacter": characterMap = frakturLettersCharacterMap; break;
    case "classTheoreticCharacter": characterMap = classTheoreticCharacterMap; break;
    case "logicalOperatorCharacter": characterMap = logicalOperatorCharacterMap; break;
    case "doubleTripleArrowCharacter": characterMap = doubleTripleArrowCharacterMap; break;
    case "parenthesisBracketCharacter": characterMap = parenthesisBracketCharacterMap; break;
    case "doubleStruckLettersCharacter": characterMap = doubleStruckLettersCharacterMap; break;
    case "superscriptSubscriptCharacter": characterMap = superscriptSubscriptCharacterMap; break;
  }

  return characterMap;
}
