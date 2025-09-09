"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AlphaNumericView;
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
var AlphaNumericView = /*#__PURE__*/ function(View) {
    _inherits(AlphaNumericView, View);
    function AlphaNumericView() {
        _class_call_check(this, AlphaNumericView);
        var _this;
        _this = _call_super(this, AlphaNumericView, arguments), _define_property(_this, "collectionSelectChangeHandler", function(event, element) {
            var collectionSelect = element, collectionName = collectionSelect.getCollectionName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(collectionName);
        });
        return _this;
    }
    _create_class(AlphaNumericView, [
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
    return AlphaNumericView;
}(_view.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYWxwaGFOdW1lcmljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCBHbHlwaHNUYWJsZSBmcm9tIFwiLi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBjb2xsZWN0aW9uTWFwIGZyb20gXCIuLi9jb2xsZWN0aW9uTWFwXCI7XG5pbXBvcnQgQ29sbGVjdGlvblNlbGVjdCBmcm9tIFwiLi4vdmlldy9zZWxlY3QvY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBjb2xsZWN0aW9uTmFtZXMgfSBmcm9tIFwiLi4vY29sbGVjdGlvbk1hcFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGFOdW1lcmljVmlldyBleHRlbmRzIFZpZXcge1xuICBjb2xsZWN0aW9uU2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25TZWxlY3QgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25TZWxlY3QuZ2V0Q29sbGVjdGlvbk5hbWUoKTtcblxuICAgIHRoaXMudW5tb3VudEdseXBoVGFibGUoKTtcblxuICAgIHRoaXMubW91bnRHbHlwaFRhYmxlKGNvbGxlY3Rpb25OYW1lKTtcbiAgfVxuXG4gIG1vdW50R2x5cGhUYWJsZShjb2xsZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uTWFwW2NvbGxlY3Rpb25OYW1lXSxcbiAgICAgICAgICB7IGNoYXJhY3Rlck1hcCB9ID0gY29sbGVjdGlvbixcbiAgICAgICAgICBnbHlwaFRhYmxlID1cblxuICAgICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaGFyYWN0ZXJNYXB9IC8+O1xuXG4gICAgdGhpcy5tb3VudChnbHlwaFRhYmxlKTtcbiAgfVxuXG4gIHVubW91bnRHbHlwaFRhYmxlKCkge1xuICAgIGNvbnN0IGdseXBoc1RhYmxlID0gdGhpcy5nZXRHbHlwaHNUYWJsZSgpO1xuXG4gICAgaWYgKGdseXBoc1RhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnQoZ2x5cGhzVGFibGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEdseXBoc1RhYmxlKCkge1xuICAgIGxldCBnbHlwaFRhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cyhcInRhYmxlLmdseXBoc1wiKSxcbiAgICAgICAgICBnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHNMZW5ndGggPSBnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQgPSBmaXJzdChnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBnbHlwaFRhYmxlID0gZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaFRhYmxlO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgZmlyc3RDb2xsZWN0aW9uTmFtZSA9IGZpcnN0KGNvbGxlY3Rpb25OYW1lcyksXG4gICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBmaXJzdENvbGxlY3Rpb25OYW1lOyAvLy9cblxuICAgIHRoaXMubW91bnRHbHlwaFRhYmxlKGNvbGxlY3Rpb25OYW1lKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbGxlY3Rpb25TZWxlY3Qgb25DaGFuZ2U9e3RoaXMuY29sbGVjdGlvblNlbGVjdENoYW5nZUhhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFscGhhTnVtZXJpY1ZpZXciLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29sbGVjdGlvblNlbGVjdENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb2xsZWN0aW9uU2VsZWN0IiwiY29sbGVjdGlvbk5hbWUiLCJnZXRDb2xsZWN0aW9uTmFtZSIsInVubW91bnRHbHlwaFRhYmxlIiwibW91bnRHbHlwaFRhYmxlIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25NYXAiLCJjaGFyYWN0ZXJNYXAiLCJnbHlwaFRhYmxlIiwiR2x5cGhzVGFibGUiLCJtb3VudCIsImdseXBoc1RhYmxlIiwiZ2V0R2x5cGhzVGFibGUiLCJ1bm1vdW50IiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0R2x5cGhzVGFibGVDaGlsZEVsZW1lbnQiLCJkaWRNb3VudCIsImZpcnN0Q29sbGVjdGlvbk5hbWUiLCJjb2xsZWN0aW9uTmFtZXMiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2xsZWN0aW9uU2VsZWN0Iiwib25DaGFuZ2UiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsyREFFZDs2REFDTztxRUFDRTtpRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsOEJBQ25CRyx3QkFBQUEsaUNBQWdDLFNBQUNDLE9BQU9DO1lBQ3RDLElBQU1DLG1CQUFtQkQsU0FDbkJFLGlCQUFpQkQsaUJBQWlCRSxpQkFBaUI7WUFFekQsTUFBS0MsaUJBQWlCO1lBRXRCLE1BQUtDLGVBQWUsQ0FBQ0g7UUFDdkI7OztrQkFSbUJQOztZQVVuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsY0FBYztnQkFDNUIsSUFBTUksYUFBYUMsc0JBQWEsQ0FBQ0wsZUFBZSxFQUMxQyxBQUFFTSxlQUFpQkYsV0FBakJFLGNBQ0ZDLDJCQUVGLG9CQUFDQyxlQUFXO29CQUFDRixjQUFjQTs7Z0JBRS9CLElBQUksQ0FBQ0csS0FBSyxDQUFDRjtZQUNiOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1RLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2QyxJQUFJRCxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO2dCQUNmO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosYUFBYTtnQkFFakIsSUFBTU0sMkJBQTJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQ2pEQyxpQ0FBaUNGLHlCQUF5QkcsTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLCtCQUErQnZCLE1BQU1tQjtvQkFFM0NOLGFBQWFVLDhCQUErQixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQnpCLE1BQU0wQiw4QkFBZSxHQUMzQ3BCLGlCQUFpQm1CLHFCQUFxQixHQUFHO2dCQUUvQyxJQUFJLENBQUNoQixlQUFlLENBQUNIO1lBQ3ZCOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxtQkFBZ0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDNUIsNkJBQTZCOztpQkFFL0Q7WUFDSDs7O1dBNURtQkg7RUFBeUJnQyxhQUFJIn0=