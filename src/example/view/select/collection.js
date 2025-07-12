"use strict";

import withStyle from "easy-with-style";  ///

import { Select } from "easy";

const collectionMap = {
  shapeCharacter: "Shapes",
  angleCharacter: "Angles",
  arrowCharacter: "Arrows",
  harpoonCharacter: "Harpoons",
  equalityCharacter: "Equality",
  orderingCharacter: "Ordering",
  calculusCharacter: "Calculus",
  relationalCharacter: "Relational",
  arithmeticCharacter: "Arithmetic",
  headedArrowCharacter: "Headed Arrows",
  greekLetterCharacter: "Greek Letters",
  miscellaneousCharacter: "Miscellaneous",
  scriptLettersCharacter: "Script Letters",
  circleCircledCharacter: "Circles and Circled",
  tackTurnstileCharacter: "Tacks and Turnstiles",
  frakturLettersCharacter: "Fraktur Letters",
  classTheoreticCharacter: "Class Theoretic",
  logicalOperatorCharacter: "Logical Operators",
  doubleTripleArrowCharacter: "Double and Triple Arrows",
  parenthesisBracketCharacter: "Parentheses and brackets",
  doubleStruckLettersCharacter: "Double Struck Letters",
  superscriptSubscriptCharacter: "Superscripts and Subscripts"
}

const values = Object.keys(collectionMap),  ///
      htmls = Object.values(collectionMap); ///

class CollectionSelect extends Select {
  getName() {
    const value = this.getValue(),
          name = value; ///

    return name;
  }

  childElements() {
    const options = values.map((value, index) => {
            const html = htmls[index];

            return (

              <option value={value}>{html}</option>

            )
          }),
          childElements = options;  ///

    return childElements;
  }

  static defaultProperties = {
    className: "collections"
  }
}

export default withStyle(CollectionSelect)`

  width: 20rem;
  margin: 1rem;
  border: 1px solid black;
  padding: 0.25rem;
  font-size: 2rem;
  font-family: serif;
  
`;
