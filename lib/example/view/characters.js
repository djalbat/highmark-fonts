"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CharactersView;
    }
});
var _necessary = require("necessary");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _glyphs = /*#__PURE__*/ _interop_require_default(require("../view/table/glyphs"));
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
var CharactersView = /*#__PURE__*/ function(View) {
    _inherits(CharactersView, View);
    function CharactersView() {
        _class_call_check(this, CharactersView);
        var _this;
        _this = _call_super(this, CharactersView, arguments), _define_property(_this, "selectChangeHandler", function(event, element) {
            var charactersSelect = element, charactersName = charactersSelect.getCharactersName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(charactersName);
        });
        return _this;
    }
    _create_class(CharactersView, [
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
    return CharactersView;
}(_view.default);
_define_property(CharactersView, "defaultProperties", {
    className: "characters"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY2hhcmFjdGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgR2x5cGhzVGFibGUgZnJvbSBcIi4uL3ZpZXcvdGFibGUvZ2x5cGhzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJzVmlldyBleHRlbmRzIFZpZXcge1xuICBzZWxlY3RDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hhcmFjdGVyc1NlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNoYXJhY3RlcnNOYW1lID0gY2hhcmFjdGVyc1NlbGVjdC5nZXRDaGFyYWN0ZXJzTmFtZSgpO1xuXG4gICAgdGhpcy51bm1vdW50R2x5cGhUYWJsZSgpO1xuXG4gICAgdGhpcy5tb3VudEdseXBoVGFibGUoY2hhcmFjdGVyc05hbWUpO1xuICB9XG5cbiAgbW91bnRHbHlwaFRhYmxlKGNoYXJhY3RlcnNOYW1lKSB7XG4gICAgY29uc3QgeyBjaGFyYWN0ZXJNYXBzLCBzaG93Q2hhcmFjdGVyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNoYXJhY3Rlck1hcCA9IGNoYXJhY3Rlck1hcHNbY2hhcmFjdGVyc05hbWVdLFxuICAgICAgICAgIGdseXBoVGFibGUgPVxuXG4gICAgICAgICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaGFyYWN0ZXJNYXB9IHNob3dDaGFyYWN0ZXI9e3Nob3dDaGFyYWN0ZXJ9IC8+XG5cbiAgICAgICAgICA7XG5cbiAgICB0aGlzLm1vdW50KGdseXBoVGFibGUpO1xuICB9XG5cbiAgdW5tb3VudEdseXBoVGFibGUoKSB7XG4gICAgY29uc3QgZ2x5cGhzVGFibGUgPSB0aGlzLmdldEdseXBoc1RhYmxlKCk7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudW5tb3VudChnbHlwaHNUYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzVGFibGUoKSB7XG4gICAgbGV0IGdseXBoVGFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwidGFibGUuZ2x5cGhzXCIpLFxuICAgICAgICAgIGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA9IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCA9IGZpcnN0KGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIGdseXBoVGFibGUgPSBmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoVGFibGU7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNoYXJhY3Rlck1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWVzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyTWFwcyksXG4gICAgICAgICAgZmlyc3RDaGFyYWN0ZXJzTmFtZSA9IGZpcnN0KGNoYXJhY3RlcnNOYW1lcyksXG4gICAgICAgICAgY2hhcmFjdGVyc05hbWUgPSBmaXJzdENoYXJhY3RlcnNOYW1lOyAvLy9cblxuICAgIHRoaXMubW91bnRHbHlwaFRhYmxlKGNoYXJhY3RlcnNOYW1lKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IENoYXJhY3RlcnNTZWxlY3QgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q2hhcmFjdGVyc1NlbGVjdCBvbkNoYW5nZT17dGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2hhcmFjdGVyc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyc1ZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYXJhY3RlcnNTZWxlY3QiLCJjaGFyYWN0ZXJzTmFtZSIsImdldENoYXJhY3RlcnNOYW1lIiwidW5tb3VudEdseXBoVGFibGUiLCJtb3VudEdseXBoVGFibGUiLCJjaGFyYWN0ZXJNYXBzIiwic2hvd0NoYXJhY3RlciIsImNoYXJhY3Rlck1hcCIsImdseXBoVGFibGUiLCJHbHlwaHNUYWJsZSIsIm1vdW50IiwiZ2x5cGhzVGFibGUiLCJnZXRHbHlwaHNUYWJsZSIsInVubW91bnQiLCJnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCIsImRpZE1vdW50IiwiY2hhcmFjdGVyc05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZpcnN0Q2hhcmFjdGVyc05hbWUiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDaGFyYWN0ZXJzU2VsZWN0Iiwib25DaGFuZ2UiLCJWaWV3IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVOzJEQUVkOzZEQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsNEJBQ25CRyx3QkFBQUEsdUJBQXNCLFNBQUNDLE9BQU9DO1lBQzVCLElBQU1DLG1CQUFtQkQsU0FDbkJFLGlCQUFpQkQsaUJBQWlCRSxpQkFBaUI7WUFFekQsTUFBS0MsaUJBQWlCO1lBRXRCLE1BQUtDLGVBQWUsQ0FBQ0g7UUFDdkI7OztrQkFSbUJQOztZQVVuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsY0FBYztnQkFDNUIsSUFBeUMsb0JBQUEsSUFBSSxDQUFDLFdBQVcsRUFBakRJLGdCQUFpQyxrQkFBakNBLGVBQWVDLGdCQUFrQixrQkFBbEJBLGVBQ2pCQyxlQUFlRixhQUFhLENBQUNKLGVBQWUsRUFDNUNPLDJCQUVFLG9CQUFDQyxlQUFXO29CQUFDRixjQUFjQTtvQkFBY0QsZUFBZUE7O2dCQUloRSxJQUFJLENBQUNJLEtBQUssQ0FBQ0Y7WUFDYjs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUSxjQUFjLElBQUksQ0FBQ0MsY0FBYztnQkFFdkMsSUFBSUQsZ0JBQWdCLE1BQU07b0JBQ3hCLElBQUksQ0FBQ0UsT0FBTyxDQUFDRjtnQkFDZjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGFBQWE7Z0JBRWpCLElBQU1NLDJCQUEyQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLGlCQUNqREMsaUNBQWlDRix5QkFBeUJHLE1BQU07Z0JBRXRFLElBQUlELGlDQUFpQyxHQUFHO29CQUN0QyxJQUFNRSwrQkFBK0J2QixNQUFNbUI7b0JBRTNDTixhQUFhVSw4QkFBK0IsR0FBRztnQkFDakQ7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVkLGdCQUFrQixJQUFJLENBQUMsV0FBVyxDQUFsQ0EsZUFDRmUsa0JBQWtCQyxPQUFPQyxJQUFJLENBQUNqQixnQkFDOUJrQixzQkFBc0I1QixNQUFNeUIsa0JBQzVCbkIsaUJBQWlCc0IscUJBQXFCLEdBQUc7Z0JBRS9DLElBQUksQ0FBQ25CLGVBQWUsQ0FBQ0g7WUFDdkI7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsbUJBQXFCLElBQUksQ0FBQyxXQUFXLENBQXJDQTtnQkFFUixxQkFFRSxvQkFBQ0E7b0JBQWlCQyxVQUFVLElBQUksQ0FBQzlCLG1CQUFtQjs7WUFHeEQ7OztXQWxFbUJIO0VBQXVCa0MsYUFBSTtBQW9FOUMsaUJBcEVtQmxDLGdCQW9FWm1DLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=