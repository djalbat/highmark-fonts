"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CharactersSelect;
    }
});
var _select = /*#__PURE__*/ _interop_require_default(require("../select"));
var _case = require("../../utilities/case");
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
var CharactersSelect = /*#__PURE__*/ function(Select) {
    _inherits(CharactersSelect, Select);
    function CharactersSelect() {
        _class_call_check(this, CharactersSelect);
        return _call_super(this, CharactersSelect, arguments);
    }
    _create_class(CharactersSelect, [
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
                var characterMaps = this.constructor.characterMaps, charactersNames = Object.keys(characterMaps), options = charactersNames.map(function(charactersName, index) {
                    var camelCaseString = charactersName, plainEnglishString = (0, _case.camelCaseToPlainEnglish)(camelCaseString), value = charactersName, name = plainEnglishString; ///
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value
                    }, name);
                }), childElements = options; ///
                return childElements;
            }
        }
    ]);
    return CharactersSelect;
}(_select.default);
_define_property(CharactersSelect, "defaultProperties", {
    className: "characters"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2NoYXJhY3RlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL3NlbGVjdFwiO1xuXG5pbXBvcnQgeyBjYW1lbENhc2VUb1BsYWluRW5nbGlzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2FzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJzU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcbiAgZ2V0Q2hhcmFjdGVyc05hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY2hhcmFjdGVyc05hbWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyTWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjaGFyYWN0ZXJzTmFtZXMgPSBPYmplY3Qua2V5cyhjaGFyYWN0ZXJNYXBzKSxcbiAgICAgICAgICBvcHRpb25zID0gY2hhcmFjdGVyc05hbWVzLm1hcCgoY2hhcmFjdGVyc05hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW1lbENhc2VTdHJpbmcgPSBjaGFyYWN0ZXJzTmFtZSxcbiAgICAgICAgICAgICAgICAgIHBsYWluRW5nbGlzaFN0cmluZyA9IGNhbWVsQ2FzZVRvUGxhaW5FbmdsaXNoKGNhbWVsQ2FzZVN0cmluZyksXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNoYXJhY3RlcnNOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIG5hbWUgPSBwbGFpbkVuZ2xpc2hTdHJpbmc7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0+e25hbWV9PC9vcHRpb24+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gb3B0aW9uczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNoYXJhY3RlcnNcIixcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNoYXJhY3RlcnNTZWxlY3QiLCJnZXRDaGFyYWN0ZXJzTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjaGFyYWN0ZXJzTmFtZSIsImNoaWxkRWxlbWVudHMiLCJjaGFyYWN0ZXJNYXBzIiwiY2hhcmFjdGVyc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsIm9wdGlvbnMiLCJtYXAiLCJpbmRleCIsImNhbWVsQ2FzZVN0cmluZyIsInBsYWluRW5nbGlzaFN0cmluZyIsImNhbWVsQ2FzZVRvUGxhaW5FbmdsaXNoIiwibmFtZSIsIm9wdGlvbiIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs2REFKRjtvQkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsaUJBQWlCRixPQUFPLEdBQUc7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxnQkFBa0IsSUFBSSxDQUFDLFdBQVcsQ0FBbENBLGVBQ0ZDLGtCQUFrQkMsT0FBT0MsSUFBSSxDQUFDSCxnQkFDOUJJLFVBQVVILGdCQUFnQkksR0FBRyxDQUFDLFNBQUNQLGdCQUFnQlE7b0JBQzdDLElBQU1DLGtCQUFrQlQsZ0JBQ2xCVSxxQkFBcUJDLElBQUFBLDZCQUF1QixFQUFDRixrQkFDN0NYLFFBQVFFLGdCQUNSWSxPQUFPRixvQkFBcUIsR0FBRztvQkFFckMscUJBRUUsb0JBQUNHO3dCQUFPZixPQUFPQTt1QkFBUWM7Z0JBRzNCLElBQ0FYLGdCQUFnQkssU0FBVSxHQUFHO2dCQUVuQyxPQUFPTDtZQUNUOzs7V0ExQm1CTDtFQUF5QmtCLGVBQU07QUE0QmxELGlCQTVCbUJsQixrQkE0QlptQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9