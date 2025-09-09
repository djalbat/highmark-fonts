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
var _index = require("../../../index");
var _select = /*#__PURE__*/ _interop_require_default(require("../select"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var SymbolicCharactersSelect = /*#__PURE__*/ function(Select) {
    _inherits(SymbolicCharactersSelect, Select);
    function SymbolicCharactersSelect() {
        _class_call_check(this, SymbolicCharactersSelect);
        return _call_super(this, SymbolicCharactersSelect, arguments);
    }
    _create_class(SymbolicCharactersSelect, [
        {
            key: "getCharactersName",
            value: function getCharactersName() {
                var value = this.getValue(), charactersName = value; ///
                return charactersName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var charactersMaps = _index.symbolicCharactersMaps, charactersNames = Object.keys(charactersMaps), options = charactersNames.map(function(charactersName, index) {
                    var value = charactersName; ///
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value
                    }, charactersName);
                }), childElements = options; ///
                return childElements;
            }
        }
    ]);
    return SymbolicCharactersSelect;
}(_select.default);
_define_property(SymbolicCharactersSelect, "defaultProperties", {
    className: "symbolicC-characters"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L3N5bWJvbGljQ2hhcmFjdGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3ltYm9saWNDaGFyYWN0ZXJzTWFwcyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bWJvbGljQ2hhcmFjdGVyc1NlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGdldENoYXJhY3RlcnNOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNoYXJhY3RlcnNOYW1lID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGNoYXJhY3RlcnNOYW1lO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzTWFwcyA9IHN5bWJvbGljQ2hhcmFjdGVyc01hcHMsXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWVzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyc01hcHMpLFxuICAgICAgICAgIG9wdGlvbnMgPSBjaGFyYWN0ZXJzTmFtZXMubWFwKChjaGFyYWN0ZXJzTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2hhcmFjdGVyc05hbWU7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfT57Y2hhcmFjdGVyc05hbWV9PC9vcHRpb24+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gb3B0aW9uczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN5bWJvbGljQy1jaGFyYWN0ZXJzXCIsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QiLCJnZXRDaGFyYWN0ZXJzTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjaGFyYWN0ZXJzTmFtZSIsImNoaWxkRWxlbWVudHMiLCJjaGFyYWN0ZXJzTWFwcyIsInN5bWJvbGljQ2hhcmFjdGVyc01hcHMiLCJjaGFyYWN0ZXJzTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwib3B0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9uIiwiU2VsZWN0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUprQjs2REFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxpQkFBaUJGLE9BQU8sR0FBRztnQkFFakMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUJDLDZCQUFzQixFQUN2Q0Msa0JBQWtCQyxPQUFPQyxJQUFJLENBQUNKLGlCQUM5QkssVUFBVUgsZ0JBQWdCSSxHQUFHLENBQUMsU0FBQ1IsZ0JBQWdCUztvQkFDN0MsSUFBTVgsUUFBUUUsZ0JBQWdCLEdBQUc7b0JBRWpDLHFCQUVFLG9CQUFDVTt3QkFBT1osT0FBT0E7dUJBQVFFO2dCQUczQixJQUNBQyxnQkFBZ0JNLFNBQVUsR0FBRztnQkFFbkMsT0FBT047WUFDVDs7O1dBdkJtQkw7RUFBaUNlLGVBQU07QUF5QjFELGlCQXpCbUJmLDBCQXlCWmdCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=