"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../span/glyph"));
var _constants = require("../../../constants");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: normal;\n\n  .italic {\n    font-style: italic;\n  }\n\n  .bold {\n    font-weight: bold;\n  }\n\n  .sans {\n    font-family: "Computer Modern Sans";\n  }\n  \n  .serif {\n    font-family: "Computer Modern Serif";\n  }\n  \n  .bright {\n    font-family: "Computer Modern Bright";\n  }\n  \n  .concrete {\n    font-family: "Computer Modern Concrete";\n  }\n  \n  .typewriter {\n    font-family: "Computer Modern Typewriter";\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ComputerModernGlyphSpan = /*#__PURE__*/ function(GlyphSpan) {
    _inherits(ComputerModernGlyphSpan, GlyphSpan);
    function ComputerModernGlyphSpan() {
        _class_call_check(this, ComputerModernGlyphSpan);
        return _call_super(this, ComputerModernGlyphSpan, arguments);
    }
    _create_class(ComputerModernGlyphSpan, [
        {
            key: "didMount",
            value: function didMount() {
                var classNames = _object_spread({}, this.properties);
                delete classNames[_constants.CLASS_NAME];
                delete classNames[_constants.CHILD_ELEMENTS];
                for(var className in classNames){
                    this.addClass(className);
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return ComputerModernGlyphSpan;
}(_glyph.default);
_define_property(ComputerModernGlyphSpan, "ignoredAttributes", [
    "italic",
    "bold",
    "sans",
    "serif",
    "bright",
    "concrete",
    "typewriter"
]);
_define_property(ComputerModernGlyphSpan, "defaultProperties", {
    className: "computer-modern"
});
var _default = (0, _easywithstyle.default)(ComputerModernGlyphSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC9jb21wdXRlck1vZGVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEdseXBoU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9nbHlwaFwiO1xuXG5pbXBvcnQgeyBDTEFTU19OQU1FLCBDSElMRF9FTEVNRU5UUyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ29tcHV0ZXJNb2Rlcm5HbHlwaFNwYW4gZXh0ZW5kcyBHbHlwaFNwYW4ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0geyAgLy8vXG4gICAgICAuLi50aGlzLnByb3BlcnRpZXNcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNsYXNzTmFtZXNbQ0xBU1NfTkFNRV07XG5cbiAgICBkZWxldGUgY2xhc3NOYW1lc1tDSElMRF9FTEVNRU5UU107XG5cbiAgICBmb3IgKHZhciBjbGFzc05hbWUgaW4gY2xhc3NOYW1lcykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRBdHRyaWJ1dGVzID0gW1xuICAgIFwiaXRhbGljXCIsXG4gICAgXCJib2xkXCIsXG4gICAgXCJzYW5zXCIsXG4gICAgXCJzZXJpZlwiLFxuICAgIFwiYnJpZ2h0XCIsXG4gICAgXCJjb25jcmV0ZVwiLFxuICAgIFwidHlwZXdyaXRlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb21wdXRlci1tb2Rlcm5cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb21wdXRlck1vZGVybkdseXBoU3BhbilgXG5cbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgLml0YWxpYyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnNhbnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5zZXJpZiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCI7XG4gIH1cbiAgXG4gIC5icmlnaHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBCcmlnaHRcIjtcbiAgfVxuICBcbiAgLmNvbmNyZXRlIHtcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gQ29uY3JldGVcIjtcbiAgfVxuICBcbiAgLnR5cGV3cml0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBUeXBld3JpdGVyXCI7XG4gIH1cbiAgXG5gOyJdLCJuYW1lcyI6WyJDb21wdXRlck1vZGVybkdseXBoU3BhbiIsImRpZE1vdW50IiwiY2xhc3NOYW1lcyIsInByb3BlcnRpZXMiLCJDTEFTU19OQU1FIiwiQ0hJTERfRUxFTUVOVFMiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwiR2x5cGhTcGFuIiwiaWdub3JlZEF0dHJpYnV0ZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMENBOzs7ZUFBQTs7O29FQXhDc0I7NERBRUE7eUJBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxtQkFDZCxJQUFJLENBQUNDLFVBQVU7Z0JBR3BCLE9BQU9ELFVBQVUsQ0FBQ0UscUJBQVUsQ0FBQztnQkFFN0IsT0FBT0YsVUFBVSxDQUFDRyx5QkFBYyxDQUFDO2dCQUVqQyxJQUFLLElBQUlDLGFBQWFKLFdBQVk7b0JBQ2hDLElBQUksQ0FBQ0ssUUFBUSxDQUFDRDtnQkFDaEI7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1dBakJJUjtFQUFnQ1MsY0FBUztBQW1CN0MsaUJBbkJJVCx5QkFtQkdVLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsaUJBN0JJVix5QkE2QkdXLHFCQUFvQjtJQUN6QkwsV0FBVztBQUNiO0lBR0YsV0FBZU0sSUFBQUEsc0JBQVMsRUFBQ1oifQ==