"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnicodeCharacterTableCell;
    }
});
var _tableCell = /*#__PURE__*/ _interop_require_default(require("../tableCell"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../span/unicodeCharacter"));
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
var UnicodeCharacterTableCell = /*#__PURE__*/ function(TableCell) {
    _inherits(UnicodeCharacterTableCell, TableCell);
    function UnicodeCharacterTableCell() {
        _class_call_check(this, UnicodeCharacterTableCell);
        return _call_super(this, UnicodeCharacterTableCell, arguments);
    }
    _create_class(UnicodeCharacterTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var unicodeCharacter = this.properties.unicodeCharacter;
                return /*#__PURE__*/ React.createElement(_unicodeCharacter.default, {
                    unicodeCharacter: unicodeCharacter
                });
            }
        }
    ]);
    return UnicodeCharacterTableCell;
}(_tableCell.default);
_define_property(UnicodeCharacterTableCell, "ignoredProperties", [
    "unicodeCharacter"
]);
_define_property(UnicodeCharacterTableCell, "defaultProperties", {
    className: "unicode-character"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL3VuaWNvZGVDaGFyYWN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIi4uL3RhYmxlQ2VsbFwiO1xuaW1wb3J0IFVuaWNvZGVDaGFyYWN0ZXJTcGFuIGZyb20gXCIuLi9zcGFuL3VuaWNvZGVDaGFyYWN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCBleHRlbmRzIFRhYmxlQ2VsbCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyB1bmljb2RlQ2hhcmFjdGVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VW5pY29kZUNoYXJhY3RlclNwYW4gdW5pY29kZUNoYXJhY3Rlcj17dW5pY29kZUNoYXJhY3Rlcn0gLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJ1bmljb2RlQ2hhcmFjdGVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInVuaWNvZGUtY2hhcmFjdGVyXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJVbmljb2RlQ2hhcmFjdGVyVGFibGVDZWxsIiwiY2hpbGRFbGVtZW50cyIsInVuaWNvZGVDaGFyYWN0ZXIiLCJwcm9wZXJ0aWVzIiwiVW5pY29kZUNoYXJhY3RlclNwYW4iLCJUYWJsZUNlbGwiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztnRUFIQzt1RUFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsbUJBQXFCLElBQUksQ0FBQ0MsVUFBVSxDQUFwQ0Q7Z0JBRVIscUJBRUUsb0JBQUNFLHlCQUFvQjtvQkFBQ0Ysa0JBQWtCQTs7WUFHNUM7OztXQVRtQkY7RUFBa0NLLGtCQUFTO0FBVzlELGlCQVhtQkwsMkJBV1pNLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBZm1CTiwyQkFlWk8scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==