"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlyphsTableRow;
    }
});
var _easy = require("easy");
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/juliaMono"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../tableCell/unicodeCharacter"));
var _computerModern = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/computerModern"));
var _characterMap = /*#__PURE__*/ _interop_require_default(require("../../../characterMap"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var GlyphsTableRow = /*#__PURE__*/ function(Element) {
    _inherits(GlyphsTableRow, Element);
    function GlyphsTableRow() {
        _class_call_check(this, GlyphsTableRow);
        return _call_super(this, GlyphsTableRow, arguments);
    }
    _create_class(GlyphsTableRow, [
        {
            key: "childElements",
            value: function childElements() {
                var unicodeCharacter = this.properties.unicodeCharacter, codePoint = _characterMap.default[unicodeCharacter];
                return [
                    /*#__PURE__*/ React.createElement(_unicodeCharacter.default, {
                        unicodeCharacter: unicodeCharacter
                    }),
                    /*#__PURE__*/ React.createElement(_juliaMono.default, {
                        codePoint: codePoint
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        bold: true,
                        italic: true
                    })
                ];
            }
        }
    ]);
    return GlyphsTableRow;
}(_wrap_native_super(_easy.Element));
_define_property(GlyphsTableRow, "tagName", "tr");
_define_property(GlyphsTableRow, "ignoredProperties", [
    "unicodeCharacter"
]);
_define_property(GlyphsTableRow, "defaultProperties", {
    className: "glyphs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVSb3cvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvanVsaWFNb25vXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL3VuaWNvZGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvY29tcHV0ZXJNb2Rlcm5cIjtcblxuaW1wb3J0IHVuaWNvZGVDaGFyYWN0ZXJNYXAgZnJvbSBcIi4uLy4uLy4uL2NoYXJhY3Rlck1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHlwaHNUYWJsZVJvdyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgdW5pY29kZUNoYXJhY3RlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvZGVQb2ludCA9IHVuaWNvZGVDaGFyYWN0ZXJNYXBbdW5pY29kZUNoYXJhY3Rlcl07XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFVuaWNvZGVDaGFyYWN0ZXJUYWJsZUNlbGwgdW5pY29kZUNoYXJhY3Rlcj17dW5pY29kZUNoYXJhY3Rlcn0gLz4sXG5cbiAgICAgIDxKdWxpYU1vbm9HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzYW5zIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNhbnMgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzYW5zIGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzYW5zIGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2VyaWYgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2VyaWYgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzZXJpZiBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2VyaWYgYm9sZCBpdGFsaWMgLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBicmlnaHQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBicmlnaHQgYm9sZCBpdGFsaWMgLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBjb25jcmV0ZSAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBjb25jcmV0ZSBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGNvbmNyZXRlIGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBjb25jcmV0ZSBib2xkIGl0YWxpYyAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHR5cGV3cml0ZXIgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gdHlwZXdyaXRlciBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHR5cGV3cml0ZXIgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHR5cGV3cml0ZXIgYm9sZCBpdGFsaWMgLz4sXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidHJcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ1bmljb2RlQ2hhcmFjdGVyXCJcbiAgXVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZ2x5cGhzXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHbHlwaHNUYWJsZVJvdyIsImNoaWxkRWxlbWVudHMiLCJ1bmljb2RlQ2hhcmFjdGVyIiwicHJvcGVydGllcyIsImNvZGVQb2ludCIsInVuaWNvZGVDaGFyYWN0ZXJNYXAiLCJVbmljb2RlQ2hhcmFjdGVyVGFibGVDZWxsIiwiSnVsaWFNb25vR2x5cGhUYWJsZUNlbGwiLCJDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIiwic2FucyIsImJvbGQiLCJpdGFsaWMiLCJzZXJpZiIsImJyaWdodCIsImNvbmNyZXRlIiwidHlwZXdyaXRlciIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7b0JBUkc7Z0VBRVk7dUVBQ0U7cUVBQ0c7bUVBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxtQkFBcUIsSUFBSSxDQUFDQyxVQUFVLENBQXBDRCxrQkFDRkUsWUFBWUMscUJBQW1CLENBQUNILGlCQUFpQjtnQkFFdkQsT0FBUTtrQ0FFTixvQkFBQ0kseUJBQXlCO3dCQUFDSixrQkFBa0JBOztrQ0FFN0Msb0JBQUNLLGtCQUF1Qjt3QkFBQ0gsV0FBV0E7O2tDQUVwQyxvQkFBQ0ksdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV0ssTUFBQUE7O2tDQUNwRCxvQkFBQ0QsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV0ssTUFBQUE7d0JBQUtDLE1BQUFBOztrQ0FDekQsb0JBQUNGLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdLLE1BQUFBO3dCQUFLRSxRQUFBQTs7a0NBQ3pELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXSyxNQUFBQTt3QkFBS0MsTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFOUQsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdRLE9BQUFBOztrQ0FDcEQsb0JBQUNKLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdRLE9BQUFBO3dCQUFNRixNQUFBQTs7a0NBQzFELG9CQUFDRix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUSxPQUFBQTt3QkFBTUQsUUFBQUE7O2tDQUMxRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1EsT0FBQUE7d0JBQU1GLE1BQUFBO3dCQUFLQyxRQUFBQTs7a0NBRS9ELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUyxRQUFBQTs7a0NBQ3BELG9CQUFDTCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUyxRQUFBQTt3QkFBT0gsTUFBQUE7O2tDQUMzRCxvQkFBQ0YsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1MsUUFBQUE7d0JBQU9GLFFBQUFBOztrQ0FDM0Qsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdTLFFBQUFBO3dCQUFPSCxNQUFBQTt3QkFBS0MsUUFBQUE7O2tDQUVoRSxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1UsVUFBQUE7O2tDQUNwRCxvQkFBQ04sdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1UsVUFBQUE7d0JBQVNKLE1BQUFBOztrQ0FDN0Qsb0JBQUNGLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdVLFVBQUFBO3dCQUFTSCxRQUFBQTs7a0NBQzdELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVSxVQUFBQTt3QkFBU0osTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFbEUsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdXLFlBQUFBOztrQ0FDcEQsb0JBQUNQLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdXLFlBQUFBO3dCQUFXTCxNQUFBQTs7a0NBQy9ELG9CQUFDRix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVyxZQUFBQTt3QkFBV0osUUFBQUE7O2tDQUMvRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1csWUFBQUE7d0JBQVdMLE1BQUFBO3dCQUFLQyxRQUFBQTs7aUJBQ3JFO1lBQ0g7OztXQXBDbUJYO3FCQUF1QmdCLGFBQU87QUFzQ2pELGlCQXRDbUJoQixnQkFzQ1ppQixXQUFVO0FBRWpCLGlCQXhDbUJqQixnQkF3Q1prQixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQTVDbUJsQixnQkE0Q1ptQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9