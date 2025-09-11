"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SymbolicCharactersView;
    }
});
var _index = require("../../../index");
var _characters = /*#__PURE__*/ _interop_require_default(require("../../view/characters"));
var _symbolic = /*#__PURE__*/ _interop_require_default(require("../select/characters/symbolic"));
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
var SymbolicCharactersView = /*#__PURE__*/ function(CharactersView) {
    _inherits(SymbolicCharactersView, CharactersView);
    function SymbolicCharactersView() {
        _class_call_check(this, SymbolicCharactersView);
        return _call_super(this, SymbolicCharactersView, arguments);
    }
    return SymbolicCharactersView;
}(_characters.default);
_define_property(SymbolicCharactersView, "CharactersSelect", _symbolic.default);
_define_property(SymbolicCharactersView, "characterMaps", _index.symbolicCharacterMaps);
_define_property(SymbolicCharactersView, "showCharacter", true);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY2hhcmFjdGVycy9zeW1ib2xpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3ltYm9saWNDaGFyYWN0ZXJNYXBzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgQ2hhcmFjdGVyc1ZpZXcgZnJvbSBcIi4uLy4uL3ZpZXcvY2hhcmFjdGVyc1wiO1xuaW1wb3J0IFN5bWJvbGljQ2hhcmFjdGVyc1NlbGVjdCBmcm9tIFwiLi4vc2VsZWN0L2NoYXJhY3RlcnMvc3ltYm9saWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ltYm9saWNDaGFyYWN0ZXJzVmlldyBleHRlbmRzIENoYXJhY3RlcnNWaWV3IHtcbiAgc3RhdGljIENoYXJhY3RlcnNTZWxlY3QgPSBTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3Q7XG5cbiAgc3RhdGljIGNoYXJhY3Rlck1hcHMgPSBzeW1ib2xpY0NoYXJhY3Rlck1hcHM7XG5cbiAgc3RhdGljIHNob3dDaGFyYWN0ZXIgPSB0cnVlO1xufVxuIl0sIm5hbWVzIjpbIlN5bWJvbGljQ2hhcmFjdGVyc1ZpZXciLCJDaGFyYWN0ZXJzVmlldyIsIkNoYXJhY3RlcnNTZWxlY3QiLCJTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QiLCJjaGFyYWN0ZXJNYXBzIiwic3ltYm9saWNDaGFyYWN0ZXJNYXBzIiwic2hvd0NoYXJhY3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTGlCO2lFQUVYOytEQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7V0FBQUE7RUFBK0JDLG1CQUFjO0FBQ2hFLGlCQURtQkQsd0JBQ1pFLG9CQUFtQkMsaUJBQXdCO0FBRWxELGlCQUhtQkgsd0JBR1pJLGlCQUFnQkMsNEJBQXFCO0FBRTVDLGlCQUxtQkwsd0JBS1pNLGlCQUFnQiJ9