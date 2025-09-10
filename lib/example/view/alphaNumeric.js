"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AlphaNumericView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _alphaNumericCharacters = /*#__PURE__*/ _interop_require_default(require("./select/alphaNumericCharacters"));
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
var AlphaNumericView = /*#__PURE__*/ function(View) {
    _inherits(AlphaNumericView, View);
    function AlphaNumericView() {
        _class_call_check(this, AlphaNumericView);
        return _call_super(this, AlphaNumericView, arguments);
    }
    return AlphaNumericView;
}(_view.default);
_define_property(AlphaNumericView, "CharactersSelect", _alphaNumericCharacters.default);
_define_property(AlphaNumericView, "characterMaps", _index.alphaNumericCharacterMaps);
_define_property(AlphaNumericView, "showCharacter", false);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYWxwaGFOdW1lcmljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IEFscGhhTnVtZXJpY0NoYXJhY3RlcnNTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L2FscGhhTnVtZXJpY0NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGFOdW1lcmljVmlldyBleHRlbmRzIFZpZXcge1xuICBzdGF0aWMgQ2hhcmFjdGVyc1NlbGVjdCA9IEFscGhhTnVtZXJpY0NoYXJhY3RlcnNTZWxlY3Q7XG5cbiAgc3RhdGljIGNoYXJhY3Rlck1hcHMgPSBhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzO1xuXG4gIHN0YXRpYyBzaG93Q2hhcmFjdGVyID0gZmFsc2U7XG59XG4iXSwibmFtZXMiOlsiQWxwaGFOdW1lcmljVmlldyIsIlZpZXciLCJDaGFyYWN0ZXJzU2VsZWN0IiwiQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1NlbGVjdCIsImNoYXJhY3Rlck1hcHMiLCJhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzIiwic2hvd0NoYXJhY3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTHFCOzJEQUV6Qjs2RUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUF5QkMsYUFBSTtBQUNoRCxpQkFEbUJELGtCQUNaRSxvQkFBbUJDLCtCQUE0QjtBQUV0RCxpQkFIbUJILGtCQUdaSSxpQkFBZ0JDLGdDQUF5QjtBQUVoRCxpQkFMbUJMLGtCQUtaTSxpQkFBZ0IifQ==