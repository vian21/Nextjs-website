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
exports.id = "pages/api/students/[id]";
exports.ids = ["pages/api/students/[id]"];
exports.modules = {

/***/ "./pages/api/students/[id]/index.js":
/*!******************************************!*\
  !*** ./pages/api/students/[id]/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  var mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\n  var connection = mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    password: '',\n    database: 'learning',\n    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'\n  });\n  connection.connect();\n  const {\n    id\n  } = req.query;\n  connection.query(`SELECT * FROM students where id=${id}`, (error, result, fields) => {\n    res.json(result);\n  });\n  connection.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvYXBpL3N0dWRlbnRzL1tpZF0vaW5kZXguanM/YWFjMiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNvY2tldFBhdGgiLCJjb25uZWN0IiwiaWQiLCJxdWVyeSIsImVycm9yIiwicmVzdWx0IiwiZmllbGRzIiwianNvbiIsImVuZCJdLCJtYXBwaW5ncyI6IjtBQUNBLCtEQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLE1BQUlDLEtBQUssR0FBUUMsbUJBQU8sQ0FBQyxvQkFBRCxDQUF4Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUI7QUFDdENDLFFBQUksRUFBTyxXQUQyQjtBQUV0Q0MsUUFBSSxFQUFPLE1BRjJCO0FBR3RDQyxZQUFRLEVBQUcsRUFIMkI7QUFJdENDLFlBQVEsRUFBRyxVQUoyQjtBQUt0Q0MsY0FBVSxFQUFDO0FBTDJCLEdBQXZCLENBQWpCO0FBU0FOLFlBQVUsQ0FBQ08sT0FBWDtBQUVBLFFBQU07QUFBQ0M7QUFBRCxNQUFPWixHQUFHLENBQUNhLEtBQWpCO0FBRUFULFlBQVUsQ0FBQ1MsS0FBWCxDQUFrQixtQ0FBa0NELEVBQUcsRUFBdkQsRUFBMEQsQ0FBQ0UsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixLQUEyQjtBQUNuRmYsT0FBRyxDQUFDZ0IsSUFBSixDQUFTRixNQUFUO0FBQ0QsR0FGRDtBQUlBWCxZQUFVLENBQUNjLEdBQVg7QUFDRCxDQXBCSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zdHVkZW50cy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICB2YXIgbXlzcWwgICAgICA9IHJlcXVpcmUoJ215c3FsJyk7XG4gICAgdmFyIGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgIGhvc3QgICAgIDogJ2xvY2FsaG9zdCcsXG4gICAgICB1c2VyICAgICA6ICdyb290JyxcbiAgICAgIHBhc3N3b3JkIDogJycsXG4gICAgICBkYXRhYmFzZSA6ICdsZWFybmluZycsXG4gICAgICBzb2NrZXRQYXRoOicvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvdmFyL215c3FsL215c3FsLnNvY2snXG5cbiAgICB9KTtcbiAgXG4gICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gIFxuICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnlcbiAgICBcbiAgICBjb25uZWN0aW9uLnF1ZXJ5KGBTRUxFQ1QgKiBGUk9NIHN0dWRlbnRzIHdoZXJlIGlkPSR7aWR9YCwgKGVycm9yLCByZXN1bHQsIGZpZWxkcykgPT4ge1xuICAgICAgcmVzLmpzb24ocmVzdWx0KVxuICAgIH0pXG4gIFxuICAgIGNvbm5lY3Rpb24uZW5kKClcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/students/[id]/index.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/[id]/index.js"));
module.exports = __webpack_exports__;

})();