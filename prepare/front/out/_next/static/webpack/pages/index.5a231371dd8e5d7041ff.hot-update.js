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
                  src: "/logo.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzaG93TmF2TWVudSIsInNldFNob3dOYXZNZW51Iiwic2hvd0JhY2tncm91bmQiLCJzZXRTaG93QmFja2dyb3VuZCIsInRvZGF5IiwiRGF0ZSIsInRvZ2dsZU5hdk1lbnUiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25SZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uVXBwZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZmFCYXJzIiwiZmFFbnZlbG9wZSIsImZhR2l0aHViIiwiZmFJbnN0YWdyYW0iLCJnZXRGdWxsWWVhciIsImZhQXJyb3dVcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDM0JDLFdBRDJCO0FBQUEsTUFDZEMsY0FEYzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFM0JHLGNBRjJCO0FBQUEsTUFFWEMsaUJBRlc7O0FBSWxDLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q04sa0JBQWMsQ0FBQyxVQUFDTyxJQUFEO0FBQUEsYUFBVSxDQUFD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QyxNQUFmO0FBQUEsK0JBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsbUJBQVMsRUFBQyxVQUEzQjtBQUFzQyxjQUFJLEVBQUVTLDJFQUE1QztBQUF1RCxjQUFJLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEVELENBekhEOztHQUFNM0IsUzs7S0FBQUEsUztBQTJITkEsU0FBUyxDQUFDNEIsU0FBVixHQUFzQjtBQUNwQjNCLFVBQVEsRUFBRTRCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllL0Isd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWEyMzEzNzFkZDhlNWQ3MDQxZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFJbnN0YWdyYW0gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFBcnJvd1VwLCBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUVudmVsb3BlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgSGVhZGVyTGVmdENvbHVtbixcclxuICBOYXZDb250YWluZXIsXHJcbiAgVG9nZ2xlTWVudUJ1dHRvbixcclxuICBGb290ZXIsXHJcbiAgTWFpbkNvbnRhaW5lcixcclxuICBIZWFkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEJhY2tHcm91bmQsXHJcbiAgTWVudXMsXHJcbiAgU05TLFxyXG4gIFVwQmlnLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2hvd05hdk1lbnUsIHNldFNob3dOYXZNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0JhY2tncm91bmQsIHNldFNob3dCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBjb25zdCB0b2dnbGVOYXZNZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd05hdk1lbnUoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIHNldFNob3dCYWNrZ3JvdW5kKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDgyMCkge1xyXG4gICAgICBzZXRTaG93TmF2TWVudSh0cnVlKTtcclxuICAgICAgc2V0U2hvd0JhY2tncm91bmQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd05hdk1lbnUoZmFsc2UpO1xyXG4gICAgICBzZXRTaG93QmFja2dyb3VuZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA4MjApIHtcclxuICAgICAgICBzZXRTaG93TmF2TWVudSh0cnVlKTtcclxuICAgICAgICBzZXRTaG93QmFja2dyb3VuZChmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2hvd05hdk1lbnUoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dCYWNrZ3JvdW5kKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblVwcGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUb2dnbGVNZW51QnV0dG9uIHNob3c9e3Nob3dOYXZNZW51fSBvbkNsaWNrPXt0b2dnbGVOYXZNZW51fT5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm1lbnUtYnV0dG9uXCIgaWNvbj17ZmFCYXJzfSBzaXplPVwiMnhcIiAvPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZU1lbnVCdXR0b24+XHJcbiAgICAgICAgICAgIDxIZWFkZXJMZWZ0Q29sdW1uPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTW9seU1hdGhcIiB3aWR0aD17NjR9IGhlaWdodD17NDR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0hlYWRlckxlZnRDb2x1bW4+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICB7c2hvd05hdk1lbnUgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkNvbnRhaW5lciBzaG93PXtzaG93TmF2TWVudX0+XHJcbiAgICAgICAgICAgICAgPE1lbnVzPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TW9seU1hdGg8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCIgcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va3NcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkJvb2tzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTWVudXM+XHJcbiAgICAgICAgICAgIDwvTmF2Q29udGFpbmVyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7c2hvd0JhY2tncm91bmQgJiYgPEJhY2tHcm91bmQgc2hvdz17c2hvd0JhY2tncm91bmR9IG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9IC8+fVxyXG5cclxuICAgICAgICA8TWFpbkNvbnRhaW5lcj57Y2hpbGRyZW59PC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8Rm9vdGVyPlxyXG4gICAgICAgICAgPFNOUz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzp3ZHVkdGxydzc4QGdtYWlsLmNvbVwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiIGljb249e2ZhRW52ZWxvcGV9IHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2R1ZHRscnc3OFwiIHByZWZldGNoPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJnaXRodWJcIiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cImxnXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21vc2lrXzJcIiBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIiB0ZWw9XCJnaXRodWJcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiaW5zdGFncmFtXCIgaWNvbj17ZmFJbnN0YWdyYW19IHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1NOUz5cclxuICAgICAgICAgIMKpIHt0b2RheS5nZXRGdWxsWWVhcigpfSB8IGJ5IG1vbHltYXRoXHJcbiAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPFVwQmlnIG9uQ2xpY2s9e29uVXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJhcnJvdy11cFwiIGljb249e2ZhQXJyb3dVcH0gc2l6ZT1cIjJ4XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9VcEJpZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9