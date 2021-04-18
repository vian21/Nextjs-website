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
exports.id = "pages/api/students/[id]/update";
exports.ids = ["pages/api/students/[id]/update"];
exports.modules = {

/***/ "./pages/api/students/[id]/update.js":
/*!*******************************************!*\
  !*** ./pages/api/students/[id]/update.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method == \"POST\") {\n    const data = req.body;\n    const {\n      id\n    } = req.query;\n\n    const mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\n    const connection = mysql.createConnection({\n      host: 'localhost',\n      user: 'root',\n      password: '',\n      database: 'learning',\n      socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'\n    });\n    connection.connect();\n    connection.query(`UPDATE students SET name='${data.name}', grade='${data.grade}', gender=${data.gender}, DOB='${data.DOB}' WHERE id=${id}`, (error, results, fields) => {\n      res.send(\"ok\");\n      console.log(id);\n    });\n    connection.end();\n  } else {\n    res.send(\"At least send me some data :)\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvYXBpL3N0dWRlbnRzL1tpZF0vdXBkYXRlLmpzP2ExZjYiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJpZCIsInF1ZXJ5IiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJzb2NrZXRQYXRoIiwiY29ubmVjdCIsIm5hbWUiLCJncmFkZSIsImdlbmRlciIsIkRPQiIsImVycm9yIiwicmVzdWx0cyIsImZpZWxkcyIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiZW5kIl0sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFFekIsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLElBQVksTUFBZixFQUFzQjtBQUVsQixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakI7QUFDQSxVQUFNO0FBQUNDO0FBQUQsUUFBTUwsR0FBRyxDQUFDTSxLQUFoQjs7QUFFQSxVQUFNQyxLQUFLLEdBQUVDLG1CQUFPLENBQUMsb0JBQUQsQ0FBcEI7O0FBRUEsVUFBTUMsVUFBVSxHQUFFRixLQUFLLENBQUNHLGdCQUFOLENBQXVCO0FBQ3JDQyxVQUFJLEVBQUUsV0FEK0I7QUFFckNDLFVBQUksRUFBRSxNQUYrQjtBQUdyQ0MsY0FBUSxFQUFFLEVBSDJCO0FBSXJDQyxjQUFRLEVBQUUsVUFKMkI7QUFLckNDLGdCQUFVLEVBQUM7QUFMMEIsS0FBdkIsQ0FBbEI7QUFRQU4sY0FBVSxDQUFDTyxPQUFYO0FBRUFQLGNBQVUsQ0FBQ0gsS0FBWCxDQUFrQiw2QkFBNEJILElBQUksQ0FBQ2MsSUFBSyxhQUFZZCxJQUFJLENBQUNlLEtBQU0sYUFBWWYsSUFBSSxDQUFDZ0IsTUFBTyxVQUFTaEIsSUFBSSxDQUFDaUIsR0FBSSxjQUFhZixFQUFHLEVBQXpJLEVBQTJJLENBQUNnQixLQUFELEVBQVFDLE9BQVIsRUFBaUJDLE1BQWpCLEtBQTBCO0FBQ2pLdEIsU0FBRyxDQUFDdUIsSUFBSixDQUFTLElBQVQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlyQixFQUFaO0FBQ0gsS0FIRDtBQUtBSSxjQUFVLENBQUNrQixHQUFYO0FBQ0gsR0F2QkQsTUF1Qks7QUFDRDFCLE9BQUcsQ0FBQ3VCLElBQUosQ0FBUywrQkFBVDtBQUNIO0FBRUosQ0E3QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3R1ZGVudHMvW2lkXS91cGRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcblxuICAgIGlmKHJlcS5tZXRob2Q9PVwiUE9TVFwiKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keVxuICAgICAgICBjb25zdCB7aWR9PSByZXEucXVlcnlcblxuICAgICAgICBjb25zdCBteXNxbD0gcmVxdWlyZSgnbXlzcWwnKTtcblxuICAgICAgICBjb25zdCBjb25uZWN0aW9uPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgICAgICAgdXNlcjogJ3Jvb3QnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgZGF0YWJhc2U6ICdsZWFybmluZycsXG4gICAgICAgICAgICBzb2NrZXRQYXRoOicvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvdmFyL215c3FsL215c3FsLnNvY2snXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5xdWVyeShgVVBEQVRFIHN0dWRlbnRzIFNFVCBuYW1lPScke2RhdGEubmFtZX0nLCBncmFkZT0nJHtkYXRhLmdyYWRlfScsIGdlbmRlcj0ke2RhdGEuZ2VuZGVyfSwgRE9CPScke2RhdGEuRE9CfScgV0hFUkUgaWQ9JHtpZH1gLChlcnJvciwgcmVzdWx0cywgZmllbGRzKT0+e1xuICAgICAgICAgICAgcmVzLnNlbmQoXCJva1wiKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29ubmVjdGlvbi5lbmQoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmVzLnNlbmQoXCJBdCBsZWFzdCBzZW5kIG1lIHNvbWUgZGF0YSA6KVwiKVxuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/students/[id]/update.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/[id]/update.js"));
module.exports = __webpack_exports__;

})();