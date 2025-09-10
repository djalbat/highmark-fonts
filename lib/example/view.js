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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "selectChangeHandler", function(event, element) {
            var charactersSelect = element, charactersName = charactersSelect.getCharactersName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(charactersName);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "mountGlyphTable",
            value: function mountGlyphTable(charactersName) {
                var _this_constructor = this.constructor, characterMaps = _this_constructor.characterMaps, showCharacter = _this_constructor.showCharacter, characterMap = characterMaps[charactersName], glyphTable = /*#__PURE__*/ React.createElement(_glyphs.default, {
                    characterMap: characterMap,
                    showCharacter: showCharacter
                });
                this.mount(glyphTable);
            }
        },
        {
            key: "unmountGlyphTable",
            value: function unmountGlyphTable() {
                var glyphsTable = this.getGlyphsTable();
                if (glyphsTable !== null) {
                    this.unmount(glyphsTable);
                }
            }
        },
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
            key: "didMount",
            value: function didMount() {
                var characterMaps = this.constructor.characterMaps, charactersNames = Object.keys(characterMaps), firstCharactersName = first(charactersNames), charactersName = firstCharactersName; ///
                this.mountGlyphTable(charactersName);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var CharactersSelect = this.constructor.CharactersSelect;
                return /*#__PURE__*/ React.createElement(CharactersSelect, {
                    onChange: this.selectChangeHandler
                });
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBHbHlwaHNUYWJsZSBmcm9tIFwiLi92aWV3L3RhYmxlL2dseXBoc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzZWxlY3RDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hhcmFjdGVyc1NlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNoYXJhY3RlcnNOYW1lID0gY2hhcmFjdGVyc1NlbGVjdC5nZXRDaGFyYWN0ZXJzTmFtZSgpO1xuXG4gICAgdGhpcy51bm1vdW50R2x5cGhUYWJsZSgpO1xuXG4gICAgdGhpcy5tb3VudEdseXBoVGFibGUoY2hhcmFjdGVyc05hbWUpO1xuICB9XG5cbiAgbW91bnRHbHlwaFRhYmxlKGNoYXJhY3RlcnNOYW1lKSB7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJNYXBzLCBzaG93Q2hhcmFjdGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNoYXJhY3Rlck1hcCA9IGNoYXJhY3Rlck1hcHNbY2hhcmFjdGVyc05hbWVdLFxuICAgICAgICAgIGdseXBoVGFibGUgPVxuXG4gICAgICAgICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaGFyYWN0ZXJNYXB9IHNob3dDaGFyYWN0ZXI9e3Nob3dDaGFyYWN0ZXJ9IC8+XG5cbiAgICAgICAgICA7XG5cbiAgICB0aGlzLm1vdW50KGdseXBoVGFibGUpO1xuICB9XG5cbiAgdW5tb3VudEdseXBoVGFibGUoKSB7XG4gICAgY29uc3QgZ2x5cGhzVGFibGUgPSB0aGlzLmdldEdseXBoc1RhYmxlKCk7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudW5tb3VudChnbHlwaHNUYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzVGFibGUoKSB7XG4gICAgbGV0IGdseXBoVGFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwidGFibGUuZ2x5cGhzXCIpLFxuICAgICAgICAgIGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA9IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCA9IGZpcnN0KGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIGdseXBoVGFibGUgPSBmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoVGFibGU7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNoYXJhY3Rlck1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWVzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyTWFwcyksXG4gICAgICAgICAgZmlyc3RDaGFyYWN0ZXJzTmFtZSA9IGZpcnN0KGNoYXJhY3RlcnNOYW1lcyksXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWUgPSBmaXJzdENoYXJhY3RlcnNOYW1lOyAvLy9cblxuICAgIHRoaXMubW91bnRHbHlwaFRhYmxlKGNoYXJhY3RlcnNOYW1lKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IENoYXJhY3RlcnNTZWxlY3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q2hhcmFjdGVyc1NlbGVjdCBvbkNoYW5nZT17dGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYXJhY3RlcnNTZWxlY3QiLCJjaGFyYWN0ZXJzTmFtZSIsImdldENoYXJhY3RlcnNOYW1lIiwidW5tb3VudEdseXBoVGFibGUiLCJtb3VudEdseXBoVGFibGUiLCJjaGFyYWN0ZXJNYXBzIiwic2hvd0NoYXJhY3RlciIsImNoYXJhY3Rlck1hcCIsImdseXBoVGFibGUiLCJHbHlwaHNUYWJsZSIsIm1vdW50IiwiZ2x5cGhzVGFibGUiLCJnZXRHbHlwaHNUYWJsZSIsInVubW91bnQiLCJnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCIsImRpZE1vdW50IiwiY2hhcmFjdGVyc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0Q2hhcmFjdGVyc05hbWUiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDaGFyYWN0ZXJzU2VsZWN0Iiwib25DaGFuZ2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztvQkFQRzt5QkFDTzs2REFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDbkJHLHdCQUFBQSx1QkFBc0IsU0FBQ0MsT0FBT0M7WUFDNUIsSUFBTUMsbUJBQW1CRCxTQUNuQkUsaUJBQWlCRCxpQkFBaUJFLGlCQUFpQjtZQUV6RCxNQUFLQyxpQkFBaUI7WUFFdEIsTUFBS0MsZUFBZSxDQUFDSDtRQUN2Qjs7O2tCQVJtQlA7O1lBVW5CVSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCSCxjQUFjO2dCQUM1QixJQUF5QyxvQkFBQSxJQUFJLENBQUMsV0FBVyxFQUFqREksZ0JBQWlDLGtCQUFqQ0EsZUFBZUMsZ0JBQWtCLGtCQUFsQkEsZUFDakJDLGVBQWVGLGFBQWEsQ0FBQ0osZUFBZSxFQUM1Q08sMkJBRUUsb0JBQUNDLGVBQVc7b0JBQUNGLGNBQWNBO29CQUFjRCxlQUFlQTs7Z0JBSWhFLElBQUksQ0FBQ0ksS0FBSyxDQUFDRjtZQUNiOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1RLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2QyxJQUFJRCxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO2dCQUNmO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosYUFBYTtnQkFFakIsSUFBTU0sMkJBQTJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQ2pEQyxpQ0FBaUNGLHlCQUF5QkcsTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLCtCQUErQnZCLE1BQU1tQjtvQkFFM0NOLGFBQWFVLDhCQUErQixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRWQsZ0JBQWtCLElBQUksQ0FBQyxXQUFXLENBQWxDQSxlQUNGZSxrQkFBa0JDLE9BQU9DLElBQUksQ0FBQ2pCLGdCQUM5QmtCLHNCQUFzQjVCLE1BQU15QixrQkFDNUJuQixpQkFBaUJzQixxQkFBcUIsR0FBRztnQkFFL0MsSUFBSSxDQUFDbkIsZUFBZSxDQUFDSDtZQUN2Qjs7O1lBRUF1QixLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxtQkFBcUIsSUFBSSxDQUFDLFdBQVcsQ0FBckNBO2dCQUVSLHFCQUVFLG9CQUFDQTtvQkFBaUJDLFVBQVUsSUFBSSxDQUFDOUIsbUJBQW1COztZQUd4RDs7O1dBbEVtQkg7cUJBQWFrQyxhQUFPO0FBb0V2QyxpQkFwRW1CbEMsTUFvRVptQyxXQUFVO0FBRWpCLGlCQXRFbUJuQyxNQXNFWm9DLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=