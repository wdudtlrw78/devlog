webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout/index.jsx":
/*!****************************************!*\
  !*** ./components/AppLayout/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/AppLayout/styles.jsx");



var _jsxFileName = "C:\\Users\\mongs\\Desktop\\Study\\molymath\\prepare\\front\\components\\AppLayout\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();











var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showNavMenu = _useState[0],
      setShowNavMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showBackground = _useState2[0],
      setShowBackground = _useState2[1];

  var today = new Date();
  var toggleNavMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowNavMenu(function (prev) {
      return !prev;
    });
    setShowBackground(function (prev) {
      return !prev;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.innerWidth >= 820) {
      setShowNavMenu(true);
      setShowBackground(false);
    } else {
      setShowNavMenu(false);
      setShowBackground(false);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onResize() {
      if (window.innerWidth >= 820) {
        setShowNavMenu(true);
        setShowBackground(false);
      } else {
        setShowNavMenu(false);
        setShowBackground(false);
      }
    }

    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  var onUpper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["Section"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["ToggleMenuButton"], {
            show: showNavMenu,
            onClick: toggleNavMenu,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
              className: "menu-button",
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"],
              size: "2x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["HeaderLeftColumn"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/",
              prefetch: false,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  alt: "MolyMath",
                  width: 64,
                  height: 44
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), showNavMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["NavContainer"], {
          show: showNavMenu,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["Menus"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/",
                prefetch: false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "MolyMath"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/profile",
                prefetch: false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/portfolio",
                prefetch: false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "Portfolio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/books",
                prefetch: false,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "Books"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this)
      }, void 0, false), showBackground && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["BackGround"], {
        show: showBackground,
        onClick: toggleNavMenu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 28
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["MainContainer"], {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["SNS"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "mailto:wdudtlrw78@gmail.com",
            prefetch: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                className: "instagram",
                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEnvelope"],
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "https://github.com/wdudtlrw78",
            prefetch: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              rel: "noreferrer noopener",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                className: "github",
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"],
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "https://www.instagram.com/mosik_2",
            prefetch: false,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              rel: "noreferrer noopener",
              tel: "github",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                className: "instagram",
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"],
                size: "lg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), "\xA9 ", today.getFullYear(), " | by molymath"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["UpBig"], {
      onClick: onUpper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
          className: "arrow-up",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowUp"],
          size: "2x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(AppLayout, "28poWOd6RRS3aJzs14ho+5fhDF8=");

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzaG93TmF2TWVudSIsInNldFNob3dOYXZNZW51Iiwic2hvd0JhY2tncm91bmQiLCJzZXRTaG93QmFja2dyb3VuZCIsInRvZGF5IiwiRGF0ZSIsInRvZ2dsZU5hdk1lbnUiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25SZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uVXBwZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZmFCYXJzIiwiZmFFbnZlbG9wZSIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJnZXRGdWxsWWVhciIsImZhQXJyb3dVcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDM0JDLFdBRDJCO0FBQUEsTUFDZEMsY0FEYzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFM0JHLGNBRjJCO0FBQUEsTUFFWEMsaUJBRlc7O0FBSWxDLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q04sa0JBQWMsQ0FBQyxVQUFDTyxJQUFEO0FBQUEsYUFBVSxDQUFD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LDhFQUFEO0FBQWlCLG1CQUFTLEVBQUMsVUFBM0I7QUFBc0MsY0FBSSxFQUFFUywyRUFBNUM7QUFBdUQsY0FBSSxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQXpIRDs7R0FBTTNCLFM7O0tBQUFBLFM7QUEySE5BLFNBQVMsQ0FBQzRCLFNBQVYsR0FBc0I7QUFDcEIzQixVQUFRLEVBQUU0QixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBdEI7QUFJZS9CLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmZWJmYjY1ZmQzZjIxMDUxYWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFHaXRodWIsIGZhSW5zdGFncmFtIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQXJyb3dVcCwgZmFCYXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFbnZlbG9wZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIEhlYWRlckxlZnRDb2x1bW4sXHJcbiAgTmF2Q29udGFpbmVyLFxyXG4gIFRvZ2dsZU1lbnVCdXR0b24sXHJcbiAgRm9vdGVyLFxyXG4gIE1haW5Db250YWluZXIsXHJcbiAgSGVhZGVyLFxyXG4gIENvbnRhaW5lcixcclxuICBCYWNrR3JvdW5kLFxyXG4gIE1lbnVzLFxyXG4gIFNOUyxcclxuICBVcEJpZyxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dOYXZNZW51LCBzZXRTaG93TmF2TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dCYWNrZ3JvdW5kLCBzZXRTaG93QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTmF2TWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dOYXZNZW51KChwcmV2KSA9PiAhcHJldik7XHJcbiAgICBzZXRTaG93QmFja2dyb3VuZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA4MjApIHtcclxuICAgICAgc2V0U2hvd05hdk1lbnUodHJ1ZSk7XHJcbiAgICAgIHNldFNob3dCYWNrZ3JvdW5kKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dOYXZNZW51KGZhbHNlKTtcclxuICAgICAgc2V0U2hvd0JhY2tncm91bmQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODIwKSB7XHJcbiAgICAgICAgc2V0U2hvd05hdk1lbnUodHJ1ZSk7XHJcbiAgICAgICAgc2V0U2hvd0JhY2tncm91bmQoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNob3dOYXZNZW51KGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93QmFja2dyb3VuZChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25VcHBlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VG9nZ2xlTWVudUJ1dHRvbiBzaG93PXtzaG93TmF2TWVudX0gb25DbGljaz17dG9nZ2xlTmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJtZW51LWJ1dHRvblwiIGljb249e2ZhQmFyc30gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICAgICAgPC9Ub2dnbGVNZW51QnV0dG9uPlxyXG4gICAgICAgICAgICA8SGVhZGVyTGVmdENvbHVtbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIk1vbHlNYXRoXCIgd2lkdGg9ezY0fSBoZWlnaHQ9ezQ0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9IZWFkZXJMZWZ0Q29sdW1uPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAge3Nob3dOYXZNZW51ICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZDb250YWluZXIgc2hvdz17c2hvd05hdk1lbnV9PlxyXG4gICAgICAgICAgICAgIDxNZW51cz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1vbHlNYXRoPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tzXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Cb29rczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L01lbnVzPlxyXG4gICAgICAgICAgICA8L05hdkNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Nob3dCYWNrZ3JvdW5kICYmIDxCYWNrR3JvdW5kIHNob3c9e3Nob3dCYWNrZ3JvdW5kfSBvbkNsaWNrPXt0b2dnbGVOYXZNZW51fSAvPn1cclxuXHJcbiAgICAgICAgPE1haW5Db250YWluZXI+e2NoaWxkcmVufTwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPEZvb3Rlcj5cclxuICAgICAgICAgIDxTTlM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86d2R1ZHRscnc3OEBnbWFpbC5jb21cIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIiBpY29uPXtmYUVudmVsb3BlfSBzaXplPVwibGdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dkdWR0bHJ3NzhcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiZ2l0aHViXCIgaWNvbj17ZmFHaXRodWJ9IHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tb3Npa18yXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGVsPVwiZ2l0aHViXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiIGljb249e2ZhSW5zdGFncmFtfSBzaXplPVwibGdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9TTlM+XHJcbiAgICAgICAgICDCqSB7dG9kYXkuZ2V0RnVsbFllYXIoKX0gfCBieSBtb2x5bWF0aFxyXG4gICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDxVcEJpZyBvbkNsaWNrPXtvblVwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiYXJyb3ctdXBcIiBpY29uPXtmYUFycm93VXB9IHNpemU9XCIyeFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXBCaWc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==