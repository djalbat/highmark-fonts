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
var _easy = require("easy");
var _glyphs = /*#__PURE__*/ _interop_require_default(require("../tableRow/glyphs"));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin: 2rem;\n  border-collapse: collapse;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var GlyphsTable = /*#__PURE__*/ function(Element) {
    _inherits(GlyphsTable, Element);
    function GlyphsTable() {
        _class_call_check(this, GlyphsTable);
        return _call_super(this, GlyphsTable, arguments);
    }
    _create_class(GlyphsTable, [
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, characterMap = _this_properties.characterMap, showCharacter = _this_properties.showCharacter, characters = Object.keys(characterMap), glyphsTableRows = characters.map(function(character) {
                    return /*#__PURE__*/ React.createElement(_glyphs.default, {
                        showCharacter: showCharacter,
                        characterMap: characterMap,
                        character: character
                    });
                }), childElements = glyphsTableRows; ///
                return childElements;
            }
        }
    ]);
    return GlyphsTable;
}(_wrap_native_super(_easy.Element));
_define_property(GlyphsTable, "tagName", "table");
_define_property(GlyphsTable, "ignoredProperties", [
    "characterMap",
    "showCharacter"
]);
_define_property(GlyphsTable, "defaultProperties", {
    className: "glyphs"
});
var _default = (0, _easywithstyle.default)(GlyphsTable)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGUvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEdseXBoc1RhYmxlUm93IGZyb20gXCIuLi90YWJsZVJvdy9nbHlwaHNcIjtcblxuY2xhc3MgR2x5cGhzVGFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNoYXJhY3Rlck1hcCwgc2hvd0NoYXJhY3RlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBPYmplY3Qua2V5cyhjaGFyYWN0ZXJNYXApLFxuICAgICAgICAgIGdseXBoc1RhYmxlUm93cyA9IGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPEdseXBoc1RhYmxlUm93IHNob3dDaGFyYWN0ZXI9e3Nob3dDaGFyYWN0ZXJ9IGNoYXJhY3Rlck1hcD17Y2hhcmFjdGVyTWFwfSBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ2x5cGhzVGFibGVSb3dzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0YWJsZVwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNoYXJhY3Rlck1hcFwiLFxuICAgIFwic2hvd0NoYXJhY3RlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaHNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoR2x5cGhzVGFibGUpYFxuXG4gIG1hcmdpbjogMnJlbTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgXG5gO1xuXG4iXSwibmFtZXMiOlsiR2x5cGhzVGFibGUiLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsImNoYXJhY3Rlck1hcCIsInNob3dDaGFyYWN0ZXIiLCJjaGFyYWN0ZXJzIiwiT2JqZWN0Iiwia2V5cyIsImdseXBoc1RhYmxlUm93cyIsIm1hcCIsImNoYXJhY3RlciIsIkdseXBoc1RhYmxlUm93IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7b0VBbENzQjtvQkFFRTs2REFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUF3QyxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBL0NDLGVBQWdDLGlCQUFoQ0EsY0FBY0MsZ0JBQWtCLGlCQUFsQkEsZUFDaEJDLGFBQWFDLE9BQU9DLElBQUksQ0FBQ0osZUFDekJLLGtCQUFrQkgsV0FBV0ksR0FBRyxDQUFDLFNBQUNDO29CQUNoQyxxQkFFRSxvQkFBQ0MsZUFBYzt3QkFBQ1AsZUFBZUE7d0JBQWVELGNBQWNBO3dCQUFjTyxXQUFXQTs7Z0JBR3pGLElBQ0FULGdCQUFnQk8saUJBQWtCLEdBQUc7Z0JBRTNDLE9BQU9QO1lBQ1Q7OztXQWRJRDtxQkFBb0JZLGFBQU87QUFnQi9CLGlCQWhCSVosYUFnQkdhLFdBQVU7QUFFakIsaUJBbEJJYixhQWtCR2MscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQXZCSWQsYUF1QkdlLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pCIn0=