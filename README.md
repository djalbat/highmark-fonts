# Highmark Fonts

Computer Modern Unicode fonts for Highmark.

There are five font families available:

- Computer Modern Serif
- Computer Modern Sans
- Computer Modern Bright
- Computer Modern Concrete
- Computer Modern Typewriter

Each family is supplied in regular, bold, italic and bold italic variants, making twenty faces in all.
Note that there are several other families available in the CMU collection of fonts, however these do not come in all four variants and are therefore not included here.

There are also the necessary styles to make use of these fonts in web pages.

As well as these fonts this package also contains maps of commonly used symbolic Unicode characters. 
For example:

```
export const shapes = {
  "TRIANGLE": 0x25B3,
  "SQUARE": 0x25A1,
  "PENTAGON": 0x2B20,
  "HEXAGON": 0x2B21,
  "UPPER LEFT TRIANGLE": 0x25F8,
  "UPPER RIGHT TRIANGLE": 0x25F9,
  "LOWER LEFT TRIANGLE": 0x25FA,
  "LOWER RIGHT TRIANGLE": 0x25FF,
  "TRIANGLE WITH DOT ABOVE": 0x29CA,
  "TRIANGLE WITH UNDERBAR": 0x29CB,
  "DOWN-POINTING TRIANGLE WITH LEFT HALF BLACK": 0x29E8,
  "DOWN-POINTING TRIANGLE WITH RIGHT HALF BLACK": 0x29E9
};
```

Note that the keys and values are the Unicode character names and code points, respectively.

There are also maps for some of the mathematical character blocks.
For example:

```
export const DoubleStruck = {
  "A": 0x1D538,
  "B": 0x1D539,
  "C": 0x02102,
  "D": 0x1D53B,
  "E": 0x1D53C,
  "F": 0x1D53D,
  "G": 0x1D53E,
  "H": 0x0210D,
  "I": 0x1D540,
  "J": 0x1D541,
  "K": 0x1D542,
  "L": 0x1D543,
  "M": 0x1D544,
  "N": 0x02115,
  "O": 0x1D546,
  "P": 0x02119,
  "Q": 0x0211A,
  "R": 0x0211D,
  "S": 0x1D54A,
  "T": 0x1D54B,
  "U": 0x1D54C,
  "V": 0x1D54D,
  "W": 0x1D54E,
  "X": 0x1D54F,
  "Y": 0x1D550,
  "Z": 0x02124
};
```

Note that in these maps the values are again the code points but the keys are standard Latin characters, for easy mapping.
The complete list is:

- Script
- Fraktur
- Monospace 
- Double-struck
 
- Serif Bold
- Serif Italic
- Serif Bold italic
 
- Sans-serif
- Sans-serif bold
- Sans-serif italic
- Sans-serif bold italic

Note that these blocks do not pertain to font faces. 
They are distinct blocks of Unicode *characters*, they are not collections of glyphs.
These blocks are important in mathematics and other forms or reasoning because they communicate *meaning*.
A double struck capital C typically represents the complex numbers, for example, whilst a cursive capital C might represent a category.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#buidling)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

Highmark is a document preparation system inspired by [Markdown](https://en.wikipedia.org/wiki/Markdown) and [TeX](https://en.wikipedia.org/wiki/TeX).
There are several packages in the distribution.

- [Highmark-CLI](https://github.com/djalbat/highmark-cli) Highmark's CLI tool.
- [Highmark Yapp](https://github.com/djalbat/highmark-yapp) Highmark with Yapp listings.
- [Highmark Fonts](https://github.com/djalbat/highmark-fonts) Computer Modern fonts for Highmark.
- [Highmark Client](https://github.com/djalbat/highmark-client) Highmark's bundled client for viewing HTML.
- [Highmark Markdown](https://github.com/djalbat/highmark-markdown) Highmark's Markdown and Markdown Style languages.

Only the CLI tool is needed by end users.
All of the other packages are likely only of interest to prospective developers.

## Installation

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/highmark-fonts.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. 
You are encouraged to try the example whilst reading what follows. 
You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. 
If you are importing it into your own application, however, you should use the standard package import.

## Usage

Copy the `font` directory to your own application. In order to make use of the fonts, the `@font-face` CSS at-rules must be added:

```
import withStyle from "easy-with-style";

import { computerModernStyle } from "highmark-fonts";

const { renderStyle } = withStyle;

renderStyle(computerModernStyle());
```

You can pass a `host` argument to the `computerModernStyle()` function, if necessary. 
This will be prepended to the URLs of the font files. If you need further clarification then take a look at the source.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* The original Unicode Computer Modern fonts were created by [Andrey V. Panov](https://scholar.google.com/citations?user=JyNVNNEAAAAJ&hl=en).

* The Computer Modern CSS was adapted from Jonathan Häberle's [computer-modern-web-font](https://github.com/dreampulse/computer-modern-web-font) repository.

## Contact

* james.smith@djalbat.com
