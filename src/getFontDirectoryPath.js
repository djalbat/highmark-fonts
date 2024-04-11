"use strict";

import { pathUtilities, packageUtilities } from "necessary";

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

import { FONT } from "./constants";

export default function getFontDirectoryPath() {
  const packagePath = getPackagePath(),
        fontDirectoryPath = concatenatePaths(packagePath, FONT);

  return fontDirectoryPath;
}
