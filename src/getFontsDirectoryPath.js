"use strict";

import { pathUtilities, arrayUtilities } from "necessary";

const { second } = arrayUtilities,
      { concatenatePaths } = pathUtilities;

import { FONTS } from "./constants";

export default function getFontsDirectoryPath() {
  const matches = __dirname.match(/^(.+)[\/\\]lib$/), ///
        secondMatch = second(matches),
        containingDirectoryPath = secondMatch, ///
        fontsDirectoryPath = concatenatePaths(containingDirectoryPath, FONTS);

  return fontsDirectoryPath;
}
