"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AlphaNumericCharactersView;
    }
});
var _index = require("../../../index");
var _characters = /*#__PURE__*/ _interop_require_default(require("../../view/characters"));
var _alphaNumeric = /*#__PURE__*/ _interop_require_default(require("../select/characters/alphaNumeric"));
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
var AlphaNumericCharactersView = /*#__PURE__*/ function(CharactersView) {
    _inherits(AlphaNumericCharactersView, CharactersView);
    function AlphaNumericCharactersView() {
        _class_call_check(this, AlphaNumericCharactersView);
        return _call_super(this, AlphaNumericCharactersView, arguments);
    }
    return AlphaNumericCharactersView;
}(_characters.default);
_define_property(AlphaNumericCharactersView, "CharactersSelect", _alphaNumeric.default);
_define_property(AlphaNumericCharactersView, "characterMaps", _index.alphaNumericCharacterMaps);
_define_property(AlphaNumericCharactersView, "showCharacter", false);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY2hhcmFjdGVycy9hbHBoYU51bWVyaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFscGhhTnVtZXJpY0NoYXJhY3Rlck1hcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBDaGFyYWN0ZXJzVmlldyBmcm9tIFwiLi4vLi4vdmlldy9jaGFyYWN0ZXJzXCI7XG5pbXBvcnQgQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1NlbGVjdCBmcm9tIFwiLi4vc2VsZWN0L2NoYXJhY3RlcnMvYWxwaGFOdW1lcmljXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFscGhhTnVtZXJpY0NoYXJhY3RlcnNWaWV3IGV4dGVuZHMgQ2hhcmFjdGVyc1ZpZXcge1xuICBzdGF0aWMgQ2hhcmFjdGVyc1NlbGVjdCA9IEFscGhhTnVtZXJpY0NoYXJhY3RlcnNTZWxlY3Q7XG5cbiAgc3RhdGljIGNoYXJhY3Rlck1hcHMgPSBhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzO1xuXG4gIHN0YXRpYyBzaG93Q2hhcmFjdGVyID0gZmFsc2U7XG59XG4iXSwibmFtZXMiOlsiQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1ZpZXciLCJDaGFyYWN0ZXJzVmlldyIsIkNoYXJhY3RlcnNTZWxlY3QiLCJBbHBoYU51bWVyaWNDaGFyYWN0ZXJzU2VsZWN0IiwiY2hhcmFjdGVyTWFwcyIsImFscGhhTnVtZXJpY0NoYXJhY3Rlck1hcHMiLCJzaG93Q2hhcmFjdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztxQkFMcUI7aUVBRWY7bUVBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFtQ0MsbUJBQWM7QUFDcEUsaUJBRG1CRCw0QkFDWkUsb0JBQW1CQyxxQkFBNEI7QUFFdEQsaUJBSG1CSCw0QkFHWkksaUJBQWdCQyxnQ0FBeUI7QUFFaEQsaUJBTG1CTCw0QkFLWk0saUJBQWdCIn0=