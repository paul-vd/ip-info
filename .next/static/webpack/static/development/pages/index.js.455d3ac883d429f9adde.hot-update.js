webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./node_modules/react/index.js":
false,

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


var TestApp = function TestApp(_ref) {
  var ip = _ref.ip;
  return null;
}; // {
//   //   const [ip, setIp] = useState('')
//   const [fetching, setFetching] = useState(false)
//   const [country, setCountry] = useState<string | undefined>(undefined)
//   //   useEffect(() => {
//   //     const handleFetchIp = async () => {
//   //       const res = await fetch('https://api.ipify.org?format=json')
//   //       if (res.ok) {
//   //         const { ip } = await res.json()
//   //         if (ip) setIp(ip)
//   //       }
//   //     }
//   //     handleFetchIp()
//   //   }, [])
//   const handleGetCountry = async () => {
//     setFetching(true)
//     const res = await fetch(`/api/${ip}`)
//     const data = await res.json()
//     if (data) {
//       console.log(data)
//       setCountry(data.country_name)
//     }
//     setFetching(false)
//   }
//   return (
//     <div>
//       <div>IP: {ip ? ip : ''}</div>
//       {country && <div>Country: {country}</div>}
//       <br />
//       {ip && (
//         <button disabled={fetching} onClick={handleGetCountry}>
//           {fetching ? 'Fetching' : 'Get Country'}
//         </button>
//       )}
//     </div>
//   )
// }


TestApp.getInitialProps = function _callee(_ref2) {
  var req, res, ip;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, res = _ref2.res;
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          res.setHeader('Content-Type', 'application/json');
          res.write({
            ip: ip
          });
          res.end(); //   return { ip }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (TestApp);

/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
false

})
//# sourceMappingURL=index.js.455d3ac883d429f9adde.hot-update.js.map