"use strict";

export function camelCaseToPlainEnglish(camelCaseString) {
  const camelCaseStringWithSpaces = camelCaseString.replace(/([A-Z])/g, ' $1'),
        lowercaseStringWithSpaces = camelCaseStringWithSpaces.toLowerCase(),
        firstCharacter = lowercaseStringWithSpaces.charAt(0),
        remainingCharacters = lowercaseStringWithSpaces.slice(1),
        upperCaseFirstCharacter = firstCharacter.toUpperCase(),
        plainEnglishString = upperCaseFirstCharacter + remainingCharacters;

  return plainEnglishString;
}
