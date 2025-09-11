"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SymbolicCharactersSelect;
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
var SymbolicCharactersSelect = /*#__PURE__*/ function(CharactersSelect) {
    _inherits(SymbolicCharactersSelect, CharactersSelect);
    function SymbolicCharactersSelect() {
        _class_call_check(this, SymbolicCharactersSelect);
        return _call_super(this, SymbolicCharactersSelect, arguments);
    }
    return SymbolicCharactersSelect;
}(_characters.default);
_define_property(SymbolicCharactersSelect, "characterMaps", _index.symbolicCharacterMaps);
_define_property(SymbolicCharactersSelect, "defaultProperties", {
    className: "symbolicC"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2NoYXJhY3RlcnMvc3ltYm9saWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN5bWJvbGljQ2hhcmFjdGVyTWFwcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IENoYXJhY3RlcnNTZWxlY3QgZnJvbSBcIi4uLy4uL3NlbGVjdC9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bWJvbGljQ2hhcmFjdGVyc1NlbGVjdCBleHRlbmRzIENoYXJhY3RlcnNTZWxlY3Qge1xuICBzdGF0aWMgY2hhcmFjdGVyTWFwcyA9IHN5bWJvbGljQ2hhcmFjdGVyTWFwcztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN5bWJvbGljQ1wiLFxuICB9XG59XG4iXSwibmFtZXMiOlsiU3ltYm9saWNDaGFyYWN0ZXJzU2VsZWN0IiwiQ2hhcmFjdGVyc1NlbGVjdCIsImNoYXJhY3Rlck1hcHMiLCJzeW1ib2xpY0NoYXJhY3Rlck1hcHMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSmlCO2lFQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFpQ0MsbUJBQWdCO0FBQ3BFLGlCQURtQkQsMEJBQ1pFLGlCQUFnQkMsNEJBQXFCO0FBRTVDLGlCQUhtQkgsMEJBR1pJLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=