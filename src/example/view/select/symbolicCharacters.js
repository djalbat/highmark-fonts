"use strict";

import { symbolicCharactersMaps } from "../../../index"; ///

import Select from "../select";

export default class SymbolicCharactersSelect extends Select {
  getCharactersName() {
    const value = this.getValue(),
          charactersName = value; ///

    return charactersName;
  }

  childElements() {
    const charactersMaps = symbolicCharactersMaps,
          charactersNames = Object.keys(charactersMaps),
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
    className: "symbolicC-characters",
  }
}
