"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlyphSpan;
    }
});
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
var GlyphSpan = /*#__PURE__*/ function(Span) {
    _inherits(GlyphSpan, Span);
    function GlyphSpan() {
        _class_call_check(this, GlyphSpan);
        return _call_super(this, GlyphSpan, arguments);
    }
    _create_class(GlyphSpan, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint, string = String.fromCodePoint(codePoint), childElements = string; ///
                return childElements;
            }
        }
    ]);
    return GlyphSpan;
}(_span.default);
_define_property(GlyphSpan, "ignoredProperties", [
    "codePoint"
]);
_define_property(GlyphSpan, "defaultProperties", {
    className: "glyph"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwYW4gZnJvbSBcIi4uL3NwYW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2x5cGhTcGFuIGV4dGVuZHMgU3BhbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBjb2RlUG9pbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlUG9pbnQpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBzdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJjb2RlUG9pbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZ2x5cGhcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkdseXBoU3BhbiIsImNoaWxkRWxlbWVudHMiLCJjb2RlUG9pbnQiLCJwcm9wZXJ0aWVzIiwic3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsIlNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxZQUFjLElBQUksQ0FBQ0MsVUFBVSxDQUE3QkQsV0FDRkUsU0FBU0MsT0FBT0MsYUFBYSxDQUFDSixZQUM5QkQsZ0JBQWdCRyxRQUFRLEdBQUc7Z0JBRWpDLE9BQU9IO1lBQ1Q7OztXQVBtQkQ7RUFBa0JPLGFBQUk7QUFTekMsaUJBVG1CUCxXQVNaUSxxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQWJtQlIsV0FhWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==