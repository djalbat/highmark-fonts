"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlyphsAsSVGsView;
    }
});
var _index = require("../../index");
var _necessary = require("necessary");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
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
var get = _necessary.ajaxUtilities.get, svgFromCodePoint = _index.svgUtilities.svgFromCodePoint;
var GlyphsAsSVGsView = /*#__PURE__*/ function(View) {
    _inherits(GlyphsAsSVGsView, View);
    function GlyphsAsSVGsView() {
        _class_call_check(this, GlyphsAsSVGsView);
        return _call_super(this, GlyphsAsSVGsView, arguments);
    }
    _create_class(GlyphsAsSVGsView, [
        {
            key: "didMount",
            value: function didMount() {
                var _this = this;
                var codePoint = 0x1d538, fontName = "STIXTwoMath-Regular.otf", host = "http://localhost:8888/", uri = "ttf/".concat(fontName), query = {}, headers = {
                    "accept": "font/ttf"
                }, responseType = "arraybuffer";
                get(host, uri, query, headers, responseType, function(arrayBuffer) {
                    var svg = svgFromCodePoint(codePoint, arrayBuffer);
                    _this.mount(svg);
                });
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return GlyphsAsSVGsView;
}(_view.default);
_define_property(GlyphsAsSVGsView, "defaultProperties", {
    className: "glyphs-as-svgs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZ2x5cGhzQXNTVkdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdmdVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5pbXBvcnQgeyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGdldCB9ID0gYWpheFV0aWxpdGllcyxcbiAgICAgIHsgc3ZnRnJvbUNvZGVQb2ludCB9ID0gc3ZnVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHlwaHNBc1NWR3NWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvZGVQb2ludCA9IDB4MWQ1MzgsXG4gICAgICAgICAgZm9udE5hbWUgPSBcIlNUSVhUd29NYXRoLVJlZ3VsYXIub3RmXCIsXG4gICAgICAgICAgaG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L1wiLFxuICAgICAgICAgIHVyaSA9IGB0dGYvJHtmb250TmFtZX1gLFxuICAgICAgICAgIHF1ZXJ5ID0ge30sXG4gICAgICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgICAgIFwiYWNjZXB0XCI6IFwiZm9udC90dGZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgZ2V0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgKGFycmF5QnVmZmVyKSA9PiB7XG4gICAgICBjb25zdCBzdmcgPSBzdmdGcm9tQ29kZVBvaW50KGNvZGVQb2ludCwgYXJyYXlCdWZmZXIpO1xuXG4gICAgICB0aGlzLm1vdW50KHN2ZylcbiAgICB9KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaHMtYXMtc3Znc1wiLFxuICB9O1xufSJdLCJuYW1lcyI6WyJHbHlwaHNBc1NWR3NWaWV3IiwiZ2V0IiwiYWpheFV0aWxpdGllcyIsInN2Z0Zyb21Db2RlUG9pbnQiLCJzdmdVdGlsaXRpZXMiLCJkaWRNb3VudCIsImNvZGVQb2ludCIsImZvbnROYW1lIiwiaG9zdCIsInVyaSIsInF1ZXJ5IiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsImFycmF5QnVmZmVyIiwic3ZnIiwibW91bnQiLCJ3aWxsVW5tb3VudCIsIlZpZXciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7cUJBUlE7eUJBQ0M7MkRBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sQUFBRUMsTUFBUUMsd0JBQWEsQ0FBckJELEtBQ0YsQUFBRUUsbUJBQXFCQyxtQkFBWSxDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ILGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU1DLFlBQVksU0FDWkMsV0FBVywyQkFDWEMsT0FBTywwQkFDUEMsTUFBTSxBQUFDLE9BQWUsT0FBVEYsV0FDYkcsUUFBUSxDQUFDLEdBQ1RDLFVBQVU7b0JBQ1IsVUFBVTtnQkFDWixHQUNBQyxlQUFlO2dCQUVyQlgsSUFBSU8sTUFBTUMsS0FBS0MsT0FBT0MsU0FBU0MsY0FBYyxTQUFDQztvQkFDNUMsSUFBTUMsTUFBTVgsaUJBQWlCRyxXQUFXTztvQkFFeEMsTUFBS0UsS0FBSyxDQUFDRDtnQkFDYjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7V0FyQm1CaEI7RUFBeUJpQixhQUFJO0FBdUJoRCxpQkF2Qm1CakIsa0JBdUJaa0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==