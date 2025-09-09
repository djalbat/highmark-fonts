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
                var _this_properties = this.properties, charactersMap = _this_properties.charactersMap, unicodeCharacter = _this_properties.unicodeCharacter, codePoint = charactersMap[unicodeCharacter];
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
    "charactersMap",
    "unicodeCharacter"
]);
_define_property(GlyphsTableRow, "defaultProperties", {
    className: "glyphs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVSb3cvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvanVsaWFNb25vXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL3VuaWNvZGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvY29tcHV0ZXJNb2Rlcm5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2x5cGhzVGFibGVSb3cgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNoYXJhY3RlcnNNYXAsIHVuaWNvZGVDaGFyYWN0ZXIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjb2RlUG9pbnQgPSBjaGFyYWN0ZXJzTWFwW3VuaWNvZGVDaGFyYWN0ZXJdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxVbmljb2RlQ2hhcmFjdGVyVGFibGVDZWxsIHVuaWNvZGVDaGFyYWN0ZXI9e3VuaWNvZGVDaGFyYWN0ZXJ9IC8+LFxuXG4gICAgICA8SnVsaWFNb25vR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzYW5zIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyBib2xkIGl0YWxpYyAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2VyaWYgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBjb25jcmV0ZSBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgYm9sZCBpdGFsaWMgLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHR5cGV3cml0ZXIgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIGJvbGQgaXRhbGljIC8+LFxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInRyXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY2hhcmFjdGVyc01hcFwiLFxuICAgIFwidW5pY29kZUNoYXJhY3RlclwiXG4gIF1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImdseXBoc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiR2x5cGhzVGFibGVSb3ciLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNoYXJhY3RlcnNNYXAiLCJ1bmljb2RlQ2hhcmFjdGVyIiwiY29kZVBvaW50IiwiVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCIsIkp1bGlhTW9ub0dseXBoVGFibGVDZWxsIiwiQ29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCIsInNhbnMiLCJib2xkIiwiaXRhbGljIiwic2VyaWYiLCJicmlnaHQiLCJjb25jcmV0ZSIsInR5cGV3cml0ZXIiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O29CQU5HO2dFQUVZO3VFQUNFO3FFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQTRDLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUFuREMsZ0JBQW9DLGlCQUFwQ0EsZUFBZUMsbUJBQXFCLGlCQUFyQkEsa0JBQ2pCQyxZQUFZRixhQUFhLENBQUNDLGlCQUFpQjtnQkFFakQsT0FBUTtrQ0FFTixvQkFBQ0UseUJBQXlCO3dCQUFDRixrQkFBa0JBOztrQ0FFN0Msb0JBQUNHLGtCQUF1Qjt3QkFBQ0YsV0FBV0E7O2tDQUVwQyxvQkFBQ0csdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV0ksTUFBQUE7O2tDQUNwRCxvQkFBQ0QsdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV0ksTUFBQUE7d0JBQUtDLE1BQUFBOztrQ0FDekQsb0JBQUNGLHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdJLE1BQUFBO3dCQUFLRSxRQUFBQTs7a0NBQ3pELG9CQUFDSCx1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXSSxNQUFBQTt3QkFBS0MsTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFOUQsb0JBQUNILHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdPLE9BQUFBOztrQ0FDcEQsb0JBQUNKLHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdPLE9BQUFBO3dCQUFNRixNQUFBQTs7a0NBQzFELG9CQUFDRix1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXTyxPQUFBQTt3QkFBTUQsUUFBQUE7O2tDQUMxRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV08sT0FBQUE7d0JBQU1GLE1BQUFBO3dCQUFLQyxRQUFBQTs7a0NBRS9ELG9CQUFDSCx1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXUSxRQUFBQTs7a0NBQ3BELG9CQUFDTCx1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXUSxRQUFBQTt3QkFBT0gsTUFBQUE7O2tDQUMzRCxvQkFBQ0YsdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV1EsUUFBQUE7d0JBQU9GLFFBQUFBOztrQ0FDM0Qsb0JBQUNILHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdRLFFBQUFBO3dCQUFPSCxNQUFBQTt3QkFBS0MsUUFBQUE7O2tDQUVoRSxvQkFBQ0gsdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV1MsVUFBQUE7O2tDQUNwRCxvQkFBQ04sdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV1MsVUFBQUE7d0JBQVNKLE1BQUFBOztrQ0FDN0Qsb0JBQUNGLHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdTLFVBQUFBO3dCQUFTSCxRQUFBQTs7a0NBQzdELG9CQUFDSCx1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXUyxVQUFBQTt3QkFBU0osTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFbEUsb0JBQUNILHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdVLFlBQUFBOztrQ0FDcEQsb0JBQUNQLHVCQUE0Qjt3QkFBQ0gsV0FBV0E7d0JBQVdVLFlBQUFBO3dCQUFXTCxNQUFBQTs7a0NBQy9ELG9CQUFDRix1QkFBNEI7d0JBQUNILFdBQVdBO3dCQUFXVSxZQUFBQTt3QkFBV0osUUFBQUE7O2tDQUMvRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV1UsWUFBQUE7d0JBQVdMLE1BQUFBO3dCQUFLQyxRQUFBQTs7aUJBQ3JFO1lBQ0g7OztXQXBDbUJYO3FCQUF1QmdCLGFBQU87QUFzQ2pELGlCQXRDbUJoQixnQkFzQ1ppQixXQUFVO0FBRWpCLGlCQXhDbUJqQixnQkF3Q1prQixxQkFBb0I7SUFDekI7SUFDQTtDQUNEO0FBRUQsaUJBN0NtQmxCLGdCQTZDWm1CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=