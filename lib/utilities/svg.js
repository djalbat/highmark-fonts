"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get svgFromCodePoint () {
        return svgFromCodePoint;
    }
});
var _opentype = require("opentype.js");
function svgFromCodePoint(codePoint, arrayBuffer) {
    var font = (0, _opentype.parse)(arrayBuffer), character = String.fromCodePoint(codePoint), glyph = font.charToGlyph(character), path = glyph.getPath(0, 0, 1000), pathData = path.toPathData(), boundingBox = path.getBoundingBox();
    var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2, x = x1, y = y1, width = x2 - x1, height = y2 - y1, viewBox = "".concat(x, " ").concat(y, " ").concat(width, " ").concat(height), d = pathData; ///
    return /*#__PURE__*/ React.createElement("svg", {
        viewBox: viewBox
    }, /*#__PURE__*/ React.createElement("path", {
        d: d
    }));
}
var _default = {
    svgFromCodePoint: svgFromCodePoint
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3ZnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJvcGVudHlwZS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3ZnRnJvbUNvZGVQb2ludChjb2RlUG9pbnQsIGFycmF5QnVmZmVyKSB7XG4gIGNvbnN0IGZvbnQgPSBwYXJzZShhcnJheUJ1ZmZlciksXG4gICAgICAgIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGNvZGVQb2ludCksXG4gICAgICAgIGdseXBoID0gZm9udC5jaGFyVG9HbHlwaChjaGFyYWN0ZXIpLFxuICAgICAgICBwYXRoID0gZ2x5cGguZ2V0UGF0aCgwLCAwLCAxMDAwKSxcbiAgICAgICAgcGF0aERhdGEgPSBwYXRoLnRvUGF0aERhdGEoKSwgIC8vL1xuICAgICAgICBib3VuZGluZ0JveCA9IHBhdGguZ2V0Qm91bmRpbmdCb3goKTtcblxuICBjb25zdCB7IHgxLCB5MSwgeDIsIHkyIH0gPSBib3VuZGluZ0JveCxcbiAgICAgICAgeCA9IHgxLCAvLy9cbiAgICAgICAgeSA9IHkxLCAvLy9cbiAgICAgICAgd2lkdGggPSB4MiAtIHgxLFxuICAgICAgICBoZWlnaHQgPSB5MiAtIHkxLFxuICAgICAgICB2aWV3Qm94ID0gYCR7eH0gJHt5fSAke3dpZHRofSAke2hlaWdodH1gLFxuICAgICAgICBkID0gcGF0aERhdGE7IC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHZpZXdCb3g9e3ZpZXdCb3h9PlxuICAgICAgPHBhdGggZD17ZH0gLz5cbiAgICA8L3N2Zz5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2Z0Zyb21Db2RlUG9pbnRcbn07XG4iXSwibmFtZXMiOlsic3ZnRnJvbUNvZGVQb2ludCIsImNvZGVQb2ludCIsImFycmF5QnVmZmVyIiwiZm9udCIsInBhcnNlIiwiY2hhcmFjdGVyIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImdseXBoIiwiY2hhclRvR2x5cGgiLCJwYXRoIiwiZ2V0UGF0aCIsInBhdGhEYXRhIiwidG9QYXRoRGF0YSIsImJvdW5kaW5nQm94IiwiZ2V0Qm91bmRpbmdCb3giLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZCIsInN2ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkJBO2VBQUE7O1FBekJnQkE7ZUFBQUE7Ozt3QkFGTTtBQUVmLFNBQVNBLGlCQUFpQkMsU0FBUyxFQUFFQyxXQUFXO0lBQ3JELElBQU1DLE9BQU9DLElBQUFBLGVBQUssRUFBQ0YsY0FDYkcsWUFBWUMsT0FBT0MsYUFBYSxDQUFDTixZQUNqQ08sUUFBUUwsS0FBS00sV0FBVyxDQUFDSixZQUN6QkssT0FBT0YsTUFBTUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUMzQkMsV0FBV0YsS0FBS0csVUFBVSxJQUMxQkMsY0FBY0osS0FBS0ssY0FBYztJQUV2QyxJQUFRQyxLQUFtQkYsWUFBbkJFLElBQUlDLEtBQWVILFlBQWZHLElBQUlDLEtBQVdKLFlBQVhJLElBQUlDLEtBQU9MLFlBQVBLLElBQ2RDLElBQUlKLElBQ0pLLElBQUlKLElBQ0pLLFFBQVFKLEtBQUtGLElBQ2JPLFNBQVNKLEtBQUtGLElBQ2RPLFVBQVUsQUFBQyxHQUFPSCxPQUFMRCxHQUFFLEtBQVFFLE9BQUxELEdBQUUsS0FBWUUsT0FBVEQsT0FBTSxLQUFVLE9BQVBDLFNBQ2hDRSxJQUFJYixVQUFVLEdBQUc7SUFFdkIscUJBRUUsb0JBQUNjO1FBQUlGLFNBQVNBO3FCQUNaLG9CQUFDZDtRQUFLZSxHQUFHQTs7QUFJZjtJQUVBLFdBQWU7SUFDYnpCLGtCQUFBQTtBQUNGIn0=