"use strict";

import { symbolicCharacterMaps } from "../../index"; ///

import View from "../view";
import SymbolicCharactersSelect from "./select/symbolicCharacters";


export default class SymbolicView extends View {
  static CharactersSelect = SymbolicCharactersSelect;

  static characterMaps = symbolicCharacterMaps;

  static showCharacter = true;
}
