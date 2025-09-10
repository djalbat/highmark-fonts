"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SymbolicView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _symbolicCharacters = /*#__PURE__*/ _interop_require_default(require("./select/symbolicCharacters"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var SymbolicView = /*#__PURE__*/ function(View) {
    _inherits(SymbolicView, View);
    function SymbolicView() {
        _class_call_check(this, SymbolicView);
        return _call_super(this, SymbolicView, arguments);
    }
    return SymbolicView;
}(_view.default);
_define_property(SymbolicView, "CharactersSelect", _symbolicCharacters.default);
_define_property(SymbolicView, "characterMaps", _index.symbolicCharacterMaps);
_define_property(SymbolicView, "showCharacter", true);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3ltYm9saWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN5bWJvbGljQ2hhcmFjdGVyTWFwcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3N5bWJvbGljQ2hhcmFjdGVyc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bWJvbGljVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgQ2hhcmFjdGVyc1NlbGVjdCA9IFN5bWJvbGljQ2hhcmFjdGVyc1NlbGVjdDtcblxuICBzdGF0aWMgY2hhcmFjdGVyTWFwcyA9IHN5bWJvbGljQ2hhcmFjdGVyTWFwcztcblxuICBzdGF0aWMgc2hvd0NoYXJhY3RlciA9IHRydWU7XG59XG4iXSwibmFtZXMiOlsiU3ltYm9saWNWaWV3IiwiVmlldyIsIkNoYXJhY3RlcnNTZWxlY3QiLCJTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QiLCJjaGFyYWN0ZXJNYXBzIiwic3ltYm9saWNDaGFyYWN0ZXJNYXBzIiwic2hvd0NoYXJhY3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTmlCOzJEQUVyQjt5RUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0QixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFxQkMsYUFBSTtBQUM1QyxpQkFEbUJELGNBQ1pFLG9CQUFtQkMsMkJBQXdCO0FBRWxELGlCQUhtQkgsY0FHWkksaUJBQWdCQyw0QkFBcUI7QUFFNUMsaUJBTG1CTCxjQUtaTSxpQkFBZ0IifQ==