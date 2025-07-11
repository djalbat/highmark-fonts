"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _easy = require("easy");
var _glyphs = /*#__PURE__*/ _interop_require_default(require("./view/table/glyphs"));
var _secondary = /*#__PURE__*/ _interop_require_default(require("./view/heading/secondary"));
var _characterMap = require("../characterMap");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                var parameters = parametersFromNothing(), name = parameters.name, title = parameters.title, characterMap = characterMapFromName(name);
                return [
                    /*#__PURE__*/ React.createElement(_secondary.default, null, title),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: characterMap
                    })
                ];
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
function parametersFromNothing() {
    var search = location.search, start = 1, queryString = search.substring(start), nameValueStrings = queryString.split("&"), parameters = nameValueStrings.reduce(function(parameters, nameValueString) {
        var _nameValueString_split = _sliced_to_array(nameValueString.split("="), 2), name = _nameValueString_split[0], encodedValue = _nameValueString_split[1], value = encodedValue.replace(/\+/g, " ");
        parameters[name] = value;
        return parameters;
    }, {});
    return parameters;
}
function characterMapFromName(name) {
    var characterMap;
    switch(name){
        case "shapeCharacter":
            characterMap = _characterMap.shapeCharacterMap;
            break;
        case "angleCharacter":
            characterMap = _characterMap.angleCharacterMap;
            break;
        case "arrowCharacter":
            characterMap = _characterMap.arrowCharacterMap;
            break;
        case "harpoonCharacter":
            characterMap = _characterMap.harpoonCharacterMap;
            break;
        case "equalityCharacter":
            characterMap = _characterMap.equalityCharacterMap;
            break;
        case "orderingCharacter":
            characterMap = _characterMap.orderingCharacterMap;
            break;
        case "calculusCharacter":
            characterMap = _characterMap.calculusCharacterMap;
            break;
        case "relationalCharacter":
            characterMap = _characterMap.relationalCharacterMap;
            break;
        case "arithmeticCharacter":
            characterMap = _characterMap.arithmeticCharacterMap;
            break;
        case "headedArrowCharacter":
            characterMap = _characterMap.headedArrowCharacterMap;
            break;
        case "greekLetterCharacter":
            characterMap = _characterMap.greekLetterCharacterMap;
            break;
        case "miscellaneousCharacter":
            characterMap = _characterMap.miscellaneousCharacterMap;
            break;
        case "scriptLettersCharacter":
            characterMap = _characterMap.scriptLettersCharacterMap;
            break;
        case "circleCircledCharacter":
            characterMap = _characterMap.circleCircledCharacterMap;
            break;
        case "tackTurnstileCharacter":
            characterMap = _characterMap.tackTurnstileCharacterMap;
            break;
        case "frakturLettersCharacter":
            characterMap = _characterMap.frakturLettersCharacterMap;
            break;
        case "classTheoreticCharacter":
            characterMap = _characterMap.classTheoreticCharacterMap;
            break;
        case "logicalOperatorCharacter":
            characterMap = _characterMap.logicalOperatorCharacterMap;
            break;
        case "doubleTripleArrowCharacter":
            characterMap = _characterMap.doubleTripleArrowCharacterMap;
            break;
        case "parenthesisBracketCharacter":
            characterMap = _characterMap.parenthesisBracketCharacterMap;
            break;
        case "doubleStruckLettersCharacter":
            characterMap = _characterMap.doubleStruckLettersCharacterMap;
            break;
        case "superscriptSubscriptCharacter":
            characterMap = _characterMap.superscriptSubscriptCharacterMap;
            break;
    }
    return characterMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgR2x5cGhzVGFibGUgZnJvbSBcIi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBTZWNvbmRhcnlIZWFkaW5nIGZyb20gXCIuL3ZpZXcvaGVhZGluZy9zZWNvbmRhcnlcIlxuXG5pbXBvcnQgeyBzaGFwZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFuZ2xlQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgYXJyb3dDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoYXJwb29uQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgZXF1YWxpdHlDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBvcmRlcmluZ0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNhbGN1bHVzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgcmVsYXRpb25hbENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFyaXRobWV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgbWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgdGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCAgfSBmcm9tIFwiLi4vY2hhcmFjdGVyTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Ob3RoaW5nKCksXG4gICAgICAgICAgeyBuYW1lLCB0aXRsZSB9ID0gcGFyYW1ldGVycyxcbiAgICAgICAgICBjaGFyYWN0ZXJNYXAgPSBjaGFyYWN0ZXJNYXBGcm9tTmFtZShuYW1lKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9TZWNvbmRhcnlIZWFkaW5nPixcbiAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e2NoYXJhY3Rlck1hcH0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IGxvY2F0aW9uLFxuICAgICAgICBzdGFydCA9IDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gc2VhcmNoLnN1YnN0cmluZyhzdGFydCksXG4gICAgICAgIG5hbWVWYWx1ZVN0cmluZ3MgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIiksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuYW1lVmFsdWVTdHJpbmdzLnJlZHVjZSgocGFyYW1ldGVycywgbmFtZVZhbHVlU3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgWyBuYW1lLCBlbmNvZGVkVmFsdWUgXSA9IG5hbWVWYWx1ZVN0cmluZy5zcGxpdChcIj1cIiksXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVkVmFsdWUucmVwbGFjZSgvXFwrL2csIFwiIFwiKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgICAgICB9LCB7fSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3Rlck1hcEZyb21OYW1lKG5hbWUpIHtcbiAgbGV0IGNoYXJhY3Rlck1hcDtcblxuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwic2hhcGVDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gc2hhcGVDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJhbmdsZUNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBhbmdsZUNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImFycm93Q2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGFycm93Q2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiaGFycG9vbkNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBoYXJwb29uQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiZXF1YWxpdHlDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gZXF1YWxpdHlDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJvcmRlcmluZ0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBvcmRlcmluZ0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImNhbGN1bHVzQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGNhbGN1bHVzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwicmVsYXRpb25hbENoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSByZWxhdGlvbmFsQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiYXJpdGhtZXRpY0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBhcml0aG1ldGljQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiaGVhZGVkQXJyb3dDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gaGVhZGVkQXJyb3dDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJncmVla0xldHRlckNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBncmVla0xldHRlckNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcIm1pc2NlbGxhbmVvdXNDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gbWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcInNjcmlwdExldHRlcnNDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gc2NyaXB0TGV0dGVyc0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImNpcmNsZUNpcmNsZWRDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gY2lyY2xlQ2lyY2xlZENoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcInRhY2tUdXJuc3RpbGVDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gdGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gbG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiZG91YmxlVHJpcGxlQXJyb3dDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gZG91YmxlVHJpcGxlQXJyb3dDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJwYXJlbnRoZXNpc0JyYWNrZXRDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gcGFyZW50aGVzaXNCcmFja2V0Q2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiZG91YmxlU3RydWNrTGV0dGVyc0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBkb3VibGVTdHJ1Y2tMZXR0ZXJzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwic3VwZXJzY3JpcHRTdWJzY3JpcHRDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gc3VwZXJzY3JpcHRTdWJzY3JpcHRDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNoYXJhY3Rlck1hcDtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiY2hpbGRFbGVtZW50cyIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzRnJvbU5vdGhpbmciLCJuYW1lIiwidGl0bGUiLCJjaGFyYWN0ZXJNYXAiLCJjaGFyYWN0ZXJNYXBGcm9tTmFtZSIsIlNlY29uZGFyeUhlYWRpbmciLCJHbHlwaHNUYWJsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzZWFyY2giLCJsb2NhdGlvbiIsInN0YXJ0IiwicXVlcnlTdHJpbmciLCJzdWJzdHJpbmciLCJuYW1lVmFsdWVTdHJpbmdzIiwic3BsaXQiLCJyZWR1Y2UiLCJuYW1lVmFsdWVTdHJpbmciLCJlbmNvZGVkVmFsdWUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzaGFwZUNoYXJhY3Rlck1hcCIsImFuZ2xlQ2hhcmFjdGVyTWFwIiwiYXJyb3dDaGFyYWN0ZXJNYXAiLCJoYXJwb29uQ2hhcmFjdGVyTWFwIiwiZXF1YWxpdHlDaGFyYWN0ZXJNYXAiLCJvcmRlcmluZ0NoYXJhY3Rlck1hcCIsImNhbGN1bHVzQ2hhcmFjdGVyTWFwIiwicmVsYXRpb25hbENoYXJhY3Rlck1hcCIsImFyaXRobWV0aWNDaGFyYWN0ZXJNYXAiLCJoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwIiwibWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCIsInNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXAiLCJjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwIiwidGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCIsImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwiY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAiLCJsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAiLCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCIsInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCIsImRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAiLCJzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUE4QnFCQTs7O29CQTVCRzs2REFFQTtnRUFDSzs0QkF1QnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhQyx5QkFDWEMsT0FBZ0JGLFdBQWhCRSxNQUFNQyxRQUFVSCxXQUFWRyxPQUNSQyxlQUFlQyxxQkFBcUJIO2dCQUUxQyxPQUFRO2tDQUVOLG9CQUFDSSxrQkFBZ0IsUUFDZEg7a0NBRUgsb0JBQUNJLGVBQVc7d0JBQUNILGNBQWNBOztpQkFFNUI7WUFDSDs7O1dBZG1CTjtxQkFBYVUsYUFBTztBQWdCdkMsaUJBaEJtQlYsTUFnQlpXLFdBQVU7QUFFakIsaUJBbEJtQlgsTUFrQlpZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0YsU0FBU1Y7SUFDUCxJQUFNLEFBQUVXLFNBQVdDLFNBQVhELFFBQ0ZFLFFBQVEsR0FDUkMsY0FBY0gsT0FBT0ksU0FBUyxDQUFDRixRQUMvQkcsbUJBQW1CRixZQUFZRyxLQUFLLENBQUMsTUFDckNsQixhQUFhaUIsaUJBQWlCRSxNQUFNLENBQUMsU0FBQ25CLFlBQVlvQjtRQUNoRCxJQUErQkEsMENBQUFBLGdCQUFnQkYsS0FBSyxDQUFDLFVBQTdDaEIsT0FBdUJrQiwyQkFBakJDLGVBQWlCRCwyQkFDekJFLFFBQVFELGFBQWFFLE9BQU8sQ0FBQyxPQUFPO1FBRTFDdkIsVUFBVSxDQUFDRSxLQUFLLEdBQUdvQjtRQUVuQixPQUFPdEI7SUFDVCxHQUFHLENBQUM7SUFFVixPQUFPQTtBQUNUO0FBRUEsU0FBU0sscUJBQXFCSCxJQUFJO0lBQ2hDLElBQUlFO0lBRUosT0FBUUY7UUFDTixLQUFLO1lBQWtCRSxlQUFlb0IsK0JBQWlCO1lBQUU7UUFDekQsS0FBSztZQUFrQnBCLGVBQWVxQiwrQkFBaUI7WUFBRTtRQUN6RCxLQUFLO1lBQWtCckIsZUFBZXNCLCtCQUFpQjtZQUFFO1FBQ3pELEtBQUs7WUFBb0J0QixlQUFldUIsaUNBQW1CO1lBQUU7UUFDN0QsS0FBSztZQUFxQnZCLGVBQWV3QixrQ0FBb0I7WUFBRTtRQUMvRCxLQUFLO1lBQXFCeEIsZUFBZXlCLGtDQUFvQjtZQUFFO1FBQy9ELEtBQUs7WUFBcUJ6QixlQUFlMEIsa0NBQW9CO1lBQUU7UUFDL0QsS0FBSztZQUF1QjFCLGVBQWUyQixvQ0FBc0I7WUFBRTtRQUNuRSxLQUFLO1lBQXVCM0IsZUFBZTRCLG9DQUFzQjtZQUFFO1FBQ25FLEtBQUs7WUFBd0I1QixlQUFlNkIscUNBQXVCO1lBQUU7UUFDckUsS0FBSztZQUF3QjdCLGVBQWU4QixxQ0FBdUI7WUFBRTtRQUNyRSxLQUFLO1lBQTBCOUIsZUFBZStCLHVDQUF5QjtZQUFFO1FBQ3pFLEtBQUs7WUFBMEIvQixlQUFlZ0MsdUNBQXlCO1lBQUU7UUFDekUsS0FBSztZQUEwQmhDLGVBQWVpQyx1Q0FBeUI7WUFBRTtRQUN6RSxLQUFLO1lBQTBCakMsZUFBZWtDLHVDQUF5QjtZQUFFO1FBQ3pFLEtBQUs7WUFBMkJsQyxlQUFlbUMsd0NBQTBCO1lBQUU7UUFDM0UsS0FBSztZQUEyQm5DLGVBQWVvQyx3Q0FBMEI7WUFBRTtRQUMzRSxLQUFLO1lBQTRCcEMsZUFBZXFDLHlDQUEyQjtZQUFFO1FBQzdFLEtBQUs7WUFBOEJyQyxlQUFlc0MsMkNBQTZCO1lBQUU7UUFDakYsS0FBSztZQUErQnRDLGVBQWV1Qyw0Q0FBOEI7WUFBRTtRQUNuRixLQUFLO1lBQWdDdkMsZUFBZXdDLDZDQUErQjtZQUFFO1FBQ3JGLEtBQUs7WUFBaUN4QyxlQUFleUMsOENBQWdDO1lBQUU7SUFDekY7SUFFQSxPQUFPekM7QUFDVCJ9