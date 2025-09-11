"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AlphaNumericCharactersSelect;
    }
});
var _index = require("../../../../index");
var _characters = /*#__PURE__*/ _interop_require_default(require("../../select/characters"));
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
var AlphaNumericCharactersSelect = /*#__PURE__*/ function(CharactersSelect) {
    _inherits(AlphaNumericCharactersSelect, CharactersSelect);
    function AlphaNumericCharactersSelect() {
        _class_call_check(this, AlphaNumericCharactersSelect);
        return _call_super(this, AlphaNumericCharactersSelect, arguments);
    }
    return AlphaNumericCharactersSelect;
}(_characters.default);
_define_property(AlphaNumericCharactersSelect, "characterMaps", _index.alphaNumericCharacterMaps);
_define_property(AlphaNumericCharactersSelect, "defaultProperties", {
    className: "alpha-numeric"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2NoYXJhY3RlcnMvYWxwaGFOdW1lcmljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQ2hhcmFjdGVyc1NlbGVjdCBmcm9tIFwiLi4vLi4vc2VsZWN0L2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1NlbGVjdCBleHRlbmRzIENoYXJhY3RlcnNTZWxlY3Qge1xuICBzdGF0aWMgY2hhcmFjdGVyTWFwcyA9IGFscGhhTnVtZXJpY0NoYXJhY3Rlck1hcHM7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJhbHBoYS1udW1lcmljXCIsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBbHBoYU51bWVyaWNDaGFyYWN0ZXJzU2VsZWN0IiwiQ2hhcmFjdGVyc1NlbGVjdCIsImNoYXJhY3Rlck1hcHMiLCJhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpxQjtpRUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBcUNDLG1CQUFnQjtBQUN4RSxpQkFEbUJELDhCQUNaRSxpQkFBZ0JDLGdDQUF5QjtBQUVoRCxpQkFIbUJILDhCQUdaSSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9