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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method == \"POST\") {\n    const bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\n    var cookie = __webpack_require__(/*! cookie */ \"cookie\");\n\n    var mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\n    const data = req.body;\n    var connection = mysql.createConnection({\n      host: 'localhost',\n      user: 'root',\n      password: '',\n      database: 'learning',\n      socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'\n    });\n    connection.connect();\n    connection.query(`SELECT * FROM USERS WHERE email='${data.email}'`, (error, results) => {\n      if (error) throw error; //console.log(results[0].password)\n\n      bcrypt.compare(data.password, results[0].password, function (error, result) {\n        // result == boolean\n        if (!error) {\n          res.setHeader('Set-Cookie', cookie.serialize('userName', `${results[0].name}`, {\n            httpOnly: true,\n            sameSite: true,\n            maxAge: 60 * 60,\n            path: '/'\n          }));\n          res.send(\"ok\");\n        } else {\n          res.send(\"Wrong credentials!\");\n        }\n      });\n    });\n  } else {\n    res.send(\"sorry, we accept only POST request!\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXRyaWNrLy4vcGFnZXMvYXBpL2xvZ2luLmpzPzAzODQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiYmNyeXB0IiwicmVxdWlyZSIsImNvb2tpZSIsIm15c3FsIiwiZGF0YSIsImJvZHkiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInNvY2tldFBhdGgiLCJjb25uZWN0IiwicXVlcnkiLCJlbWFpbCIsImVycm9yIiwicmVzdWx0cyIsImNvbXBhcmUiLCJyZXN1bHQiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJuYW1lIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJzZW5kIl0sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekIsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLElBQWMsTUFBbEIsRUFBMEI7QUFDdEIsVUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLFFBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxzQkFBRCxDQUFwQjs7QUFDQSxRQUFJRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsb0JBQUQsQ0FBbkI7O0FBRUEsVUFBTUcsSUFBSSxHQUFHUCxHQUFHLENBQUNRLElBQWpCO0FBRUEsUUFBSUMsVUFBVSxHQUFHSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCO0FBQ3BDQyxVQUFJLEVBQUUsV0FEOEI7QUFFcENDLFVBQUksRUFBRSxNQUY4QjtBQUdwQ0MsY0FBUSxFQUFFLEVBSDBCO0FBSXBDQyxjQUFRLEVBQUUsVUFKMEI7QUFLcENDLGdCQUFVLEVBQUU7QUFMd0IsS0FBdkIsQ0FBakI7QUFRQU4sY0FBVSxDQUFDTyxPQUFYO0FBQ0FQLGNBQVUsQ0FBQ1EsS0FBWCxDQUFrQixvQ0FBbUNWLElBQUksQ0FBQ1csS0FBTSxHQUFoRSxFQUFvRSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsS0FBb0I7QUFDcEYsVUFBSUQsS0FBSixFQUFXLE1BQU1BLEtBQU4sQ0FEeUUsQ0FFcEY7O0FBQ0FoQixZQUFNLENBQUNrQixPQUFQLENBQWVkLElBQUksQ0FBQ00sUUFBcEIsRUFBOEJPLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1AsUUFBekMsRUFBbUQsVUFBVU0sS0FBVixFQUFpQkcsTUFBakIsRUFBeUI7QUFDeEU7QUFDQSxZQUFJLENBQUNILEtBQUwsRUFBWTtBQUNSbEIsYUFBRyxDQUFDc0IsU0FBSixDQUFjLFlBQWQsRUFBNEJsQixNQUFNLENBQUNtQixTQUFQLENBQWlCLFVBQWpCLEVBQThCLEdBQUVKLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssSUFBSyxFQUFoRCxFQUFtRDtBQUMzRUMsb0JBQVEsRUFBRSxJQURpRTtBQUUzRUMsb0JBQVEsRUFBRSxJQUZpRTtBQUczRUMsa0JBQU0sRUFBRSxLQUFLLEVBSDhEO0FBSTNFQyxnQkFBSSxFQUFFO0FBSnFFLFdBQW5ELENBQTVCO0FBUUE1QixhQUFHLENBQUM2QixJQUFKLENBQVMsSUFBVDtBQUNILFNBVkQsTUFVTztBQUNIN0IsYUFBRyxDQUFDNkIsSUFBSixDQUFTLG9CQUFUO0FBQ0g7QUFDSixPQWZEO0FBZ0JILEtBbkJEO0FBc0JILEdBdENELE1Bc0NPO0FBQ0g3QixPQUFHLENBQUM2QixJQUFKLENBQVMscUNBQVQ7QUFDSDtBQUVKLENBM0NEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpIHtcbiAgICAgICAgY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0Jyk7XG4gICAgICAgIHZhciBjb29raWUgPSByZXF1aXJlKCdjb29raWUnKVxuICAgICAgICB2YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keVxuXG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgICAgICAgIHVzZXI6ICdyb290JyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGRhdGFiYXNlOiAnbGVhcm5pbmcnLFxuICAgICAgICAgICAgc29ja2V0UGF0aDogJy9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy92YXIvbXlzcWwvbXlzcWwuc29jaydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoYFNFTEVDVCAqIEZST00gVVNFUlMgV0hFUkUgZW1haWw9JyR7ZGF0YS5lbWFpbH0nYCwgKGVycm9yLCByZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdHNbMF0ucGFzc3dvcmQpXG4gICAgICAgICAgICBiY3J5cHQuY29tcGFyZShkYXRhLnBhc3N3b3JkLCByZXN1bHRzWzBdLnBhc3N3b3JkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc3VsdCA9PSBib29sZWFuXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgY29va2llLnNlcmlhbGl6ZSgndXNlck5hbWUnLCBgJHtyZXN1bHRzWzBdLm5hbWV9YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKFwib2tcIilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChcIldyb25nIGNyZWRlbnRpYWxzIVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZChcInNvcnJ5LCB3ZSBhY2NlcHQgb25seSBQT1NUIHJlcXVlc3QhXCIpXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();