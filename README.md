# Highmark Fonts

Computer Modern fonts for Highmark.

There are twenty fonts available in total, five families each provided in regular, bold, italic and bold italic variants:

- Computer Modern Serif
- Computer Modern Sans
- Computer Modern Bright
- Computer Modern Concrete
- Computer Modern Typewriter

As well as these fonts this package also contains, for want of anywhere else to put it, a map of commonly used Unicode characters, its keys and values being names and code points, respectively. It is envisaged that more characters will be added over time.

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
- [Highmark Fonts](https://github.com/djalbat/highmark-yapp) Highmark with Fonts listings.
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

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Copy the `font` directory to your own application. In order to make use of the fonts, the `@font-face` CSS at-rules must be added:

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

* The original Unicode Computer Modern fonts were created by [Andrey V. Panov](https://scholar.google.com/citations?user=JyNVNNEAAAAJ&hl=en).

* The Computer Modern CSS was adapted from Jonathan Häberle's [computer-modern-web-font](https://github.com/dreampulse/computer-modern-web-font) repository.

## Contact

* james.smith@djalbat.com
