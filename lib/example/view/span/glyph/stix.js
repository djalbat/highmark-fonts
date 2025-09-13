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
        '\n\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: normal;\n  font-family: "STIXTwoText STIXTwoMath";\n\n  .italic {\n    font-style: italic;\n  }\n\n  .bold {\n    font-weight: bold;\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var STIXGlyphSpan = /*#__PURE__*/ function(GlyphSpan) {
    _inherits(STIXGlyphSpan, GlyphSpan);
    function STIXGlyphSpan() {
        _class_call_check(this, STIXGlyphSpan);
        return _call_super(this, STIXGlyphSpan, arguments);
    }
    _create_class(STIXGlyphSpan, [
        {
            key: "didMount",
            value: function didMount() {
                var classNames = _object_spread({}, this.properties);
                delete classNames[_constants.CODE_POINT];
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
    return STIXGlyphSpan;
}(_glyph.default);
_define_property(STIXGlyphSpan, "ignoredProperties", [
    "codePoint"
]);
_define_property(STIXGlyphSpan, "defaultProperties", {
    className: "stix"
});
var _default = (0, _easywithstyle.default)(STIXGlyphSpan)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC9zdGl4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgR2x5cGhTcGFuIGZyb20gXCIuLi8uLi9zcGFuL2dseXBoXCI7XG5cbmltcG9ydCB7IENPREVfUE9JTlQsIENMQVNTX05BTUUsIENISUxEX0VMRU1FTlRTIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBTVElYR2x5cGhTcGFuIGV4dGVuZHMgR2x5cGhTcGFuIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHsgIC8vL1xuICAgICAgLi4udGhpcy5wcm9wZXJ0aWVzXG4gICAgfTtcblxuICAgIGRlbGV0ZSBjbGFzc05hbWVzW0NPREVfUE9JTlRdO1xuXG4gICAgZGVsZXRlIGNsYXNzTmFtZXNbQ0xBU1NfTkFNRV07XG5cbiAgICBkZWxldGUgY2xhc3NOYW1lc1tDSElMRF9FTEVNRU5UU107XG5cbiAgICBmb3IgKHZhciBjbGFzc05hbWUgaW4gY2xhc3NOYW1lcykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY29kZVBvaW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN0aXhcIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTVElYR2x5cGhTcGFuKWBcblxuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiU1RJWFR3b1RleHQgU1RJWFR3b01hdGhcIjtcblxuICAuaXRhbGljIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAuYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG5gOyJdLCJuYW1lcyI6WyJTVElYR2x5cGhTcGFuIiwiZGlkTW91bnQiLCJjbGFzc05hbWVzIiwicHJvcGVydGllcyIsIkNPREVfUE9JTlQiLCJDTEFTU19OQU1FIiwiQ0hJTERfRUxFTUVOVFMiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwiR2x5cGhTcGFuIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0NBOzs7ZUFBQTs7O29FQXBDc0I7NERBRUE7eUJBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxtQkFDZCxJQUFJLENBQUNDLFVBQVU7Z0JBR3BCLE9BQU9ELFVBQVUsQ0FBQ0UscUJBQVUsQ0FBQztnQkFFN0IsT0FBT0YsVUFBVSxDQUFDRyxxQkFBVSxDQUFDO2dCQUU3QixPQUFPSCxVQUFVLENBQUNJLHlCQUFjLENBQUM7Z0JBRWpDLElBQUssSUFBSUMsYUFBYUwsV0FBWTtvQkFDaEMsSUFBSSxDQUFDTSxRQUFRLENBQUNEO2dCQUNoQjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7V0FuQklUO0VBQXNCVSxjQUFTO0FBcUJuQyxpQkFyQklWLGVBcUJHVyxxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQXpCSVgsZUF5QkdZLHFCQUFvQjtJQUN6QkwsV0FBVztBQUNiO0lBR0YsV0FBZU0sSUFBQUEsc0JBQVMsRUFBQ2IifQ==