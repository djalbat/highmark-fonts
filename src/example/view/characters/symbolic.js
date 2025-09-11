"use strict";

import { symbolicCharacterMaps } from "../../../index"; ///

import CharactersView from "../../view/characters";
import SymbolicCharactersSelect from "../select/characters/symbolic";

export default class SymbolicCharactersView extends CharactersView {
  static CharactersSelect = SymbolicCharactersSelect;

  static characterMaps = symbolicCharacterMaps;

  static showCharacter = true;
}
