"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("./index");
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./example/style/juliaMono"));
var _glyphsAsSVGs = /*#__PURE__*/ _interop_require_default(require("./example/view/glyphsAsSVGs"));
var _symbolic = /*#__PURE__*/ _interop_require_default(require("./example/view/characters/symbolic"));
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("./example/view/characters/alphaNumeric"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
var View;
switch(example){
    case "glyphs-as-svgs":
        View = _glyphsAsSVGs.default;
        break;
    case "symbolic-characters":
        View = _symbolic.default;
        break;
    case "alpha-numeric-characters":
        View = _alphaNumeric.default;
        break;
}
renderStyles();
renderStyle(_index.computerModernStyle);
renderStyle(_juliaMono.default);
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcHV0ZXJNb2Rlcm5TdHlsZSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGp1bGlhTW9ub1N0eWxlIGZyb20gXCIuL2V4YW1wbGUvc3R5bGUvanVsaWFNb25vXCI7XG5pbXBvcnQgR2x5cGhzQXNTVkdzVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvZ2x5cGhzQXNTVkdzXCI7XG5pbXBvcnQgU3ltYm9saWNDaGFyYWN0ZXJzVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvY2hhcmFjdGVycy9zeW1ib2xpY1wiO1xuaW1wb3J0IEFscGhhTnVtZXJpY0NoYXJhY3RlcnNWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jaGFyYWN0ZXJzL2FscGhhTnVtZXJpY1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxubGV0IFZpZXc7XG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiZ2x5cGhzLWFzLXN2Z3NcIiA6IFZpZXcgPSBHbHlwaHNBc1NWR3NWaWV3OyBicmVhaztcbiAgY2FzZSBcInN5bWJvbGljLWNoYXJhY3RlcnNcIiA6IFZpZXcgPSBTeW1ib2xpY0NoYXJhY3RlcnNWaWV3OyBicmVhaztcbiAgY2FzZSBcImFscGhhLW51bWVyaWMtY2hhcmFjdGVyc1wiIDogVmlldyA9IEFscGhhTnVtZXJpY0NoYXJhY3RlcnNWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKGNvbXB1dGVyTW9kZXJuU3R5bGUpO1xuXG5yZW5kZXJTdHlsZShqdWxpYU1vbm9TdHlsZSk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwicmVuZGVyU3R5bGVzIiwiYm9keSIsIkJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJWaWV3IiwiR2x5cGhzQXNTVkdzVmlldyIsIlN5bWJvbGljQ2hhcmFjdGVyc1ZpZXciLCJBbHBoYU51bWVyaWNDaGFyYWN0ZXJzVmlldyIsImNvbXB1dGVyTW9kZXJuU3R5bGUiLCJqdWxpYU1vbm9TdHlsZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEO3FCQUNlO2dFQUVUO21FQUNFOytEQUNNO21FQUNJOzs7Ozs7QUFFdkMsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBRXJCLElBQU1DLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxVQUFVQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUssR0FBRztBQUV6RCxJQUFJQztBQUVKLE9BQVFMO0lBQ04sS0FBSztRQUFtQkssT0FBT0MscUJBQWdCO1FBQUU7SUFDakQsS0FBSztRQUF3QkQsT0FBT0UsaUJBQXNCO1FBQUU7SUFDNUQsS0FBSztRQUE2QkYsT0FBT0cscUJBQTBCO1FBQUU7QUFDdkU7QUFFQVg7QUFFQUYsWUFBWWMsMEJBQW1CO0FBRS9CZCxZQUFZZSxrQkFBYztBQUUxQlosS0FBS2EsS0FBSyxlQUVSLG9CQUFDTiJ9