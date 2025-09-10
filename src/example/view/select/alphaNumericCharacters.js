"use strict";

import { alphaNumericCharacterMaps } from "../../../index"; ///

import Select from "../select";

export default class AlphaNumericCharactersSelect extends Select {
  getCharactersName() {
    const value = this.getValue(),
          charactersName = value; ///

    return charactersName;
  }

  childElements() {
    const characterMaps = alphaNumericCharacterMaps,
          charactersNames = Object.keys(characterMaps),
          options = charactersNames.map((charactersName, index) => {
            const value = charactersName; ///

            return (

              <option value={value}>{charactersName}</option>

            )
          }),
          childElements = options;  ///

    return childElements;
  }

  static defaultProperties = {
    className: "alpha-numeric-characters",
  }
}
