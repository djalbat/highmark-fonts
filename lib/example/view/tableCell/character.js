"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CharacterTableCell;
    }
});
var _tableCell = /*#__PURE__*/ _interop_require_default(require("../tableCell"));
var _character = /*#__PURE__*/ _interop_require_default(require("../span/character"));
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
var CharacterTableCell = /*#__PURE__*/ function(TableCell) {
    _inherits(CharacterTableCell, TableCell);
    function CharacterTableCell() {
        _class_call_check(this, CharacterTableCell);
        return _call_super(this, CharacterTableCell, arguments);
    }
    _create_class(CharacterTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var character = this.properties.character;
                return /*#__PURE__*/ React.createElement(_character.default, {
                    character: character
                });
            }
        }
    ]);
    return CharacterTableCell;
}(_tableCell.default);
_define_property(CharacterTableCell, "ignoredProperties", [
    "character"
]);
_define_property(CharacterTableCell, "defaultProperties", {
    className: "character"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2NoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsXCI7XG5pbXBvcnQgQ2hhcmFjdGVyU3BhbiBmcm9tIFwiLi4vc3Bhbi9jaGFyYWN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyVGFibGVDZWxsIGV4dGVuZHMgVGFibGVDZWxsIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNoYXJhY3RlciB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENoYXJhY3RlclNwYW4gY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY2hhcmFjdGVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNoYXJhY3RlclwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyVGFibGVDZWxsIiwiY2hpbGRFbGVtZW50cyIsImNoYXJhY3RlciIsInByb3BlcnRpZXMiLCJDaGFyYWN0ZXJTcGFuIiwiVGFibGVDZWxsIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7Z0VBSEM7Z0VBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsWUFBYyxJQUFJLENBQUNDLFVBQVUsQ0FBN0JEO2dCQUVSLHFCQUVFLG9CQUFDRSxrQkFBYTtvQkFBQ0YsV0FBV0E7O1lBRzlCOzs7V0FUbUJGO0VBQTJCSyxrQkFBUztBQVd2RCxpQkFYbUJMLG9CQVdaTSxxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQWZtQk4sb0JBZVpPLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=