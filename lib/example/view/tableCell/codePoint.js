"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CodePointTableCell;
    }
});
var _tableCell = /*#__PURE__*/ _interop_require_default(require("../tableCell"));
var _codePoint = /*#__PURE__*/ _interop_require_default(require("../span/codePoint"));
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
var CodePointTableCell = /*#__PURE__*/ function(TableCell) {
    _inherits(CodePointTableCell, TableCell);
    function CodePointTableCell() {
        _class_call_check(this, CodePointTableCell);
        return _call_super(this, CodePointTableCell, arguments);
    }
    _create_class(CodePointTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint;
                return /*#__PURE__*/ React.createElement(_codePoint.default, {
                    codePoint: codePoint
                });
            }
        }
    ]);
    return CodePointTableCell;
}(_tableCell.default);
_define_property(CodePointTableCell, "ignoredProperties", [
    "codePoint"
]);
_define_property(CodePointTableCell, "defaultProperties", {
    className: "code-point"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2NvZGVQb2ludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsXCI7XG5pbXBvcnQgQ29kZVBvaW50U3BhbiBmcm9tIFwiLi4vc3Bhbi9jb2RlUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZVBvaW50VGFibGVDZWxsIGV4dGVuZHMgVGFibGVDZWxsIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNvZGVQb2ludCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENvZGVQb2ludFNwYW4gY29kZVBvaW50PXtjb2RlUG9pbnR9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY29kZVBvaW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvZGUtcG9pbnRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNvZGVQb2ludFRhYmxlQ2VsbCIsImNoaWxkRWxlbWVudHMiLCJjb2RlUG9pbnQiLCJwcm9wZXJ0aWVzIiwiQ29kZVBvaW50U3BhbiIsIlRhYmxlQ2VsbCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2dFQUhDO2dFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFlBQWMsSUFBSSxDQUFDQyxVQUFVLENBQTdCRDtnQkFFUixxQkFFRSxvQkFBQ0Usa0JBQWE7b0JBQUNGLFdBQVdBOztZQUc5Qjs7O1dBVG1CRjtFQUEyQkssa0JBQVM7QUFXdkQsaUJBWG1CTCxvQkFXWk0scUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkFmbUJOLG9CQWVaTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9