"use strict";

export default function createMethods(scheduler, model, view) {
  function copyOrPasteUnicodeCharacter(unicodeCharacter) {
    console.log(unicodeCharacter);
  }

  return ({
    copyOrPasteUnicodeCharacter
  });
}
