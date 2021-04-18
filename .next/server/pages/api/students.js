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
exports.id = "pages/api/students";
exports.ids = ["pages/api/students"];
exports.modules = {

/***/ "./pages/api/students/index.js":
/*!*************************************!*\
  !*** ./pages/api/students/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  var mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\n  var connection = mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    password: '',\n    database: 'learning',\n    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'\n  });\n  connection.connect();\n  connection.query(\"SELECT * FROM students\", (error, results, fields) => {\n    res.json(results);\n  });\n  connection.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvYXBpL3N0dWRlbnRzL2luZGV4LmpzPzNlNjkiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJzb2NrZXRQYXRoIiwiY29ubmVjdCIsInF1ZXJ5IiwiZXJyb3IiLCJyZXN1bHRzIiwiZmllbGRzIiwianNvbiIsImVuZCJdLCJtYXBwaW5ncyI6IjtBQUNBLCtEQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLE1BQUlDLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFuQjs7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUI7QUFDdENDLFFBQUksRUFBRSxXQURnQztBQUV0Q0MsUUFBSSxFQUFFLE1BRmdDO0FBR3RDQyxZQUFRLEVBQUUsRUFINEI7QUFJdENDLFlBQVEsRUFBRSxVQUo0QjtBQUt0Q0MsY0FBVSxFQUFFO0FBTDBCLEdBQXZCLENBQWpCO0FBUUFOLFlBQVUsQ0FBQ08sT0FBWDtBQUVBUCxZQUFVLENBQUNRLEtBQVgsQ0FBaUIsd0JBQWpCLEVBQTJDLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsTUFBakIsS0FBNEI7QUFDckVkLE9BQUcsQ0FBQ2UsSUFBSixDQUFTRixPQUFUO0FBQ0QsR0FGRDtBQUlBVixZQUFVLENBQUNhLEdBQVg7QUFDRCxDQWpCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zdHVkZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIHZhciBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyk7XG4gIHZhciBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgdXNlcjogJ3Jvb3QnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBkYXRhYmFzZTogJ2xlYXJuaW5nJyxcbiAgICBzb2NrZXRQYXRoOiAnL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL3Zhci9teXNxbC9teXNxbC5zb2NrJ1xuICB9KTtcblxuICBjb25uZWN0aW9uLmNvbm5lY3QoKTtcblxuICBjb25uZWN0aW9uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBzdHVkZW50c1wiLCAoZXJyb3IsIHJlc3VsdHMsIGZpZWxkcykgPT4ge1xuICAgIHJlcy5qc29uKHJlc3VsdHMpXG4gIH0pXG5cbiAgY29ubmVjdGlvbi5lbmQoKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/students/index.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/index.js"));
module.exports = __webpack_exports__;

})();