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
        "\n\n  width: 12rem;\n  font-size: 2rem;\n  padding-right: 1rem;\n  font-family: monospace;\n  justify-content: flex-end;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CodePointSpan = /*#__PURE__*/ function(Span) {
    _inherits(CodePointSpan, Span);
    function CodePointSpan() {
        _class_call_check(this, CodePointSpan);
        return _call_super(this, CodePointSpan, arguments);
    }
    _create_class(CodePointSpan, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint, hexCodePoint = codePoint.toString(16), childElements = "0x".concat(hexCodePoint);
                return childElements;
            }
        }
    ]);
    return CodePointSpan;
}(_span.default);
_define_property(CodePointSpan, "ignoredProperties", [
    "codePoint"
]);
_define_property(CodePointSpan, "defaultProperties", {
    className: "code-point"
});
var _default = (0, _easywithstyle.default)(CodePointSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9jb2RlUG9pbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGFuIGZyb20gXCIuLi9zcGFuXCI7XG5cbmNsYXNzIENvZGVQb2ludFNwYW4gZXh0ZW5kcyBTcGFuIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNvZGVQb2ludCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGhleENvZGVQb2ludCA9IGNvZGVQb2ludC50b1N0cmluZygxNiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGAweCR7aGV4Q29kZVBvaW50fWA7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNvZGVQb2ludFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb2RlLXBvaW50XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENvZGVQb2ludFNwYW4pYFxuXG4gIHdpZHRoOiAxMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ29kZVBvaW50U3BhbiIsImNoaWxkRWxlbWVudHMiLCJjb2RlUG9pbnQiLCJwcm9wZXJ0aWVzIiwiaGV4Q29kZVBvaW50IiwidG9TdHJpbmciLCJTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0JBOzs7ZUFBQTs7O29FQXRCc0I7MkRBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFlBQWMsSUFBSSxDQUFDQyxVQUFVLENBQTdCRCxXQUNGRSxlQUFlRixVQUFVRyxRQUFRLENBQUMsS0FDbENKLGdCQUFnQixBQUFDLEtBQWlCLE9BQWJHO2dCQUUzQixPQUFPSDtZQUNUOzs7V0FQSUQ7RUFBc0JNLGFBQUk7QUFTOUIsaUJBVElOLGVBU0dPLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBYklQLGVBYUdRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YifQ==