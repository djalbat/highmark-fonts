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
var _span = /*#__PURE__*/ _interop_require_default(require("../span"));
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
        "\n\n  width: 64rem;\n  display: inline-block;\n  padding: 1rem;\n  overflow: hidden;\n  font-size: 2rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var UnicodeCharacterSpan = /*#__PURE__*/ function(Span) {
    _inherits(UnicodeCharacterSpan, Span);
    function UnicodeCharacterSpan() {
        _class_call_check(this, UnicodeCharacterSpan);
        return _call_super(this, UnicodeCharacterSpan, arguments);
    }
    _create_class(UnicodeCharacterSpan, [
        {
            key: "childElements",
            value: function childElements() {
                var unicodeCharacter = this.properties.unicodeCharacter, childElements = unicodeCharacter; ///
                return childElements;
            }
        }
    ]);
    return UnicodeCharacterSpan;
}(_span.default);
_define_property(UnicodeCharacterSpan, "ignoredProperties", [
    "unicodeCharacter"
]);
_define_property(UnicodeCharacterSpan, "defaultProperties", {
    className: "unicode-character"
});
var _default = (0, _easywithstyle.default)(UnicodeCharacterSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi91bmljb2RlQ2hhcmFjdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU3BhbiBmcm9tIFwiLi4vc3BhblwiO1xuXG5jbGFzcyBVbmljb2RlQ2hhcmFjdGVyU3BhbiBleHRlbmRzIFNwYW4ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgdW5pY29kZUNoYXJhY3RlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB1bmljb2RlQ2hhcmFjdGVyOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwidW5pY29kZUNoYXJhY3RlclwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ1bmljb2RlLWNoYXJhY3RlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShVbmljb2RlQ2hhcmFjdGVyU3BhbilgXG5cbiAgd2lkdGg6IDY0cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImNoaWxkRWxlbWVudHMiLCJ1bmljb2RlQ2hhcmFjdGVyIiwicHJvcGVydGllcyIsIlNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkE7OztlQUFBOzs7b0VBckJzQjsyREFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsbUJBQXFCLElBQUksQ0FBQ0MsVUFBVSxDQUFwQ0Qsa0JBQ0ZELGdCQUFnQkMsa0JBQWtCLEdBQUc7Z0JBRTNDLE9BQU9EO1lBQ1Q7OztXQU5JRDtFQUE2QkksYUFBSTtBQVFyQyxpQkFSSUosc0JBUUdLLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBWklMLHNCQVlHTSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNSIn0=