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
renderStyle(_index.stixStyle);
renderStyle(_juliaMono.default);
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgc3RpeFN0eWxlIH0gZnJvbSBcIi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQganVsaWFNb25vU3R5bGUgZnJvbSBcIi4vZXhhbXBsZS9zdHlsZS9qdWxpYU1vbm9cIjtcbmltcG9ydCBHbHlwaHNBc1NWR3NWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9nbHlwaHNBc1NWR3NcIjtcbmltcG9ydCBTeW1ib2xpY0NoYXJhY3RlcnNWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9jaGFyYWN0ZXJzL3N5bWJvbGljXCI7XG5pbXBvcnQgQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2NoYXJhY3RlcnMvYWxwaGFOdW1lcmljXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5sZXQgVmlldztcblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJnbHlwaHMtYXMtc3Znc1wiIDogVmlldyA9IEdseXBoc0FzU1ZHc1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwic3ltYm9saWMtY2hhcmFjdGVyc1wiIDogVmlldyA9IFN5bWJvbGljQ2hhcmFjdGVyc1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYWxwaGEtbnVtZXJpYy1jaGFyYWN0ZXJzXCIgOiBWaWV3ID0gQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1ZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxucmVuZGVyU3R5bGUoc3RpeFN0eWxlKTtcblxucmVuZGVyU3R5bGUoanVsaWFNb25vU3R5bGUpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiVmlldyIsIkdseXBoc0FzU1ZHc1ZpZXciLCJTeW1ib2xpY0NoYXJhY3RlcnNWaWV3IiwiQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1ZpZXciLCJzdGl4U3R5bGUiLCJqdWxpYU1vbm9TdHlsZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEO3FCQUNLO2dFQUVDO21FQUNFOytEQUNNO21FQUNJOzs7Ozs7QUFFdkMsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBRXJCLElBQU1DLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxVQUFVQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUssR0FBRztBQUV6RCxJQUFJQztBQUVKLE9BQVFMO0lBQ04sS0FBSztRQUFtQkssT0FBT0MscUJBQWdCO1FBQUU7SUFDakQsS0FBSztRQUF3QkQsT0FBT0UsaUJBQXNCO1FBQUU7SUFDNUQsS0FBSztRQUE2QkYsT0FBT0cscUJBQTBCO1FBQUU7QUFDdkU7QUFFQVg7QUFFQUYsWUFBWWMsZ0JBQVM7QUFFckJkLFlBQVllLGtCQUFjO0FBRTFCWixLQUFLYSxLQUFLLGVBRVIsb0JBQUNOIn0=