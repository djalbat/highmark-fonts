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
var _fontkit = /*#__PURE__*/ _interop_require_default(require("fontkit"));
var _buffer = require("buffer");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function svgFromCodePoint(codePoint, arrayBuffer) {
    var buffer = _buffer.Buffer.from(arrayBuffer), font = _fontkit.default.create(buffer), glyph = font.glyphForCodePoint(codePoint);
    var path = glyph.path, bbox = glyph.bbox, maxX = bbox.maxX, maxY = bbox.maxY, minX = bbox.minX, minY = bbox.minY, x = minX, y = minY, width = maxX - minX, height = maxY - minY, viewBox = "".concat(x, " ").concat(y, " ").concat(width, " ").concat(height), d = path.toSVG();
    return /*#__PURE__*/ React.createElement("svg", {
        viewBox: viewBox
    }, /*#__PURE__*/ React.createElement("path", {
        d: d
    }));
}
var _default = {
    svgFromCodePoint: svgFromCodePoint
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3ZnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZm9udGtpdCBmcm9tIFwiZm9udGtpdFwiO1xuXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdmdGcm9tQ29kZVBvaW50KGNvZGVQb2ludCwgYXJyYXlCdWZmZXIpIHtcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpLFxuICAgICAgICBmb250ID0gZm9udGtpdC5jcmVhdGUoYnVmZmVyKSxcbiAgICAgICAgZ2x5cGggPSBmb250LmdseXBoRm9yQ29kZVBvaW50KGNvZGVQb2ludCk7XG5cbiAgY29uc3QgeyBwYXRoLCBiYm94IH0gPSBnbHlwaCxcbiAgICAgICAgeyBtYXhYLCBtYXhZLCBtaW5YLCBtaW5ZIH0gPSBiYm94LFxuICAgICAgICB4ID0gbWluWCwgLy8vXG4gICAgICAgIHkgPSBtaW5ZLCAvLy9cbiAgICAgICAgd2lkdGggPSBtYXhYIC0gbWluWCxcbiAgICAgICAgaGVpZ2h0ID0gbWF4WSAtIG1pblksXG4gICAgICAgIHZpZXdCb3ggPSBgJHt4fSAke3l9ICR7d2lkdGh9ICR7aGVpZ2h0fWAsXG4gICAgICAgIGQgPSBwYXRoLnRvU1ZHKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxzdmcgdmlld0JveD17dmlld0JveH0+XG4gICAgICA8cGF0aCBkPXtkfSAvPlxuICAgIDwvc3ZnPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnRnJvbUNvZGVQb2ludFxufTtcbiJdLCJuYW1lcyI6WyJzdmdGcm9tQ29kZVBvaW50IiwiY29kZVBvaW50IiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiZm9udCIsImZvbnRraXQiLCJjcmVhdGUiLCJnbHlwaCIsImdseXBoRm9yQ29kZVBvaW50IiwicGF0aCIsImJib3giLCJtYXhYIiwibWF4WSIsIm1pblgiLCJtaW5ZIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJkIiwidG9TVkciLCJzdmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZCQTtlQUFBOztRQXZCZ0JBO2VBQUFBOzs7OERBSkk7c0JBRUc7Ozs7OztBQUVoQixTQUFTQSxpQkFBaUJDLFNBQVMsRUFBRUMsV0FBVztJQUNyRCxJQUFNQyxTQUFTQyxjQUFNLENBQUNDLElBQUksQ0FBQ0gsY0FDckJJLE9BQU9DLGdCQUFPLENBQUNDLE1BQU0sQ0FBQ0wsU0FDdEJNLFFBQVFILEtBQUtJLGlCQUFpQixDQUFDVDtJQUVyQyxJQUFRVSxPQUFlRixNQUFmRSxNQUFNQyxPQUFTSCxNQUFURyxNQUNOQyxPQUEyQkQsS0FBM0JDLE1BQU1DLE9BQXFCRixLQUFyQkUsTUFBTUMsT0FBZUgsS0FBZkcsTUFBTUMsT0FBU0osS0FBVEksTUFDcEJDLElBQUlGLE1BQ0pHLElBQUlGLE1BQ0pHLFFBQVFOLE9BQU9FLE1BQ2ZLLFNBQVNOLE9BQU9FLE1BQ2hCSyxVQUFVLEFBQUMsR0FBT0gsT0FBTEQsR0FBRSxLQUFRRSxPQUFMRCxHQUFFLEtBQVlFLE9BQVRELE9BQU0sS0FBVSxPQUFQQyxTQUNoQ0UsSUFBSVgsS0FBS1ksS0FBSztJQUVwQixxQkFFRSxvQkFBQ0M7UUFBSUgsU0FBU0E7cUJBQ1osb0JBQUNWO1FBQUtXLEdBQUdBOztBQUlmO0lBRUEsV0FBZTtJQUNidEIsa0JBQUFBO0FBQ0YifQ==