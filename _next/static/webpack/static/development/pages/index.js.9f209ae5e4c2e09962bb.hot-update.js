webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layouts/PbdeskStyle.js":
/*!*******************************************!*\
  !*** ./components/Layouts/PbdeskStyle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_pbdesk_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/css/pbdesk.css */ "./assets/css/pbdesk.css");
/* harmony import */ var _assets_css_pbdesk_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_pbdesk_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/css/slick.css */ "./assets/css/slick.css");
/* harmony import */ var _assets_css_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/css/responsive.css */ "./assets/css/responsive.css");
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/css/animate.css */ "./assets/css/animate.css");
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/ActiveLink */ "./components/common/ActiveLink.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_14__);
















var PbdeskStyle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PbdeskStyle, _React$Component);

  function PbdeskStyle() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PbdeskStyle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PbdeskStyle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PbdeskStyle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "navbar",
        className: "startp-nav"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
        className: "navbar-nav nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activeClassName: "active",
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_14__["Home"], null), " Home"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activeClassName: "active",
        href: "/features"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_14__["Feather"], null), " Featured"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activeClassName: "active",
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_14__["Bold"], null), " Blog"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_common_ActiveLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        activeClassName: "active",
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_14__["User"], null), " About")))))))));
    }
  }]);

  return PbdeskStyle;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PbdeskStyle);

/***/ })

})
//# sourceMappingURL=index.js.9f209ae5e4c2e09962bb.hot-update.js.map