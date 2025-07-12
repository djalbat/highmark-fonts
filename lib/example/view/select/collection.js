"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _collectionMap = /*#__PURE__*/ _interop_require_wildcard(require("../../collectionMap"));
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 32rem;\n  margin: 1rem;\n  border: 1px solid black;\n  padding: 0.25rem;\n  font-size: 2rem;\n  font-family: serif;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CollectionSelect = /*#__PURE__*/ function(Select) {
    _inherits(CollectionSelect, Select);
    function CollectionSelect() {
        _class_call_check(this, CollectionSelect);
        return _call_super(this, CollectionSelect, arguments);
    }
    _create_class(CollectionSelect, [
        {
            key: "getCollectionName",
            value: function getCollectionName() {
                var value = this.getValue(), collectionName = value; ///
                return collectionName;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var options = _collectionMap.collectionNames.map(function(collectionName, index) {
                    var collection = _collectionMap.default[collectionName], title = collection.title, value = collectionName, html = title; ///
                    return /*#__PURE__*/ React.createElement("option", {
                        value: value
                    }, html);
                }), childElements = options; ///
                return childElements;
            }
        }
    ]);
    return CollectionSelect;
}(_easy.Select);
_define_property(CollectionSelect, "defaultProperties", {
    className: "collections"
});
var _default = (0, _easywithstyle.default)(CollectionSelect)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2NvbGxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb2xsZWN0aW9uTWFwIGZyb20gXCIuLi8uLi9jb2xsZWN0aW9uTWFwXCI7XG5cbmltcG9ydCB7IGNvbGxlY3Rpb25OYW1lcyB9IGZyb20gXCIuLi8uLi9jb2xsZWN0aW9uTWFwXCI7XG5cbmNsYXNzIENvbGxlY3Rpb25TZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXRDb2xsZWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb2xsZWN0aW9uTmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNvbGxlY3Rpb25OYW1lcy5tYXAoKGNvbGxlY3Rpb25OYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25NYXBbY29sbGVjdGlvbk5hbWVdLFxuICAgICAgICAgICAgICAgICAgeyB0aXRsZSB9ID0gY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29sbGVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgaHRtbCA9IHRpdGxlOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0+e2h0bWx9PC9vcHRpb24+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gb3B0aW9uczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb25zXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sbGVjdGlvblNlbGVjdClgXG5cbiAgd2lkdGg6IDMycmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNvbGxlY3Rpb25TZWxlY3QiLCJnZXRDb2xsZWN0aW9uTmFtZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb2xsZWN0aW9uTmFtZSIsImNoaWxkRWxlbWVudHMiLCJvcHRpb25zIiwiY29sbGVjdGlvbk5hbWVzIiwibWFwIiwiaW5kZXgiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbk1hcCIsInRpdGxlIiwiaHRtbCIsIm9wdGlvbiIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5Q0E7OztlQUFBOzs7b0VBdkNzQjtvQkFFQztxRUFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGlCQUFpQkYsT0FBTyxHQUFHO2dCQUVqQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLDhCQUFlLENBQUNDLEdBQUcsQ0FBQyxTQUFDSixnQkFBZ0JLO29CQUM3QyxJQUFNQyxhQUFhQyxzQkFBYSxDQUFDUCxlQUFlLEVBQzFDLEFBQUVRLFFBQVVGLFdBQVZFLE9BQ0ZWLFFBQVFFLGdCQUNSUyxPQUFPRCxPQUFPLEdBQUc7b0JBRXZCLHFCQUVFLG9CQUFDRTt3QkFBT1osT0FBT0E7dUJBQVFXO2dCQUczQixJQUNBUixnQkFBZ0JDLFNBQVUsR0FBRztnQkFFbkMsT0FBT0Q7WUFDVDs7O1dBeEJJTDtFQUF5QmUsWUFBTTtBQTBCbkMsaUJBMUJJZixrQkEwQkdnQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNsQiJ9