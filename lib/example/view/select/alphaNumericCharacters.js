"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AlphaNumericCharactersSelect;
    }
});
var _index = require("../../../index");
var _select = /*#__PURE__*/ _interop_require_default(require("../select"));
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
var AlphaNumericCharactersSelect = /*#__PURE__*/ function(Select) {
    _inherits(AlphaNumericCharactersSelect, Select);
    function AlphaNumericCharactersSelect() {
        _class_call_check(this, AlphaNumericCharactersSelect);
        return _call_super(this, AlphaNumericCharactersSelect, arguments);
    }
    _create_class(AlphaNumericCharactersSelect, [
        {
            key: "getCharactersName",
            value: function getCharactersName() {
                var value = this.getValue(), charactersName = value; ///
                return charactersName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var characterMaps = _index.alphaNumericCharacterMaps, charactersNames = Object.keys(characterMaps), options = charactersNames.map(function(charactersName, index) {
                    var value = charactersName; ///
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value
                    }, charactersName);
                }), childElements = options; ///
                return childElements;
            }
        }
    ]);
    return AlphaNumericCharactersSelect;
}(_select.default);
_define_property(AlphaNumericCharactersSelect, "defaultProperties", {
    className: "alpha-numeric-characters"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2FscGhhTnVtZXJpY0NoYXJhY3RlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFscGhhTnVtZXJpY0NoYXJhY3Rlck1hcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL3NlbGVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHBoYU51bWVyaWNDaGFyYWN0ZXJzU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0Q2hhcmFjdGVyc05hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY2hhcmFjdGVyc05hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYXJhY3Rlck1hcHMgPSBhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzLFxuICAgICAgICAgIGNoYXJhY3RlcnNOYW1lcyA9IE9iamVjdC5rZXlzKGNoYXJhY3Rlck1hcHMpLFxuICAgICAgICAgIG9wdGlvbnMgPSBjaGFyYWN0ZXJzTmFtZXMubWFwKChjaGFyYWN0ZXJzTmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2hhcmFjdGVyc05hbWU7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfT57Y2hhcmFjdGVyc05hbWV9PC9vcHRpb24+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gb3B0aW9uczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFscGhhLW51bWVyaWMtY2hhcmFjdGVyc1wiLFxuICB9XG59XG4iXSwibmFtZXMiOlsiQWxwaGFOdW1lcmljQ2hhcmFjdGVyc1NlbGVjdCIsImdldENoYXJhY3RlcnNOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNoYXJhY3RlcnNOYW1lIiwiY2hpbGRFbGVtZW50cyIsImNoYXJhY3Rlck1hcHMiLCJhbHBoYU51bWVyaWNDaGFyYWN0ZXJNYXBzIiwiY2hhcmFjdGVyc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsIm9wdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbiIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKcUI7NkRBRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVKLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsaUJBQWlCRixPQUFPLEdBQUc7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxnQ0FBeUIsRUFDekNDLGtCQUFrQkMsT0FBT0MsSUFBSSxDQUFDSixnQkFDOUJLLFVBQVVILGdCQUFnQkksR0FBRyxDQUFDLFNBQUNSLGdCQUFnQlM7b0JBQzdDLElBQU1YLFFBQVFFLGdCQUFnQixHQUFHO29CQUVqQyxxQkFFRSxvQkFBQ1U7d0JBQU9aLE9BQU9BO3VCQUFRRTtnQkFHM0IsSUFDQUMsZ0JBQWdCTSxTQUFVLEdBQUc7Z0JBRW5DLE9BQU9OO1lBQ1Q7OztXQXZCbUJMO0VBQXFDZSxlQUFNO0FBeUI5RCxpQkF6Qm1CZiw4QkF5QlpnQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9