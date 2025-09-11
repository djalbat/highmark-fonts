"use strict";

import { alphaNumericCharacterMaps } from "../../../../index"; ///

import CharactersSelect from "../../select/characters";

export default class AlphaNumericCharactersSelect extends CharactersSelect {
  static characterMaps = alphaNumericCharacterMaps;

  static defaultProperties = {
    className: "alpha-numeric",
  }
}
