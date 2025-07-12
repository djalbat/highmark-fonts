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
        "\n\n  width: 20rem;\n  margin: 1rem;\n  border: 1px solid black;\n  padding: 0.25rem;\n  font-size: 2rem;\n  font-family: serif;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var collectionMap = {
    shapeCharacter: "Shapes",
    angleCharacter: "Angles",
    arrowCharacter: "Arrows",
    harpoonCharacter: "Harpoons",
    equalityCharacter: "Equality",
    orderingCharacter: "Ordering",
    calculusCharacter: "Calculus",
    relationalCharacter: "Relational",
    arithmeticCharacter: "Arithmetic",
    headedArrowCharacter: "Headed Arrows",
    greekLetterCharacter: "Greek Letters",
    miscellaneousCharacter: "Miscellaneous",
    scriptLettersCharacter: "Script Letters",
    circleCircledCharacter: "Circles and Circled",
    tackTurnstileCharacter: "Tacks and Turnstiles",
    frakturLettersCharacter: "Fraktur Letters",
    classTheoreticCharacter: "Class Theoretic",
    logicalOperatorCharacter: "Logical Operators",
    doubleTripleArrowCharacter: "Double and Triple Arrows",
    parenthesisBracketCharacter: "Parentheses and brackets",
    doubleStruckLettersCharacter: "Double Struck Letters",
    superscriptSubscriptCharacter: "Superscripts and Subscripts"
};
var values = Object.keys(collectionMap), htmls = Object.values(collectionMap); ///
var CollectionSelect = /*#__PURE__*/ function(Select) {
    _inherits(CollectionSelect, Select);
    function CollectionSelect() {
        _class_call_check(this, CollectionSelect);
        return _call_super(this, CollectionSelect, arguments);
    }
    _create_class(CollectionSelect, [
        {
            key: "getName",
            value: function getName() {
                var value = this.getValue(), name = value; ///
                return name;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var options = values.map(function(value, index) {
                    var html = htmls[index];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc2VsZWN0L2NvbGxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IGNvbGxlY3Rpb25NYXAgPSB7XG4gIHNoYXBlQ2hhcmFjdGVyOiBcIlNoYXBlc1wiLFxuICBhbmdsZUNoYXJhY3RlcjogXCJBbmdsZXNcIixcbiAgYXJyb3dDaGFyYWN0ZXI6IFwiQXJyb3dzXCIsXG4gIGhhcnBvb25DaGFyYWN0ZXI6IFwiSGFycG9vbnNcIixcbiAgZXF1YWxpdHlDaGFyYWN0ZXI6IFwiRXF1YWxpdHlcIixcbiAgb3JkZXJpbmdDaGFyYWN0ZXI6IFwiT3JkZXJpbmdcIixcbiAgY2FsY3VsdXNDaGFyYWN0ZXI6IFwiQ2FsY3VsdXNcIixcbiAgcmVsYXRpb25hbENoYXJhY3RlcjogXCJSZWxhdGlvbmFsXCIsXG4gIGFyaXRobWV0aWNDaGFyYWN0ZXI6IFwiQXJpdGhtZXRpY1wiLFxuICBoZWFkZWRBcnJvd0NoYXJhY3RlcjogXCJIZWFkZWQgQXJyb3dzXCIsXG4gIGdyZWVrTGV0dGVyQ2hhcmFjdGVyOiBcIkdyZWVrIExldHRlcnNcIixcbiAgbWlzY2VsbGFuZW91c0NoYXJhY3RlcjogXCJNaXNjZWxsYW5lb3VzXCIsXG4gIHNjcmlwdExldHRlcnNDaGFyYWN0ZXI6IFwiU2NyaXB0IExldHRlcnNcIixcbiAgY2lyY2xlQ2lyY2xlZENoYXJhY3RlcjogXCJDaXJjbGVzIGFuZCBDaXJjbGVkXCIsXG4gIHRhY2tUdXJuc3RpbGVDaGFyYWN0ZXI6IFwiVGFja3MgYW5kIFR1cm5zdGlsZXNcIixcbiAgZnJha3R1ckxldHRlcnNDaGFyYWN0ZXI6IFwiRnJha3R1ciBMZXR0ZXJzXCIsXG4gIGNsYXNzVGhlb3JldGljQ2hhcmFjdGVyOiBcIkNsYXNzIFRoZW9yZXRpY1wiLFxuICBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXI6IFwiTG9naWNhbCBPcGVyYXRvcnNcIixcbiAgZG91YmxlVHJpcGxlQXJyb3dDaGFyYWN0ZXI6IFwiRG91YmxlIGFuZCBUcmlwbGUgQXJyb3dzXCIsXG4gIHBhcmVudGhlc2lzQnJhY2tldENoYXJhY3RlcjogXCJQYXJlbnRoZXNlcyBhbmQgYnJhY2tldHNcIixcbiAgZG91YmxlU3RydWNrTGV0dGVyc0NoYXJhY3RlcjogXCJEb3VibGUgU3RydWNrIExldHRlcnNcIixcbiAgc3VwZXJzY3JpcHRTdWJzY3JpcHRDaGFyYWN0ZXI6IFwiU3VwZXJzY3JpcHRzIGFuZCBTdWJzY3JpcHRzXCJcbn1cblxuY29uc3QgdmFsdWVzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbk1hcCksICAvLy9cbiAgICAgIGh0bWxzID0gT2JqZWN0LnZhbHVlcyhjb2xsZWN0aW9uTWFwKTsgLy8vXG5cbmNsYXNzIENvbGxlY3Rpb25TZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGh0bWxzW2luZGV4XTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0+e2h0bWx9PC9vcHRpb24+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gb3B0aW9uczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbGxlY3Rpb25zXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sbGVjdGlvblNlbGVjdClgXG5cbiAgd2lkdGg6IDIwcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImNvbGxlY3Rpb25NYXAiLCJzaGFwZUNoYXJhY3RlciIsImFuZ2xlQ2hhcmFjdGVyIiwiYXJyb3dDaGFyYWN0ZXIiLCJoYXJwb29uQ2hhcmFjdGVyIiwiZXF1YWxpdHlDaGFyYWN0ZXIiLCJvcmRlcmluZ0NoYXJhY3RlciIsImNhbGN1bHVzQ2hhcmFjdGVyIiwicmVsYXRpb25hbENoYXJhY3RlciIsImFyaXRobWV0aWNDaGFyYWN0ZXIiLCJoZWFkZWRBcnJvd0NoYXJhY3RlciIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyIiwibWlzY2VsbGFuZW91c0NoYXJhY3RlciIsInNjcmlwdExldHRlcnNDaGFyYWN0ZXIiLCJjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyIiwidGFja1R1cm5zdGlsZUNoYXJhY3RlciIsImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyIiwiY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXIiLCJsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXIiLCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3RlciIsInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3RlciIsImRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXIiLCJzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3RlciIsInZhbHVlcyIsIk9iamVjdCIsImtleXMiLCJodG1scyIsIkNvbGxlY3Rpb25TZWxlY3QiLCJnZXROYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm5hbWUiLCJjaGlsZEVsZW1lbnRzIiwib3B0aW9ucyIsIm1hcCIsImluZGV4IiwiaHRtbCIsIm9wdGlvbiIsIlNlbGVjdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7b0VBNURzQjtvQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQU1BLGdCQUFnQjtJQUNwQkMsZ0JBQWdCO0lBQ2hCQyxnQkFBZ0I7SUFDaEJDLGdCQUFnQjtJQUNoQkMsa0JBQWtCO0lBQ2xCQyxtQkFBbUI7SUFDbkJDLG1CQUFtQjtJQUNuQkMsbUJBQW1CO0lBQ25CQyxxQkFBcUI7SUFDckJDLHFCQUFxQjtJQUNyQkMsc0JBQXNCO0lBQ3RCQyxzQkFBc0I7SUFDdEJDLHdCQUF3QjtJQUN4QkMsd0JBQXdCO0lBQ3hCQyx3QkFBd0I7SUFDeEJDLHdCQUF3QjtJQUN4QkMseUJBQXlCO0lBQ3pCQyx5QkFBeUI7SUFDekJDLDBCQUEwQjtJQUMxQkMsNEJBQTRCO0lBQzVCQyw2QkFBNkI7SUFDN0JDLDhCQUE4QjtJQUM5QkMsK0JBQStCO0FBQ2pDO0FBRUEsSUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDekIsZ0JBQ3JCMEIsUUFBUUYsT0FBT0QsTUFBTSxDQUFDdkIsZ0JBQWdCLEdBQUc7QUFFL0MsSUFBQSxBQUFNMkIsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxPQUFPRixPQUFPLEdBQUc7Z0JBRXZCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVVYsT0FBT1csR0FBRyxDQUFDLFNBQUNMLE9BQU9NO29CQUMzQixJQUFNQyxPQUFPVixLQUFLLENBQUNTLE1BQU07b0JBRXpCLHFCQUVFLG9CQUFDRTt3QkFBT1IsT0FBT0E7dUJBQVFPO2dCQUczQixJQUNBSixnQkFBZ0JDLFNBQVUsR0FBRztnQkFFbkMsT0FBT0Q7WUFDVDs7O1dBckJJTDtFQUF5QlcsWUFBTTtBQXVCbkMsaUJBdkJJWCxrQkF1QkdZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2QifQ==