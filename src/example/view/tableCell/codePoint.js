"use strict";

import TableCell from "../tableCell";
import CodePointSpan from "../span/codePoint";

export default class CodePointTableCell extends TableCell {
  childElements() {
    const { codePoint } = this.properties;

    return (

      <CodePointSpan codePoint={codePoint} />

    );
  }

  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "code-point"
  };
}
