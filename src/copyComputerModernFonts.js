"use strict";

import { arrayUtilities } from "necessary";

const { second } = arrayUtilities;

export default function copyComputerModernFonts(destinationDirectory) {
    const matches = __dirname.match(/^(.+)[\/\\]node_modules/), ///
          secondMatch = second(matches),
          containingDirectoryName = secondMatch; ///

    return containingDirectoryName;
}
