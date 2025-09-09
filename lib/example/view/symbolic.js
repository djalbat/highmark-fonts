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
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _glyphs = /*#__PURE__*/ _interop_require_default(require("../view/table/glyphs"));
var _collectionMap = /*#__PURE__*/ _interop_require_wildcard(require("../collectionMap"));
var _collection = /*#__PURE__*/ _interop_require_default(require("../view/select/collection"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
        _this = _call_super(this, SymbolicView, arguments), _define_property(_this, "collectionSelectChangeHandler", function(event, element) {
            var collectionSelect = element, collectionName = collectionSelect.getCollectionName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(collectionName);
        });
        return _this;
    }
    _create_class(SymbolicView, [
        {
            key: "mountGlyphTable",
            value: function mountGlyphTable(collectionName) {
                var collection = _collectionMap.default[collectionName], characterMap = collection.characterMap, glyphTable = /*#__PURE__*/ React.createElement(_glyphs.default, {
                    characterMap: characterMap
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
                var firstCollectionName = first(_collectionMap.collectionNames), collectionName = firstCollectionName; ///
                this.mountGlyphTable(collectionName);
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
                    /*#__PURE__*/ React.createElement(_collection.default, {
                        onChange: this.collectionSelectChangeHandler
                    })
                ];
            }
        }
    ]);
    return SymbolicView;
}(_view.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3ltYm9saWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IEdseXBoc1RhYmxlIGZyb20gXCIuLi92aWV3L3RhYmxlL2dseXBoc1wiO1xuaW1wb3J0IGNvbGxlY3Rpb25NYXAgZnJvbSBcIi4uL2NvbGxlY3Rpb25NYXBcIjtcbmltcG9ydCBDb2xsZWN0aW9uU2VsZWN0IGZyb20gXCIuLi92aWV3L3NlbGVjdC9jb2xsZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNvbGxlY3Rpb25OYW1lcyB9IGZyb20gXCIuLi9jb2xsZWN0aW9uTWFwXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeW1ib2xpY1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgY29sbGVjdGlvblNlbGVjdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uU2VsZWN0ID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uU2VsZWN0LmdldENvbGxlY3Rpb25OYW1lKCk7XG5cbiAgICB0aGlzLnVubW91bnRHbHlwaFRhYmxlKCk7XG5cbiAgICB0aGlzLm1vdW50R2x5cGhUYWJsZShjb2xsZWN0aW9uTmFtZSk7XG4gIH1cblxuICBtb3VudEdseXBoVGFibGUoY29sbGVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbk1hcFtjb2xsZWN0aW9uTmFtZV0sXG4gICAgICAgICAgeyBjaGFyYWN0ZXJNYXAgfSA9IGNvbGxlY3Rpb24sXG4gICAgICAgICAgZ2x5cGhUYWJsZSA9XG5cbiAgICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17Y2hhcmFjdGVyTWFwfSAvPjtcblxuICAgIHRoaXMubW91bnQoZ2x5cGhUYWJsZSk7XG4gIH1cblxuICB1bm1vdW50R2x5cGhUYWJsZSgpIHtcbiAgICBjb25zdCBnbHlwaHNUYWJsZSA9IHRoaXMuZ2V0R2x5cGhzVGFibGUoKTtcblxuICAgIGlmIChnbHlwaHNUYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy51bm1vdW50KGdseXBoc1RhYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXRHbHlwaHNUYWJsZSgpIHtcbiAgICBsZXQgZ2x5cGhUYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoXCJ0YWJsZS5nbHlwaHNcIiksXG4gICAgICAgICAgZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoID0gZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50ID0gZmlyc3QoZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzKTtcblxuICAgICAgZ2x5cGhUYWJsZSA9IGZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZ2x5cGhUYWJsZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGZpcnN0Q29sbGVjdGlvbk5hbWUgPSBmaXJzdChjb2xsZWN0aW9uTmFtZXMpLFxuICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gZmlyc3RDb2xsZWN0aW9uTmFtZTsgLy8vXG5cbiAgICB0aGlzLm1vdW50R2x5cGhUYWJsZShjb2xsZWN0aW9uTmFtZSk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xsZWN0aW9uU2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmNvbGxlY3Rpb25TZWxlY3RDaGFuZ2VIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTeW1ib2xpY1ZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29sbGVjdGlvblNlbGVjdENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb2xsZWN0aW9uU2VsZWN0IiwiY29sbGVjdGlvbk5hbWUiLCJnZXRDb2xsZWN0aW9uTmFtZSIsInVubW91bnRHbHlwaFRhYmxlIiwibW91bnRHbHlwaFRhYmxlIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25NYXAiLCJjaGFyYWN0ZXJNYXAiLCJnbHlwaFRhYmxlIiwiR2x5cGhzVGFibGUiLCJtb3VudCIsImdseXBoc1RhYmxlIiwiZ2V0R2x5cGhzVGFibGUiLCJ1bm1vdW50IiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQiLCJkaWRNb3VudCIsImZpcnN0Q29sbGVjdGlvbk5hbWUiLCJjb2xsZWN0aW9uTmFtZXMiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2xsZWN0aW9uU2VsZWN0Iiwib25DaGFuZ2UiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsyREFFZDs2REFDTztxRUFDRTtpRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsMEJBQ25CRyx3QkFBQUEsaUNBQWdDLFNBQUNDLE9BQU9DO1lBQ3RDLElBQU1DLG1CQUFtQkQsU0FDbkJFLGlCQUFpQkQsaUJBQWlCRSxpQkFBaUI7WUFFekQsTUFBS0MsaUJBQWlCO1lBRXRCLE1BQUtDLGVBQWUsQ0FBQ0g7UUFDdkI7OztrQkFSbUJQOztZQVVuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsY0FBYztnQkFDNUIsSUFBTUksYUFBYUMsc0JBQWEsQ0FBQ0wsZUFBZSxFQUMxQyxBQUFFTSxlQUFpQkYsV0FBakJFLGNBQ0ZDLDJCQUVGLG9CQUFDQyxlQUFXO29CQUFDRixjQUFjQTs7Z0JBRS9CLElBQUksQ0FBQ0csS0FBSyxDQUFDRjtZQUNiOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1RLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2QyxJQUFJRCxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO2dCQUNmO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosYUFBYTtnQkFFakIsSUFBTU0sMkJBQTJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQ2pEQyxpQ0FBaUNGLHlCQUF5QkcsTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLCtCQUErQnZCLE1BQU1tQjtvQkFFM0NOLGFBQWFVLDhCQUErQixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQnpCLE1BQU0wQiw4QkFBZSxHQUMzQ3BCLGlCQUFpQm1CLHFCQUFxQixHQUFHO2dCQUUvQyxJQUFJLENBQUNoQixlQUFlLENBQUNIO1lBQ3ZCOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxtQkFBZ0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDNUIsNkJBQTZCOztpQkFFL0Q7WUFDSDs7O1dBNURtQkg7RUFBcUJnQyxhQUFJIn0=