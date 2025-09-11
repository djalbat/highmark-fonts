"use strict";

import Select from "../select";

import { camelCaseToPlainEnglish } from "../../utilities/case";

export default class CharactersSelect extends Select {
  getCharactersName() {
    const value = this.getValue(),
          charactersName = value; ///

    return charactersName;
  }

  childElements() {
    const { characterMaps } = this.constructor,
          charactersNames = Object.keys(characterMaps),
          options = charactersNames.map((charactersName, index) => {
            const camelCaseString = charactersName,
                  plainEnglishString = camelCaseToPlainEnglish(camelCaseString),
                  value = charactersName, ///
                  name = plainEnglishString;  ///

            return (

              <option value={value}>{name}</option>

            )
          }),
          childElements = options;  ///

    return childElements;
  }

  static defaultProperties = {
    className: "characters",
  }
}
