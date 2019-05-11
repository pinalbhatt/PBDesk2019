webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/skills/SkillCarousel.js":
/*!***************************************************!*\
  !*** ./components/common/skills/SkillCarousel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_skills_set2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../data/skills_set2 */ "./data/skills_set2.js");
/* harmony import */ var _SkillCarouselItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SkillCarouselItem */ "./components/common/skills/SkillCarouselItem.js");










var slideOptions = {
  items: 4,
  loop: true,
  nav: false,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    786: {
      items: 2
    },
    1200: {
      items: 3
    },
    1500: {
      items: 4
    }
  }
};

var SkillCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SkillCarousel, _React$Component);

  function SkillCarousel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SkillCarousel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SkillCarousel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SkillCarousel, [{
    key: "render",
    value: function render() {
      var items = _data_skills_set2__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SkillCarouselItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: item.image,
          skill: item
        });
      });
      console.log(items);
      debugger;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "works-area ptb-80 bg-f7fafd"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row m-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "owl-theme"
      }, slideOptions), items)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shape8 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../../images/shape2.svg */ "./images/shape2.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shape2 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../../images/shape2.svg */ "./images/shape2.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shape7"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../../images/shape4.svg */ "./images/shape4.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shape4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../../images/shape4.svg */ "./images/shape4.svg"),
        alt: "shape"
      })));
    }
  }]);

  return SkillCarousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SkillCarousel);

/***/ }),

/***/ "./data/skills_set1.js":
false,

/***/ "./data/skills_set2.js":
/*!*****************************!*\
  !*** ./data/skills_set2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var skillSet2 = [{
  image: "javascript.png",
  title: "Javascript & ES6"
}, {
  image: "nodejs.png",
  title: "NodeJS"
}, {
  image: "mocha.png",
  title: "Mocha & Chai"
}, {
  image: "typescript.png",
  title: "TypeScript"
}, {
  image: "Angular.png",
  title: "Angular"
}, {
  image: "reactjs.png",
  title: "React JS"
}, {
  image: "vue.png",
  title: "Vue JS"
}, {
  image: "nextjs.jpg",
  title: "Next.JS"
}, {
  image: "nuxt.png",
  title: "Nuxt"
}, {
  image: "jest.png",
  title: "Jest"
}];
/* harmony default export */ __webpack_exports__["default"] = (skillSet2);

/***/ })

})
//# sourceMappingURL=index.js.579718dc9634abf7bb34.hot-update.js.map