"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("./index");
var _symbolic = /*#__PURE__*/ _interop_require_default(require("./example/view/symbolic"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./example/style/juliaMono"));
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("./example/view/alphaNumeric"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "symbolic":
        View = _symbolic.default;
        break;
    case "alpha-numeric":
        View = _alphaNumeric.default;
        break;
}
renderStyles();
renderStyle(_index.computerModernStyle);
renderStyle(_juliaMono.default);
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcHV0ZXJNb2Rlcm5TdHlsZSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFN5bWJvbGljVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvc3ltYm9saWNcIjtcbmltcG9ydCBqdWxpYU1vbm9TdHlsZSBmcm9tIFwiLi9leGFtcGxlL3N0eWxlL2p1bGlhTW9ub1wiO1xuaW1wb3J0IEFscGhhTnVtZXJpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2FscGhhTnVtZXJpY1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJzeW1ib2xpY1wiIDogVmlldyA9IFN5bWJvbGljVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJhbHBoYS1udW1lcmljXCIgOiBWaWV3ID0gQWxwaGFOdW1lcmljVmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5yZW5kZXJTdHlsZShjb21wdXRlck1vZGVyblN0eWxlKTtcblxucmVuZGVyU3R5bGUoanVsaWFNb25vU3R5bGUpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiVmlldyIsIlN5bWJvbGljVmlldyIsIkFscGhhTnVtZXJpY1ZpZXciLCJjb21wdXRlck1vZGVyblN0eWxlIiwianVsaWFNb25vU3R5bGUiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvRUFFZTtvQkFFRDtxQkFDZTsrREFFWDtnRUFDRTttRUFDRTs7Ozs7O0FBRTdCLElBQVFBLGNBQThCQyxzQkFBUyxDQUF2Q0QsYUFBYUUsZUFBaUJELHNCQUFTLENBQTFCQztBQUVyQixJQUFNQyxPQUFPLElBQUlDLFVBQUksSUFDZkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFLLEdBQUc7QUFFekQsT0FBUUo7SUFDTixLQUFLO1FBQWFLLE9BQU9DLGlCQUFZO1FBQUU7SUFDdkMsS0FBSztRQUFrQkQsT0FBT0UscUJBQWdCO1FBQUU7QUFDbEQ7QUFFQVY7QUFFQUYsWUFBWWEsMEJBQW1CO0FBRS9CYixZQUFZYyxrQkFBYztBQUUxQlgsS0FBS1ksS0FBSyxlQUVSLG9CQUFDTCJ9