# Highmark Fonts

Highmark's fonts.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#sage)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This package contains several [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) fonts in Woff2 format. The original TTF fonts are available from [SourceForge](https://sourceforge.net/projects/cm-unicode/files/cm-unicode/0.7.0/cm-unicode-0.7.0-ttf.tar.xz/download) of all places. Copies of the fonts that are actually utilised here can also be found in the `/ttf` directory. 

They can be unpacked as follows:

```
tar xzvf cm_unicode-0.7.0-pfb.tar.gz
```

To convert them all to Woff2 format, use the `woff2_compress` utility:

```
for filename in *; do woff2_compress "${filename}"; done
```

Bear in mind that not all of the original thirty one fonts are used. Currently this package supports twenty. See the example for details.

## Installation

With [npm](https://www.npmjs.com/):

    npm install highmark-fonts

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/highmark-fonts.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Copy the `css/woff2` directory to your own application. In order to make use of the fonts, the `@font-face` CSS at-rules must be added:

```
import withStyle from "easy-with-style";

import { computerModernStyle } from "highmark-fonts";

const { renderStyle } = withStyle;

renderStyle(computerModernStyle());
```

You can pass a `host` argument to the `computerModernStyle()` function, if necessary. This will be prepended to the URLs of the font files. If you need further clarification then take a look at the source.  

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* The Computer Modern CSS was adapted from Jonathan Häberle's [computer-modern-web-font](https://github.com/dreampulse/computer-modern-web-font) repository. 
 
* The original Unicode Computer Modern fonts were created by [Andrey V. Panov](https://scholar.google.com/citations?user=JyNVNNEAAAAJ&hl=en).

## Contact

* james.smith@djalbat.com
