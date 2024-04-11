"use strict";

import { pathUtilities, arrayUtilities } from "necessary";

const { second } = arrayUtilities,
      { concatenatePaths } = pathUtilities;

import { FONT } from "./constants";

export default function getFontDirectoryPath() {
  const matches = __dirname.match(/^(.+)[\/\\]lib$/), ///
        secondMatch = second(matches),
        packageDirectoryPath = secondMatch, ///
        fontDirectoryPath = concatenatePaths(packageDirectoryPath, FONT);

  return fontDirectoryPath;
}
