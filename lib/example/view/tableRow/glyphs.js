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
var _codePoint = /*#__PURE__*/ _interop_require_default(require("../tableCell/codePoint"));
var _character = /*#__PURE__*/ _interop_require_default(require("../tableCell/character"));
var _stix = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/stix"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/juliaMono"));
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
                var _this_properties = this.properties, showCharacter = _this_properties.showCharacter, characterMap = _this_properties.characterMap, character = _this_properties.character, codePoint = characterMap[character], childElements = [
                    /*#__PURE__*/ React.createElement(_codePoint.default, {
                        codePoint: codePoint
                    }),
                    /*#__PURE__*/ React.createElement(_juliaMono.default, {
                        codePoint: codePoint
                    }),
                    /*#__PURE__*/ React.createElement(_stix.default, {
                        codePoint: codePoint
                    })
                ];
                if (showCharacter) {
                    childElements.unshift(/*#__PURE__*/ React.createElement(_character.default, {
                        character: character
                    }));
                }
                return childElements;
            }
        }
    ]);
    return GlyphsTableRow;
}(_wrap_native_super(_easy.Element));
_define_property(GlyphsTableRow, "tagName", "tr");
_define_property(GlyphsTableRow, "ignoredProperties", [
    "character",
    "characterMap",
    "showCharacter"
]);
_define_property(GlyphsTableRow, "defaultProperties", {
    className: "glyphs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVSb3cvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IENvZGVQb2ludFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL2NvZGVQb2ludFwiO1xuaW1wb3J0IENoYXJhY3RlclRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL2NoYXJhY3RlclwiO1xuaW1wb3J0IFNUSVhHbHlwaFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL2dseXBoL3N0aXhcIjtcbmltcG9ydCBKdWxpYU1vbm9HbHlwaFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL2dseXBoL2p1bGlhTW9ub1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHlwaHNUYWJsZVJvdyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgc2hvd0NoYXJhY3RlciwgY2hhcmFjdGVyTWFwLCBjaGFyYWN0ZXIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjb2RlUG9pbnQgPSBjaGFyYWN0ZXJNYXBbY2hhcmFjdGVyXSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgPENvZGVQb2ludFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gLz4sXG4gICAgICAgICAgICA8SnVsaWFNb25vR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IC8+LFxuICAgICAgICAgICAgPFNUSVhHbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gLz5cbiAgICAgICAgICBdO1xuXG4gICAgaWYgKHNob3dDaGFyYWN0ZXIpIHtcbiAgICAgIGNoaWxkRWxlbWVudHMudW5zaGlmdChcblxuICAgICAgICA8Q2hhcmFjdGVyVGFibGVDZWxsIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInRyXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY2hhcmFjdGVyXCIsXG4gICAgXCJjaGFyYWN0ZXJNYXBcIixcbiAgICBcInNob3dDaGFyYWN0ZXJcIlxuICBdXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaHNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkdseXBoc1RhYmxlUm93IiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJzaG93Q2hhcmFjdGVyIiwiY2hhcmFjdGVyTWFwIiwiY2hhcmFjdGVyIiwiY29kZVBvaW50IiwiQ29kZVBvaW50VGFibGVDZWxsIiwiSnVsaWFNb25vR2x5cGhUYWJsZUNlbGwiLCJTVElYR2x5cGhUYWJsZUNlbGwiLCJ1bnNoaWZ0IiwiQ2hhcmFjdGVyVGFibGVDZWxsIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztvQkFQRztnRUFFTztnRUFDQTsyREFDQTtnRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFtRCxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBMURDLGdCQUEyQyxpQkFBM0NBLGVBQWVDLGVBQTRCLGlCQUE1QkEsY0FBY0MsWUFBYyxpQkFBZEEsV0FDL0JDLFlBQVlGLFlBQVksQ0FBQ0MsVUFBVSxFQUNuQ0osZ0JBQWdCO2tDQUNkLG9CQUFDTSxrQkFBa0I7d0JBQUNELFdBQVdBOztrQ0FDL0Isb0JBQUNFLGtCQUF1Qjt3QkFBQ0YsV0FBV0E7O2tDQUNwQyxvQkFBQ0csYUFBa0I7d0JBQUNILFdBQVdBOztpQkFDaEM7Z0JBRVAsSUFBSUgsZUFBZTtvQkFDakJGLGNBQWNTLE9BQU8sZUFFbkIsb0JBQUNDLGtCQUFrQjt3QkFBQ04sV0FBV0E7O2dCQUduQztnQkFFQSxPQUFPSjtZQUNUOzs7V0FuQm1CRDtxQkFBdUJZLGFBQU87QUFxQmpELGlCQXJCbUJaLGdCQXFCWmEsV0FBVTtBQUVqQixpQkF2Qm1CYixnQkF1QlpjLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7Q0FDRDtBQUVELGlCQTdCbUJkLGdCQTZCWmUscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==