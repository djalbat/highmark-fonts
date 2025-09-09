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
        "\n\n  border-collapse: collapse;\n  \n"
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
                var charactersMap = this.properties.charactersMap, unicodeCharacters = Object.keys(charactersMap), glyphsTableRows = unicodeCharacters.map(function(unicodeCharacter) {
                    return /*#__PURE__*/ React.createElement(_glyphs.default, {
                        charactersMap: charactersMap,
                        unicodeCharacter: unicodeCharacter
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
    "charactersMap"
]);
_define_property(GlyphsTable, "defaultProperties", {
    className: "glyphs"
});
var _default = (0, _easywithstyle.default)(GlyphsTable)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGUvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEdseXBoc1RhYmxlUm93IGZyb20gXCIuLi90YWJsZVJvdy9nbHlwaHNcIjtcblxuY2xhc3MgR2x5cGhzVGFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNoYXJhY3RlcnNNYXAgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICB1bmljb2RlQ2hhcmFjdGVycyA9IE9iamVjdC5rZXlzKGNoYXJhY3RlcnNNYXApLFxuICAgICAgICAgIGdseXBoc1RhYmxlUm93cyA9IHVuaWNvZGVDaGFyYWN0ZXJzLm1hcCgodW5pY29kZUNoYXJhY3RlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8R2x5cGhzVGFibGVSb3cgY2hhcmFjdGVyc01hcD17Y2hhcmFjdGVyc01hcH0gdW5pY29kZUNoYXJhY3Rlcj17dW5pY29kZUNoYXJhY3Rlcn0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ2x5cGhzVGFibGVSb3dzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0YWJsZVwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNoYXJhY3RlcnNNYXBcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZ2x5cGhzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEdseXBoc1RhYmxlKWBcblxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBcbmA7XG5cbiJdLCJuYW1lcyI6WyJHbHlwaHNUYWJsZSIsImNoaWxkRWxlbWVudHMiLCJjaGFyYWN0ZXJzTWFwIiwicHJvcGVydGllcyIsInVuaWNvZGVDaGFyYWN0ZXJzIiwiT2JqZWN0Iiwia2V5cyIsImdseXBoc1RhYmxlUm93cyIsIm1hcCIsInVuaWNvZGVDaGFyYWN0ZXIiLCJHbHlwaHNUYWJsZVJvdyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUNBOzs7ZUFBQTs7O29FQWpDc0I7b0JBRUU7NkRBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxnQkFBa0IsSUFBSSxDQUFDQyxVQUFVLENBQWpDRCxlQUNGRSxvQkFBb0JDLE9BQU9DLElBQUksQ0FBQ0osZ0JBQ2hDSyxrQkFBa0JILGtCQUFrQkksR0FBRyxDQUFDLFNBQUNDO29CQUN2QyxxQkFFRSxvQkFBQ0MsZUFBYzt3QkFBQ1IsZUFBZUE7d0JBQWVPLGtCQUFrQkE7O2dCQUdwRSxJQUNBUixnQkFBZ0JNLGlCQUFrQixHQUFHO2dCQUUzQyxPQUFPTjtZQUNUOzs7V0FkSUQ7cUJBQW9CVyxhQUFPO0FBZ0IvQixpQkFoQklYLGFBZ0JHWSxXQUFVO0FBRWpCLGlCQWxCSVosYUFrQkdhLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBdEJJYixhQXNCR2MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEIifQ==