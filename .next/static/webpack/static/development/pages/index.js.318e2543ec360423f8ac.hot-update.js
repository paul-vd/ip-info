webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);



var InfoAPI = function InfoAPI() {
  return null;
};

InfoAPI.getInitialProps = function _callee(_ref) {
  var req, res, ip, response, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req, res = _ref.res;
          res.setHeader('Content-Type', 'application/json');
          _context.prev = 2;
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

          if (ip) {
            _context.next = 6;
            break;
          }

          throw new Error('API error');

        case 6:
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("https://freegeoip.app/json/".concat(ip), {
            method: 'get',
            headers: {
              accept: 'application/json' // 'x-auth-token': apiKey,

            }
          }));

        case 8:
          response = _context.sent;

          if (response.ok) {
            _context.next = 11;
            break;
          }

          throw new Error('API error');

        case 11:
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 13:
          data = _context.sent;
          res.write(JSON.stringify(data));
          res.end();
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          res.write(JSON.stringify({
            message: _context.t0.message
          }));
          res.end();

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 18]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (InfoAPI);

/***/ })

})
//# sourceMappingURL=index.js.318e2543ec360423f8ac.hot-update.js.map