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
var View;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcHV0ZXJNb2Rlcm5TdHlsZSB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFN5bWJvbGljVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvc3ltYm9saWNcIjtcbmltcG9ydCBqdWxpYU1vbm9TdHlsZSBmcm9tIFwiLi9leGFtcGxlL3N0eWxlL2p1bGlhTW9ub1wiO1xuaW1wb3J0IEFscGhhTnVtZXJpY1ZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2FscGhhTnVtZXJpY1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxubGV0IFZpZXc7XG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwic3ltYm9saWNcIiA6IFZpZXcgPSBTeW1ib2xpY1ZpZXc7IGJyZWFrO1xuICBjYXNlIFwiYWxwaGEtbnVtZXJpY1wiIDogVmlldyA9IEFscGhhTnVtZXJpY1ZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxucmVuZGVyU3R5bGUoY29tcHV0ZXJNb2Rlcm5TdHlsZSk7XG5cbnJlbmRlclN0eWxlKGp1bGlhTW9ub1N0eWxlKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJib2R5IiwiQm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIlZpZXciLCJTeW1ib2xpY1ZpZXciLCJBbHBoYU51bWVyaWNWaWV3IiwiY29tcHV0ZXJNb2Rlcm5TdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7b0JBRUQ7cUJBQ2U7K0RBRVg7Z0VBQ0U7bUVBQ0U7Ozs7OztBQUU3QixJQUFRQSxjQUE4QkMsc0JBQVMsQ0FBdkNELGFBQWFFLGVBQWlCRCxzQkFBUyxDQUExQkM7QUFFckIsSUFBTUMsT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLFVBQVVDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSyxHQUFHO0FBRXpELElBQUlDO0FBRUosT0FBUUw7SUFDTixLQUFLO1FBQWFLLE9BQU9DLGlCQUFZO1FBQUU7SUFDdkMsS0FBSztRQUFrQkQsT0FBT0UscUJBQWdCO1FBQUU7QUFDbEQ7QUFFQVY7QUFFQUYsWUFBWWEsMEJBQW1CO0FBRS9CYixZQUFZYyxrQkFBYztBQUUxQlgsS0FBS1ksS0FBSyxlQUVSLG9CQUFDTCJ9