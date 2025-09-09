"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SymbolicView;
    }
});
var _necessary = require("necessary");
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _glyphs = /*#__PURE__*/ _interop_require_default(require("../view/table/glyphs"));
var _symbolicCharacters = /*#__PURE__*/ _interop_require_default(require("./select/symbolicCharacters"));
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
var first = _necessary.arrayUtilities.first;
var SymbolicView = /*#__PURE__*/ function(View) {
    _inherits(SymbolicView, View);
    function SymbolicView() {
        _class_call_check(this, SymbolicView);
        var _this;
        _this = _call_super(this, SymbolicView, arguments), _define_property(_this, "selectChangeHandler", function(event, element) {
            var charactersSelect = element, charactersName = charactersSelect.getCharactersName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(charactersName);
        });
        return _this;
    }
    _create_class(SymbolicView, [
        {
            key: "mountGlyphTable",
            value: function mountGlyphTable(charactersName) {
                var symbolicCharactersMap = _index.symbolicCharactersMaps[charactersName], charactersMap = symbolicCharactersMap, glyphTable = /*#__PURE__*/ React.createElement(_glyphs.default, {
                    charactersMap: charactersMap
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
                var charactersMaps = _index.symbolicCharactersMaps, charactersNames = Object.keys(charactersMaps), firstCharactersName = first(charactersNames), charactersName = firstCharactersName; ///
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
                return [
                    /*#__PURE__*/ React.createElement(_symbolicCharacters.default, {
                        onChange: this.selectChangeHandler
                    })
                ];
            }
        }
    ]);
    return SymbolicView;
}(_view.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3ltYm9saWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgc3ltYm9saWNDaGFyYWN0ZXJzTWFwcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBHbHlwaHNUYWJsZSBmcm9tIFwiLi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QgZnJvbSBcIi4vc2VsZWN0L3N5bWJvbGljQ2hhcmFjdGVyc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ltYm9saWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHNlbGVjdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzU2VsZWN0ID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWUgPSBjaGFyYWN0ZXJzU2VsZWN0LmdldENoYXJhY3RlcnNOYW1lKCk7XG5cbiAgICB0aGlzLnVubW91bnRHbHlwaFRhYmxlKCk7XG5cbiAgICB0aGlzLm1vdW50R2x5cGhUYWJsZShjaGFyYWN0ZXJzTmFtZSk7XG4gIH1cblxuICBtb3VudEdseXBoVGFibGUoY2hhcmFjdGVyc05hbWUpIHtcbiAgICBjb25zdCBzeW1ib2xpY0NoYXJhY3RlcnNNYXAgPSBzeW1ib2xpY0NoYXJhY3RlcnNNYXBzW2NoYXJhY3RlcnNOYW1lXSxcbiAgICAgICAgICBjaGFyYWN0ZXJzTWFwID0gc3ltYm9saWNDaGFyYWN0ZXJzTWFwLFxuICAgICAgICAgIGdseXBoVGFibGUgPVxuXG4gICAgICAgICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyc01hcD17Y2hhcmFjdGVyc01hcH0gLz5cblxuICAgICAgICA7XG5cbiAgICB0aGlzLm1vdW50KGdseXBoVGFibGUpO1xuICB9XG5cbiAgdW5tb3VudEdseXBoVGFibGUoKSB7XG4gICAgY29uc3QgZ2x5cGhzVGFibGUgPSB0aGlzLmdldEdseXBoc1RhYmxlKCk7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudW5tb3VudChnbHlwaHNUYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzVGFibGUoKSB7XG4gICAgbGV0IGdseXBoVGFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwidGFibGUuZ2x5cGhzXCIpLFxuICAgICAgICAgIGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA9IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCA9IGZpcnN0KGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIGdseXBoVGFibGUgPSBmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoVGFibGU7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzTWFwcyA9IHN5bWJvbGljQ2hhcmFjdGVyc01hcHMsXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWVzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyc01hcHMpLFxuICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyc05hbWUgPSBmaXJzdChjaGFyYWN0ZXJzTmFtZXMpLFxuICAgICAgICAgIGNoYXJhY3RlcnNOYW1lID0gZmlyc3RDaGFyYWN0ZXJzTmFtZTsgLy8vXG5cbiAgICB0aGlzLm1vdW50R2x5cGhUYWJsZShjaGFyYWN0ZXJzTmFtZSk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3Qgb25DaGFuZ2U9e3RoaXMuc2VsZWN0Q2hhbmdlSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ltYm9saWNWaWV3IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlbGVjdENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFyYWN0ZXJzU2VsZWN0IiwiY2hhcmFjdGVyc05hbWUiLCJnZXRDaGFyYWN0ZXJzTmFtZSIsInVubW91bnRHbHlwaFRhYmxlIiwibW91bnRHbHlwaFRhYmxlIiwic3ltYm9saWNDaGFyYWN0ZXJzTWFwIiwic3ltYm9saWNDaGFyYWN0ZXJzTWFwcyIsImNoYXJhY3RlcnNNYXAiLCJnbHlwaFRhYmxlIiwiR2x5cGhzVGFibGUiLCJtb3VudCIsImdseXBoc1RhYmxlIiwiZ2V0R2x5cGhzVGFibGUiLCJ1bm1vdW50IiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQiLCJkaWRNb3VudCIsImNoYXJhY3RlcnNNYXBzIiwiY2hhcmFjdGVyc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0Q2hhcmFjdGVyc05hbWUiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJTeW1ib2xpY0NoYXJhY3RlcnNTZWxlY3QiLCJvbkNoYW5nZSIsIlZpZXciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVO3FCQUNROzJEQUV0Qjs2REFDTzt5RUFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDBCQUNuQkcsd0JBQUFBLHVCQUFzQixTQUFDQyxPQUFPQztZQUM1QixJQUFNQyxtQkFBbUJELFNBQ25CRSxpQkFBaUJELGlCQUFpQkUsaUJBQWlCO1lBRXpELE1BQUtDLGlCQUFpQjtZQUV0QixNQUFLQyxlQUFlLENBQUNIO1FBQ3ZCOzs7a0JBUm1CUDs7WUFVbkJVLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JILGNBQWM7Z0JBQzVCLElBQU1JLHdCQUF3QkMsNkJBQXNCLENBQUNMLGVBQWUsRUFDOURNLGdCQUFnQkYsdUJBQ2hCRywyQkFFRSxvQkFBQ0MsZUFBVztvQkFBQ0YsZUFBZUE7O2dCQUlwQyxJQUFJLENBQUNHLEtBQUssQ0FBQ0Y7WUFDYjs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUSxjQUFjLElBQUksQ0FBQ0MsY0FBYztnQkFFdkMsSUFBSUQsZ0JBQWdCLE1BQU07b0JBQ3hCLElBQUksQ0FBQ0UsT0FBTyxDQUFDRjtnQkFDZjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGFBQWE7Z0JBRWpCLElBQU1NLDJCQUEyQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLGlCQUNqREMsaUNBQWlDRix5QkFBeUJHLE1BQU07Z0JBRXRFLElBQUlELGlDQUFpQyxHQUFHO29CQUN0QyxJQUFNRSwrQkFBK0J2QixNQUFNbUI7b0JBRTNDTixhQUFhVSw4QkFBK0IsR0FBRztnQkFDakQ7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUJkLDZCQUFzQixFQUN2Q2Usa0JBQWtCQyxPQUFPQyxJQUFJLENBQUNILGlCQUM5Qkksc0JBQXNCN0IsTUFBTTBCLGtCQUM1QnBCLGlCQUFpQnVCLHFCQUFxQixHQUFHO2dCQUUvQyxJQUFJLENBQUNwQixlQUFlLENBQUNIO1lBQ3ZCOzs7WUFFQXdCLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQywyQkFBd0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDL0IsbUJBQW1COztpQkFFN0Q7WUFDSDs7O1dBaEVtQkg7RUFBcUJtQyxhQUFJIn0=