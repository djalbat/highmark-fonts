"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComputerModernGlyphTableCell;
    }
});
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../tableCell/glyph"));
var _computerModern = /*#__PURE__*/ _interop_require_default(require("../../span/glyph/computerModern"));
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
var ComputerModernGlyphTableCell = /*#__PURE__*/ function(GlyphTableCell) {
    _inherits(ComputerModernGlyphTableCell, GlyphTableCell);
    function ComputerModernGlyphTableCell() {
        _class_call_check(this, ComputerModernGlyphTableCell);
        return _call_super(this, ComputerModernGlyphTableCell, arguments);
    }
    _create_class(ComputerModernGlyphTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var properties = {};
                for(var propertyName in this.properties){
                    if (propertyName !== _constants.CLASS_NAME && propertyName !== _constants.CHILD_ELEMENTS) {
                        var propertyValue = this.properties[propertyName];
                        properties[propertyName] = propertyValue;
                    }
                }
                return /*#__PURE__*/ React.createElement(_computerModern.default, properties);
            }
        }
    ]);
    return ComputerModernGlyphTableCell;
}(_glyph.default);
_define_property(ComputerModernGlyphTableCell, "defaultProperties", {
    className: "computer-modern"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2dseXBoL2NvbXB1dGVyTW9kZXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgR2x5cGhUYWJsZUNlbGwgZnJvbSBcIi4uLy4uL3RhYmxlQ2VsbC9nbHlwaFwiO1xuaW1wb3J0IENvbXB1dGVyTW9kZXJuR2x5cGhTcGFuIGZyb20gXCIuLi8uLi9zcGFuL2dseXBoL2NvbXB1dGVyTW9kZXJuXCI7XG5cbmltcG9ydCB7IENMQVNTX05BTUUsIENISUxEX0VMRU1FTlRTIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGV4dGVuZHMgR2x5cGhUYWJsZUNlbGwge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcblxuICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICgocHJvcGVydHlOYW1lICE9PSBDTEFTU19OQU1FKSAmJiAocHJvcGVydHlOYW1lICE9PSBDSElMRF9FTEVNRU5UUykpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXG4gICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhTcGFuIHsuLi5wcm9wZXJ0aWVzfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tcHV0ZXItbW9kZXJuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJDTEFTU19OQU1FIiwiQ0hJTERfRUxFTUVOVFMiLCJwcm9wZXJ0eVZhbHVlIiwiQ29tcHV0ZXJNb2Rlcm5HbHlwaFNwYW4iLCJHbHlwaFRhYmxlQ2VsbCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0REFMTTtxRUFDUzt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsQ0FBQztnQkFFcEIsSUFBSyxJQUFJQyxnQkFBZ0IsSUFBSSxDQUFDRCxVQUFVLENBQUU7b0JBQ3hDLElBQUksQUFBQ0MsaUJBQWlCQyxxQkFBVSxJQUFNRCxpQkFBaUJFLHlCQUFjLEVBQUc7d0JBQ3RFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsYUFBYTt3QkFFbkRELFVBQVUsQ0FBQ0MsYUFBYSxHQUFHRztvQkFDN0I7Z0JBQ0Y7Z0JBRUEscUJBRUUsb0JBQUNDLHVCQUF1QixFQUFLTDtZQUdqQzs7O1dBakJtQkY7RUFBcUNRLGNBQWM7QUFtQnRFLGlCQW5CbUJSLDhCQW1CWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==