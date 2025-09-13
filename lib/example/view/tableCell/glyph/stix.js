"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StixGlyphTableCell;
    }
});
var _stix = /*#__PURE__*/ _interop_require_default(require("../../span/glyph/stix"));
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../tableCell/glyph"));
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
var StixGlyphTableCell = /*#__PURE__*/ function(GlyphTableCell) {
    _inherits(StixGlyphTableCell, GlyphTableCell);
    function StixGlyphTableCell() {
        _class_call_check(this, StixGlyphTableCell);
        return _call_super(this, StixGlyphTableCell, arguments);
    }
    _create_class(StixGlyphTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var properties = _object_spread({}, this.properties);
                delete properties[_constants.CLASS_NAME];
                delete properties[_constants.CHILD_ELEMENTS];
                return /*#__PURE__*/ React.createElement(_stix.default, properties);
            }
        }
    ]);
    return StixGlyphTableCell;
}(_glyph.default);
_define_property(StixGlyphTableCell, "ignoredProperties", [
    "bold",
    "italic"
]);
_define_property(StixGlyphTableCell, "defaultProperties", {
    className: "stix"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2dseXBoL3N0aXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGl4R2x5cGhTcGFuIGZyb20gXCIuLi8uLi9zcGFuL2dseXBoL3N0aXhcIjtcbmltcG9ydCBHbHlwaFRhYmxlQ2VsbCBmcm9tIFwiLi4vLi4vdGFibGVDZWxsL2dseXBoXCI7XG5cbmltcG9ydCB7IENMQVNTX05BTUUsIENISUxEX0VMRU1FTlRTIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGl4R2x5cGhUYWJsZUNlbGwgZXh0ZW5kcyBHbHlwaFRhYmxlQ2VsbCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcGVydGllc1xuICAgIH07XG5cbiAgICBkZWxldGUgcHJvcGVydGllc1tDTEFTU19OQU1FXTtcblxuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzW0NISUxEX0VMRU1FTlRTXTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTdGl4R2x5cGhTcGFuIHsuLi5wcm9wZXJ0aWVzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImJvbGRcIixcbiAgICBcIml0YWxpY1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzdGl4XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTdGl4R2x5cGhUYWJsZUNlbGwiLCJjaGlsZEVsZW1lbnRzIiwicHJvcGVydGllcyIsIkNMQVNTX05BTUUiLCJDSElMRF9FTEVNRU5UUyIsIlN0aXhHbHlwaFNwYW4iLCJHbHlwaFRhYmxlQ2VsbCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxLOzREQUNDO3lCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsbUJBQ2QsSUFBSSxDQUFDQSxVQUFVO2dCQUdwQixPQUFPQSxVQUFVLENBQUNDLHFCQUFVLENBQUM7Z0JBRTdCLE9BQU9ELFVBQVUsQ0FBQ0UseUJBQWMsQ0FBQztnQkFFakMscUJBRUUsb0JBQUNDLGFBQWEsRUFBS0g7WUFHdkI7OztXQWZtQkY7RUFBMkJNLGNBQWM7QUFpQjVELGlCQWpCbUJOLG9CQWlCWk8scUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQXRCbUJQLG9CQXNCWlEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==