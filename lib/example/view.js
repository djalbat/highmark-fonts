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
var _collectionMap = /*#__PURE__*/ _interop_require_wildcard(require("./collectionMap"));
var _collection = /*#__PURE__*/ _interop_require_default(require("./view/select/collection"));
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
        _this = _call_super(this, View, arguments), _define_property(_this, "collectionSelectChangeHandler", function(event, element) {
            var collectionSelect = element, collectionName = collectionSelect.getCollectionName();
            _this.unmountGlyphTable();
            _this.mountGlyphTable(collectionName);
        });
        return _this;
    }
    _create_class(View, [
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
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBHbHlwaHNUYWJsZSBmcm9tIFwiLi92aWV3L3RhYmxlL2dseXBoc1wiO1xuaW1wb3J0IGNvbGxlY3Rpb25NYXAgZnJvbSBcIi4vY29sbGVjdGlvbk1hcFwiO1xuaW1wb3J0IENvbGxlY3Rpb25TZWxlY3QgZnJvbSBcIi4vdmlldy9zZWxlY3QvY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgeyBjb2xsZWN0aW9uTmFtZXMgfSBmcm9tIFwiLi9jb2xsZWN0aW9uTWFwXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbGxlY3Rpb25TZWxlY3RDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvblNlbGVjdCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvblNlbGVjdC5nZXRDb2xsZWN0aW9uTmFtZSgpO1xuXG4gICAgdGhpcy51bm1vdW50R2x5cGhUYWJsZSgpO1xuXG4gICAgdGhpcy5tb3VudEdseXBoVGFibGUoY29sbGVjdGlvbk5hbWUpO1xuICB9XG5cbiAgbW91bnRHbHlwaFRhYmxlKGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25NYXBbY29sbGVjdGlvbk5hbWVdLFxuICAgICAgICAgIHsgY2hhcmFjdGVyTWFwIH0gPSBjb2xsZWN0aW9uLFxuICAgICAgICAgIGdseXBoVGFibGUgPVxuXG4gICAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e2NoYXJhY3Rlck1hcH0gLz47XG5cbiAgICB0aGlzLm1vdW50KGdseXBoVGFibGUpO1xuICB9XG5cbiAgdW5tb3VudEdseXBoVGFibGUoKSB7XG4gICAgY29uc3QgZ2x5cGhzVGFibGUgPSB0aGlzLmdldEdseXBoc1RhYmxlKCk7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudW5tb3VudChnbHlwaHNUYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzVGFibGUoKSB7XG4gICAgbGV0IGdseXBoVGFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwidGFibGUuZ2x5cGhzXCIpLFxuICAgICAgICAgIGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50c0xlbmd0aCA9IGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCA9IGZpcnN0KGdseXBoc1RhYmxlQ2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIGdseXBoVGFibGUgPSBmaXJzdEdseXBoc1RhYmxlQ2hpbGRFbGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoVGFibGU7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBmaXJzdENvbGxlY3Rpb25OYW1lID0gZmlyc3QoY29sbGVjdGlvbk5hbWVzKSxcbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGZpcnN0Q29sbGVjdGlvbk5hbWU7IC8vL1xuXG4gICAgdGhpcy5tb3VudEdseXBoVGFibGUoY29sbGVjdGlvbk5hbWUpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sbGVjdGlvblNlbGVjdCBvbkNoYW5nZT17dGhpcy5jb2xsZWN0aW9uU2VsZWN0Q2hhbmdlSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVmlldyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb2xsZWN0aW9uU2VsZWN0Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbGxlY3Rpb25TZWxlY3QiLCJjb2xsZWN0aW9uTmFtZSIsImdldENvbGxlY3Rpb25OYW1lIiwidW5tb3VudEdseXBoVGFibGUiLCJtb3VudEdseXBoVGFibGUiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbk1hcCIsImNoYXJhY3Rlck1hcCIsImdseXBoVGFibGUiLCJHbHlwaHNUYWJsZSIsIm1vdW50IiwiZ2x5cGhzVGFibGUiLCJnZXRHbHlwaHNUYWJsZSIsInVubW91bnQiLCJnbHlwaHNUYWJsZUNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2x5cGhzVGFibGVDaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RHbHlwaHNUYWJsZUNoaWxkRWxlbWVudCIsImRpZE1vdW50IiwiZmlyc3RDb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb25OYW1lcyIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbGxlY3Rpb25TZWxlY3QiLCJvbkNoYW5nZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O29CQVhHO3lCQUNPOzZEQUVQO3FFQUNFO2lFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ25CRyx3QkFBQUEsaUNBQWdDLFNBQUNDLE9BQU9DO1lBQ3RDLElBQU1DLG1CQUFtQkQsU0FDbkJFLGlCQUFpQkQsaUJBQWlCRSxpQkFBaUI7WUFFekQsTUFBS0MsaUJBQWlCO1lBRXRCLE1BQUtDLGVBQWUsQ0FBQ0g7UUFDdkI7OztrQkFSbUJQOztZQVVuQlUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsY0FBYztnQkFDNUIsSUFBTUksYUFBYUMsc0JBQWEsQ0FBQ0wsZUFBZSxFQUMxQyxBQUFFTSxlQUFpQkYsV0FBakJFLGNBQ0ZDLDJCQUVGLG9CQUFDQyxlQUFXO29CQUFDRixjQUFjQTs7Z0JBRS9CLElBQUksQ0FBQ0csS0FBSyxDQUFDRjtZQUNiOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1RLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2QyxJQUFJRCxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBSSxDQUFDRSxPQUFPLENBQUNGO2dCQUNmO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosYUFBYTtnQkFFakIsSUFBTU0sMkJBQTJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQ2pEQyxpQ0FBaUNGLHlCQUF5QkcsTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLCtCQUErQnZCLE1BQU1tQjtvQkFFM0NOLGFBQWFVLDhCQUErQixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQnpCLE1BQU0wQiw4QkFBZSxHQUMzQ3BCLGlCQUFpQm1CLHFCQUFxQixHQUFHO2dCQUUvQyxJQUFJLENBQUNoQixlQUFlLENBQUNIO1lBQ3ZCOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxtQkFBZ0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDNUIsNkJBQTZCOztpQkFFL0Q7WUFDSDs7O1dBNURtQkg7cUJBQWFnQyxhQUFPO0FBOER2QyxpQkE5RG1CaEMsTUE4RFppQyxXQUFVO0FBRWpCLGlCQWhFbUJqQyxNQWdFWmtDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=