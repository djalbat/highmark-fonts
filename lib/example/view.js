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
var _necessary = require("necessary");
var _glyphs = /*#__PURE__*/ _interop_require_default(require("./view/table/glyphs"));
var _collection = /*#__PURE__*/ _interop_require_default(require("./view/select/collection"));
var _characterMap = require("../characterMap");
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
var first = _necessary.arrayUtilities.first;
var characterMapMap = {
    shapeCharacter: _characterMap.shapeCharacterMap,
    angleCharacter: _characterMap.angleCharacterMap,
    arrowCharacter: _characterMap.arrowCharacterMap,
    harpoonCharacter: _characterMap.harpoonCharacterMap,
    equalityCharacter: _characterMap.equalityCharacterMap,
    orderingCharacter: _characterMap.orderingCharacterMap,
    calculusCharacter: _characterMap.calculusCharacterMap,
    relationalCharacter: _characterMap.relationalCharacterMap,
    arithmeticCharacter: _characterMap.arithmeticCharacterMap,
    headedArrowCharacter: _characterMap.headedArrowCharacterMap,
    greekLetterCharacter: _characterMap.greekLetterCharacterMap,
    miscellaneousCharacter: _characterMap.miscellaneousCharacterMap,
    scriptLettersCharacter: _characterMap.scriptLettersCharacterMap,
    circleCircledCharacter: _characterMap.circleCircledCharacterMap,
    tackTurnstileCharacter: _characterMap.tackTurnstileCharacterMap,
    frakturLettersCharacter: _characterMap.frakturLettersCharacterMap,
    classTheoreticCharacter: _characterMap.classTheoreticCharacterMap,
    logicalOperatorCharacter: _characterMap.logicalOperatorCharacterMap,
    doubleTripleArrowCharacter: _characterMap.doubleTripleArrowCharacterMap,
    parenthesisBracketCharacter: _characterMap.parenthesisBracketCharacterMap,
    doubleStruckLettersCharacter: _characterMap.doubleStruckLettersCharacterMap,
    superscriptSubscriptCharacter: _characterMap.superscriptSubscriptCharacterMap
};
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "collectionSelectChangeHandler", function(event, element) {
            var glyphsTable = _this.getGlyphsTable();
            if (glyphsTable !== null) {
                _this.unmount(glyphsTable);
            }
            var collectionSelect = element, name = collectionSelect.getName(), characterMap = characterMapMap[name], glyphTable = /*#__PURE__*/ React.createElement(_glyphs.default, {
                characterMap: characterMap
            });
            _this.mount(glyphTable);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "getGlyphsTable",
            value: function getGlyphsTable() {
                var glyphTable = null;
                var glyphsTableChildElements = this.getChildElements("table.glyphs"), glyphsTableChildElementsLength = glyphsTableChildElements.length;
                if (glyphsTableChildElementsLength > 0) {
                    var firstGlyphsTableChildElement = first(glyphsTableChildElements);
                    glyphTable = firstGlyphsTableChildElement; ///
                }
                return glyphTable;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_collection.default, {
                        onChange: this.collectionSelectChangeHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBHbHlwaHNUYWJsZSBmcm9tIFwiLi92aWV3L3RhYmxlL2dseXBoc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25TZWxlY3QgZnJvbSBcIi4vdmlldy9zZWxlY3QvY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBzaGFwZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFuZ2xlQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgYXJyb3dDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoYXJwb29uQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgZXF1YWxpdHlDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBvcmRlcmluZ0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNhbGN1bHVzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgcmVsYXRpb25hbENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFyaXRobWV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgbWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgdGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCAgfSBmcm9tIFwiLi4vY2hhcmFjdGVyTWFwXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBjaGFyYWN0ZXJNYXBNYXAgPSB7XG4gIHNoYXBlQ2hhcmFjdGVyOiBzaGFwZUNoYXJhY3Rlck1hcCxcbiAgYW5nbGVDaGFyYWN0ZXI6IGFuZ2xlQ2hhcmFjdGVyTWFwLFxuICBhcnJvd0NoYXJhY3RlcjogYXJyb3dDaGFyYWN0ZXJNYXAsXG4gIGhhcnBvb25DaGFyYWN0ZXI6IGhhcnBvb25DaGFyYWN0ZXJNYXAsXG4gIGVxdWFsaXR5Q2hhcmFjdGVyOiBlcXVhbGl0eUNoYXJhY3Rlck1hcCxcbiAgb3JkZXJpbmdDaGFyYWN0ZXI6IG9yZGVyaW5nQ2hhcmFjdGVyTWFwLFxuICBjYWxjdWx1c0NoYXJhY3RlcjogY2FsY3VsdXNDaGFyYWN0ZXJNYXAsXG4gIHJlbGF0aW9uYWxDaGFyYWN0ZXI6IHJlbGF0aW9uYWxDaGFyYWN0ZXJNYXAsXG4gIGFyaXRobWV0aWNDaGFyYWN0ZXI6IGFyaXRobWV0aWNDaGFyYWN0ZXJNYXAsXG4gIGhlYWRlZEFycm93Q2hhcmFjdGVyOiBoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCxcbiAgZ3JlZWtMZXR0ZXJDaGFyYWN0ZXI6IGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwLFxuICBtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyOiBtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyTWFwLFxuICBzY3JpcHRMZXR0ZXJzQ2hhcmFjdGVyOiBzY3JpcHRMZXR0ZXJzQ2hhcmFjdGVyTWFwLFxuICBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyOiBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwLFxuICB0YWNrVHVybnN0aWxlQ2hhcmFjdGVyOiB0YWNrVHVybnN0aWxlQ2hhcmFjdGVyTWFwLFxuICBmcmFrdHVyTGV0dGVyc0NoYXJhY3RlcjogZnJha3R1ckxldHRlcnNDaGFyYWN0ZXJNYXAsXG4gIGNsYXNzVGhlb3JldGljQ2hhcmFjdGVyOiBjbGFzc1RoZW9yZXRpY0NoYXJhY3Rlck1hcCxcbiAgbG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyOiBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAsXG4gIGRvdWJsZVRyaXBsZUFycm93Q2hhcmFjdGVyOiBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCxcbiAgcGFyZW50aGVzaXNCcmFja2V0Q2hhcmFjdGVyOiBwYXJlbnRoZXNpc0JyYWNrZXRDaGFyYWN0ZXJNYXAsXG4gIGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXI6IGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAsXG4gIHN1cGVyc2NyaXB0U3Vic2NyaXB0Q2hhcmFjdGVyOiBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjb2xsZWN0aW9uU2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGdseXBoc1RhYmxlID0gdGhpcy5nZXRHbHlwaHNUYWJsZSgpO1xuXG4gICAgaWYgKGdseXBoc1RhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnQoZ2x5cGhzVGFibGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxlY3Rpb25TZWxlY3QgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBuYW1lID0gY29sbGVjdGlvblNlbGVjdC5nZXROYW1lKCksXG4gICAgICAgICAgY2hhcmFjdGVyTWFwID0gY2hhcmFjdGVyTWFwTWFwW25hbWVdLFxuICAgICAgICAgIGdseXBoVGFibGUgPVxuXG4gICAgICAgICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaGFyYWN0ZXJNYXB9IC8+O1xuXG4gICAgdGhpcy5tb3VudChnbHlwaFRhYmxlKTtcbiAgfVxuXG4gIGdldEdseXBoc1RhYmxlKCkge1xuICAgIGxldCBnbHlwaFRhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcInRhYmxlLmdseXBoc1wiKSxcbiAgICAgICAgICBnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHNMZW5ndGggPSBnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQgPSBmaXJzdChnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBnbHlwaFRhYmxlID0gZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaFRhYmxlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbGxlY3Rpb25TZWxlY3Qgb25DaGFuZ2U9e3RoaXMuY29sbGVjdGlvblNlbGVjdENoYW5nZUhhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY2hhcmFjdGVyTWFwTWFwIiwic2hhcGVDaGFyYWN0ZXIiLCJzaGFwZUNoYXJhY3Rlck1hcCIsImFuZ2xlQ2hhcmFjdGVyIiwiYW5nbGVDaGFyYWN0ZXJNYXAiLCJhcnJvd0NoYXJhY3RlciIsImFycm93Q2hhcmFjdGVyTWFwIiwiaGFycG9vbkNoYXJhY3RlciIsImhhcnBvb25DaGFyYWN0ZXJNYXAiLCJlcXVhbGl0eUNoYXJhY3RlciIsImVxdWFsaXR5Q2hhcmFjdGVyTWFwIiwib3JkZXJpbmdDaGFyYWN0ZXIiLCJvcmRlcmluZ0NoYXJhY3Rlck1hcCIsImNhbGN1bHVzQ2hhcmFjdGVyIiwiY2FsY3VsdXNDaGFyYWN0ZXJNYXAiLCJyZWxhdGlvbmFsQ2hhcmFjdGVyIiwicmVsYXRpb25hbENoYXJhY3Rlck1hcCIsImFyaXRobWV0aWNDaGFyYWN0ZXIiLCJhcml0aG1ldGljQ2hhcmFjdGVyTWFwIiwiaGVhZGVkQXJyb3dDaGFyYWN0ZXIiLCJoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyIiwiZ3JlZWtMZXR0ZXJDaGFyYWN0ZXJNYXAiLCJtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyIiwibWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCIsInNjcmlwdExldHRlcnNDaGFyYWN0ZXIiLCJzY3JpcHRMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwiY2lyY2xlQ2lyY2xlZENoYXJhY3RlciIsImNpcmNsZUNpcmNsZWRDaGFyYWN0ZXJNYXAiLCJ0YWNrVHVybnN0aWxlQ2hhcmFjdGVyIiwidGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCIsImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyIiwiZnJha3R1ckxldHRlcnNDaGFyYWN0ZXJNYXAiLCJjbGFzc1RoZW9yZXRpY0NoYXJhY3RlciIsImNsYXNzVGhlb3JldGljQ2hhcmFjdGVyTWFwIiwibG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyIiwibG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyTWFwIiwiZG91YmxlVHJpcGxlQXJyb3dDaGFyYWN0ZXIiLCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCIsInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3RlciIsInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCIsImRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXIiLCJkb3VibGVTdHJ1Y2tMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwic3VwZXJzY3JpcHRTdWJzY3JpcHRDaGFyYWN0ZXIiLCJzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCIsImNvbGxlY3Rpb25TZWxlY3RDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZ2x5cGhzVGFibGUiLCJnZXRHbHlwaHNUYWJsZSIsInVubW91bnQiLCJjb2xsZWN0aW9uU2VsZWN0IiwibmFtZSIsImdldE5hbWUiLCJjaGFyYWN0ZXJNYXAiLCJnbHlwaFRhYmxlIiwiR2x5cGhzVGFibGUiLCJtb3VudCIsImdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbGxlY3Rpb25TZWxlY3QiLCJvbkNoYW5nZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBMERxQkE7OztvQkF4REc7eUJBQ087NkRBRVA7aUVBQ0s7NEJBdUJxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsa0JBQWtCO0lBQ3RCQyxnQkFBZ0JDLCtCQUFpQjtJQUNqQ0MsZ0JBQWdCQywrQkFBaUI7SUFDakNDLGdCQUFnQkMsK0JBQWlCO0lBQ2pDQyxrQkFBa0JDLGlDQUFtQjtJQUNyQ0MsbUJBQW1CQyxrQ0FBb0I7SUFDdkNDLG1CQUFtQkMsa0NBQW9CO0lBQ3ZDQyxtQkFBbUJDLGtDQUFvQjtJQUN2Q0MscUJBQXFCQyxvQ0FBc0I7SUFDM0NDLHFCQUFxQkMsb0NBQXNCO0lBQzNDQyxzQkFBc0JDLHFDQUF1QjtJQUM3Q0Msc0JBQXNCQyxxQ0FBdUI7SUFDN0NDLHdCQUF3QkMsdUNBQXlCO0lBQ2pEQyx3QkFBd0JDLHVDQUF5QjtJQUNqREMsd0JBQXdCQyx1Q0FBeUI7SUFDakRDLHdCQUF3QkMsdUNBQXlCO0lBQ2pEQyx5QkFBeUJDLHdDQUEwQjtJQUNuREMseUJBQXlCQyx3Q0FBMEI7SUFDbkRDLDBCQUEwQkMseUNBQTJCO0lBQ3JEQyw0QkFBNEJDLDJDQUE2QjtJQUN6REMsNkJBQTZCQyw0Q0FBOEI7SUFDM0RDLDhCQUE4QkMsNkNBQStCO0lBQzdEQywrQkFBK0JDLDhDQUFnQztBQUNqRTtBQUVlLElBQUEsQUFBTS9DLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtCQUNuQmdELHdCQUFBQSxpQ0FBZ0MsU0FBQ0MsT0FBT0M7WUFDdEMsSUFBTUMsY0FBYyxNQUFLQyxjQUFjO1lBRXZDLElBQUlELGdCQUFnQixNQUFNO2dCQUN4QixNQUFLRSxPQUFPLENBQUNGO1lBQ2Y7WUFFQSxJQUFNRyxtQkFBbUJKLFNBQ25CSyxPQUFPRCxpQkFBaUJFLE9BQU8sSUFDL0JDLGVBQWV0RCxlQUFlLENBQUNvRCxLQUFLLEVBQ3BDRywyQkFFRSxvQkFBQ0MsZUFBVztnQkFBQ0YsY0FBY0E7O1lBRW5DLE1BQUtHLEtBQUssQ0FBQ0Y7UUFDYjs7O2tCQWhCbUIxRDs7WUFrQm5Cb0QsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlNLGFBQWE7Z0JBRWpCLElBQU1HLDJCQUEyQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLGlCQUNqREMsaUNBQWlDRix5QkFBeUJHLE1BQU07Z0JBRXRFLElBQUlELGlDQUFpQyxHQUFHO29CQUN0QyxJQUFNRSwrQkFBK0JoRSxNQUFNNEQ7b0JBRTNDSCxhQUFhTyw4QkFBK0IsR0FBRztnQkFDakQ7Z0JBRUEsT0FBT1A7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxtQkFBZ0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDcEIsNkJBQTZCOztpQkFFL0Q7WUFDSDs7O1dBdkNtQmhEO3FCQUFhcUUsYUFBTztBQXlDdkMsaUJBekNtQnJFLE1BeUNac0UsV0FBVTtBQUVqQixpQkEzQ21CdEUsTUEyQ1p1RSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9