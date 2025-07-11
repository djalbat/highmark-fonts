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
        '\n\n  padding: 1rem;\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: normal;\n\n  .italic {\n    font-style: italic;\n  }\n\n  .bold {\n    font-weight: bold;\n  }\n\n  .sans {\n    font-family: "Computer Modern Sans";\n  }\n  \n  .serif {\n    font-family: "Computer Modern Serif";\n  }\n  \n  .bright {\n    font-family: "Computer Modern Bright";\n  }\n  \n  .concrete {\n    font-family: "Computer Modern Concrete";\n  }\n  \n  .typewriter {\n    font-family: "Computer Modern Typewriter";\n  }\n  \n'
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
                for(var propertyName in this.properties){
                    if (propertyName !== _constants.CLASS_NAME && propertyName !== _constants.CHILD_ELEMENTS) {
                        var className = propertyName; ///
                        this.addClass(className);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC9jb21wdXRlck1vZGVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEdseXBoU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9nbHlwaFwiO1xuXG5pbXBvcnQgeyBDTEFTU19OQU1FLCBDSElMRF9FTEVNRU5UUyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ29tcHV0ZXJNb2Rlcm5HbHlwaFNwYW4gZXh0ZW5kcyBHbHlwaFNwYW4ge1xuICBkaWRNb3VudCgpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoKHByb3BlcnR5TmFtZSAhPT0gQ0xBU1NfTkFNRSkgJiYgKHByb3BlcnR5TmFtZSAhPT0gQ0hJTERfRUxFTUVOVFMpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHByb3BlcnR5TmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRBdHRyaWJ1dGVzID0gW1xuICAgIFwiaXRhbGljXCIsXG4gICAgXCJib2xkXCIsXG4gICAgXCJzYW5zXCIsXG4gICAgXCJzZXJpZlwiLFxuICAgIFwiYnJpZ2h0XCIsXG4gICAgXCJjb25jcmV0ZVwiLFxuICAgIFwidHlwZXdyaXRlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb21wdXRlci1tb2Rlcm5cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb21wdXRlck1vZGVybkdseXBoU3BhbilgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgLml0YWxpYyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnNhbnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTYW5zXCI7XG4gIH1cbiAgXG4gIC5zZXJpZiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCI7XG4gIH1cbiAgXG4gIC5icmlnaHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBCcmlnaHRcIjtcbiAgfVxuICBcbiAgLmNvbmNyZXRlIHtcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gQ29uY3JldGVcIjtcbiAgfVxuICBcbiAgLnR5cGV3cml0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBUeXBld3JpdGVyXCI7XG4gIH1cbiAgXG5gOyJdLCJuYW1lcyI6WyJDb21wdXRlck1vZGVybkdseXBoU3BhbiIsImRpZE1vdW50IiwicHJvcGVydHlOYW1lIiwicHJvcGVydGllcyIsIkNMQVNTX05BTUUiLCJDSElMRF9FTEVNRU5UUyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJHbHlwaFNwYW4iLCJpZ25vcmVkQXR0cmlidXRlcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7b0VBcENzQjs0REFFQTt5QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFLLElBQUlDLGdCQUFnQixJQUFJLENBQUNDLFVBQVUsQ0FBRTtvQkFDeEMsSUFBSSxBQUFDRCxpQkFBaUJFLHFCQUFVLElBQU1GLGlCQUFpQkcseUJBQWMsRUFBRzt3QkFDdEUsSUFBTUMsWUFBWUosY0FBYyxHQUFHO3dCQUVuQyxJQUFJLENBQUNLLFFBQVEsQ0FBQ0Q7b0JBQ2hCO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztXQWJJUjtFQUFnQ1MsY0FBUztBQWU3QyxpQkFmSVQseUJBZUdVLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsaUJBekJJVix5QkF5QkdXLHFCQUFvQjtJQUN6QkwsV0FBVztBQUNiO0lBR0YsV0FBZU0sSUFBQUEsc0JBQVMsRUFBQ1oifQ==