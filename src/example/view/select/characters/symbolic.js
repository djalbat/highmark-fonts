"use strict";

import { symbolicCharacterMaps } from "../../../../index"; ///

import CharactersSelect from "../../select/characters";

export default class SymbolicCharactersSelect extends CharactersSelect {
  static characterMaps = symbolicCharacterMaps;

  static defaultProperties = {
    className: "symbolicC",
  }
}
