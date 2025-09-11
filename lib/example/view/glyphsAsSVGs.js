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
var get = _necessary.ajaxUtilities.get, characterToSVG = _index.svgUtilities.characterToSVG;
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
                var character = "A", fontName = "cmunbbx.ttf", host = "http://localhost:8888/", uri = "ttf/".concat(fontName), query = {}, headers = {
                    "accept": "font/ttf"
                };
                get(host, uri, query, headers, function(fontFileContent) {
                    var SVG = characterToSVG(character, fontFileContent);
                    _this.mount(/*#__PURE__*/ React.createElement(SVG, null));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZ2x5cGhzQXNTVkdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdmdVdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5pbXBvcnQgeyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5jb25zdCB7IGdldCB9ID0gYWpheFV0aWxpdGllcyxcbiAgICAgIHsgY2hhcmFjdGVyVG9TVkcgfSA9IHN2Z1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2x5cGhzQXNTVkdzVmlldyBleHRlbmRzIFZpZXcge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBcIkFcIixcbiAgICAgICAgICBmb250TmFtZSA9IFwiY211bmJieC50dGZcIixcbiAgICAgICAgICBob3N0ID0gXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvXCIsXG4gICAgICAgICAgdXJpID0gYHR0Zi8ke2ZvbnROYW1lfWAsXG4gICAgICAgICAgcXVlcnkgPSB7fSxcbiAgICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgXCJhY2NlcHRcIjogXCJmb250L3R0ZlwiXG4gICAgICAgICAgfTtcblxuICAgIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCAoZm9udEZpbGVDb250ZW50KSA9PiB7XG4gICAgICBjb25zdCBTVkcgPSBjaGFyYWN0ZXJUb1NWRyhjaGFyYWN0ZXIsIGZvbnRGaWxlQ29udGVudCk7XG5cbiAgICAgIHRoaXMubW91bnQoXG5cbiAgICAgICAgPFNWRy8+XG5cbiAgICAgIClcbiAgICB9KTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaHMtYXMtc3Znc1wiLFxuICB9O1xufSJdLCJuYW1lcyI6WyJHbHlwaHNBc1NWR3NWaWV3IiwiZ2V0IiwiYWpheFV0aWxpdGllcyIsImNoYXJhY3RlclRvU1ZHIiwic3ZnVXRpbGl0aWVzIiwiZGlkTW91bnQiLCJjaGFyYWN0ZXIiLCJmb250TmFtZSIsImhvc3QiLCJ1cmkiLCJxdWVyeSIsImhlYWRlcnMiLCJmb250RmlsZUNvbnRlbnQiLCJTVkciLCJtb3VudCIsIndpbGxVbm1vdW50IiwiVmlldyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSUTt5QkFDQzsyREFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxBQUFFQyxNQUFRQyx3QkFBYSxDQUFyQkQsS0FDRixBQUFFRSxpQkFBbUJDLG1CQUFZLENBQS9CRDtBQUVPLElBQUEsQUFBTUgsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJLLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBTUMsWUFBWSxLQUNaQyxXQUFXLGVBQ1hDLE9BQU8sMEJBQ1BDLE1BQU0sQUFBQyxPQUFlLE9BQVRGLFdBQ2JHLFFBQVEsQ0FBQyxHQUNUQyxVQUFVO29CQUNSLFVBQVU7Z0JBQ1o7Z0JBRU5WLElBQUlPLE1BQU1DLEtBQUtDLE9BQU9DLFNBQVMsU0FBQ0M7b0JBQzlCLElBQU1DLE1BQU1WLGVBQWVHLFdBQVdNO29CQUV0QyxNQUFLRSxLQUFLLGVBRVIsb0JBQUNEO2dCQUdMO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztXQXhCbUJmO0VBQXlCZ0IsYUFBSTtBQTBCaEQsaUJBMUJtQmhCLGtCQTBCWmlCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=