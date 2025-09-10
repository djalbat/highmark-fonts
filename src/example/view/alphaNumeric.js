"use strict";

import { alphaNumericCharacterMaps } from "../../index"; ///

import View from "../view";
import AlphaNumericCharactersSelect from "./select/alphaNumericCharacters";

export default class AlphaNumericView extends View {
  static CharactersSelect = AlphaNumericCharactersSelect;

  static characterMaps = alphaNumericCharacterMaps;

  static showCharacter = false;
}
