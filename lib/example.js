"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("./index");
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./example/style/juliaMono"));
var _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
renderStyle(_index.computerModernStyle);
renderStyle(_juliaMono.default);
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcHV0ZXJNb2Rlcm5TdHlsZSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGp1bGlhTW9ub1N0eWxlIGZyb20gXCIuL2V4YW1wbGUvc3R5bGUvanVsaWFNb25vXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5yZW5kZXJTdHlsZShjb21wdXRlck1vZGVyblN0eWxlKTtcblxucmVuZGVyU3R5bGUoanVsaWFNb25vU3R5bGUpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwiY29tcHV0ZXJNb2Rlcm5TdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwibW91bnQiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEO3FCQUNlO2dFQUVUOzJEQUlWOzs7Ozs7QUFGakIsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBSXJCLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQkY7QUFFQUYsWUFBWUssMEJBQW1CO0FBRS9CTCxZQUFZTSxrQkFBYztBQUUxQkgsS0FBS0ksS0FBSyxlQUVSLG9CQUFDQyxhQUFJIn0=