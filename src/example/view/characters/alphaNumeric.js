"use strict";

import { alphaNumericCharacterMaps } from "../../../index"; ///

import CharactersView from "../../view/characters";
import AlphaNumericCharactersSelect from "../select/characters/alphaNumeric";

export default class AlphaNumericCharactersView extends CharactersView {
  static CharactersSelect = AlphaNumericCharactersSelect;

  static characterMaps = alphaNumericCharacterMaps;

  static showCharacter = false;
}
