"use strict"

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class ComputerModernDiv extends Element {
  childElements() {
    return ([

      <p style={{
        fontFamily: "Computer Modern Serif",
        fontWeight: "normal",
        fontStyle: "normal"
      }}>
        Computer Modern Serif
      </p>,

      <p style={{
        fontFamily: "Computer Modern Serif",
        fontWeight: "normal",
        fontStyle: "italic"
      }}>
        Computer Modern Serif Italic
      </p>,

      <p style={{
        fontFamily: "Computer Modern Serif",
        fontWeight: "bold",
        fontStyle: "normal"
      }}>
        Computer Modern Serif Bold
      </p>,

      <p style={{
        fontFamily: "Computer Modern Serif",
        fontWeight: "bold",
        fontStyle: "italic"
      }}>
        Computer Modern Serif Bold Italic
      </p>,

      <br/>,

      <p style={{
        fontFamily: "Computer Modern Sans",
        fontWeight: "normal",
        fontStyle: "normal"
      }}>
        Computer Modern Sans
      </p>,

      <p style={{
        fontFamily: "Computer Modern Sans",
        fontWeight: "normal",
        fontStyle: "italic"
      }}>
        Computer Modern Sans Italic
      </p>,

      <p style={{
        fontFamily: "Computer Modern Sans",
        fontWeight: "bold",
        fontStyle: "normal"
      }}>
        Computer Modern Sans Bold
      </p>,

      <p style={{
        fontFamily: "Computer Modern Sans",
        fontWeight: "bold",
        fontStyle: "italic"
      }}>
        Computer Modern Sans Bold Italic
      </p>,

      <br/>,

      <p style={{
        fontFamily: "Computer Modern Typewriter",
        fontWeight: "normal",
        fontStyle: "normal"
      }}>
        Computer Modern Typewriter
      </p>,

      <p style={{
        fontFamily: "Computer Modern Typewriter",
        fontWeight: "normal",
        fontStyle: "italic"
      }}>
        Computer Modern Typewriter Italic
      </p>,

      <p style={{
        fontFamily: "Computer Modern Typewriter",
        fontWeight: "bold",
        fontStyle: "normal"
      }}>
        Computer Modern Typewriter Bold
      </p>,

      <p style={{
        fontFamily: "Computer Modern Typewriter",
        fontWeight: "bold",
        fontStyle: "italic"
      }}>
        Computer Modern Typewriter Bold Italic
      </p>,

      <br/>,

      <p style={{
        fontFamily: "Computer Modern Bright",
        fontWeight: "normal",
        fontStyle: "normal"
      }}>
        Computer Modern Bright
      </p>,

      <p style={{
        fontFamily: "Computer Modern Bright",
        fontWeight: "normal",
        fontStyle: "italic"
      }}>
        Computer Modern Bright Italic
      </p>,

      <p style={{
        fontFamily: "Computer Modern Bright",
        fontWeight: "bold",
        fontStyle: "normal"
      }}>
        Computer Modern Bright Bold
      </p>,

      <p style={{
        fontFamily: "Computer Modern Bright",
        fontWeight: "bold",
        fontStyle: "italic"
      }}>
        Computer Modern Bright Bold Italic
      </p>,

      <br/>,

      <p style={{
        fontFamily: "Computer Modern Concrete",
        fontWeight: "normal",
        fontStyle: "normal"
      }}>
        Computer Modern Concrete
      </p>,

      <p style={{
        fontFamily: "Computer Modern Concrete",
        fontWeight: "normal",
        fontStyle: "italic"
      }}>
        Computer Modern Concrete Italic
      </p>,

      <p style={{
        fontFamily: "Computer Modern Concrete",
        fontWeight: "bold",
        fontStyle: "normal"
      }}>
        Computer Modern Concrete Bold
      </p>,

      <p style={{
        fontFamily: "Computer Modern Concrete",
        fontWeight: "bold",
        fontStyle: "italic"
      }}>
        Computer Modern Concrete Bold Italic
      </p>

    ]);
  }

  static tagName = "div"

  static defaultProperties = {
    className: "computer-modern"
  }
}

export default withStyle(ComputerModernDiv)`

  font-size: 4rem;
  margin-bottom: 2rem;
  
`;
