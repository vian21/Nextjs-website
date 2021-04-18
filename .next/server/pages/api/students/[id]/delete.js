/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/students/[id]/delete";
exports.ids = ["pages/api/students/[id]/delete"];
exports.modules = {

/***/ "./pages/api/students/[id]/delete.js":
/*!*******************************************!*\
  !*** ./pages/api/students/[id]/delete.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const {\n    id\n  } = req.query;\n\n  const mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\n  var connection = mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    password: '',\n    database: 'learning',\n    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'\n  });\n  connection.connect();\n  connection.query(`DELETE FROM students where id=${id}`, (error, result, fields) => {\n    if (error) throw error;\n    res.send(\"ok\");\n  });\n  connection.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvYXBpL3N0dWRlbnRzL1tpZF0vZGVsZXRlLmpzPzUzMDMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwic29ja2V0UGF0aCIsImNvbm5lY3QiLCJlcnJvciIsInJlc3VsdCIsImZpZWxkcyIsInNlbmQiLCJlbmQiXSwibWFwcGluZ3MiOiI7QUFBQSwrREFBYyxDQUFDQSxHQUFELEVBQUtDLEdBQUwsS0FBVztBQUNyQixRQUFNO0FBQUNDO0FBQUQsTUFBTUYsR0FBRyxDQUFDRyxLQUFoQjs7QUFFQSxRQUFNQyxLQUFLLEdBQUVDLG1CQUFPLENBQUMsb0JBQUQsQ0FBcEI7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFOLENBQXVCO0FBQ3BDQyxRQUFJLEVBQU8sV0FEeUI7QUFFcENDLFFBQUksRUFBTyxNQUZ5QjtBQUdwQ0MsWUFBUSxFQUFHLEVBSHlCO0FBSXBDQyxZQUFRLEVBQUcsVUFKeUI7QUFLcENDLGNBQVUsRUFBQztBQUx5QixHQUF2QixDQUFqQjtBQVNFTixZQUFVLENBQUNPLE9BQVg7QUFFQVAsWUFBVSxDQUFDSCxLQUFYLENBQWtCLGlDQUFnQ0QsRUFBRyxFQUFyRCxFQUF3RCxDQUFDWSxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLE1BQWhCLEtBQTJCO0FBQ2pGLFFBQUdGLEtBQUgsRUFBVSxNQUFNQSxLQUFOO0FBQ1ZiLE9BQUcsQ0FBQ2dCLElBQUosQ0FBUyxJQUFUO0FBQ0QsR0FIRDtBQUtBWCxZQUFVLENBQUNZLEdBQVg7QUFDTCxDQXJCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zdHVkZW50cy9baWRdL2RlbGV0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0KHJlcSxyZXMpPT57XG4gICAgY29uc3Qge2lkfT0gcmVxLnF1ZXJ5O1xuXG4gICAgY29uc3QgbXlzcWw9IHJlcXVpcmUoJ215c3FsJylcbiAgICB2YXIgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICBob3N0ICAgICA6ICdsb2NhbGhvc3QnLFxuICAgICAgICB1c2VyICAgICA6ICdyb290JyxcbiAgICAgICAgcGFzc3dvcmQgOiAnJyxcbiAgICAgICAgZGF0YWJhc2UgOiAnbGVhcm5pbmcnLFxuICAgICAgICBzb2NrZXRQYXRoOicvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvdmFyL215c3FsL215c3FsLnNvY2snXG4gIFxuICAgICAgfSk7XG4gICAgXG4gICAgICBjb25uZWN0aW9uLmNvbm5lY3QoKTtcbiAgICAgICAgICBcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkoYERFTEVURSBGUk9NIHN0dWRlbnRzIHdoZXJlIGlkPSR7aWR9YCwgKGVycm9yLCByZXN1bHQsIGZpZWxkcykgPT4ge1xuICAgICAgICBpZihlcnJvcikgdGhyb3cgZXJyb3JcbiAgICAgICAgcmVzLnNlbmQoXCJva1wiKVxuICAgICAgfSlcbiAgICBcbiAgICAgIGNvbm5lY3Rpb24uZW5kKClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/students/[id]/delete.js\n");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("mysql");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/[id]/delete.js"));
module.exports = __webpack_exports__;

})();