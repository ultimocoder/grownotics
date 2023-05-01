(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_media_FileUpload_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js");
/* harmony import */ var dropzone_vue_dist_dropzone_vue_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone-vue/dist/dropzone-vue.common.css */ "./node_modules/dropzone-vue/dist/dropzone-vue.common.css");
/* harmony import */ var _include_Header_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/Header.vue */ "./resources/js/components/admin/include/Header.vue");
/* harmony import */ var _include_Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../include/Footer.vue */ "./resources/js/components/admin/include/Footer.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dropzone_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropzone-vue */ "./node_modules/dropzone-vue/dist/dropzone-vue.common.js");
/* harmony import */ var dropzone_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dropzone_vue__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FileUpload",
  components: {
    AdminHeader: _include_Header_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AdminFooter: _include_Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DropZone: (dropzone_vue__WEBPACK_IMPORTED_MODULE_5___default()),
    Bootstrap4Pagination: laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_0__.Bootstrap4Pagination
  },
  data: function data() {
    return {
      form: {
        name: '',
        id: ''
      },
      output: '',
      errors: '',
      medias: {}
    };
  },
  mounted: function mounted() {
    this.getMedia(); //method1 will execute at pageload
  },

  methods: {
    getMedia: function getMedia() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var currentObj = this;
      axios.get("http://127.0.0.1:8000/api/getfile?page=".concat(page)).then(function (_ref) {
        var data = _ref.data;
        currentObj.medias = data;
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;
      });
    },
    deleteMedia: function deleteMedia(id) {
      var _this2 = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Are you sure?',
        text: "You want to delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.get("http://127.0.0.1:8000/api/deletefile/" + id).then(function (response) {
            _this2.medias = response.data;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Deleted!', 'Your file has been deleted.', 'success');
            _this2.getMedia();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "height": "200px",
    "width": "500px"
  }
};
var _hoisted_2 = {
  key: 0,
  "class": "images_wrapper"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "image_name"
};
var _hoisted_5 = {
  "class": "images_ex"
};
var _hoisted_6 = {
  "class": "overlay"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-user"
}, null, -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AdminHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminHeader");
  var _component_DropZone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropZone");
  var _component_Bootstrap4Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Bootstrap4Pagination");
  var _component_AdminFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminFooter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminHeader), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropZone, {
    maxFiles: Number(10000000000),
    url: "http://127.0.0.1:8000/api/filestore",
    uploadOnDrop: true,
    multipleUpload: true,
    parallelUpload: 3,
    onUploaded: $options.getMedia
  }, null, 8 /* PROPS */, ["maxFiles", "onUploaded"])]), $data.medias ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.medias.data, function (media, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "img_box",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "collegecardimage rounded",
      src: '/media/' + media.name
    }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(media.original_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(media.extension), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.deleteMedia(media.id);
      }, ["prevent"]),
      "class": "icon",
      title: "User Profile"
    }, _hoisted_9, 8 /* PROPS */, _hoisted_7)])]);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Bootstrap4Pagination, {
    data: $data.medias,
    onPaginationChangePage: $options.getMedia
  }, null, 8 /* PROPS */, ["data", "onPaginationChangePage"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminFooter)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone-vue/dist/dropzone-vue.common.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone-vue/dist/dropzone-vue.common.css ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes passing-through {\n  0% {\n    opacity: 0;\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    transform: translateY(0px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    transform: translateY(0px); } }\n\n.gg-close {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transform: scale(var(--ggs, 1));\n  width: 22px;\n  height: 22px;\n  border: 2px solid transparent;\n  border-radius: 40px; }\n\n.gg-close::after,\n.gg-close::before {\n  cursor: pointer;\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 16px;\n  height: 2px;\n  background: currentColor;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  top: 8px;\n  left: 1px; }\n\n.gg-close::after {\n  transform: rotate(-45deg); }\n\n.gg-check-o {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transform: scale(var(--ggs, 2));\n  width: 22px;\n  height: 22px;\n  border: 2px solid;\n  border-radius: 100px;\n  color: #747474;\n  opacity: 0.98;\n  background-color: #FFFFFF; }\n\n.gg-check-o::after {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  left: 3px;\n  top: -1px;\n  width: 6px;\n  height: 10px;\n  border-color: currentColor;\n  border-width: 0 2px 2px 0;\n  border-style: solid;\n  transform-origin: bottom left;\n  transform: rotate(45deg); }\n\n.gg-check-o {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transform: scale(var(--ggs, 1));\n  width: 22px;\n  height: 22px;\n  border: 2px solid;\n  border-radius: 100px; }\n\n.gg-danger {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transform: scale(var(--ggs, 1));\n  width: 20px;\n  height: 20px;\n  border: 2px solid;\n  border-radius: 40px; }\n\n.gg-danger::after,\n.gg-danger::before {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  border-radius: 3px;\n  width: 2px;\n  background: currentColor;\n  left: 7px; }\n\n.gg-danger::after {\n  top: 2px;\n  height: 8px; }\n\n.gg-danger::before {\n  height: 2px;\n  bottom: 2px; }\n\n.gg-check-o::after {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  left: 3px;\n  top: -1px;\n  width: 6px;\n  height: 10px;\n  border-color: currentColor;\n  border-width: 0 2px 2px 0;\n  border-style: solid;\n  transform-origin: bottom left;\n  transform: rotate(45deg); }\n\n:root {\n  --preview-size: 128px;\n  --dropzone-min-height: 64px; }\n\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone__box {\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n  min-height: var(--dropzone-min-height);\n  border: 2px dashed #03A062;\n  border-radius: 4px;\n  padding: 4px; }\n\n.dropzone__message--style {\n  flex-grow: 1;\n  text-align: center; }\n\n.dropzone__details--style {\n  padding: 2em 1em;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 13px;\n  line-height: 150%;\n  width: 64px;\n  min-width: 100%;\n  max-width: 100%; }\n\n.dropzone__item--style:not(.dropzone--has-thumbnail) > .dropzone__item-thumbnail {\n  border-radius: 12px;\n  border: solid 1px black; }\n\n.dropzone__item--style {\n  margin: auto auto;\n  padding: 4px; }\n\n.dropzone__item:hover {\n  z-index: 1000; }\n\n.dropzone__item {\n  position: relative;\n  display: inline-block; }\n\n.dropzone__error-mark, .dropzone__success-mark {\n  pointer-events: none;\n  opacity: 0;\n  z-index: 500;\n  position: absolute;\n  display: block;\n  top: 8px;\n  left: 8px; }\n\n.dropzone--has-error > .dropzone__error-mark > * {\n  display: block; }\n\n.dropzone--has-error .dropzone__progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone--has-error .dropzone__error-mark {\n  opacity: 1;\n  animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone--success > .dropzone__success-mark > * {\n  display: block; }\n\n.dropzone--success .dropzone__progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone .dropzone--success > .dropzone__success-mark {\n  opacity: 1;\n  animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone__item-thumbnail {\n  border-radius: 24px;\n  overflow: hidden;\n  width: var(--preview-size);\n  height: var(--preview-size);\n  position: relative;\n  display: block; }\n\n.dropzone__item:not(.dropzone--has-thumbnail) > .dropzone__details {\n  opacity: 1; }\n\n.dropzone--has-thumbnail:hover > .dropzone__details {\n  opacity: 1; }\n\n.dropzone--has-thumbnail > .dropzone__item-thumbnail > img {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.dropzone--has-thumbnail > .dropzone__details {\n  transition: opacity 0.2s linear;\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in;\n  transition-delay: 100ms; }\n\n.dropzone--has-thumbnail:hover > .dropzone__item-thumbnail > img {\n  transform: scale(1.01, 1.01);\n  filter: blur(1px); }\n\n.dropzone__item-controls {\n  display: inline-block;\n  position: absolute;\n  z-index: 10000;\n  border-radius: 4px;\n  top: 8px;\n  right: 8px; }\n  .dropzone__item-controls .dropzone__item-control {\n    cursor: pointer; }\n\n.dropzone-clickable {\n  cursor: pointer; }\n  .dropzone-clickable * {\n    cursor: default; }\n  .dropzone-clickable .dropzone__message * {\n    box-sizing: border-box;\n    cursor: pointer; }\n\n.dropzone__file-size {\n  margin-bottom: 1em;\n  font-size: 16px; }\n\n.dropzone__file-size > span {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 0 0.4em;\n  border-radius: 3px; }\n\n.dropzone__filename {\n  white-space: nowrap; }\n\n.dropzone__filename > span {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 0 0.4em;\n  border-radius: 3px; }\n\n.dropzone__filename:not(:hover) {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.dropzone__filename:not(:hover) > span {\n  border: 1px solid transparent; }\n\n.dropzone__details {\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.dropzone__progress {\n  opacity: 1;\n  z-index: 1000;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  -webkit-transform: scale(1);\n  border-radius: 8px;\n  overflow: hidden; }\n  .dropzone__progress .dropzone__progress-bar {\n    position: relative;\n    pointer-events: none;\n    background: rgba(255, 255, 255, 0.9);\n    height: 16px;\n    margin-top: -8px;\n    width: 80px;\n    transition: width 300ms ease-in-out; }\n\n.dropzone--added .dropzone__progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone-processing .dropzone__progress {\n  opacity: 1;\n  transition: all 0.2s linear; }\n\n.dropzone__item:not(.dropzone-processing) .dropzone__progress {\n  animation: pulse 6s ease infinite; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.images_wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\n}\n.images_wrapper .img_box {\r\n  list-style: none;\r\n  position: relative;\r\n  width: 21%;\r\n  background: #fff;\r\n  border: solid 1px #eff0f2;\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n  margin-bottom: 5px;\r\n  box-shadow: 0 1px 2px rgba(33, 43, 54, 0.15);\n}\n.images_wrapper .img_box:hover {\r\n  box-shadow: none;\n}\n.images_wrapper .img_box img {\r\n  width: 100%;\r\n  max-height: 250px;\r\n  min-height: 250px;\n}\n.images_wrapper .image_name {\r\n  font-size: 20px;\n}\n.images_wrapper .images_ex {\r\n  font-size: 16px;\r\n  color: #777777;\n}\n.images_wrapper .icon {\r\n  color: white;\r\n  font-size: 27px;\r\n  padding: 5px;\r\n  height: 30px;\r\n  background: #e03a1d;\r\n  width: 30px;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\n}\n.images_wrapper .img_box:hover .overlay {\r\n  opacity: 1;\n}\n.images_wrapper .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: all 0.3s ease-in-out;\r\n  background: rgba(78, 181, 41, 0.3);\r\n  border-radius: 18px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/dropzone-vue/dist/dropzone-vue.common.js":
/*!***************************************************************!*\
  !*** ./node_modules/dropzone-vue/dist/dropzone-vue.common.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * dropzone-vue 0.1.11
 * (c) 2021
 * @license MIT
 */
var e=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"),t=function(e){try{return!!e()}catch(e){return!0}},i=!t((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function a(e){var t={exports:{}};return e(t,t.exports),t.exports}var p=function(e){return e&&e.Math==Math&&e},r=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof n&&n)||function(){return this}()||Function("return this")(),o=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=r.document,c=o(m)&&o(m.createElement),l=function(e){return c?m.createElement(e):{}},s=!i&&!t((function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a})),d=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e},u=function(e,t){if(!o(e))return e;var i,n;if(t&&"function"==typeof(i=e.toString)&&!o(n=i.call(e)))return n;if("function"==typeof(i=e.valueOf)&&!o(n=i.call(e)))return n;if(!t&&"function"==typeof(i=e.toString)&&!o(n=i.call(e)))return n;throw TypeError("Can't convert object to primitive value")},f=Object.defineProperty,y={f:i?f:function(e,t,i){if(d(e),t=u(t,!0),d(i),s)try{return f(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e}},v=y.f,x=Function.prototype,_=x.toString,h=/^\s*function ([^ (]*)/;function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){g(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function A(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i&&!("name"in x)&&v(x,"name",{configurable:!0,get:function(){try{return _.call(this).match(h)[1]}catch(e){return""}}});var E={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,j={f:S&&!E.call({1:2},1)?function(e){var t=S(this,e);return!!t&&t.enumerable}:E},O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},T={}.toString,I=function(e){return T.call(e).slice(8,-1)},R="".split,L=t((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==I(e)?R.call(e,""):Object(e)}:Object,U=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},z=function(e){return L(U(e))},N={}.hasOwnProperty,F=function(e,t){return N.call(e,t)},P=Object.getOwnPropertyDescriptor,C={f:i?P:function(e,t){if(e=z(e),t=u(t,!0),s)try{return P(e,t)}catch(e){}if(F(e,t))return O(!j.f.call(e,t),e[t])}},M=i?function(e,t,i){return y.f(e,t,O(1,i))}:function(e,t,i){return e[t]=i,e},q=function(e,t){try{M(r,e,t)}catch(i){r[e]=t}return t},D=r["__core-js_shared__"]||q("__core-js_shared__",{}),B=Function.toString;"function"!=typeof D.inspectSource&&(D.inspectSource=function(e){return B.call(e)});var V,G,$,W=D.inspectSource,Y=r.WeakMap,H="function"==typeof Y&&/native code/.test(W(Y)),Q=a((function(e){(e.exports=function(e,t){return D[e]||(D[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),X=0,K=Math.random(),Z=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++X+K).toString(36)},J=Q("keys"),ee=function(e){return J[e]||(J[e]=Z(e))},te={},ie=r.WeakMap;if(H){var ne=D.state||(D.state=new ie),ae=ne.get,pe=ne.has,re=ne.set;V=function(e,t){return t.facade=e,re.call(ne,e,t),t},G=function(e){return ae.call(ne,e)||{}},$=function(e){return pe.call(ne,e)}}else{var oe=ee("state");te[oe]=!0,V=function(e,t){return t.facade=e,M(e,oe,t),t},G=function(e){return F(e,oe)?e[oe]:{}},$=function(e){return F(e,oe)}}var me={set:V,get:G,has:$,enforce:function(e){return $(e)?G(e):V(e,{})},getterFor:function(e){return function(t){var i;if(!o(t)||(i=G(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}}},ce=a((function(e){var t=me.get,i=me.enforce,n=String(String).split("String");(e.exports=function(e,t,a,p){var o,m=!!p&&!!p.unsafe,c=!!p&&!!p.enumerable,l=!!p&&!!p.noTargetGet;"function"==typeof a&&("string"!=typeof t||F(a,"name")||M(a,"name",t),(o=i(a)).source||(o.source=n.join("string"==typeof t?t:""))),e!==r?(m?!l&&e[t]&&(c=!0):delete e[t],c?e[t]=a:M(e,t,a)):c?e[t]=a:q(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||W(this)}))})),le=r,se=function(e){return"function"==typeof e?e:void 0},de=function(e,t){return arguments.length<2?se(le[e])||se(r[e]):le[e]&&le[e][t]||r[e]&&r[e][t]},ue=Math.ceil,fe=Math.floor,ye=function(e){return isNaN(e=+e)?0:(e>0?fe:ue)(e)},ve=Math.min,xe=function(e){return e>0?ve(ye(e),9007199254740991):0},_e=Math.max,he=Math.min,ge=function(e,t){var i=ye(e);return i<0?_e(i+t,0):he(i,t)},be=function(e){return function(t,i,n){var a,p=z(t),r=xe(p.length),o=ge(n,r);if(e&&i!=i){for(;r>o;)if((a=p[o++])!=a)return!0}else for(;r>o;o++)if((e||o in p)&&p[o]===i)return e||o||0;return!e&&-1}},we={includes:be(!0),indexOf:be(!1)},ke=we.indexOf,Ae=function(e,t){var i,n=z(e),a=0,p=[];for(i in n)!F(te,i)&&F(n,i)&&p.push(i);for(;t.length>a;)F(n,i=t[a++])&&(~ke(p,i)||p.push(i));return p},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Se=Ee.concat("length","prototype"),je={f:Object.getOwnPropertyNames||function(e){return Ae(e,Se)}},Oe={f:Object.getOwnPropertySymbols},Te=de("Reflect","ownKeys")||function(e){var t=je.f(d(e)),i=Oe.f;return i?t.concat(i(e)):t},Ie=function(e,t){for(var i=Te(t),n=y.f,a=C.f,p=0;p<i.length;p++){var r=i[p];F(e,r)||n(e,r,a(t,r))}},Re=/#|\.prototype\./,Le=function(e,i){var n=ze[Ue(e)];return n==Fe||n!=Ne&&("function"==typeof i?t(i):!!i)},Ue=Le.normalize=function(e){return String(e).replace(Re,".").toLowerCase()},ze=Le.data={},Ne=Le.NATIVE="N",Fe=Le.POLYFILL="P",Pe=Le,Ce=C.f,Me=function(e,t){var i,n,a,p,o,m=e.target,c=e.global,l=e.stat;if(i=c?r:l?r[m]||q(m,{}):(r[m]||{}).prototype)for(n in t){if(p=t[n],a=e.noTargetGet?(o=Ce(i,n))&&o.value:i[n],!Pe(c?n:m+(l?".":"#")+n,e.forced)&&void 0!==a){if(typeof p==typeof a)continue;Ie(p,a)}(e.sham||a&&a.sham)&&M(p,"sham",!0),ce(i,n,p,e)}},qe=function(){var e=d(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function De(e,t){return RegExp(e,t)}var Be,Ve,Ge={UNSUPPORTED_Y:t((function(){var e=De("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:t((function(){var e=De("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},$e=RegExp.prototype.exec,We=String.prototype.replace,Ye=$e,He=(Be=/a/,Ve=/b*/g,$e.call(Be,"a"),$e.call(Ve,"a"),0!==Be.lastIndex||0!==Ve.lastIndex),Qe=Ge.UNSUPPORTED_Y||Ge.BROKEN_CARET,Xe=void 0!==/()??/.exec("")[1];(He||Xe||Qe)&&(Ye=function(e){var t,i,n,a,p=this,r=Qe&&p.sticky,o=qe.call(p),m=p.source,c=0,l=e;return r&&(-1===(o=o.replace("y","")).indexOf("g")&&(o+="g"),l=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(m="(?: "+m+")",l=" "+l,c++),i=new RegExp("^(?:"+m+")",o)),Xe&&(i=new RegExp("^"+m+"$(?!\\s)",o)),He&&(t=p.lastIndex),n=$e.call(r?i:p,l),r?n?(n.input=n.input.slice(c),n[0]=n[0].slice(c),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:He&&n&&(p.lastIndex=p.global?n.index+n[0].length:t),Xe&&n&&n.length>1&&We.call(n[0],i,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)})),n});var Ke=Ye;Me({target:"RegExp",proto:!0,forced:/./.exec!==Ke},{exec:Ke});var Ze,Je,et="process"==I(r.process),tt=de("navigator","userAgent")||"",it=r.process,nt=it&&it.versions,at=nt&&nt.v8;at?Je=(Ze=at.split("."))[0]+Ze[1]:tt&&(!(Ze=tt.match(/Edge\/(\d+)/))||Ze[1]>=74)&&(Ze=tt.match(/Chrome\/(\d+)/))&&(Je=Ze[1]);var pt=Je&&+Je,rt=!!Object.getOwnPropertySymbols&&!t((function(){return!Symbol.sham&&(et?38===pt:pt>37&&pt<41)})),ot=rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,mt=Q("wks"),ct=r.Symbol,lt=ot?ct:ct&&ct.withoutSetter||Z,st=function(e){return F(mt,e)&&(rt||"string"==typeof mt[e])||(rt&&F(ct,e)?mt[e]=ct[e]:mt[e]=lt("Symbol."+e)),mt[e]},dt=st("species"),ut=!t((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),ft="$0"==="a".replace(/./,"$0"),yt=st("replace"),vt=!!/./[yt]&&""===/./[yt]("a","$0"),xt=!t((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),_t=function(e,i,n,a){var p=st(e),r=!t((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),o=r&&!t((function(){var t=!1,i=/a/;return"split"===e&&((i={}).constructor={},i.constructor[dt]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return t=!0,null},i[p](""),!t}));if(!r||!o||"replace"===e&&(!ut||!ft||vt)||"split"===e&&!xt){var m=/./[p],c=n(p,""[e],(function(e,t,i,n,a){return t.exec===Ke?r&&!a?{done:!0,value:m.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:ft,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:vt}),l=c[0],s=c[1];ce(String.prototype,e,l),ce(RegExp.prototype,p,2==i?function(e,t){return s.call(e,this,t)}:function(e){return s.call(e,this)})}a&&M(RegExp.prototype[p],"sham",!0)},ht=function(e){return function(t,i){var n,a,p=String(U(t)),r=ye(i),o=p.length;return r<0||r>=o?e?"":void 0:(n=p.charCodeAt(r))<55296||n>56319||r+1===o||(a=p.charCodeAt(r+1))<56320||a>57343?e?p.charAt(r):n:e?p.slice(r,r+2):a-56320+(n-55296<<10)+65536}},gt={codeAt:ht(!1),charAt:ht(!0)},bt=gt.charAt,wt=function(e,t,i){return t+(i?bt(e,t).length:1)},kt=function(e){return Object(U(e))},At=Math.floor,Et="".replace,St=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,jt=/\$([$&'`]|\d{1,2})/g,Ot=function(e,t,i,n,a,p){var r=i+e.length,o=n.length,m=jt;return void 0!==a&&(a=kt(a),m=St),Et.call(p,m,(function(p,m){var c;switch(m.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(r);case"<":c=a[m.slice(1,-1)];break;default:var l=+m;if(0===l)return p;if(l>o){var s=At(l/10);return 0===s?p:s<=o?void 0===n[s-1]?m.charAt(1):n[s-1]+m.charAt(1):p}c=n[l-1]}return void 0===c?"":c}))},Tt=function(e,t){var i=e.exec;if("function"==typeof i){var n=i.call(e,t);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==I(e))throw TypeError("RegExp#exec called on incompatible receiver");return Ke.call(e,t)},It=Math.max,Rt=Math.min;_t("replace",2,(function(e,t,i,n){var a=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,r=a?"$":"$0";return[function(i,n){var a=U(this),p=null==i?void 0:i[e];return void 0!==p?p.call(i,a,n):t.call(String(a),i,n)},function(e,n){if(!a&&p||"string"==typeof n&&-1===n.indexOf(r)){var o=i(t,e,this,n);if(o.done)return o.value}var m=d(e),c=String(this),l="function"==typeof n;l||(n=String(n));var s=m.global;if(s){var u=m.unicode;m.lastIndex=0}for(var f=[];;){var y=Tt(m,c);if(null===y)break;if(f.push(y),!s)break;""===String(y[0])&&(m.lastIndex=wt(c,xe(m.lastIndex),u))}for(var v,x="",_=0,h=0;h<f.length;h++){y=f[h];for(var g=String(y[0]),b=It(Rt(ye(y.index),c.length),0),w=[],k=1;k<y.length;k++)w.push(void 0===(v=y[k])?v:String(v));var A=y.groups;if(l){var E=[g].concat(w,b,c);void 0!==A&&E.push(A);var S=String(n.apply(void 0,E))}else S=Ot(g,c,b,w,A,n);b>=_&&(x+=c.slice(_,b)+S,_=b+g.length)}return x+c.slice(_)}]}));var Lt={};Lt[st("toStringTag")]="z";var Ut="[object z]"===String(Lt),zt=st("toStringTag"),Nt="Arguments"==I(function(){return arguments}()),Ft=Ut?I:function(e){var t,i,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),zt))?i:Nt?I(t):"Object"==(n=I(t))&&"function"==typeof t.callee?"Arguments":n},Pt=Ut?{}.toString:function(){return"[object "+Ft(this)+"]"};Ut||ce(Object.prototype,"toString",Pt,{unsafe:!0});var Ct=RegExp.prototype,Mt=Ct.toString,qt=t((function(){return"/a/b"!=Mt.call({source:"a",flags:"b"})})),Dt="toString"!=Mt.name;(qt||Dt)&&ce(RegExp.prototype,"toString",(function(){var e=d(this),t=String(e.source),i=e.flags;return"/"+t+"/"+String(void 0===i&&e instanceof RegExp&&!("flags"in Ct)?qe.call(e):i)}),{unsafe:!0});var Bt=st("iterator"),Vt=!1;try{var Gt=0,$t={next:function(){return{done:!!Gt++}},return:function(){Vt=!0}};$t[Bt]=function(){return this},Array.from($t,(function(){throw 2}))}catch(e){}var Wt,Yt="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,Ht=!t((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),Qt=ee("IE_PROTO"),Xt=Object.prototype,Kt=Ht?Object.getPrototypeOf:function(e){return e=kt(e),F(e,Qt)?e[Qt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Xt:null},Zt=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,i={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),t=i instanceof Array}catch(e){}return function(i,n){return d(i),function(e){if(!o(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(i,n):i.__proto__=n,i}}():void 0),Jt=y.f,ei=r.Int8Array,ti=ei&&ei.prototype,ii=r.Uint8ClampedArray,ni=ii&&ii.prototype,ai=ei&&Kt(ei),pi=ti&&Kt(ti),ri=Object.prototype,oi=ri.isPrototypeOf,mi=st("toStringTag"),ci=Z("TYPED_ARRAY_TAG"),li=Yt&&!!Zt&&"Opera"!==Ft(r.opera),si=!1,di={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},ui={BigInt64Array:8,BigUint64Array:8},fi=function(e){if(!o(e))return!1;var t=Ft(e);return F(di,t)||F(ui,t)};for(Wt in di)r[Wt]||(li=!1);if((!li||"function"!=typeof ai||ai===Function.prototype)&&(ai=function(){throw TypeError("Incorrect invocation")},li))for(Wt in di)r[Wt]&&Zt(r[Wt],ai);if((!li||!pi||pi===ri)&&(pi=ai.prototype,li))for(Wt in di)r[Wt]&&Zt(r[Wt].prototype,pi);if(li&&Kt(ni)!==pi&&Zt(ni,pi),i&&!F(pi,mi))for(Wt in si=!0,Jt(pi,mi,{get:function(){return o(this)?this[ci]:void 0}}),di)r[Wt]&&M(r[Wt],ci,Wt);var yi={NATIVE_ARRAY_BUFFER_VIEWS:li,TYPED_ARRAY_TAG:si&&ci,aTypedArray:function(e){if(fi(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(Zt){if(oi.call(ai,e))return e}else for(var t in di)if(F(di,Wt)){var i=r[t];if(i&&(e===i||oi.call(i,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,n){if(i){if(n)for(var a in di){var p=r[a];p&&F(p.prototype,e)&&delete p.prototype[e]}pi[e]&&!n||ce(pi,e,n?t:li&&ti[e]||t)}},exportTypedArrayStaticMethod:function(e,t,n){var a,p;if(i){if(Zt){if(n)for(a in di)(p=r[a])&&F(p,e)&&delete p[e];if(ai[e]&&!n)return;try{return ce(ai,e,n?t:li&&ei[e]||t)}catch(e){}}for(a in di)!(p=r[a])||p[e]&&!n||ce(p,e,t)}},isView:function(e){if(!o(e))return!1;var t=Ft(e);return"DataView"===t||F(di,t)||F(ui,t)},isTypedArray:fi,TypedArray:ai,TypedArrayPrototype:pi},vi=yi.NATIVE_ARRAY_BUFFER_VIEWS,xi=r.ArrayBuffer,_i=r.Int8Array,hi=!vi||!t((function(){_i(1)}))||!t((function(){new _i(-1)}))||!function(e,t){if(!t&&!Vt)return!1;var i=!1;try{var n={};n[Bt]=function(){return{next:function(){return{done:i=!0}}}},e(n)}catch(e){}return i}((function(e){new _i,new _i(null),new _i(1.5),new _i(e)}),!0)||t((function(){return 1!==new _i(new xi(2),1,void 0).length})),gi=function(e,t,i){for(var n in t)ce(e,n,t[n],i);return e},bi=function(e,t,i){if(!(e instanceof t))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return e},wi=function(e){if(void 0===e)return 0;var t=ye(e),i=xe(t);if(t!==i)throw RangeError("Wrong length or index");return i},ki=Math.abs,Ai=Math.pow,Ei=Math.floor,Si=Math.log,ji=Math.LN2,Oi=function(e,t,i){var n,a,p,r=new Array(i),o=8*i-t-1,m=(1<<o)-1,c=m>>1,l=23===t?Ai(2,-24)-Ai(2,-77):0,s=e<0||0===e&&1/e<0?1:0,d=0;for((e=ki(e))!=e||e===1/0?(a=e!=e?1:0,n=m):(n=Ei(Si(e)/ji),e*(p=Ai(2,-n))<1&&(n--,p*=2),(e+=n+c>=1?l/p:l*Ai(2,1-c))*p>=2&&(n++,p/=2),n+c>=m?(a=0,n=m):n+c>=1?(a=(e*p-1)*Ai(2,t),n+=c):(a=e*Ai(2,c-1)*Ai(2,t),n=0));t>=8;r[d++]=255&a,a/=256,t-=8);for(n=n<<t|a,o+=t;o>0;r[d++]=255&n,n/=256,o-=8);return r[--d]|=128*s,r},Ti=function(e,t){var i,n=e.length,a=8*n-t-1,p=(1<<a)-1,r=p>>1,o=a-7,m=n-1,c=e[m--],l=127&c;for(c>>=7;o>0;l=256*l+e[m],m--,o-=8);for(i=l&(1<<-o)-1,l>>=-o,o+=t;o>0;i=256*i+e[m],m--,o-=8);if(0===l)l=1-r;else{if(l===p)return i?NaN:c?-1/0:1/0;i+=Ai(2,t),l-=r}return(c?-1:1)*i*Ai(2,l-t)},Ii=function(e){for(var t=kt(this),i=xe(t.length),n=arguments.length,a=ge(n>1?arguments[1]:void 0,i),p=n>2?arguments[2]:void 0,r=void 0===p?i:ge(p,i);r>a;)t[a++]=e;return t},Ri=y.f,Li=st("toStringTag"),Ui=function(e,t,i){e&&!F(e=i?e:e.prototype,Li)&&Ri(e,Li,{configurable:!0,value:t})},zi=je.f,Ni=y.f,Fi=me.get,Pi=me.set,Ci=r.ArrayBuffer,Mi=Ci,qi=r.DataView,Di=qi&&qi.prototype,Bi=Object.prototype,Vi=r.RangeError,Gi=Oi,$i=Ti,Wi=function(e){return[255&e]},Yi=function(e){return[255&e,e>>8&255]},Hi=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},Qi=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},Xi=function(e){return Gi(e,23,4)},Ki=function(e){return Gi(e,52,8)},Zi=function(e,t){Ni(e.prototype,t,{get:function(){return Fi(this)[t]}})},Ji=function(e,t,i,n){var a=wi(i),p=Fi(e);if(a+t>p.byteLength)throw Vi("Wrong index");var r=Fi(p.buffer).bytes,o=a+p.byteOffset,m=r.slice(o,o+t);return n?m:m.reverse()},en=function(e,t,i,n,a,p){var r=wi(i),o=Fi(e);if(r+t>o.byteLength)throw Vi("Wrong index");for(var m=Fi(o.buffer).bytes,c=r+o.byteOffset,l=n(+a),s=0;s<t;s++)m[c+s]=l[p?s:t-s-1]};if(Yt){if(!t((function(){Ci(1)}))||!t((function(){new Ci(-1)}))||t((function(){return new Ci,new Ci(1.5),new Ci(NaN),"ArrayBuffer"!=Ci.name}))){for(var tn,nn=(Mi=function(e){return bi(this,Mi),new Ci(wi(e))}).prototype=Ci.prototype,an=zi(Ci),pn=0;an.length>pn;)(tn=an[pn++])in Mi||M(Mi,tn,Ci[tn]);nn.constructor=Mi}Zt&&Kt(Di)!==Bi&&Zt(Di,Bi);var rn=new qi(new Mi(2)),on=Di.setInt8;rn.setInt8(0,2147483648),rn.setInt8(1,2147483649),!rn.getInt8(0)&&rn.getInt8(1)||gi(Di,{setInt8:function(e,t){on.call(this,e,t<<24>>24)},setUint8:function(e,t){on.call(this,e,t<<24>>24)}},{unsafe:!0})}else Mi=function(e){bi(this,Mi,"ArrayBuffer");var t=wi(e);Pi(this,{bytes:Ii.call(new Array(t),0),byteLength:t}),i||(this.byteLength=t)},qi=function(e,t,n){bi(this,qi,"DataView"),bi(e,Mi,"DataView");var a=Fi(e).byteLength,p=ye(t);if(p<0||p>a)throw Vi("Wrong offset");if(p+(n=void 0===n?a-p:xe(n))>a)throw Vi("Wrong length");Pi(this,{buffer:e,byteLength:n,byteOffset:p}),i||(this.buffer=e,this.byteLength=n,this.byteOffset=p)},i&&(Zi(Mi,"byteLength"),Zi(qi,"buffer"),Zi(qi,"byteLength"),Zi(qi,"byteOffset")),gi(qi.prototype,{getInt8:function(e){return Ji(this,1,e)[0]<<24>>24},getUint8:function(e){return Ji(this,1,e)[0]},getInt16:function(e){var t=Ji(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=Ji(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return Qi(Ji(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return Qi(Ji(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return $i(Ji(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return $i(Ji(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){en(this,1,e,Wi,t)},setUint8:function(e,t){en(this,1,e,Wi,t)},setInt16:function(e,t){en(this,2,e,Yi,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){en(this,2,e,Yi,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){en(this,4,e,Hi,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){en(this,4,e,Hi,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){en(this,4,e,Xi,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){en(this,8,e,Ki,t,arguments.length>2?arguments[2]:void 0)}});Ui(Mi,"ArrayBuffer"),Ui(qi,"DataView");var mn,cn={ArrayBuffer:Mi,DataView:qi},ln=function(e,t){var i=function(e){var t=ye(e);if(t<0)throw RangeError("The argument can't be less than 0");return t}(e);if(i%t)throw RangeError("Wrong offset");return i},sn=Object.keys||function(e){return Ae(e,Ee)},dn=i?Object.defineProperties:function(e,t){d(e);for(var i,n=sn(t),a=n.length,p=0;a>p;)y.f(e,i=n[p++],t[i]);return e},un=de("document","documentElement"),fn=ee("IE_PROTO"),yn=function(){},vn=function(e){return"<script>"+e+"<\/script>"},xn=function(){try{mn=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;xn=mn?function(e){e.write(vn("")),e.close();var t=e.parentWindow.Object;return e=null,t}(mn):((t=l("iframe")).style.display="none",un.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(vn("document.F=Object")),e.close(),e.F);for(var i=Ee.length;i--;)delete xn.prototype[Ee[i]];return xn()};te[fn]=!0;var _n=Object.create||function(e,t){var i;return null!==e?(yn.prototype=d(e),i=new yn,yn.prototype=null,i[fn]=e):i=xn(),void 0===t?i:dn(i,t)},hn={},gn=st("iterator"),bn=function(e){if(null!=e)return e[gn]||e["@@iterator"]||hn[Ft(e)]},wn=st("iterator"),kn=Array.prototype,An=function(e){return void 0!==e&&(hn.Array===e||kn[wn]===e)},En=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Sn=function(e,t,i){if(En(e),void 0===t)return e;switch(i){case 0:return function(){return e.call(t)};case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,a){return e.call(t,i,n,a)}}return function(){return e.apply(t,arguments)}},jn=yi.aTypedArrayConstructor,On=function(e){var t,i,n,a,p,r,o=kt(e),m=arguments.length,c=m>1?arguments[1]:void 0,l=void 0!==c,s=bn(o);if(null!=s&&!An(s))for(r=(p=s.call(o)).next,o=[];!(a=r.call(p)).done;)o.push(a.value);for(l&&m>2&&(c=Sn(c,arguments[2],2)),i=xe(o.length),n=new(jn(this))(i),t=0;i>t;t++)n[t]=l?c(o[t],t):o[t];return n},Tn=Array.isArray||function(e){return"Array"==I(e)},In=st("species"),Rn=function(e,t){var i;return Tn(e)&&("function"!=typeof(i=e.constructor)||i!==Array&&!Tn(i.prototype)?o(i)&&null===(i=i[In])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===t?0:t)},Ln=[].push,Un=function(e){var t=1==e,i=2==e,n=3==e,a=4==e,p=6==e,r=7==e,o=5==e||p;return function(m,c,l,s){for(var d,u,f=kt(m),y=L(f),v=Sn(c,l,3),x=xe(y.length),_=0,h=s||Rn,g=t?h(m,x):i||r?h(m,0):void 0;x>_;_++)if((o||_ in y)&&(u=v(d=y[_],_,f),e))if(t)g[_]=u;else if(u)switch(e){case 3:return!0;case 5:return d;case 6:return _;case 2:Ln.call(g,d)}else switch(e){case 4:return!1;case 7:Ln.call(g,d)}return p?-1:n||a?a:g}},zn={forEach:Un(0),map:Un(1),filter:Un(2),some:Un(3),every:Un(4),find:Un(5),findIndex:Un(6),filterOut:Un(7)},Nn=st("species"),Fn=function(e,t,i){var n,a;return Zt&&"function"==typeof(n=t.constructor)&&n!==i&&o(a=n.prototype)&&a!==i.prototype&&Zt(e,a),e};a((function(e){var t=je.f,n=zn.forEach,a=me.get,p=me.set,m=y.f,c=C.f,l=Math.round,s=r.RangeError,d=cn.ArrayBuffer,f=cn.DataView,v=yi.NATIVE_ARRAY_BUFFER_VIEWS,x=yi.TYPED_ARRAY_TAG,_=yi.TypedArray,h=yi.TypedArrayPrototype,g=yi.aTypedArrayConstructor,b=yi.isTypedArray,w="BYTES_PER_ELEMENT",k="Wrong length",A=function(e,t){for(var i=0,n=t.length,a=new(g(e))(n);n>i;)a[i]=t[i++];return a},E=function(e,t){m(e,t,{get:function(){return a(this)[t]}})},S=function(e){var t;return e instanceof d||"ArrayBuffer"==(t=Ft(e))||"SharedArrayBuffer"==t},j=function(e,t){return b(e)&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},T=function(e,t){return j(e,t=u(t,!0))?O(2,e[t]):c(e,t)},I=function(e,t,i){return!(j(e,t=u(t,!0))&&o(i)&&F(i,"value"))||F(i,"get")||F(i,"set")||i.configurable||F(i,"writable")&&!i.writable||F(i,"enumerable")&&!i.enumerable?m(e,t,i):(e[t]=i.value,e)};i?(v||(C.f=T,y.f=I,E(h,"buffer"),E(h,"byteOffset"),E(h,"byteLength"),E(h,"length")),Me({target:"Object",stat:!0,forced:!v},{getOwnPropertyDescriptor:T,defineProperty:I}),e.exports=function(e,c,u){var g=e.match(/\d+$/)[0]/8,E=e+(u?"Clamped":"")+"Array",j="get"+e,O="set"+e,T=r[E],I=T,R=I&&I.prototype,L={},U=function(e,t){m(e,t,{get:function(){return function(e,t){var i=a(e);return i.view[j](t*g+i.byteOffset,!0)}(this,t)},set:function(e){return function(e,t,i){var n=a(e);u&&(i=(i=l(i))<0?0:i>255?255:255&i),n.view[O](t*g+n.byteOffset,i,!0)}(this,t,e)},enumerable:!0})};v?hi&&(I=c((function(e,t,i,n){return bi(e,I,E),Fn(o(t)?S(t)?void 0!==n?new T(t,ln(i,g),n):void 0!==i?new T(t,ln(i,g)):new T(t):b(t)?A(I,t):On.call(I,t):new T(wi(t)),e,I)})),Zt&&Zt(I,_),n(t(T),(function(e){e in I||M(I,e,T[e])})),I.prototype=R):(I=c((function(e,t,i,n){bi(e,I,E);var a,r,m,c=0,l=0;if(o(t)){if(!S(t))return b(t)?A(I,t):On.call(I,t);a=t,l=ln(i,g);var u=t.byteLength;if(void 0===n){if(u%g)throw s(k);if((r=u-l)<0)throw s(k)}else if((r=xe(n)*g)+l>u)throw s(k);m=r/g}else m=wi(t),a=new d(r=m*g);for(p(e,{buffer:a,byteOffset:l,byteLength:r,length:m,view:new f(a)});c<m;)U(e,c++)})),Zt&&Zt(I,_),R=I.prototype=_n(h)),R.constructor!==I&&M(R,"constructor",I),x&&M(R,x,E),L[E]=I,Me({global:!0,forced:I!=T,sham:!v},L),w in I||M(I,w,g),w in R||M(R,w,g),function(e){var t=de(e),n=y.f;i&&t&&!t[Nn]&&n(t,Nn,{configurable:!0,get:function(){return this}})}(E)}):e.exports=function(){}}))("Uint8",(function(e){return function(t,i,n){return e(this,t,i,n)}}));var Pn=Math.min,Cn=[].copyWithin||function(e,t){var i=kt(this),n=xe(i.length),a=ge(e,n),p=ge(t,n),r=arguments.length>2?arguments[2]:void 0,o=Pn((void 0===r?n:ge(r,n))-p,n-a),m=1;for(p<a&&a<p+o&&(m=-1,p+=o-1,a+=o-1);o-- >0;)p in i?i[a]=i[p]:delete i[a],a+=m,p+=m;return i},Mn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("copyWithin",(function(e,t){return Cn.call(Mn(this),e,t,arguments.length>2?arguments[2]:void 0)}));var qn=zn.every,Dn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("every",(function(e){return qn(Dn(this),e,arguments.length>1?arguments[1]:void 0)}));var Bn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("fill",(function(e){return Ii.apply(Bn(this),arguments)}));var Vn=st("species"),Gn=function(e,t){var i,n=d(e).constructor;return void 0===n||null==(i=d(n)[Vn])?t:En(i)},$n=yi.aTypedArrayConstructor,Wn=function(e,t){for(var i=Gn(e,e.constructor),n=0,a=t.length,p=new($n(i))(a);a>n;)p[n]=t[n++];return p},Yn=zn.filter,Hn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("filter",(function(e){var t=Yn(Hn(this),e,arguments.length>1?arguments[1]:void 0);return Wn(this,t)}));var Qn=zn.find,Xn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("find",(function(e){return Qn(Xn(this),e,arguments.length>1?arguments[1]:void 0)}));var Kn=zn.findIndex,Zn=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("findIndex",(function(e){return Kn(Zn(this),e,arguments.length>1?arguments[1]:void 0)}));var Jn=zn.forEach,ea=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("forEach",(function(e){Jn(ea(this),e,arguments.length>1?arguments[1]:void 0)}));var ta=we.includes,ia=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("includes",(function(e){return ta(ia(this),e,arguments.length>1?arguments[1]:void 0)}));var na=we.indexOf,aa=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("indexOf",(function(e){return na(aa(this),e,arguments.length>1?arguments[1]:void 0)}));var pa=st("unscopables"),ra=Array.prototype;null==ra[pa]&&y.f(ra,pa,{configurable:!0,value:_n(null)});var oa,ma,ca,la=function(e){ra[pa][e]=!0},sa=st("iterator"),da=!1;[].keys&&("next"in(ca=[].keys())?(ma=Kt(Kt(ca)))!==Object.prototype&&(oa=ma):da=!0),(null==oa||t((function(){var e={};return oa[sa].call(e)!==e})))&&(oa={}),F(oa,sa)||M(oa,sa,(function(){return this}));var ua={IteratorPrototype:oa,BUGGY_SAFARI_ITERATORS:da},fa=ua.IteratorPrototype,ya=function(){return this},va=function(e,t,i){var n=t+" Iterator";return e.prototype=_n(fa,{next:O(1,i)}),Ui(e,n,!1),hn[n]=ya,e},xa=ua.IteratorPrototype,_a=ua.BUGGY_SAFARI_ITERATORS,ha=st("iterator"),ga=function(){return this},ba=function(e,t,i,n,a,p,r){va(i,t,n);var o,m,c,l=function(e){if(e===a&&y)return y;if(!_a&&e in u)return u[e];switch(e){case"keys":case"values":case"entries":return function(){return new i(this,e)}}return function(){return new i(this)}},s=t+" Iterator",d=!1,u=e.prototype,f=u[ha]||u["@@iterator"]||a&&u[a],y=!_a&&f||l(a),v="Array"==t&&u.entries||f;if(v&&(o=Kt(v.call(new e)),xa!==Object.prototype&&o.next&&(Kt(o)!==xa&&(Zt?Zt(o,xa):"function"!=typeof o[ha]&&M(o,ha,ga)),Ui(o,s,!0))),"values"==a&&f&&"values"!==f.name&&(d=!0,y=function(){return f.call(this)}),u[ha]!==y&&M(u,ha,y),hn[t]=y,a)if(m={values:l("values"),keys:p?y:l("keys"),entries:l("entries")},r)for(c in m)(_a||d||!(c in u))&&ce(u,c,m[c]);else Me({target:t,proto:!0,forced:_a||d},m);return m},wa=me.set,ka=me.getterFor("Array Iterator"),Aa=ba(Array,"Array",(function(e,t){wa(this,{type:"Array Iterator",target:z(e),index:0,kind:t})}),(function(){var e=ka(this),t=e.target,i=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values");hn.Arguments=hn.Array,la("keys"),la("values"),la("entries");var Ea=st("iterator"),Sa=r.Uint8Array,ja=Aa.values,Oa=Aa.keys,Ta=Aa.entries,Ia=yi.aTypedArray,Ra=yi.exportTypedArrayMethod,La=Sa&&Sa.prototype[Ea],Ua=!!La&&("values"==La.name||null==La.name),za=function(){return ja.call(Ia(this))};Ra("entries",(function(){return Ta.call(Ia(this))})),Ra("keys",(function(){return Oa.call(Ia(this))})),Ra("values",za,!Ua),Ra(Ea,za,!Ua);var Na=yi.aTypedArray,Fa=[].join;(0,yi.exportTypedArrayMethod)("join",(function(e){return Fa.apply(Na(this),arguments)}));var Pa=function(e,i){var n=[][e];return!!n&&t((function(){n.call(null,i||function(){throw 1},1)}))},Ca=Math.min,Ma=[].lastIndexOf,qa=!!Ma&&1/[1].lastIndexOf(1,-0)<0,Da=Pa("lastIndexOf"),Ba=qa||!Da?function(e){if(qa)return Ma.apply(this,arguments)||0;var t=z(this),i=xe(t.length),n=i-1;for(arguments.length>1&&(n=Ca(n,ye(arguments[1]))),n<0&&(n=i+n);n>=0;n--)if(n in t&&t[n]===e)return n||0;return-1}:Ma,Va=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("lastIndexOf",(function(e){return Ba.apply(Va(this),arguments)}));var Ga=zn.map,$a=yi.aTypedArray,Wa=yi.aTypedArrayConstructor;(0,yi.exportTypedArrayMethod)("map",(function(e){return Ga($a(this),e,arguments.length>1?arguments[1]:void 0,(function(e,t){return new(Wa(Gn(e,e.constructor)))(t)}))}));var Ya=function(e){return function(t,i,n,a){En(i);var p=kt(t),r=L(p),o=xe(p.length),m=e?o-1:0,c=e?-1:1;if(n<2)for(;;){if(m in r){a=r[m],m+=c;break}if(m+=c,e?m<0:o<=m)throw TypeError("Reduce of empty array with no initial value")}for(;e?m>=0:o>m;m+=c)m in r&&(a=i(a,r[m],m,p));return a}},Ha={left:Ya(!1),right:Ya(!0)},Qa=Ha.left,Xa=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("reduce",(function(e){return Qa(Xa(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}));var Ka=Ha.right,Za=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("reduceRight",(function(e){return Ka(Za(this),e,arguments.length,arguments.length>1?arguments[1]:void 0)}));var Ja=yi.aTypedArray,ep=yi.exportTypedArrayMethod,tp=Math.floor;ep("reverse",(function(){for(var e,t=this,i=Ja(t).length,n=tp(i/2),a=0;a<n;)e=t[a],t[a++]=t[--i],t[i]=e;return t}));var ip=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("set",(function(e){ip(this);var t=ln(arguments.length>1?arguments[1]:void 0,1),i=this.length,n=kt(e),a=xe(n.length),p=0;if(a+t>i)throw RangeError("Wrong length");for(;p<a;)this[t+p]=n[p++]}),t((function(){new Int8Array(1).set({})})));var np=yi.aTypedArray,ap=yi.aTypedArrayConstructor,pp=[].slice;(0,yi.exportTypedArrayMethod)("slice",(function(e,t){for(var i=pp.call(np(this),e,t),n=Gn(this,this.constructor),a=0,p=i.length,r=new(ap(n))(p);p>a;)r[a]=i[a++];return r}),t((function(){new Int8Array(1).slice()})));var rp=zn.some,op=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("some",(function(e){return rp(op(this),e,arguments.length>1?arguments[1]:void 0)}));var mp=yi.aTypedArray,cp=[].sort;(0,yi.exportTypedArrayMethod)("sort",(function(e){return cp.call(mp(this),e)}));var lp=yi.aTypedArray;(0,yi.exportTypedArrayMethod)("subarray",(function(e,t){var i=lp(this),n=i.length,a=ge(e,n);return new(Gn(i,i.constructor))(i.buffer,i.byteOffset+a*i.BYTES_PER_ELEMENT,xe((void 0===t?n:ge(t,n))-a))}));var sp=r.Int8Array,dp=yi.aTypedArray,up=yi.exportTypedArrayMethod,fp=[].toLocaleString,yp=[].slice,vp=!!sp&&t((function(){fp.call(new sp(1))}));up("toLocaleString",(function(){return fp.apply(vp?yp.call(dp(this)):dp(this),arguments)}),t((function(){return[1,2].toLocaleString()!=new sp([1,2]).toLocaleString()}))||!t((function(){sp.prototype.toLocaleString.call([1,2])})));var xp=yi.exportTypedArrayMethod,_p=r.Uint8Array,hp=_p&&_p.prototype||{},gp=[].toString,bp=[].join;t((function(){gp.call({})}))&&(gp=function(){return bp.call(this)});var wp=hp.toString!=gp;xp("toString",gp,wp);var kp=gt.charAt,Ap=me.set,Ep=me.getterFor("String Iterator");ba(String,"String",(function(e){Ap(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=Ep(this),i=t.string,n=t.index;return n>=i.length?{value:void 0,done:!0}:(e=kp(i,n),t.index+=e.length,{value:e,done:!1})}));var Sp=st("iterator"),jp=!t((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,i="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),i+=n+e})),!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[Sp]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==i||"x"!==new URL("http://x",void 0).host})),Op=Object.assign,Tp=Object.defineProperty,Ip=!Op||t((function(){if(i&&1!==Op({b:1},Op(Tp({},"a",{enumerable:!0,get:function(){Tp(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=Op({},e)[n]||sn(Op({},t)).join("")!=a}))?function(e,t){for(var n=kt(e),a=arguments.length,p=1,r=Oe.f,o=j.f;a>p;)for(var m,c=L(arguments[p++]),l=r?sn(c).concat(r(c)):sn(c),s=l.length,d=0;s>d;)m=l[d++],i&&!o.call(c,m)||(n[m]=c[m]);return n}:Op,Rp=function(e,t,i,n){try{return n?t(d(i)[0],i[1]):t(i)}catch(t){throw function(e){var t=e.return;if(void 0!==t)d(t.call(e)).value}(e),t}},Lp=function(e,t,i){var n=u(t);n in e?y.f(e,n,O(0,i)):e[n]=i},Up=function(e){var t,i,n,a,p,r,o=kt(e),m="function"==typeof this?this:Array,c=arguments.length,l=c>1?arguments[1]:void 0,s=void 0!==l,d=bn(o),u=0;if(s&&(l=Sn(l,c>2?arguments[2]:void 0,2)),null==d||m==Array&&An(d))for(i=new m(t=xe(o.length));t>u;u++)r=s?l(o[u],u):o[u],Lp(i,u,r);else for(p=(a=d.call(o)).next,i=new m;!(n=p.call(a)).done;u++)r=s?Rp(a,l,[n.value,u],!0):n.value,Lp(i,u,r);return i.length=u,i},zp=/[^\0-\u007E]/,Np=/[.\u3002\uFF0E\uFF61]/g,Fp="Overflow: input needs wider integers to process",Pp=Math.floor,Cp=String.fromCharCode,Mp=function(e){return e+22+75*(e<26)},qp=function(e,t,i){var n=0;for(e=i?Pp(e/700):e>>1,e+=Pp(e/t);e>455;n+=36)e=Pp(e/35);return Pp(n+36*e/(e+38))},Dp=function(e){var t,i,n=[],a=(e=function(e){for(var t=[],i=0,n=e.length;i<n;){var a=e.charCodeAt(i++);if(a>=55296&&a<=56319&&i<n){var p=e.charCodeAt(i++);56320==(64512&p)?t.push(((1023&a)<<10)+(1023&p)+65536):(t.push(a),i--)}else t.push(a)}return t}(e)).length,p=128,r=0,o=72;for(t=0;t<e.length;t++)(i=e[t])<128&&n.push(Cp(i));var m=n.length,c=m;for(m&&n.push("-");c<a;){var l=2147483647;for(t=0;t<e.length;t++)(i=e[t])>=p&&i<l&&(l=i);var s=c+1;if(l-p>Pp((2147483647-r)/s))throw RangeError(Fp);for(r+=(l-p)*s,p=l,t=0;t<e.length;t++){if((i=e[t])<p&&++r>2147483647)throw RangeError(Fp);if(i==p){for(var d=r,u=36;;u+=36){var f=u<=o?1:u>=o+26?26:u-o;if(d<f)break;var y=d-f,v=36-f;n.push(Cp(Mp(f+y%v))),d=Pp(y/v)}n.push(Cp(Mp(d))),o=qp(r,s,c==m),r=0,++c}}++r,++p}return n.join("")},Bp=function(e){var t=bn(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return d(t.call(e))},Vp=de("fetch"),Gp=de("Headers"),$p=st("iterator"),Wp=me.set,Yp=me.getterFor("URLSearchParams"),Hp=me.getterFor("URLSearchParamsIterator"),Qp=/\+/g,Xp=Array(4),Kp=function(e){return Xp[e-1]||(Xp[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},Zp=function(e){try{return decodeURIComponent(e)}catch(t){return e}},Jp=function(e){var t=e.replace(Qp," "),i=4;try{return decodeURIComponent(t)}catch(e){for(;i;)t=t.replace(Kp(i--),Zp);return t}},er=/[!'()~]|%20/g,tr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ir=function(e){return tr[e]},nr=function(e){return encodeURIComponent(e).replace(er,ir)},ar=function(e,t){if(t)for(var i,n,a=t.split("&"),p=0;p<a.length;)(i=a[p++]).length&&(n=i.split("="),e.push({key:Jp(n.shift()),value:Jp(n.join("="))}))},pr=function(e){this.entries.length=0,ar(this.entries,e)},rr=function(e,t){if(e<t)throw TypeError("Not enough arguments")},or=va((function(e,t){Wp(this,{type:"URLSearchParamsIterator",iterator:Bp(Yp(e).entries),kind:t})}),"Iterator",(function(){var e=Hp(this),t=e.kind,i=e.iterator.next(),n=i.value;return i.done||(i.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),i})),mr=function(){bi(this,mr,"URLSearchParams");var e,t,i,n,a,p,r,m,c,l=arguments.length>0?arguments[0]:void 0,s=this,u=[];if(Wp(s,{type:"URLSearchParams",entries:u,updateURL:function(){},updateSearchParams:pr}),void 0!==l)if(o(l))if("function"==typeof(e=bn(l)))for(i=(t=e.call(l)).next;!(n=i.call(t)).done;){if((r=(p=(a=Bp(d(n.value))).next).call(a)).done||(m=p.call(a)).done||!p.call(a).done)throw TypeError("Expected sequence with length 2");u.push({key:r.value+"",value:m.value+""})}else for(c in l)F(l,c)&&u.push({key:c,value:l[c]+""});else ar(u,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},cr=mr.prototype;gi(cr,{append:function(e,t){rr(arguments.length,2);var i=Yp(this);i.entries.push({key:e+"",value:t+""}),i.updateURL()},delete:function(e){rr(arguments.length,1);for(var t=Yp(this),i=t.entries,n=e+"",a=0;a<i.length;)i[a].key===n?i.splice(a,1):a++;t.updateURL()},get:function(e){rr(arguments.length,1);for(var t=Yp(this).entries,i=e+"",n=0;n<t.length;n++)if(t[n].key===i)return t[n].value;return null},getAll:function(e){rr(arguments.length,1);for(var t=Yp(this).entries,i=e+"",n=[],a=0;a<t.length;a++)t[a].key===i&&n.push(t[a].value);return n},has:function(e){rr(arguments.length,1);for(var t=Yp(this).entries,i=e+"",n=0;n<t.length;)if(t[n++].key===i)return!0;return!1},set:function(e,t){rr(arguments.length,1);for(var i,n=Yp(this),a=n.entries,p=!1,r=e+"",o=t+"",m=0;m<a.length;m++)(i=a[m]).key===r&&(p?a.splice(m--,1):(p=!0,i.value=o));p||a.push({key:r,value:o}),n.updateURL()},sort:function(){var e,t,i,n=Yp(this),a=n.entries,p=a.slice();for(a.length=0,i=0;i<p.length;i++){for(e=p[i],t=0;t<i;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===i&&a.push(e)}n.updateURL()},forEach:function(e){for(var t,i=Yp(this).entries,n=Sn(e,arguments.length>1?arguments[1]:void 0,3),a=0;a<i.length;)n((t=i[a++]).value,t.key,this)},keys:function(){return new or(this,"keys")},values:function(){return new or(this,"values")},entries:function(){return new or(this,"entries")}},{enumerable:!0}),ce(cr,$p,cr.entries),ce(cr,"toString",(function(){for(var e,t=Yp(this).entries,i=[],n=0;n<t.length;)e=t[n++],i.push(nr(e.key)+"="+nr(e.value));return i.join("&")}),{enumerable:!0}),Ui(mr,"URLSearchParams"),Me({global:!0,forced:!jp},{URLSearchParams:mr}),jp||"function"!=typeof Vp||"function"!=typeof Gp||Me({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,i,n,a=[e];return arguments.length>1&&(o(t=arguments[1])&&(i=t.body,"URLSearchParams"===Ft(i)&&((n=t.headers?new Gp(t.headers):new Gp).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=_n(t,{body:O(0,String(i)),headers:O(0,n)}))),a.push(t)),Vp.apply(this,a)}});var lr,sr={URLSearchParams:mr,getState:Yp},dr=gt.codeAt,ur=r.URL,fr=sr.URLSearchParams,yr=sr.getState,vr=me.set,xr=me.getterFor("URL"),_r=Math.floor,hr=Math.pow,gr=/[A-Za-z]/,br=/[\d+-.A-Za-z]/,wr=/\d/,kr=/^(0x|0X)/,Ar=/^[0-7]+$/,Er=/^\d+$/,Sr=/^[\dA-Fa-f]+$/,jr=/[\u0000\t\u000A\u000D #%/:?@[\\]]/,Or=/[\u0000\t\u000A\u000D #/:?@[\\]]/,Tr=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,Ir=/[\t\u000A\u000D]/g,Rr=function(e,t){var i,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(i=Ur(t.slice(1,-1))))return"Invalid host";e.host=i}else if(Dr(e)){if(t=function(e){var t,i,n=[],a=e.toLowerCase().replace(Np,".").split(".");for(t=0;t<a.length;t++)i=a[t],n.push(zp.test(i)?"xn--"+Dp(i):i);return n.join(".")}(t),jr.test(t))return"Invalid host";if(null===(i=Lr(t)))return"Invalid host";e.host=i}else{if(Or.test(t))return"Invalid host";for(i="",n=Up(t),a=0;a<n.length;a++)i+=Mr(n[a],Nr);e.host=i}},Lr=function(e){var t,i,n,a,p,r,o,m=e.split(".");if(m.length&&""==m[m.length-1]&&m.pop(),(t=m.length)>4)return e;for(i=[],n=0;n<t;n++){if(""==(a=m[n]))return e;if(p=10,a.length>1&&"0"==a.charAt(0)&&(p=kr.test(a)?16:8,a=a.slice(8==p?1:2)),""===a)r=0;else{if(!(10==p?Er:8==p?Ar:Sr).test(a))return e;r=parseInt(a,p)}i.push(r)}for(n=0;n<t;n++)if(r=i[n],n==t-1){if(r>=hr(256,5-t))return null}else if(r>255)return null;for(o=i.pop(),n=0;n<i.length;n++)o+=i[n]*hr(256,3-n);return o},Ur=function(e){var t,i,n,a,p,r,o,m=[0,0,0,0,0,0,0,0],c=0,l=null,s=0,d=function(){return e.charAt(s)};if(":"==d()){if(":"!=e.charAt(1))return;s+=2,l=++c}for(;d();){if(8==c)return;if(":"!=d()){for(t=i=0;i<4&&Sr.test(d());)t=16*t+parseInt(d(),16),s++,i++;if("."==d()){if(0==i)return;if(s-=i,c>6)return;for(n=0;d();){if(a=null,n>0){if(!("."==d()&&n<4))return;s++}if(!wr.test(d()))return;for(;wr.test(d());){if(p=parseInt(d(),10),null===a)a=p;else{if(0==a)return;a=10*a+p}if(a>255)return;s++}m[c]=256*m[c]+a,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==d()){if(s++,!d())return}else if(d())return;m[c++]=t}else{if(null!==l)return;s++,l=++c}}if(null!==l)for(r=c-l,c=7;0!=c&&r>0;)o=m[c],m[c--]=m[l+r-1],m[l+--r]=o;else if(8!=c)return;return m},zr=function(e){var t,i,n,a;if("number"==typeof e){for(t=[],i=0;i<4;i++)t.unshift(e%256),e=_r(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,i=1,n=null,a=0,p=0;p<8;p++)0!==e[p]?(a>i&&(t=n,i=a),n=null,a=0):(null===n&&(n=p),++a);return a>i&&(t=n,i=a),t}(e),i=0;i<8;i++)a&&0===e[i]||(a&&(a=!1),n===i?(t+=i?":":"::",a=!0):(t+=e[i].toString(16),i<7&&(t+=":")));return"["+t+"]"}return e},Nr={},Fr=Ip({},Nr,{" ":1,'"':1,"<":1,">":1,"`":1}),Pr=Ip({},Fr,{"#":1,"?":1,"{":1,"}":1}),Cr=Ip({},Pr,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Mr=function(e,t){var i=dr(e,0);return i>32&&i<127&&!F(t,e)?e:encodeURIComponent(e)},qr={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Dr=function(e){return F(qr,e.scheme)},Br=function(e){return""!=e.username||""!=e.password},Vr=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Gr=function(e,t){var i;return 2==e.length&&gr.test(e.charAt(0))&&(":"==(i=e.charAt(1))||!t&&"|"==i)},$r=function(e){var t;return e.length>1&&Gr(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Wr=function(e){var t=e.path,i=t.length;!i||"file"==e.scheme&&1==i&&Gr(t[0],!0)||t.pop()},Yr=function(e){return"."===e||"%2e"===e.toLowerCase()},Hr={},Qr={},Xr={},Kr={},Zr={},Jr={},eo={},to={},io={},no={},ao={},po={},ro={},oo={},mo={},co={},lo={},so={},uo={},fo={},yo={},vo=function(e,t,i,n){var a,p,r,o,m,c=i||Hr,l=0,s="",d=!1,u=!1,f=!1;for(i||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(Tr,"")),t=t.replace(Ir,""),a=Up(t);l<=a.length;){switch(p=a[l],c){case Hr:if(!p||!gr.test(p)){if(i)return"Invalid scheme";c=Xr;continue}s+=p.toLowerCase(),c=Qr;break;case Qr:if(p&&(br.test(p)||"+"==p||"-"==p||"."==p))s+=p.toLowerCase();else{if(":"!=p){if(i)return"Invalid scheme";s="",c=Xr,l=0;continue}if(i&&(Dr(e)!=F(qr,s)||"file"==s&&(Br(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=s,i)return void(Dr(e)&&qr[e.scheme]==e.port&&(e.port=null));s="","file"==e.scheme?c=oo:Dr(e)&&n&&n.scheme==e.scheme?c=Kr:Dr(e)?c=to:"/"==a[l+1]?(c=Zr,l++):(e.cannotBeABaseURL=!0,e.path.push(""),c=uo)}break;case Xr:if(!n||n.cannotBeABaseURL&&"#"!=p)return"Invalid scheme";if(n.cannotBeABaseURL&&"#"==p){e.scheme=n.scheme,e.path=n.path.slice(),e.query=n.query,e.fragment="",e.cannotBeABaseURL=!0,c=yo;break}c="file"==n.scheme?oo:Jr;continue;case Kr:if("/"!=p||"/"!=a[l+1]){c=Jr;continue}c=io,l++;break;case Zr:if("/"==p){c=no;break}c=so;continue;case Jr:if(e.scheme=n.scheme,p==lr)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query;else if("/"==p||"\\"==p&&Dr(e))c=eo;else if("?"==p)e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query="",c=fo;else{if("#"!=p){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.path.pop(),c=so;continue}e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,e.path=n.path.slice(),e.query=n.query,e.fragment="",c=yo}break;case eo:if(!Dr(e)||"/"!=p&&"\\"!=p){if("/"!=p){e.username=n.username,e.password=n.password,e.host=n.host,e.port=n.port,c=so;continue}c=no}else c=io;break;case to:if(c=io,"/"!=p||"/"!=s.charAt(l+1))continue;l++;break;case io:if("/"!=p&&"\\"!=p){c=no;continue}break;case no:if("@"==p){d&&(s="%40"+s),d=!0,r=Up(s);for(var y=0;y<r.length;y++){var v=r[y];if(":"!=v||f){var x=Mr(v,Cr);f?e.password+=x:e.username+=x}else f=!0}s=""}else if(p==lr||"/"==p||"?"==p||"#"==p||"\\"==p&&Dr(e)){if(d&&""==s)return"Invalid authority";l-=Up(s).length+1,s="",c=ao}else s+=p;break;case ao:case po:if(i&&"file"==e.scheme){c=co;continue}if(":"!=p||u){if(p==lr||"/"==p||"?"==p||"#"==p||"\\"==p&&Dr(e)){if(Dr(e)&&""==s)return"Invalid host";if(i&&""==s&&(Br(e)||null!==e.port))return;if(o=Rr(e,s))return o;if(s="",c=lo,i)return;continue}"["==p?u=!0:"]"==p&&(u=!1),s+=p}else{if(""==s)return"Invalid host";if(o=Rr(e,s))return o;if(s="",c=ro,i==po)return}break;case ro:if(!wr.test(p)){if(p==lr||"/"==p||"?"==p||"#"==p||"\\"==p&&Dr(e)||i){if(""!=s){var _=parseInt(s,10);if(_>65535)return"Invalid port";e.port=Dr(e)&&_===qr[e.scheme]?null:_,s=""}if(i)return;c=lo;continue}return"Invalid port"}s+=p;break;case oo:if(e.scheme="file","/"==p||"\\"==p)c=mo;else{if(!n||"file"!=n.scheme){c=so;continue}if(p==lr)e.host=n.host,e.path=n.path.slice(),e.query=n.query;else if("?"==p)e.host=n.host,e.path=n.path.slice(),e.query="",c=fo;else{if("#"!=p){$r(a.slice(l).join(""))||(e.host=n.host,e.path=n.path.slice(),Wr(e)),c=so;continue}e.host=n.host,e.path=n.path.slice(),e.query=n.query,e.fragment="",c=yo}}break;case mo:if("/"==p||"\\"==p){c=co;break}n&&"file"==n.scheme&&!$r(a.slice(l).join(""))&&(Gr(n.path[0],!0)?e.path.push(n.path[0]):e.host=n.host),c=so;continue;case co:if(p==lr||"/"==p||"\\"==p||"?"==p||"#"==p){if(!i&&Gr(s))c=so;else if(""==s){if(e.host="",i)return;c=lo}else{if(o=Rr(e,s))return o;if("localhost"==e.host&&(e.host=""),i)return;s="",c=lo}continue}s+=p;break;case lo:if(Dr(e)){if(c=so,"/"!=p&&"\\"!=p)continue}else if(i||"?"!=p)if(i||"#"!=p){if(p!=lr&&(c=so,"/"!=p))continue}else e.fragment="",c=yo;else e.query="",c=fo;break;case so:if(p==lr||"/"==p||"\\"==p&&Dr(e)||!i&&("?"==p||"#"==p)){if(".."===(m=(m=s).toLowerCase())||"%2e."===m||".%2e"===m||"%2e%2e"===m?(Wr(e),"/"==p||"\\"==p&&Dr(e)||e.path.push("")):Yr(s)?"/"==p||"\\"==p&&Dr(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Gr(s)&&(e.host&&(e.host=""),s=s.charAt(0)+":"),e.path.push(s)),s="","file"==e.scheme&&(p==lr||"?"==p||"#"==p))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==p?(e.query="",c=fo):"#"==p&&(e.fragment="",c=yo)}else s+=Mr(p,Pr);break;case uo:"?"==p?(e.query="",c=fo):"#"==p?(e.fragment="",c=yo):p!=lr&&(e.path[0]+=Mr(p,Nr));break;case fo:i||"#"!=p?p!=lr&&("'"==p&&Dr(e)?e.query+="%27":e.query+="#"==p?"%23":Mr(p,Nr)):(e.fragment="",c=yo);break;case yo:p!=lr&&(e.fragment+=Mr(p,Fr))}l++}},xo=function(e){var t,n,a=bi(this,xo,"URL"),p=arguments.length>1?arguments[1]:void 0,r=String(e),o=vr(a,{type:"URL"});if(void 0!==p)if(p instanceof xo)t=xr(p);else if(n=vo(t={},String(p)))throw TypeError(n);if(n=vo(o,r,null,t))throw TypeError(n);var m=o.searchParams=new fr,c=yr(m);c.updateSearchParams(o.query),c.updateURL=function(){o.query=String(m)||null},i||(a.href=ho.call(a),a.origin=go.call(a),a.protocol=bo.call(a),a.username=wo.call(a),a.password=ko.call(a),a.host=Ao.call(a),a.hostname=Eo.call(a),a.port=So.call(a),a.pathname=jo.call(a),a.search=Oo.call(a),a.searchParams=To.call(a),a.hash=Io.call(a))},_o=xo.prototype,ho=function(){var e=xr(this),t=e.scheme,i=e.username,n=e.password,a=e.host,p=e.port,r=e.path,o=e.query,m=e.fragment,c=t+":";return null!==a?(c+="//",Br(e)&&(c+=i+(n?":"+n:"")+"@"),c+=zr(a),null!==p&&(c+=":"+p)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):"",null!==o&&(c+="?"+o),null!==m&&(c+="#"+m),c},go=function(){var e=xr(this),t=e.scheme,i=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&Dr(e)?t+"://"+zr(e.host)+(null!==i?":"+i:""):"null"},bo=function(){return xr(this).scheme+":"},wo=function(){return xr(this).username},ko=function(){return xr(this).password},Ao=function(){var e=xr(this),t=e.host,i=e.port;return null===t?"":null===i?zr(t):zr(t)+":"+i},Eo=function(){var e=xr(this).host;return null===e?"":zr(e)},So=function(){var e=xr(this).port;return null===e?"":String(e)},jo=function(){var e=xr(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Oo=function(){var e=xr(this).query;return e?"?"+e:""},To=function(){return xr(this).searchParams},Io=function(){var e=xr(this).fragment;return e?"#"+e:""},Ro=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&dn(_o,{href:Ro(ho,(function(e){var t=xr(this),i=String(e),n=vo(t,i);if(n)throw TypeError(n);yr(t.searchParams).updateSearchParams(t.query)})),origin:Ro(go),protocol:Ro(bo,(function(e){var t=xr(this);vo(t,String(e)+":",Hr)})),username:Ro(wo,(function(e){var t=xr(this),i=Up(String(e));if(!Vr(t)){t.username="";for(var n=0;n<i.length;n++)t.username+=Mr(i[n],Cr)}})),password:Ro(ko,(function(e){var t=xr(this),i=Up(String(e));if(!Vr(t)){t.password="";for(var n=0;n<i.length;n++)t.password+=Mr(i[n],Cr)}})),host:Ro(Ao,(function(e){var t=xr(this);t.cannotBeABaseURL||vo(t,String(e),ao)})),hostname:Ro(Eo,(function(e){var t=xr(this);t.cannotBeABaseURL||vo(t,String(e),po)})),port:Ro(So,(function(e){var t=xr(this);Vr(t)||(""==(e=String(e))?t.port=null:vo(t,e,ro))})),pathname:Ro(jo,(function(e){var t=xr(this);t.cannotBeABaseURL||(t.path=[],vo(t,e+"",lo))})),search:Ro(Oo,(function(e){var t=xr(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",vo(t,e,fo)),yr(t.searchParams).updateSearchParams(t.query)})),searchParams:Ro(To),hash:Ro(Io,(function(e){var t=xr(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",vo(t,e,yo)):t.fragment=null}))}),ce(_o,"toJSON",(function(){return ho.call(this)}),{enumerable:!0}),ce(_o,"toString",(function(){return ho.call(this)}),{enumerable:!0}),ur){var Lo=ur.createObjectURL,Uo=ur.revokeObjectURL;Lo&&ce(xo,"createObjectURL",(function(e){return Lo.apply(ur,arguments)})),Uo&&ce(xo,"revokeObjectURL",(function(e){return Uo.apply(ur,arguments)}))}Ui(xo,"URL"),Me({global:!0,forced:!jp,sham:!i},{URL:xo});var zo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},No=st("iterator"),Fo=st("toStringTag"),Po=Aa.values;for(var Co in zo){var Mo=r[Co],qo=Mo&&Mo.prototype;if(qo){if(qo[No]!==Po)try{M(qo,No,Po)}catch(e){qo[No]=Po}if(qo[Fo]||M(qo,Fo,Co),zo[Co])for(var Do in Aa)if(qo[Do]!==Aa[Do])try{M(qo,Do,Aa[Do])}catch(e){qo[Do]=Aa[Do]}}}var Bo=zn.forEach,Vo=Pa("forEach")?[].forEach:function(e){return Bo(this,e,arguments.length>1?arguments[1]:void 0)};for(var Go in zo){var $o=r[Go],Wo=$o&&$o.prototype;if(Wo&&Wo.forEach!==Vo)try{M(Wo,"forEach",Vo)}catch(e){Wo.forEach=Vo}}var Yo=j.f,Ho=function(e){return function(t){for(var n,a=z(t),p=sn(a),r=p.length,o=0,m=[];r>o;)n=p[o++],i&&!Yo.call(a,n)||m.push(e?[n,a[n]]:a[n]);return m}},Qo={entries:Ho(!0),values:Ho(!1)}.values;Me({target:"Object",stat:!0},{values:function(e){return Qo(e)}});var Xo=st("species"),Ko=function(e){return pt>=51||!t((function(){var t=[];return(t.constructor={})[Xo]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Zo=st("isConcatSpreadable"),Jo=pt>=51||!t((function(){var e=[];return e[Zo]=!1,e.concat()[0]!==e})),em=Ko("concat"),tm=function(e){if(!o(e))return!1;var t=e[Zo];return void 0!==t?!!t:Tn(e)};Me({target:"Array",proto:!0,forced:!Jo||!em},{concat:function(e){var t,i,n,a,p,r=kt(this),o=Rn(r,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(tm(p=-1===t?r:arguments[t])){if(m+(a=xe(p.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<a;i++,m++)i in p&&Lp(o,m,p[i])}else{if(m>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Lp(o,m++,p)}return o.length=m,o}});var im=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))},nm=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector or a plain HTML element."));return i},am=function e(t){var i=[];return null!==t.nodeType&&Object.values(t.children).forEach((function(t){i.push(t);var n=e(t);n.length>0&&i.push.apply(i,A(n))})),i},pm=function(e){(function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0;return!1})(e)&&(e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1)},rm={tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},om=function(e){var t=0,i="b";if(e>0){for(var n=["tb","gb","mb","kb","b"],a=0;a<n.length;a+=1){var p=n[a];if(e>=Math.pow(1024,4-a)/10){t=e/Math.pow(1024,4-a),i=p;break}}t=Math.round(10*t)/10}return"<strong>".concat(t,"</strong> ").concat(rm[i])};function mm(e){var t=e.itemManager,i=function e(i,n,a){var p=i.createReader(),r=function(e){};return function i(){return p.readEntries((function(a){if(a.length>0){for(var p=function(i){var p=a[i];p.isFile?p.file((function(e){e.fullPath="".concat(n,"/").concat(e.name),t.addFile(im(),e)})):p.isDirectory&&e(p,"".concat(n,"/").concat(p.name))},r=0;r<a.length;r+=1)p(r);i()}return null}),r)}()},n=function(e,n){e.forEach((function(e){var a=null;null!=e.webkitGetAsEntry?(a=e.webkitGetAsEntry()).isFile&&n?t.addFile(im(),e.getAsFile()):a.isDirectory&&i(a,a.name):null!=e.getAsFile&&(null!=e.kind&&"file"!==e.kind||t.addFile(im(),e.getAsFile()))}))};return{handleDragOver:function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}pm(e),e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy"},onDrop:function(e){if(pm(e),e.dataTransfer.items){var i=e.dataTransfer.items;i&&i.length&&null!=i[0].webkitGetAsEntry&&n(i,!0)}else for(var a=0;a<e.dataTransfer.files.length;a+=1){var p=im(),r=e.dataTransfer.files[a];t.addFile(p,r)}}}}var cm=zn.findIndex,lm=!0;"findIndex"in[]&&Array(1).findIndex((function(){lm=!1})),Me({target:"Array",proto:!0,forced:lm},{findIndex:function(e){return cm(this,e,arguments.length>1?arguments[1]:void 0)}}),la("findIndex");var sm=[].join,dm=L!=Object,um=Pa("join",",");function fm(){var e,t=[],i=function(i){return(!i.detail||1===i.detail)&&(-1!==t.findIndex((function(e){return e===i.target}))&&(i.stopPropagation(),e.click()),!0)},n=function(t){e&&t?e.setAttribute("multiple","multiple"):e&&!t&&e.removeAttribute("multiple")},a=function t(i){var a=i.config,p=i.itemManager;e&&e.parentNode.removeChild(e),(e=document.createElement("input")).setAttribute("type","file"),(null===a.maxFiles||a.maxFiles>1)&&n(!0),a.accepts.length>0&&e.setAttribute("accept",a.accepts.join(",")),e.setAttribute("tabindex","-1"),e.style.visibility="hidden",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.height="0",e.style.width="0",nm(a.hiddenInputContainer,"hiddenInputContainer").appendChild(e),e.addEventListener("change",(function(){e.files.forEach((function(e){p.addFile(im(),e)})),t({config:a,itemManager:p})}))};return{initHiddenFileInput:function(e){var n=e.config,p=e.dropzone,r=e.itemManager;if(n.clickable){var o,m=nm(".".concat(n.dropzoneMessageClassName),n.dropzoneMessageClassName),c=am(m);if((t=[p.value]).push(m),c.length>0)(o=t).push.apply(o,A(c));a({config:n,itemManager:r}),t.forEach((function(e){e.classList.add("dropzone-clickable"),e.addEventListener("click",i)}))}},destroyHiddenFileInput:function(){t.forEach((function(e){e.removeEventListener("click",i)})),e&&(e.parentElement.removeChild(e),e=null)},setMultiple:n}}Me({target:"Array",proto:!0,forced:dm||!um},{join:function(e){return sm.call(z(this),void 0===e?",":e)}});var ym=zn.find,vm=!0;"find"in[]&&Array(1).find((function(){vm=!1})),Me({target:"Array",proto:!0,forced:vm},{find:function(e){return ym(this,e,arguments.length>1?arguments[1]:void 0)}}),la("find");var xm="\t\n\v\f\r                　\u2028\u2029\ufeff",_m="["+xm+"]",hm=RegExp("^"+_m+_m+"*"),gm=RegExp(_m+_m+"*$"),bm=function(e){return function(t){var i=String(U(t));return 1&e&&(i=i.replace(hm,"")),2&e&&(i=i.replace(gm,"")),i}},wm={start:bm(1),end:bm(2),trim:bm(3)},km=je.f,Am=C.f,Em=y.f,Sm=wm.trim,jm=r.Number,Om=jm.prototype,Tm="Number"==I(_n(Om)),Im=function(e){var t,i,n,a,p,r,o,m,c=u(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=Sm(c)).charCodeAt(0))||45===t){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+c}for(r=(p=c.slice(2)).length,o=0;o<r;o++)if((m=p.charCodeAt(o))<48||m>a)return NaN;return parseInt(p,n)}return+c};if(Pe("Number",!jm(" 0o1")||!jm("0b1")||jm("+0x1"))){for(var Rm,Lm=function(e){var i=arguments.length<1?0:e,n=this;return n instanceof Lm&&(Tm?t((function(){Om.valueOf.call(n)})):"Number"!=I(n))?Fn(new jm(Im(i)),n,Lm):Im(i)},Um=i?km(jm):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),zm=0;Um.length>zm;zm++)F(jm,Rm=Um[zm])&&!F(Lm,Rm)&&Em(Lm,Rm,Am(jm,Rm));Lm.prototype=Om,Om.constructor=Lm,ce(r,"Number",Lm)}var Nm={url:{type:String,default:null,validator:function(e){if(null===e)return!0;try{return void 0!==new URL(e)}catch(e){return!1}}},method:{type:String,default:"POST",validator:function(e){return"POST"===e.toUpperCase()||"PUT"===e.toUpperCase()}},paramName:{type:String,default:"file"},headers:{type:Object,default:null,validator:function(e){return!Object.values(e).find((function(e){return"string"!=typeof e&&"number"!=typeof e}))}},xhrTimeout:{type:Number,default:6e4,validator:function(e){return e>=0}},withCredentials:{type:Boolean,default:!1},uploadOnDrop:{type:Boolean,default:!0},retryOnError:{type:Boolean,default:!1},multipleUpload:{type:Boolean,default:!1},parallelUpload:{type:Number,default:3},maxFiles:{type:Number,default:null},maxFileSize:{type:Number,default:1e6},hiddenInputContainer:{default:"body"},clickable:{type:Boolean,default:!0},acceptedFiles:{type:Array,default:null},chunking:{type:Boolean,default:!1},numberOfChunks:{type:Number,default:10}},Fm=zn.filter,Pm=Ko("filter");Me({target:"Array",proto:!0,forced:!Pm},{filter:function(e){return Fm(this,e,arguments.length>1?arguments[1]:void 0)}});var Cm=st("match"),Mm=function(e){var t;return o(e)&&(void 0!==(t=e[Cm])?!!t:"RegExp"==I(e))},qm=[].push,Dm=Math.min,Bm=!t((function(){return!RegExp(4294967295,"y")}));_t("split",2,(function(e,t,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var n=String(U(this)),a=void 0===i?4294967295:i>>>0;if(0===a)return[];if(void 0===e)return[n];if(!Mm(e))return t.call(n,e,a);for(var p,r,o,m=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,s=new RegExp(e.source,c+"g");(p=Ke.call(s,n))&&!((r=s.lastIndex)>l&&(m.push(n.slice(l,p.index)),p.length>1&&p.index<n.length&&qm.apply(m,p.slice(1)),o=p[0].length,l=r,m.length>=a));)s.lastIndex===p.index&&s.lastIndex++;return l===n.length?!o&&s.test("")||m.push(""):m.push(n.slice(l)),m.length>a?m.slice(0,a):m}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var a=U(this),p=null==t?void 0:t[e];return void 0!==p?p.call(t,a,i):n.call(String(a),t,i)},function(e,a){var p=i(n,e,this,a,n!==t);if(p.done)return p.value;var r=d(e),o=String(this),m=Gn(r,RegExp),c=r.unicode,l=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(Bm?"y":"g"),s=new m(Bm?r:"^(?:"+r.source+")",l),u=void 0===a?4294967295:a>>>0;if(0===u)return[];if(0===o.length)return null===Tt(s,o)?[o]:[];for(var f=0,y=0,v=[];y<o.length;){s.lastIndex=Bm?y:0;var x,_=Tt(s,Bm?o:o.slice(y));if(null===_||(x=Dm(xe(s.lastIndex+(Bm?0:y)),o.length))===f)y=wt(o,y,c);else{if(v.push(o.slice(f,y)),v.length===u)return v;for(var h=1;h<=_.length-1;h++)if(v.push(_[h]),v.length===u)return v;y=f=x}}return v.push(o.slice(f)),v}]}),!Bm);var Vm,Gm=function(e){if(Mm(e))throw TypeError("The method doesn't accept regular expressions");return e},$m=st("match"),Wm=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[$m]=!1,"/./"[e](t)}catch(e){}}return!1},Ym=C.f,Hm="".startsWith,Qm=Math.min,Xm=Wm("startsWith"),Km=!(Xm||(Vm=Ym(String.prototype,"startsWith"),!Vm||Vm.writable));Me({target:"String",proto:!0,forced:!Km&&!Xm},{startsWith:function(e){var t=String(U(this));Gm(e);var i=xe(Qm(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return Hm?Hm.call(t,n,i):t.slice(i,i+n.length)===n}});var Zm=zn.map,Jm=Ko("map");Me({target:"Array",proto:!0,forced:!Jm},{map:function(e){return Zm(this,e,arguments.length>1?arguments[1]:void 0)}});var ec=we.includes;Me({target:"Array",proto:!0},{includes:function(e){return ec(this,e,arguments.length>1?arguments[1]:void 0)}}),la("includes"),Me({target:"String",proto:!0,forced:!Wm("includes")},{includes:function(e){return!!~String(U(this)).indexOf(Gm(e),arguments.length>1?arguments[1]:void 0)}});var tc={data:[{mime_type:"application/activemessage"},{mime_type:"application/andrew-inset",ext:"ez"},{mime_type:"application/applefile"},{mime_type:"application/applixware",ext:"aw"},{mime_type:"application/atom+xml",ext:"atom"},{mime_type:"application/atomcat+xml",ext:"atomcat"},{mime_type:"application/atomicmail"},{mime_type:"application/atomsvc+xml",ext:"atomsvc"},{mime_type:"application/auth-policy+xml"},{mime_type:"application/batch-smtp"},{mime_type:"application/beep+xml"},{mime_type:"application/cals-1840"},{mime_type:"application/ccxml+xml",ext:"ccxml"},{mime_type:"application/cea-2018+xml"},{mime_type:"application/cellml+xml"},{mime_type:"application/cnrp+xml"},{mime_type:"application/commonground"},{mime_type:"application/conference-info+xml"},{mime_type:"application/cpl+xml"},{mime_type:"application/csta+xml"},{mime_type:"application/cstadata+xml"},{mime_type:"application/cu-seeme",ext:"cu"},{mime_type:"application/cybercash"},{mime_type:"application/davmount+xml",ext:"davmount"},{mime_type:"application/dca-rft"},{mime_type:"application/dec-dx"},{mime_type:"application/dialog-info+xml"},{mime_type:"application/dicom"},{mime_type:"application/dns"},{mime_type:"application/dvcs"},{mime_type:"application/ecmascript",ext:"ecma"},{mime_type:"application/edi-consent"},{mime_type:"application/edi-x12"},{mime_type:"application/edifact"},{mime_type:"application/emma+xml",ext:"emma"},{mime_type:"application/epp+xml"},{mime_type:"application/epub+zip",ext:"epub"},{mime_type:"application/eshop"},{mime_type:"application/example"},{mime_type:"application/fastinfoset"},{mime_type:"application/fastsoap"},{mime_type:"application/fits"},{mime_type:"application/font-tdpfr",ext:"pfr"},{mime_type:"application/h224"},{mime_type:"application/http"},{mime_type:"application/hyperstudio",ext:"stk"},{mime_type:"application/ibe-key-request+xml"},{mime_type:"application/ibe-pkg-reply+xml"},{mime_type:"application/ibe-pp-data"},{mime_type:"application/iges"},{mime_type:"application/im-iscomposing+xml"},{mime_type:"application/index"},{mime_type:"application/index.cmd"},{mime_type:"application/index.obj"},{mime_type:"application/index.response"},{mime_type:"application/index.vnd"},{mime_type:"application/iotp"},{mime_type:"application/ipp"},{mime_type:"application/isup"},{mime_type:"application/java-archive",ext:"jar"},{mime_type:"application/java-serialized-object",ext:"ser"},{mime_type:"application/java-vm",ext:"class"},{mime_type:"application/javascript",ext:"js"},{mime_type:"application/json",ext:"json"},{mime_type:"application/kpml-request+xml"},{mime_type:"application/kpml-response+xml"},{mime_type:"application/lost+xml",ext:"lostxml"},{mime_type:"application/mac-binhex40",ext:"hqx"},{mime_type:"application/mac-compactpro",ext:"cpt"},{mime_type:"application/macwriteii"},{mime_type:"application/marc",ext:"mrc"},{mime_type:"application/mathematica",ext:"ma nb mb"},{mime_type:"application/mathml+xml",ext:"mathml"},{mime_type:"application/mbms-associated-procedure-description+xml"},{mime_type:"application/mbms-deregister+xml"},{mime_type:"application/mbms-envelope+xml"},{mime_type:"application/mbms-msk+xml"},{mime_type:"application/mbms-msk-response+xml"},{mime_type:"application/mbms-protection-description+xml"},{mime_type:"application/mbms-reception-report+xml"},{mime_type:"application/mbms-register+xml"},{mime_type:"application/mbms-register-response+xml"},{mime_type:"application/mbms-user-service-description+xml"},{mime_type:"application/mbox",ext:"mbox"},{mime_type:"application/media_control+xml"},{mime_type:"application/mediaservercontrol+xml",ext:"mscml"},{mime_type:"application/mikey"},{mime_type:"application/moss-keys"},{mime_type:"application/moss-signature"},{mime_type:"application/mosskey-data"},{mime_type:"application/mosskey-request"},{mime_type:"application/mp4",ext:"mp4s"},{mime_type:"application/mpeg4-generic"},{mime_type:"application/mpeg4-iod"},{mime_type:"application/mpeg4-iod-xmt"},{mime_type:"application/msword",ext:"doc dot"},{mime_type:"application/mxf",ext:"mxf"},{mime_type:"application/nasdata"},{mime_type:"application/news-checkgroups"},{mime_type:"application/news-groupinfo"},{mime_type:"application/news-transmission"},{mime_type:"application/nss"},{mime_type:"application/ocsp-request"},{mime_type:"application/ocsp-response"},{mime_type:"application/octet-stream bin dms lha lrf lzh so iso dmg dist distz pkg bpk dump elc deploy scpt dmgpart"},{mime_type:"application/oda",ext:"oda"},{mime_type:"application/oebps-package+xml",ext:"opf"},{mime_type:"application/ogg",ext:"ogx"},{mime_type:"application/onenote",ext:"onetoc onetoc2 onetmp onepkg"},{mime_type:"application/parityfec"},{mime_type:"application/patch-ops-error+xml",ext:"xer"},{mime_type:"application/pdf",ext:"pdf"},{mime_type:"application/pgp-encrypted",ext:"pgp"},{mime_type:"application/pgp-keys"},{mime_type:"application/pgp-signature",ext:"asc sig"},{mime_type:"application/pics-rules",ext:"prf"},{mime_type:"application/pidf+xml"},{mime_type:"application/pidf-diff+xml"},{mime_type:"application/pkcs10",ext:"p10"},{mime_type:"application/pkcs7-mime",ext:"p7m p7c"},{mime_type:"application/pkcs7-signature",ext:"p7s"},{mime_type:"application/pkix-cert",ext:"cer"},{mime_type:"application/pkix-crl",ext:"crl"},{mime_type:"application/pkix-pkipath",ext:"pkipath"},{mime_type:"application/pkixcmp",ext:"pki"},{mime_type:"application/pls+xml",ext:"pls"},{mime_type:"application/poc-settings+xml"},{mime_type:"application/postscript",ext:"ai eps ps"},{mime_type:"application/prs.alvestrand.titrax-sheet"},{mime_type:"application/prs.cww",ext:"cww"},{mime_type:"application/prs.nprend"},{mime_type:"application/prs.plucker"},{mime_type:"application/qsig"},{mime_type:"application/rdf+xml",ext:"rdf"},{mime_type:"application/reginfo+xml",ext:"rif"},{mime_type:"application/relax-ng-compact-syntax",ext:"rnc"},{mime_type:"application/remote-printing"},{mime_type:"application/resource-lists+xml",ext:"rl"},{mime_type:"application/resource-lists-diff+xml",ext:"rld"},{mime_type:"application/riscos"},{mime_type:"application/rlmi+xml"},{mime_type:"application/rls-services+xml",ext:"rs"},{mime_type:"application/rsd+xml",ext:"rsd"},{mime_type:"application/rss+xml",ext:"rss"},{mime_type:"application/rtf",ext:"rtf"},{mime_type:"application/rtx"},{mime_type:"application/samlassertion+xml"},{mime_type:"application/samlmetadata+xml"},{mime_type:"application/sbml+xml",ext:"sbml"},{mime_type:"application/scvp-cv-request",ext:"scq"},{mime_type:"application/scvp-cv-response",ext:"scs"},{mime_type:"application/scvp-vp-request",ext:"spq"},{mime_type:"application/scvp-vp-response",ext:"spp"},{mime_type:"application/sdp",ext:"sdp"},{mime_type:"application/set-payment"},{mime_type:"application/set-payment-initiation",ext:"setpay"},{mime_type:"application/set-registration"},{mime_type:"application/set-registration-initiation",ext:"setreg"},{mime_type:"application/sgml"},{mime_type:"application/sgml-open-catalog"},{mime_type:"application/shf+xml",ext:"shf"},{mime_type:"application/sieve"},{mime_type:"application/simple-filter+xml"},{mime_type:"application/simple-message-summary"},{mime_type:"application/simplesymbolcontainer"},{mime_type:"application/slate"},{mime_type:"application/smil"},{mime_type:"application/smil+xml",ext:"smi smil"},{mime_type:"application/soap+fastinfoset"},{mime_type:"application/soap+xml"},{mime_type:"application/sparql-query",ext:"rq"},{mime_type:"application/sparql-results+xml",ext:"srx"},{mime_type:"application/spirits-event+xml"},{mime_type:"application/srgs",ext:"gram"},{mime_type:"application/srgs+xml",ext:"grxml"},{mime_type:"application/ssml+xml",ext:"ssml"},{mime_type:"application/timestamp-query"},{mime_type:"application/timestamp-reply"},{mime_type:"application/tve-trigger"},{mime_type:"application/ulpfec"},{mime_type:"application/vemmi"},{mime_type:"application/vividence.scriptfile"},{mime_type:"application/vnd.3gpp.bsf+xml"},{mime_type:"application/vnd.3gpp.pic-bw-large",ext:"plb"},{mime_type:"application/vnd.3gpp.pic-bw-small",ext:"psb"},{mime_type:"application/vnd.3gpp.pic-bw-var",ext:"pvb"},{mime_type:"application/vnd.3gpp.sms"},{mime_type:"application/vnd.3gpp2.bcmcsinfo+xml"},{mime_type:"application/vnd.3gpp2.sms"},{mime_type:"application/vnd.3gpp2.tcap",ext:"tcap"},{mime_type:"application/vnd.3m.post-it-notes",ext:"pwn"},{mime_type:"application/vnd.accpac.simply.aso",ext:"aso"},{mime_type:"application/vnd.accpac.simply.imp",ext:"imp"},{mime_type:"application/vnd.acucobol",ext:"acu"},{mime_type:"application/vnd.acucorp",ext:"atc acutc"},{mime_type:"application/vnd.adobe.air-application-installer-package+zip",ext:"air"},{mime_type:"application/vnd.adobe.xdp+xml",ext:"xdp"},{mime_type:"application/vnd.adobe.xfdf",ext:"xfdf"},{mime_type:"application/vnd.aether.imp"},{mime_type:"application/vnd.airzip.filesecure.azf",ext:"azf"},{mime_type:"application/vnd.airzip.filesecure.azs",ext:"azs"},{mime_type:"application/vnd.amazon.ebook",ext:"azw"},{mime_type:"application/vnd.americandynamics.acc",ext:"acc"},{mime_type:"application/vnd.amiga.ami",ext:"ami"},{mime_type:"application/vnd.android.package-archive",ext:"apk"},{mime_type:"application/vnd.anser-web-certificate-issue-initiation",ext:"cii"},{mime_type:"application/vnd.anser-web-funds-transfer-initiation",ext:"fti"},{mime_type:"application/vnd.antix.game-component",ext:"atx"},{mime_type:"application/vnd.apple.installer+xml",ext:"mpkg"},{mime_type:"application/vnd.arastra.swi",ext:"swi"},{mime_type:"application/vnd.audiograph",ext:"aep"},{mime_type:"application/vnd.autopackage"},{mime_type:"application/vnd.avistar+xml"},{mime_type:"application/vnd.blueice.multipass",ext:"mpm"},{mime_type:"application/vnd.bluetooth.ep.oob"},{mime_type:"application/vnd.bmi",ext:"bmi"},{mime_type:"application/vnd.businessobjects",ext:"rep"},{mime_type:"application/vnd.cab-jscript"},{mime_type:"application/vnd.canon-cpdl"},{mime_type:"application/vnd.canon-lips"},{mime_type:"application/vnd.cendio.thinlinc.clientconf"},{mime_type:"application/vnd.chemdraw+xml",ext:"cdxml"},{mime_type:"application/vnd.chipnuts.karaoke-mmd",ext:"mmd"},{mime_type:"application/vnd.cinderella",ext:"cdy"},{mime_type:"application/vnd.cirpack.isdn-ext"},{mime_type:"application/vnd.claymore",ext:"cla"},{mime_type:"application/vnd.clonk.c4group",ext:"c4g c4d c4f c4p c4u"},{mime_type:"application/vnd.commerce-battelle"},{mime_type:"application/vnd.commonspace",ext:"csp"},{mime_type:"application/vnd.contact.cmsg",ext:"cdbcmsg"},{mime_type:"application/vnd.cosmocaller",ext:"cmc"},{mime_type:"application/vnd.crick.clicker",ext:"clkx"},{mime_type:"application/vnd.crick.clicker.keyboard",ext:"clkk"},{mime_type:"application/vnd.crick.clicker.palette",ext:"clkp"},{mime_type:"application/vnd.crick.clicker.template",ext:"clkt"},{mime_type:"application/vnd.crick.clicker.wordbank",ext:"clkw"},{mime_type:"application/vnd.criticaltools.wbs+xml",ext:"wbs"},{mime_type:"application/vnd.ctc-posml",ext:"pml"},{mime_type:"application/vnd.ctct.ws+xml"},{mime_type:"application/vnd.cups-pdf"},{mime_type:"application/vnd.cups-postscript"},{mime_type:"application/vnd.cups-ppd",ext:"ppd"},{mime_type:"application/vnd.cups-raster"},{mime_type:"application/vnd.cups-raw"},{mime_type:"application/vnd.curl.car",ext:"car"},{mime_type:"application/vnd.curl.pcurl",ext:"pcurl"},{mime_type:"application/vnd.cybank"},{mime_type:"application/vnd.data-vision.rdz",ext:"rdz"},{mime_type:"application/vnd.denovo.fcselayout-link",ext:"fe_launch"},{mime_type:"application/vnd.dir-bi.plate-dl-nosuffix"},{mime_type:"application/vnd.dna",ext:"dna"},{mime_type:"application/vnd.dolby.mlp",ext:"mlp"},{mime_type:"application/vnd.dolby.mobile.1"},{mime_type:"application/vnd.dolby.mobile.2"},{mime_type:"application/vnd.dpgraph",ext:"dpg"},{mime_type:"application/vnd.dreamfactory",ext:"dfac"},{mime_type:"application/vnd.dvb.esgcontainer"},{mime_type:"application/vnd.dvb.ipdcdftnotifaccess"},{mime_type:"application/vnd.dvb.ipdcesgaccess"},{mime_type:"application/vnd.dvb.ipdcroaming"},{mime_type:"application/vnd.dvb.iptv.alfec-base"},{mime_type:"application/vnd.dvb.iptv.alfec-enhancement"},{mime_type:"application/vnd.dvb.notif-aggregate-root+xml"},{mime_type:"application/vnd.dvb.notif-container+xml"},{mime_type:"application/vnd.dvb.notif-generic+xml"},{mime_type:"application/vnd.dvb.notif-ia-msglist+xml"},{mime_type:"application/vnd.dvb.notif-ia-registration-request+xml"},{mime_type:"application/vnd.dvb.notif-ia-registration-response+xml"},{mime_type:"application/vnd.dvb.notif-init+xml"},{mime_type:"application/vnd.dxr"},{mime_type:"application/vnd.dynageo",ext:"geo"},{mime_type:"application/vnd.ecdis-update"},{mime_type:"application/vnd.ecowin.chart",ext:"mag"},{mime_type:"application/vnd.ecowin.filerequest"},{mime_type:"application/vnd.ecowin.fileupdate"},{mime_type:"application/vnd.ecowin.series"},{mime_type:"application/vnd.ecowin.seriesrequest"},{mime_type:"application/vnd.ecowin.seriesupdate"},{mime_type:"application/vnd.emclient.accessrequest+xml"},{mime_type:"application/vnd.enliven",ext:"nml"},{mime_type:"application/vnd.epson.esf",ext:"esf"},{mime_type:"application/vnd.epson.msf",ext:"msf"},{mime_type:"application/vnd.epson.quickanime",ext:"qam"},{mime_type:"application/vnd.epson.salt",ext:"slt"},{mime_type:"application/vnd.epson.ssf",ext:"ssf"},{mime_type:"application/vnd.ericsson.quickcall"},{mime_type:"application/vnd.eszigno3+xml",ext:"es3 et3"},{mime_type:"application/vnd.etsi.aoc+xml"},{mime_type:"application/vnd.etsi.cug+xml"},{mime_type:"application/vnd.etsi.iptvcommand+xml"},{mime_type:"application/vnd.etsi.iptvdiscovery+xml"},{mime_type:"application/vnd.etsi.iptvprofile+xml"},{mime_type:"application/vnd.etsi.iptvsad-bc+xml"},{mime_type:"application/vnd.etsi.iptvsad-cod+xml"},{mime_type:"application/vnd.etsi.iptvsad-npvr+xml"},{mime_type:"application/vnd.etsi.iptvueprofile+xml"},{mime_type:"application/vnd.etsi.mcid+xml"},{mime_type:"application/vnd.etsi.sci+xml"},{mime_type:"application/vnd.etsi.simservs+xml"},{mime_type:"application/vnd.eudora.data"},{mime_type:"application/vnd.ezpix-album",ext:"ez2"},{mime_type:"application/vnd.ezpix-package",ext:"ez3"},{mime_type:"application/vnd.f-secure.mobile"},{mime_type:"application/vnd.fdf",ext:"fdf"},{mime_type:"application/vnd.fdsn.mseed",ext:"mseed"},{mime_type:"application/vnd.fdsn.seed",ext:"seed dataless"},{mime_type:"application/vnd.ffsns"},{mime_type:"application/vnd.fints"},{mime_type:"application/vnd.flographit",ext:"gph"},{mime_type:"application/vnd.fluxtime.clip",ext:"ftc"},{mime_type:"application/vnd.font-fontforge-sfd"},{mime_type:"application/vnd.framemaker",ext:"fm frame maker book"},{mime_type:"application/vnd.frogans.fnc",ext:"fnc"},{mime_type:"application/vnd.frogans.ltf",ext:"ltf"},{mime_type:"application/vnd.fsc.weblaunch",ext:"fsc"},{mime_type:"application/vnd.fujitsu.oasys",ext:"oas"},{mime_type:"application/vnd.fujitsu.oasys2",ext:"oa2"},{mime_type:"application/vnd.fujitsu.oasys3",ext:"oa3"},{mime_type:"application/vnd.fujitsu.oasysgp",ext:"fg5"},{mime_type:"application/vnd.fujitsu.oasysprs",ext:"bh2"},{mime_type:"application/vnd.fujixerox.art-ex"},{mime_type:"application/vnd.fujixerox.art4"},{mime_type:"application/vnd.fujixerox.hbpl"},{mime_type:"application/vnd.fujixerox.ddd",ext:"ddd"},{mime_type:"application/vnd.fujixerox.docuworks",ext:"xdw"},{mime_type:"application/vnd.fujixerox.docuworks.binder",ext:"xbd"},{mime_type:"application/vnd.fut-misnet"},{mime_type:"application/vnd.fuzzysheet",ext:"fzs"},{mime_type:"application/vnd.genomatix.tuxedo",ext:"txd"},{mime_type:"application/vnd.geogebra.file",ext:"ggb"},{mime_type:"application/vnd.geogebra.tool",ext:"ggt"},{mime_type:"application/vnd.geometry-explorer",ext:"gex gre"},{mime_type:"application/vnd.gmx",ext:"gmx"},{mime_type:"application/vnd.google-earth.kml+xml",ext:"kml"},{mime_type:"application/vnd.google-earth.kmz",ext:"kmz"},{mime_type:"application/vnd.grafeq",ext:"gqf gqs"},{mime_type:"application/vnd.gridmp"},{mime_type:"application/vnd.groove-account",ext:"gac"},{mime_type:"application/vnd.groove-help",ext:"ghf"},{mime_type:"application/vnd.groove-identity-message",ext:"gim"},{mime_type:"application/vnd.groove-injector",ext:"grv"},{mime_type:"application/vnd.groove-tool-message",ext:"gtm"},{mime_type:"application/vnd.groove-tool-template",ext:"tpl"},{mime_type:"application/vnd.groove-vcard",ext:"vcg"},{mime_type:"application/vnd.handheld-entertainment+xml",ext:"zmm"},{mime_type:"application/vnd.hbci",ext:"hbci"},{mime_type:"application/vnd.hcl-bireports"},{mime_type:"application/vnd.hhe.lesson-player",ext:"les"},{mime_type:"application/vnd.hp-hpgl",ext:"hpgl"},{mime_type:"application/vnd.hp-hpid",ext:"hpid"},{mime_type:"application/vnd.hp-hps",ext:"hps"},{mime_type:"application/vnd.hp-jlyt",ext:"jlt"},{mime_type:"application/vnd.hp-pcl",ext:"pcl"},{mime_type:"application/vnd.hp-pclxl",ext:"pclxl"},{mime_type:"application/vnd.httphone"},{mime_type:"application/vnd.hydrostatix.sof-data",ext:"sfd-hdstx"},{mime_type:"application/vnd.hzn-3d-crossword",ext:"x3d"},{mime_type:"application/vnd.ibm.afplinedata"},{mime_type:"application/vnd.ibm.electronic-media"},{mime_type:"application/vnd.ibm.minipay",ext:"mpy"},{mime_type:"application/vnd.ibm.modcap",ext:"afp listafp list3820"},{mime_type:"application/vnd.ibm.rights-management",ext:"irm"},{mime_type:"application/vnd.ibm.secure-container",ext:"sc"},{mime_type:"application/vnd.iccprofile",ext:"icc icm"},{mime_type:"application/vnd.igloader",ext:"igl"},{mime_type:"application/vnd.immervision-ivp",ext:"ivp"},{mime_type:"application/vnd.immervision-ivu",ext:"ivu"},{mime_type:"application/vnd.informedcontrol.rms+xml"},{mime_type:"application/vnd.informix-visionary"},{mime_type:"application/vnd.intercon.formnet",ext:"xpw xpx"},{mime_type:"application/vnd.intertrust.digibox"},{mime_type:"application/vnd.intertrust.nncp"},{mime_type:"application/vnd.intu.qbo",ext:"qbo"},{mime_type:"application/vnd.intu.qfx",ext:"qfx"},{mime_type:"application/vnd.iptc.g2.conceptitem+xml"},{mime_type:"application/vnd.iptc.g2.knowledgeitem+xml"},{mime_type:"application/vnd.iptc.g2.newsitem+xml"},{mime_type:"application/vnd.iptc.g2.packageitem+xml"},{mime_type:"application/vnd.ipunplugged.rcprofile",ext:"rcprofile"},{mime_type:"application/vnd.irepository.package+xml",ext:"irp"},{mime_type:"application/vnd.is-xpr",ext:"xpr"},{mime_type:"application/vnd.jam",ext:"jam"},{mime_type:"application/vnd.japannet-directory-service"},{mime_type:"application/vnd.japannet-jpnstore-wakeup"},{mime_type:"application/vnd.japannet-payment-wakeup"},{mime_type:"application/vnd.japannet-registration"},{mime_type:"application/vnd.japannet-registration-wakeup"},{mime_type:"application/vnd.japannet-setstore-wakeup"},{mime_type:"application/vnd.japannet-verification"},{mime_type:"application/vnd.japannet-verification-wakeup"},{mime_type:"application/vnd.jcp.javame.midlet-rms",ext:"rms"},{mime_type:"application/vnd.jisp",ext:"jisp"},{mime_type:"application/vnd.joost.joda-archive",ext:"joda"},{mime_type:"application/vnd.kahootz",ext:"ktz ktr"},{mime_type:"application/vnd.kde.karbon",ext:"karbon"},{mime_type:"application/vnd.kde.kchart",ext:"chrt"},{mime_type:"application/vnd.kde.kformula",ext:"kfo"},{mime_type:"application/vnd.kde.kivio",ext:"flw"},{mime_type:"application/vnd.kde.kontour",ext:"kon"},{mime_type:"application/vnd.kde.kpresenter",ext:"kpr kpt"},{mime_type:"application/vnd.kde.kspread",ext:"ksp"},{mime_type:"application/vnd.kde.kword",ext:"kwd kwt"},{mime_type:"application/vnd.kenameaapp",ext:"htke"},{mime_type:"application/vnd.kidspiration",ext:"kia"},{mime_type:"application/vnd.kinar",ext:"kne knp"},{mime_type:"application/vnd.koan",ext:"skp skd skt skm"},{mime_type:"application/vnd.kodak-descriptor",ext:"sse"},{mime_type:"application/vnd.liberty-request+xml"},{mime_type:"application/vnd.llamagraphics.life-balance.desktop",ext:"lbd"},{mime_type:"application/vnd.llamagraphics.life-balance.exchange+xml",ext:"lbe"},{mime_type:"application/vnd.lotus-1-2-3",ext:"123"},{mime_type:"application/vnd.lotus-approach",ext:"apr"},{mime_type:"application/vnd.lotus-freelance",ext:"pre"},{mime_type:"application/vnd.lotus-notes",ext:"nsf"},{mime_type:"application/vnd.lotus-organizer",ext:"org"},{mime_type:"application/vnd.lotus-screencam",ext:"scm"},{mime_type:"application/vnd.lotus-wordpro",ext:"lwp"},{mime_type:"application/vnd.macports.portpkg",ext:"portpkg"},{mime_type:"application/vnd.marlin.drm.actiontoken+xml"},{mime_type:"application/vnd.marlin.drm.conftoken+xml"},{mime_type:"application/vnd.marlin.drm.license+xml"},{mime_type:"application/vnd.marlin.drm.mdcf"},{mime_type:"application/vnd.mcd",ext:"mcd"},{mime_type:"application/vnd.medcalcdata",ext:"mc1"},{mime_type:"application/vnd.mediastation.cdkey",ext:"cdkey"},{mime_type:"application/vnd.meridian-slingshot"},{mime_type:"application/vnd.mfer",ext:"mwf"},{mime_type:"application/vnd.mfmp",ext:"mfm"},{mime_type:"application/vnd.micrografx.flo",ext:"flo"},{mime_type:"application/vnd.micrografx.igx",ext:"igx"},{mime_type:"application/vnd.mif",ext:"mif"},{mime_type:"application/vnd.minisoft-hp3000-save"},{mime_type:"application/vnd.mitsubishi.misty-guard.trustweb"},{mime_type:"application/vnd.mobius.daf",ext:"daf"},{mime_type:"application/vnd.mobius.dis",ext:"dis"},{mime_type:"application/vnd.mobius.mbk",ext:"mbk"},{mime_type:"application/vnd.mobius.mqy",ext:"mqy"},{mime_type:"application/vnd.mobius.msl",ext:"msl"},{mime_type:"application/vnd.mobius.plc",ext:"plc"},{mime_type:"application/vnd.mobius.txf",ext:"txf"},{mime_type:"application/vnd.mophun.application",ext:"mpn"},{mime_type:"application/vnd.mophun.certificate",ext:"mpc"},{mime_type:"application/vnd.motorola.flexsuite"},{mime_type:"application/vnd.motorola.flexsuite.adsi"},{mime_type:"application/vnd.motorola.flexsuite.fis"},{mime_type:"application/vnd.motorola.flexsuite.gotap"},{mime_type:"application/vnd.motorola.flexsuite.kmr"},{mime_type:"application/vnd.motorola.flexsuite.ttc"},{mime_type:"application/vnd.motorola.flexsuite.wem"},{mime_type:"application/vnd.motorola.iprm"},{mime_type:"application/vnd.mozilla.xul+xml",ext:"xul"},{mime_type:"application/vnd.ms-artgalry",ext:"cil"},{mime_type:"application/vnd.ms-asf"},{mime_type:"application/vnd.ms-cab-compressed",ext:"cab"},{mime_type:"application/vnd.ms-excel",ext:"xls xlm xla xlc xlt xlw"},{mime_type:"application/vnd.ms-excel.addin.macroenabled.12",ext:"xlam"},{mime_type:"application/vnd.ms-excel.sheet.binary.macroenabled.12",ext:"xlsb"},{mime_type:"application/vnd.ms-excel.sheet.macroenabled.12",ext:"xlsm"},{mime_type:"application/vnd.ms-excel.template.macroenabled.12",ext:"xltm"},{mime_type:"application/vnd.ms-fontobject",ext:"eot"},{mime_type:"application/vnd.ms-htmlhelp",ext:"chm"},{mime_type:"application/vnd.ms-ims",ext:"ims"},{mime_type:"application/vnd.ms-lrm",ext:"lrm"},{mime_type:"application/vnd.ms-pki.seccat",ext:"cat"},{mime_type:"application/vnd.ms-pki.stl",ext:"stl"},{mime_type:"application/vnd.ms-playready.initiator+xml"},{mime_type:"application/vnd.ms-powerpoint",ext:"ppt pps pot"},{mime_type:"application/vnd.ms-powerpoint.addin.macroenabled.12",ext:"ppam"},{mime_type:"application/vnd.ms-powerpoint.presentation.macroenabled.12",ext:"pptm"},{mime_type:"application/vnd.ms-powerpoint.slide.macroenabled.12",ext:"sldm"},{mime_type:"application/vnd.ms-powerpoint.slideshow.macroenabled.12",ext:"ppsm"},{mime_type:"application/vnd.ms-powerpoint.template.macroenabled.12",ext:"potm"},{mime_type:"application/vnd.ms-project",ext:"mpp mpt"},{mime_type:"application/vnd.ms-tnef"},{mime_type:"application/vnd.ms-wmdrm.lic-chlg-req"},{mime_type:"application/vnd.ms-wmdrm.lic-resp"},{mime_type:"application/vnd.ms-wmdrm.meter-chlg-req"},{mime_type:"application/vnd.ms-wmdrm.meter-resp"},{mime_type:"application/vnd.ms-word.document.macroenabled.12",ext:"docm"},{mime_type:"application/vnd.ms-word.template.macroenabled.12",ext:"dotm"},{mime_type:"application/vnd.ms-works",ext:"wps wks wcm wdb"},{mime_type:"application/vnd.ms-wpl",ext:"wpl"},{mime_type:"application/vnd.ms-xpsdocument",ext:"xps"},{mime_type:"application/vnd.mseq",ext:"mseq"},{mime_type:"application/vnd.msign"},{mime_type:"application/vnd.multiad.creator"},{mime_type:"application/vnd.multiad.creator.cif"},{mime_type:"application/vnd.music-niff"},{mime_type:"application/vnd.musician",ext:"mus"},{mime_type:"application/vnd.muvee.style",ext:"msty"},{mime_type:"application/vnd.ncd.control"},{mime_type:"application/vnd.ncd.reference"},{mime_type:"application/vnd.nervana"},{mime_type:"application/vnd.netfpx"},{mime_type:"application/vnd.neurolanguage.nlu",ext:"nlu"},{mime_type:"application/vnd.noblenet-directory",ext:"nnd"},{mime_type:"application/vnd.noblenet-sealer",ext:"nns"},{mime_type:"application/vnd.noblenet-web",ext:"nnw"},{mime_type:"application/vnd.nokia.catalogs"},{mime_type:"application/vnd.nokia.conml+wbxml"},{mime_type:"application/vnd.nokia.conml+xml"},{mime_type:"application/vnd.nokia.isds-radio-presets"},{mime_type:"application/vnd.nokia.iptv.config+xml"},{mime_type:"application/vnd.nokia.landmark+wbxml"},{mime_type:"application/vnd.nokia.landmark+xml"},{mime_type:"application/vnd.nokia.landmarkcollection+xml"},{mime_type:"application/vnd.nokia.n-gage.ac+xml"},{mime_type:"application/vnd.nokia.n-gage.data",ext:"ngdat"},{mime_type:"application/vnd.nokia.n-gage.symbian.install",ext:"n-gage"},{mime_type:"application/vnd.nokia.ncd"},{mime_type:"application/vnd.nokia.pcd+wbxml"},{mime_type:"application/vnd.nokia.pcd+xml"},{mime_type:"application/vnd.nokia.radio-preset",ext:"rpst"},{mime_type:"application/vnd.nokia.radio-presets",ext:"rpss"},{mime_type:"application/vnd.novadigm.edm",ext:"edm"},{mime_type:"application/vnd.novadigm.edx",ext:"edx"},{mime_type:"application/vnd.novadigm.ext",ext:"ext"},{mime_type:"application/vnd.oasis.opendocument.chart",ext:"odc"},{mime_type:"application/vnd.oasis.opendocument.chart-template",ext:"otc"},{mime_type:"application/vnd.oasis.opendocument.database",ext:"odb"},{mime_type:"application/vnd.oasis.opendocument.formula",ext:"odf"},{mime_type:"application/vnd.oasis.opendocument.formula-template",ext:"odft"},{mime_type:"application/vnd.oasis.opendocument.graphics",ext:"odg"},{mime_type:"application/vnd.oasis.opendocument.graphics-template",ext:"otg"},{mime_type:"application/vnd.oasis.opendocument.image",ext:"odi"},{mime_type:"application/vnd.oasis.opendocument.image-template",ext:"oti"},{mime_type:"application/vnd.oasis.opendocument.presentation",ext:"odp"},{mime_type:"application/vnd.oasis.opendocument.presentation-template otp"},{mime_type:"application/vnd.oasis.opendocument.spreadsheet",ext:"ods"},{mime_type:"application/vnd.oasis.opendocument.spreadsheet-template",ext:"ots"},{mime_type:"application/vnd.oasis.opendocument.text",ext:"odt"},{mime_type:"application/vnd.oasis.opendocument.text-master",ext:"otm"},{mime_type:"application/vnd.oasis.opendocument.text-template",ext:"ott"},{mime_type:"application/vnd.oasis.opendocument.text-web",ext:"oth"},{mime_type:"application/vnd.obn"},{mime_type:"application/vnd.olpc-sugar",ext:"xo"},{mime_type:"application/vnd.oma-scws-config"},{mime_type:"application/vnd.oma-scws-http-request"},{mime_type:"application/vnd.oma-scws-http-response"},{mime_type:"application/vnd.oma.bcast.associated-procedure-parameter+xml"},{mime_type:"application/vnd.oma.bcast.drm-trigger+xml"},{mime_type:"application/vnd.oma.bcast.imd+xml"},{mime_type:"application/vnd.oma.bcast.ltkm"},{mime_type:"application/vnd.oma.bcast.notification+xml"},{mime_type:"application/vnd.oma.bcast.provisioningtrigger"},{mime_type:"application/vnd.oma.bcast.sgboot"},{mime_type:"application/vnd.oma.bcast.sgdd+xml"},{mime_type:"application/vnd.oma.bcast.sgdu"},{mime_type:"application/vnd.oma.bcast.simple-symbol-container"},{mime_type:"application/vnd.oma.bcast.smartcard-trigger+xml"},{mime_type:"application/vnd.oma.bcast.sprov+xml"},{mime_type:"application/vnd.oma.bcast.stkm"},{mime_type:"application/vnd.oma.dcd"},{mime_type:"application/vnd.oma.dcdc"},{mime_type:"application/vnd.oma.dd2+xml",ext:"dd2"},{mime_type:"application/vnd.oma.drm.risd+xml"},{mime_type:"application/vnd.oma.group-usage-list+xml"},{mime_type:"application/vnd.oma.poc.detailed-progress-report+xml"},{mime_type:"application/vnd.oma.poc.final-report+xml"},{mime_type:"application/vnd.oma.poc.groups+xml"},{mime_type:"application/vnd.oma.poc.invocation-descriptor+xml"},{mime_type:"application/vnd.oma.poc.optimized-progress-report+xml"},{mime_type:"application/vnd.oma.xcap-directory+xml"},{mime_type:"application/vnd.omads-email+xml"},{mime_type:"application/vnd.omads-file+xml"},{mime_type:"application/vnd.omads-folder+xml"},{mime_type:"application/vnd.omaloc-supl-init"},{mime_type:"application/vnd.openofficeorg.extension",ext:"oxt"},{mime_type:"application/vnd.openxmlformats-officedocument.presentationml.presentation",ext:"pptx"},{mime_type:"application/vnd.openxmlformats-officedocument.presentationml.slide",ext:"sldx"},{mime_type:"application/vnd.openxmlformats-officedocument.presentationml.slideshow",ext:"ppsx"},{mime_type:"application/vnd.openxmlformats-officedocument.presentationml.template",ext:"potx"},{mime_type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ext:"xlsx"},{mime_type:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",ext:"xltx"},{mime_type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",ext:"docx"},{mime_type:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",ext:"dotx"},{mime_type:"application/vnd.osa.netdeploy"},{mime_type:"application/vnd.osgi.bundle"},{mime_type:"application/vnd.osgi.dp",ext:"dp"},{mime_type:"application/vnd.otps.ct-kip+xml"},{mime_type:"application/vnd.palm",ext:"pdb pqa oprc"},{mime_type:"application/vnd.paos.xml"},{mime_type:"application/vnd.pg.format",ext:"str"},{mime_type:"application/vnd.pg.osasli",ext:"ei6"},{mime_type:"application/vnd.piaccess.application-licence"},{mime_type:"application/vnd.picsel",ext:"efif"},{mime_type:"application/vnd.poc.group-advertisement+xml"},{mime_type:"application/vnd.pocketlearn",ext:"plf"},{mime_type:"application/vnd.powerbuilder6",ext:"pbd"},{mime_type:"application/vnd.powerbuilder6-s"},{mime_type:"application/vnd.powerbuilder7"},{mime_type:"application/vnd.powerbuilder7-s"},{mime_type:"application/vnd.powerbuilder75"},{mime_type:"application/vnd.powerbuilder75-s"},{mime_type:"application/vnd.preminet"},{mime_type:"application/vnd.previewsystems.box",ext:"box"},{mime_type:"application/vnd.proteus.magazine",ext:"mgz"},{mime_type:"application/vnd.publishare-delta-tree",ext:"qps"},{mime_type:"application/vnd.pvi.ptid1",ext:"ptid"},{mime_type:"application/vnd.pwg-multiplexed"},{mime_type:"application/vnd.pwg-xhtml-print+xml"},{mime_type:"application/vnd.qualcomm.brew-app-res"},{mime_type:"application/vnd.quark.quarkxpress",ext:"qxd qxt qwd qwt qxl qxb"},{mime_type:"application/vnd.rapid"},{mime_type:"application/vnd.recordare.musicxml",ext:"mxl"},{mime_type:"application/vnd.recordare.musicxml+xml",ext:"musicxml"},{mime_type:"application/vnd.renlearn.rlprint"},{mime_type:"application/vnd.rim.cod",ext:"cod"},{mime_type:"application/vnd.rn-realmedia",ext:"rm"},{mime_type:"application/vnd.route66.link66+xml",ext:"link66"},{mime_type:"application/vnd.ruckus.download"},{mime_type:"application/vnd.s3sms"},{mime_type:"application/vnd.sbm.cid"},{mime_type:"application/vnd.sbm.mid2"},{mime_type:"application/vnd.scribus"},{mime_type:"application/vnd.sealed.3df"},{mime_type:"application/vnd.sealed.csf"},{mime_type:"application/vnd.sealed.doc"},{mime_type:"application/vnd.sealed.eml"},{mime_type:"application/vnd.sealed.mht"},{mime_type:"application/vnd.sealed.net"},{mime_type:"application/vnd.sealed.ppt"},{mime_type:"application/vnd.sealed.tiff"},{mime_type:"application/vnd.sealed.xls"},{mime_type:"application/vnd.sealedmedia.softseal.html"},{mime_type:"application/vnd.sealedmedia.softseal.pdf"},{mime_type:"application/vnd.seemail",ext:"see"},{mime_type:"application/vnd.sema",ext:"sema"},{mime_type:"application/vnd.semd",ext:"semd"},{mime_type:"application/vnd.semf",ext:"semf"},{mime_type:"application/vnd.shana.informed.formdata",ext:"ifm"},{mime_type:"application/vnd.shana.informed.formtemplate",ext:"itp"},{mime_type:"application/vnd.shana.informed.interchange",ext:"iif"},{mime_type:"application/vnd.shana.informed.package",ext:"ipk"},{mime_type:"application/vnd.simtech-mindmapper",ext:"twd twds"},{mime_type:"application/vnd.smaf",ext:"mmf"},{mime_type:"application/vnd.smart.teacher",ext:"teacher"},{mime_type:"application/vnd.software602.filler.form+xml"},{mime_type:"application/vnd.software602.filler.form-xml-zip"},{mime_type:"application/vnd.solent.sdkm+xml",ext:"sdkm sdkd"},{mime_type:"application/vnd.spotfire.dxp",ext:"dxp"},{mime_type:"application/vnd.spotfire.sfs",ext:"sfs"},{mime_type:"application/vnd.sss-cod"},{mime_type:"application/vnd.sss-dtf"},{mime_type:"application/vnd.sss-ntf"},{mime_type:"application/vnd.stardivision.calc",ext:"sdc"},{mime_type:"application/vnd.stardivision.draw",ext:"sda"},{mime_type:"application/vnd.stardivision.impress",ext:"sdd"},{mime_type:"application/vnd.stardivision.math",ext:"smf"},{mime_type:"application/vnd.stardivision.writer",ext:"sdw"},{mime_type:"application/vnd.stardivision.writer",ext:"vor"},{mime_type:"application/vnd.stardivision.writer-global",ext:"sgl"},{mime_type:"application/vnd.street-stream"},{mime_type:"application/vnd.sun.xml.calc",ext:"sxc"},{mime_type:"application/vnd.sun.xml.calc.template",ext:"stc"},{mime_type:"application/vnd.sun.xml.draw",ext:"sxd"},{mime_type:"application/vnd.sun.xml.draw.template",ext:"std"},{mime_type:"application/vnd.sun.xml.impress",ext:"sxi"},{mime_type:"application/vnd.sun.xml.impress.template",ext:"sti"},{mime_type:"application/vnd.sun.xml.math",ext:"sxm"},{mime_type:"application/vnd.sun.xml.writer",ext:"sxw"},{mime_type:"application/vnd.sun.xml.writer.global",ext:"sxg"},{mime_type:"application/vnd.sun.xml.writer.template",ext:"stw"},{mime_type:"application/vnd.sun.wadl+xml"},{mime_type:"application/vnd.sus-calendar",ext:"sus susp"},{mime_type:"application/vnd.svd",ext:"svd"},{mime_type:"application/vnd.swiftview-ics"},{mime_type:"application/vnd.symbian.install",ext:"sis sisx"},{mime_type:"application/vnd.syncml+xml",ext:"xsm"},{mime_type:"application/vnd.syncml.dm+wbxml",ext:"bdm"},{mime_type:"application/vnd.syncml.dm+xml",ext:"xdm"},{mime_type:"application/vnd.syncml.dm.notification"},{mime_type:"application/vnd.syncml.ds.notification"},{mime_type:"application/vnd.tao.intent-module-archive",ext:"tao"},{mime_type:"application/vnd.tmobile-livetv",ext:"tmo"},{mime_type:"application/vnd.trid.tpt",ext:"tpt"},{mime_type:"application/vnd.triscape.mxs",ext:"mxs"},{mime_type:"application/vnd.trueapp",ext:"tra"},{mime_type:"application/vnd.truedoc"},{mime_type:"application/vnd.ufdl",ext:"ufd ufdl"},{mime_type:"application/vnd.uiq.theme",ext:"utz"},{mime_type:"application/vnd.umajin",ext:"umj"},{mime_type:"application/vnd.unity",ext:"unityweb"},{mime_type:"application/vnd.uoml+xml",ext:"uoml"},{mime_type:"application/vnd.uplanet.alert"},{mime_type:"application/vnd.uplanet.alert-wbxml"},{mime_type:"application/vnd.uplanet.bearer-choice"},{mime_type:"application/vnd.uplanet.bearer-choice-wbxml"},{mime_type:"application/vnd.uplanet.cacheop"},{mime_type:"application/vnd.uplanet.cacheop-wbxml"},{mime_type:"application/vnd.uplanet.channel"},{mime_type:"application/vnd.uplanet.channel-wbxml"},{mime_type:"application/vnd.uplanet.list"},{mime_type:"application/vnd.uplanet.list-wbxml"},{mime_type:"application/vnd.uplanet.listcmd"},{mime_type:"application/vnd.uplanet.listcmd-wbxml"},{mime_type:"application/vnd.uplanet.signal"},{mime_type:"application/vnd.vcx",ext:"vcx"},{mime_type:"application/vnd.vd-study"},{mime_type:"application/vnd.vectorworks"},{mime_type:"application/vnd.vidsoft.vidconference"},{mime_type:"application/vnd.visio",ext:"vsd vst vss vsw"},{mime_type:"application/vnd.visionary",ext:"vis"},{mime_type:"application/vnd.vividence.scriptfile"},{mime_type:"application/vnd.vsf",ext:"vsf"},{mime_type:"application/vnd.wap.sic"},{mime_type:"application/vnd.wap.slc"},{mime_type:"application/vnd.wap.wbxml",ext:"wbxml"},{mime_type:"application/vnd.wap.wmlc",ext:"wmlc"},{mime_type:"application/vnd.wap.wmlscriptc",ext:"wmlsc"},{mime_type:"application/vnd.webturbo",ext:"wtb"},{mime_type:"application/vnd.wfa.wsc"},{mime_type:"application/vnd.wmc"},{mime_type:"application/vnd.wmf.bootstrap"},{mime_type:"application/vnd.wordperfect",ext:"wpd"},{mime_type:"application/vnd.wqd",ext:"wqd"},{mime_type:"application/vnd.wrq-hp3000-labelled"},{mime_type:"application/vnd.wt.stf",ext:"stf"},{mime_type:"application/vnd.wv.csp+wbxml"},{mime_type:"application/vnd.wv.csp+xml"},{mime_type:"application/vnd.wv.ssp+xml"},{mime_type:"application/vnd.xara",ext:"xar"},{mime_type:"application/vnd.xfdl",ext:"xfdl"},{mime_type:"application/vnd.xfdl.webform"},{mime_type:"application/vnd.xmi+xml"},{mime_type:"application/vnd.xmpie.cpkg"},{mime_type:"application/vnd.xmpie.dpkg"},{mime_type:"application/vnd.xmpie.plan"},{mime_type:"application/vnd.xmpie.ppkg"},{mime_type:"application/vnd.xmpie.xlim"},{mime_type:"application/vnd.yamaha.hv-dic",ext:"hvd"},{mime_type:"application/vnd.yamaha.hv-script",ext:"hvs"},{mime_type:"application/vnd.yamaha.hv-voice",ext:"hvp"},{mime_type:"application/vnd.yamaha.openscoreformat",ext:"osf"},{mime_type:"application/vnd.yamaha.openscoreformat.osfpvg+xml",ext:"osfpvg"},{mime_type:"application/vnd.yamaha.smaf-audio",ext:"saf"},{mime_type:"application/vnd.yamaha.smaf-phrase",ext:"spf"},{mime_type:"application/vnd.yellowriver-custom-menu",ext:"cmp"},{mime_type:"application/vnd.zul",ext:"zir zirz"},{mime_type:"application/vnd.zzazz.deck+xml",ext:"zaz"},{mime_type:"application/voicexml+xml",ext:"vxml"},{mime_type:"application/watcherinfo+xml"},{mime_type:"application/whoispp-query"},{mime_type:"application/whoispp-response"},{mime_type:"application/winhlp",ext:"hlp"},{mime_type:"application/wita"},{mime_type:"application/wordperfect5.1"},{mime_type:"application/wsdl+xml",ext:"wsdl"},{mime_type:"application/wspolicy+xml",ext:"wspolicy"},{mime_type:"application/x-abiword",ext:"abw"},{mime_type:"application/x-ace-compressed",ext:"ace"},{mime_type:"application/x-authorware-bin",ext:"aab x32 u32 vox"},{mime_type:"application/x-authorware-map",ext:"aam"},{mime_type:"application/x-authorware-seg",ext:"aas"},{mime_type:"application/x-bcpio",ext:"bcpio"},{mime_type:"application/x-bittorrent",ext:"torrent"},{mime_type:"application/x-bzip",ext:"bz"},{mime_type:"application/x-bzip2",ext:"bz2 boz"},{mime_type:"application/x-cdlink",ext:"vcd"},{mime_type:"application/x-chat",ext:"chat"},{mime_type:"application/x-chess-pgn",ext:"pgn"},{mime_type:"application/x-compress"},{mime_type:"application/x-cpio",ext:"cpio"},{mime_type:"application/x-csh",ext:"csh"},{mime_type:"application/x-debian-package",ext:"deb udeb"},{mime_type:"application/x-director",ext:"dir dcr dxr cst cct cxt w3d fgd swa"},{mime_type:"application/x-doom",ext:"wad"},{mime_type:"application/x-dtbncx+xml",ext:"ncx"},{mime_type:"application/x-dtbook+xml",ext:"dtb"},{mime_type:"application/x-dtbresource+xml",ext:"res"},{mime_type:"application/x-dvi",ext:"dvi"},{mime_type:"application/x-font-bdf",ext:"bdf"},{mime_type:"application/x-font-dos"},{mime_type:"application/x-font-framemaker"},{mime_type:"application/x-font-ghostscript",ext:"gsf"},{mime_type:"application/x-font-libgrx"},{mime_type:"application/x-font-linux-psf",ext:"psf"},{mime_type:"application/x-font-otf",ext:"otf"},{mime_type:"application/x-font-pcf",ext:"pcf"},{mime_type:"application/x-font-snf",ext:"snf"},{mime_type:"application/x-font-speedo"},{mime_type:"application/x-font-sunos-news"},{mime_type:"application/x-font-ttf",ext:"ttf ttc"},{mime_type:"application/x-font-type1",ext:"pfa pfb pfm afm"},{mime_type:"application/x-font-vfont"},{mime_type:"application/x-futuresplash",ext:"spl"},{mime_type:"application/x-gnumeric",ext:"gnumeric"},{mime_type:"application/x-gtar",ext:"gtar"},{mime_type:"application/x-gzip"},{mime_type:"application/x-hdf",ext:"hdf"},{mime_type:"application/x-java-jnlp-file",ext:"jnlp"},{mime_type:"application/x-latex",ext:"latex"},{mime_type:"application/x-mobipocket-ebook",ext:"prc mobi"},{mime_type:"application/x-ms-application",ext:"application"},{mime_type:"application/x-ms-wmd",ext:"wmd"},{mime_type:"application/x-ms-wmz",ext:"wmz"},{mime_type:"application/x-ms-xbap",ext:"xbap"},{mime_type:"application/x-msaccess",ext:"mdb"},{mime_type:"application/x-msbinder",ext:"obd"},{mime_type:"application/x-mscardfile",ext:"crd"},{mime_type:"application/x-msclip",ext:"clp"},{mime_type:"application/x-msdownload",ext:"exe dll com bat msi"},{mime_type:"application/x-msmediaview",ext:"mvb m13 m14"},{mime_type:"application/x-msmetafile",ext:"wmf"},{mime_type:"application/x-msmoney",ext:"mny"},{mime_type:"application/x-mspublisher",ext:"pub"},{mime_type:"application/x-msschedule",ext:"scd"},{mime_type:"application/x-msterminal",ext:"trm"},{mime_type:"application/x-mswrite",ext:"wri"},{mime_type:"application/x-netcdf",ext:"nc cdf"},{mime_type:"application/x-pkcs12",ext:"p12 pfx"},{mime_type:"application/x-pkcs7-certificates",ext:"p7b spc"},{mime_type:"application/x-pkcs7-certreqresp",ext:"p7r"},{mime_type:"application/x-rar-compressed",ext:"rar"},{mime_type:"application/x-sh",ext:"sh"},{mime_type:"application/x-shar",ext:"shar"},{mime_type:"application/x-shockwave-flash",ext:"swf"},{mime_type:"application/x-silverlight-app",ext:"xap"},{mime_type:"application/x-stuffit",ext:"sit"},{mime_type:"application/x-stuffitx",ext:"sitx"},{mime_type:"application/x-sv4cpio",ext:"sv4cpio"},{mime_type:"application/x-sv4crc",ext:"sv4crc"},{mime_type:"application/x-tar",ext:"tar"},{mime_type:"application/x-tcl",ext:"tcl"},{mime_type:"application/x-tex",ext:"tex"},{mime_type:"application/x-tex-tfm",ext:"tfm"},{mime_type:"application/x-texinfo",ext:"texinfo texi"},{mime_type:"application/x-ustar",ext:"ustar"},{mime_type:"application/x-wais-source",ext:"src"},{mime_type:"application/x-x509-ca-cert",ext:"der crt"},{mime_type:"application/x-xfig",ext:"fig"},{mime_type:"application/x-xpinstall",ext:"xpi"},{mime_type:"application/x400-bp"},{mime_type:"application/xcap-att+xml"},{mime_type:"application/xcap-caps+xml"},{mime_type:"application/xcap-el+xml"},{mime_type:"application/xcap-error+xml"},{mime_type:"application/xcap-ns+xml"},{mime_type:"application/xcon-conference-info-diff+xml"},{mime_type:"application/xcon-conference-info+xml"},{mime_type:"application/xenc+xml",ext:"xenc"},{mime_type:"application/xhtml+xml",ext:"xhtml xht"},{mime_type:"application/xhtml-voice+xml"},{mime_type:"application/xml",ext:"xml xsl"},{mime_type:"application/xml-dtd",ext:"dtd"},{mime_type:"application/xml-external-parsed-entity"},{mime_type:"application/xmpp+xml"},{mime_type:"application/xop+xml",ext:"xop"},{mime_type:"application/xslt+xml",ext:"xslt"},{mime_type:"application/xspf+xml",ext:"xspf"},{mime_type:"application/xv+xml",ext:"mxml xhvml xvml xvm"},{mime_type:"application/zip",ext:"zip"},{mime_type:"audio/32kadpcm"},{mime_type:"audio/3gpp"},{mime_type:"audio/3gpp2"},{mime_type:"audio/ac3"},{mime_type:"audio/adpcm",ext:"adp"},{mime_type:"audio/amr"},{mime_type:"audio/amr-wb"},{mime_type:"audio/amr-wb+"},{mime_type:"audio/asc"},{mime_type:"audio/basic",ext:"au snd"},{mime_type:"audio/bv16"},{mime_type:"audio/bv32"},{mime_type:"audio/clearmode"},{mime_type:"audio/cn"},{mime_type:"audio/dat12"},{mime_type:"audio/dls"},{mime_type:"audio/dsr-es201108"},{mime_type:"audio/dsr-es202050"},{mime_type:"audio/dsr-es202211"},{mime_type:"audio/dsr-es202212"},{mime_type:"audio/dvi4"},{mime_type:"audio/eac3"},{mime_type:"audio/evrc"},{mime_type:"audio/evrc-qcp"},{mime_type:"audio/evrc0"},{mime_type:"audio/evrc1"},{mime_type:"audio/evrcb"},{mime_type:"audio/evrcb0"},{mime_type:"audio/evrcb1"},{mime_type:"audio/evrcwb"},{mime_type:"audio/evrcwb0"},{mime_type:"audio/evrcwb1"},{mime_type:"audio/example"},{mime_type:"audio/g719"},{mime_type:"audio/g722"},{mime_type:"audio/g7221"},{mime_type:"audio/g723"},{mime_type:"audio/g726-16"},{mime_type:"audio/g726-24"},{mime_type:"audio/g726-32"},{mime_type:"audio/g726-40"},{mime_type:"audio/g728"},{mime_type:"audio/g729"},{mime_type:"audio/g7291"},{mime_type:"audio/g729d"},{mime_type:"audio/g729e"},{mime_type:"audio/gsm"},{mime_type:"audio/gsm-efr"},{mime_type:"audio/ilbc"},{mime_type:"audio/l16"},{mime_type:"audio/l20"},{mime_type:"audio/l24"},{mime_type:"audio/l8"},{mime_type:"audio/lpc"},{mime_type:"audio/midi",ext:"mid midi kar rmi"},{mime_type:"audio/mobile-xmf"},{mime_type:"audio/mp4",ext:"mp4a"},{mime_type:"audio/mp4a-latm",ext:"m4a m4p"},{mime_type:"audio/mpa"},{mime_type:"audio/mpa-robust"},{mime_type:"audio/mpeg",ext:"mpga mp2 mp2a mp3 m2a m3a"},{mime_type:"audio/mpeg4-generic"},{mime_type:"audio/ogg",ext:"oga ogg spx"},{mime_type:"audio/parityfec"},{mime_type:"audio/pcma"},{mime_type:"audio/pcma-wb"},{mime_type:"audio/pcmu-wb"},{mime_type:"audio/pcmu"},{mime_type:"audio/prs.sid"},{mime_type:"audio/qcelp"},{mime_type:"audio/red"},{mime_type:"audio/rtp-enc-aescm128"},{mime_type:"audio/rtp-midi"},{mime_type:"audio/rtx"},{mime_type:"audio/smv"},{mime_type:"audio/smv0"},{mime_type:"audio/smv-qcp"},{mime_type:"audio/sp-midi"},{mime_type:"audio/t140c"},{mime_type:"audio/t38"},{mime_type:"audio/telephone-event"},{mime_type:"audio/tone"},{mime_type:"audio/ulpfec"},{mime_type:"audio/vdvi"},{mime_type:"audio/vmr-wb"},{mime_type:"audio/vnd.3gpp.iufp"},{mime_type:"audio/vnd.4sb"},{mime_type:"audio/vnd.audiokoz"},{mime_type:"audio/vnd.celp"},{mime_type:"audio/vnd.cisco.nse"},{mime_type:"audio/vnd.cmles.radio-events"},{mime_type:"audio/vnd.cns.anp1"},{mime_type:"audio/vnd.cns.inf1"},{mime_type:"audio/vnd.digital-winds",ext:"eol"},{mime_type:"audio/vnd.dlna.adts"},{mime_type:"audio/vnd.dolby.heaac.1"},{mime_type:"audio/vnd.dolby.heaac.2"},{mime_type:"audio/vnd.dolby.mlp"},{mime_type:"audio/vnd.dolby.mps"},{mime_type:"audio/vnd.dolby.pl2"},{mime_type:"audio/vnd.dolby.pl2x"},{mime_type:"audio/vnd.dolby.pl2z"},{mime_type:"audio/vnd.dts",ext:"dts"},{mime_type:"audio/vnd.dts.hd",ext:"dtshd"},{mime_type:"audio/vnd.everad.plj"},{mime_type:"audio/vnd.hns.audio"},{mime_type:"audio/vnd.lucent.voice",ext:"lvp"},{mime_type:"audio/vnd.ms-playready.media.pya",ext:"pya"},{mime_type:"audio/vnd.nokia.mobile-xmf"},{mime_type:"audio/vnd.nortel.vbk"},{mime_type:"audio/vnd.nuera.ecelp4800",ext:"ecelp4800"},{mime_type:"audio/vnd.nuera.ecelp7470",ext:"ecelp7470"},{mime_type:"audio/vnd.nuera.ecelp9600",ext:"ecelp9600"},{mime_type:"audio/vnd.octel.sbc"},{mime_type:"audio/vnd.qcelp"},{mime_type:"audio/vnd.rhetorex.32kadpcm"},{mime_type:"audio/vnd.sealedmedia.softseal.mpeg"},{mime_type:"audio/vnd.vmx.cvsd"},{mime_type:"audio/vorbis"},{mime_type:"audio/vorbis-config"},{mime_type:"audio/x-aac",ext:"aac"},{mime_type:"audio/x-aiff",ext:"aif aiff aifc"},{mime_type:"audio/x-mpegurl",ext:"m3u"},{mime_type:"audio/x-ms-wax",ext:"wax"},{mime_type:"audio/x-ms-wma",ext:"wma"},{mime_type:"audio/x-pn-realaudio",ext:"ram ra"},{mime_type:"audio/x-pn-realaudio-plugin",ext:"rmp"},{mime_type:"audio/x-wav",ext:"wav"},{mime_type:"chemical/x-cdx",ext:"cdx"},{mime_type:"chemical/x-cif",ext:"cif"},{mime_type:"chemical/x-cmdf",ext:"cmdf"},{mime_type:"chemical/x-cml",ext:"cml"},{mime_type:"chemical/x-csml",ext:"csml"},{mime_type:"chemical/x-pdb"},{mime_type:"chemical/x-xyz",ext:"xyz"},{mime_type:"image/bmp",ext:"bmp"},{mime_type:"image/cgm",ext:"cgm"},{mime_type:"image/example"},{mime_type:"image/fits"},{mime_type:"image/g3fax",ext:"g3"},{mime_type:"image/gif",ext:"gif"},{mime_type:"image/ief",ext:"ief"},{mime_type:"image/jp2",ext:"jp2"},{mime_type:"image/jpeg",ext:"jpeg jpg jpe"},{mime_type:"image/jpm"},{mime_type:"image/jpx"},{mime_type:"image/naplps"},{mime_type:"image/pict",ext:"pict pic pct"},{mime_type:"image/png",ext:"png"},{mime_type:"image/prs.btif",ext:"btif"},{mime_type:"image/prs.pti"},{mime_type:"image/svg+xml",ext:"svg svgz"},{mime_type:"image/t38"},{mime_type:"image/tiff",ext:"tiff tif"},{mime_type:"image/tiff-fx"},{mime_type:"image/vnd.adobe.photoshop",ext:"psd"},{mime_type:"image/vnd.cns.inf2"},{mime_type:"image/vnd.djvu",ext:"djvu djv"},{mime_type:"image/vnd.dwg",ext:"dwg"},{mime_type:"image/vnd.dxf",ext:"dxf"},{mime_type:"image/vnd.fastbidsheet",ext:"fbs"},{mime_type:"image/vnd.fpx",ext:"fpx"},{mime_type:"image/vnd.fst",ext:"fst"},{mime_type:"image/vnd.fujixerox.edmics-mmr",ext:"mmr"},{mime_type:"image/vnd.fujixerox.edmics-rlc",ext:"rlc"},{mime_type:"image/vnd.globalgraphics.pgb"},{mime_type:"image/vnd.microsoft.icon"},{mime_type:"image/vnd.mix"},{mime_type:"image/vnd.ms-modi",ext:"mdi"},{mime_type:"image/vnd.net-fpx",ext:"npx"},{mime_type:"image/vnd.radiance"},{mime_type:"image/vnd.sealed.png"},{mime_type:"image/vnd.sealedmedia.softseal.gif"},{mime_type:"image/vnd.sealedmedia.softseal.jpg"},{mime_type:"image/vnd.svf"},{mime_type:"image/vnd.wap.wbmp",ext:"wbmp"},{mime_type:"image/vnd.xiff",ext:"xif"},{mime_type:"image/x-cmu-raster",ext:"ras"},{mime_type:"image/x-cmx",ext:"cmx"},{mime_type:"image/x-freehand",ext:"fh fhc fh4 fh5 fh7"},{mime_type:"image/x-icon",ext:"ico"},{mime_type:"image/x-macpaint",ext:"pntg pnt mac"},{mime_type:"image/x-pcx",ext:"pcx"},{mime_type:"image/x-portable-anymap",ext:"pnm"},{mime_type:"image/x-portable-bitmap",ext:"pbm"},{mime_type:"image/x-portable-graymap",ext:"pgm"},{mime_type:"image/x-portable-pixmap",ext:"ppm"},{mime_type:"image/x-quicktime",ext:"qtif qti"},{mime_type:"image/x-rgb",ext:"rgb"},{mime_type:"image/x-xbitmap",ext:"xbm"},{mime_type:"image/x-xpixmap",ext:"xpm"},{mime_type:"image/x-xwindowdump",ext:"xwd"},{mime_type:"message/cpim"},{mime_type:"message/delivery-status"},{mime_type:"message/disposition-notification"},{mime_type:"message/example"},{mime_type:"message/external-body"},{mime_type:"message/global"},{mime_type:"message/global-delivery-status"},{mime_type:"message/global-disposition-notification"},{mime_type:"message/global-headers"},{mime_type:"message/http"},{mime_type:"message/imdn+xml"},{mime_type:"message/news"},{mime_type:"message/partial"},{mime_type:"message/rfc822",ext:"eml mime"},{mime_type:"message/s-http"},{mime_type:"message/sip"},{mime_type:"message/sipfrag"},{mime_type:"message/tracking-status"},{mime_type:"message/vnd.si.simp"},{mime_type:"model/example"},{mime_type:"model/iges",ext:"igs iges"},{mime_type:"model/mesh",ext:"msh mesh silo"},{mime_type:"model/vnd.dwf",ext:"dwf"},{mime_type:"model/vnd.flatland.3dml"},{mime_type:"model/vnd.gdl",ext:"gdl"},{mime_type:"model/vnd.gs-gdl"},{mime_type:"model/vnd.gs.gdl"},{mime_type:"model/vnd.gtw",ext:"gtw"},{mime_type:"model/vnd.moml+xml"},{mime_type:"model/vnd.mts",ext:"mts"},{mime_type:"model/vnd.parasolid.transmit.binary"},{mime_type:"model/vnd.parasolid.transmit.text"},{mime_type:"model/vnd.vtu",ext:"vtu"},{mime_type:"model/vrml",ext:"wrl vrml"},{mime_type:"multipart/alternative"},{mime_type:"multipart/appledouble"},{mime_type:"multipart/byteranges"},{mime_type:"multipart/digest"},{mime_type:"multipart/encrypted"},{mime_type:"multipart/example"},{mime_type:"multipart/form-data"},{mime_type:"multipart/header-set"},{mime_type:"multipart/mixed"},{mime_type:"multipart/parallel"},{mime_type:"multipart/related"},{mime_type:"multipart/report"},{mime_type:"multipart/signed"},{mime_type:"multipart/voice-message"},{mime_type:"text/calendar",ext:"ics ifb"},{mime_type:"text/css",ext:"css"},{mime_type:"text/csv",ext:"csv"},{mime_type:"text/directory"},{mime_type:"text/dns"},{mime_type:"text/ecmascript"},{mime_type:"text/enriched"},{mime_type:"text/example"},{mime_type:"text/html",ext:"html htm"},{mime_type:"text/javascript"},{mime_type:"text/parityfec"},{mime_type:"text/plain",ext:"txt text conf def list log in"},{mime_type:"text/prs.fallenstein.rst"},{mime_type:"text/prs.lines.tag",ext:"dsc"},{mime_type:"text/red"},{mime_type:"text/rfc822-headers"},{mime_type:"text/richtext",ext:"rtx"},{mime_type:"text/rtf"},{mime_type:"text/rtp-enc-aescm128"},{mime_type:"text/rtx"},{mime_type:"text/sgml",ext:"sgml sgm"},{mime_type:"text/t140"},{mime_type:"text/tab-separated-values",ext:"tsv"},{mime_type:"text/troff",ext:"t tr roff man me ms"},{mime_type:"text/ulpfec"},{mime_type:"text/uri-list",ext:"uri uris urls"},{mime_type:"text/vnd.abc"},{mime_type:"text/vnd.curl",ext:"curl"},{mime_type:"text/vnd.curl.dcurl",ext:"dcurl"},{mime_type:"text/vnd.curl.scurl",ext:"scurl"},{mime_type:"text/vnd.curl.mcurl",ext:"mcurl"},{mime_type:"text/vnd.dmclientscript"},{mime_type:"text/vnd.esmertec.theme-descriptor"},{mime_type:"text/vnd.fly",ext:"fly"},{mime_type:"text/vnd.fmi.flexstor",ext:"flx"},{mime_type:"text/vnd.graphviz",ext:"gv"},{mime_type:"text/vnd.in3d.3dml",ext:"3dml"},{mime_type:"text/vnd.in3d.spot",ext:"spot"},{mime_type:"text/vnd.iptc.newsml"},{mime_type:"text/vnd.iptc.nitf"},{mime_type:"text/vnd.latex-z"},{mime_type:"text/vnd.motorola.reflex"},{mime_type:"text/vnd.ms-mediapackage"},{mime_type:"text/vnd.net2phone.commcenter.command"},{mime_type:"text/vnd.si.uricatalogue"},{mime_type:"text/vnd.sun.j2me.app-descriptor",ext:"jad"},{mime_type:"text/vnd.trolltech.linguist"},{mime_type:"text/vnd.wap.si"},{mime_type:"text/vnd.wap.sl"},{mime_type:"text/vnd.wap.wml",ext:"wml"},{mime_type:"text/vnd.wap.wmlscript",ext:"wmls"},{mime_type:"text/x-asm",ext:"s asm"},{mime_type:"text/x-c",ext:"c cc cxx cpp h hh dic"},{mime_type:"text/x-fortran",ext:"f for f77 f90"},{mime_type:"text/x-pascal",ext:"p pas"},{mime_type:"text/x-java-source",ext:"java"},{mime_type:"text/x-setext",ext:"etx"},{mime_type:"text/x-uuencode",ext:"uu"},{mime_type:"text/x-vcalendar",ext:"vcs"},{mime_type:"text/x-vcard",ext:"vcf"},{mime_type:"text/xml"},{mime_type:"text/xml-external-parsed-entity"},{mime_type:"video/3gpp",ext:"3gp"},{mime_type:"video/3gpp-tt"},{mime_type:"video/3gpp2",ext:"3g2"},{mime_type:"video/bmpeg"},{mime_type:"video/bt656"},{mime_type:"video/celb"},{mime_type:"video/dv"},{mime_type:"video/example"},{mime_type:"video/h261",ext:"h261"},{mime_type:"video/h263",ext:"h263"},{mime_type:"video/h263-1998"},{mime_type:"video/h263-2000"},{mime_type:"video/h264",ext:"h264"},{mime_type:"video/jpeg",ext:"jpgv"},{mime_type:"video/jpeg2000"},{mime_type:"video/jpm",ext:"jpm jpgm"},{mime_type:"video/mj2",ext:"mj2 mjp2"},{mime_type:"video/mp1s"},{mime_type:"video/mp2p"},{mime_type:"video/mp2t"},{mime_type:"video/mp4",ext:"mp4 mp4v mpg4 m4v"},{mime_type:"video/mp4v-es"},{mime_type:"video/mpeg",ext:"mpeg mpg mpe m1v m2v"},{mime_type:"video/mpeg4-generic"},{mime_type:"video/mpv"},{mime_type:"video/nv"},{mime_type:"video/ogg",ext:"ogv"},{mime_type:"video/parityfec"},{mime_type:"video/pointer"},{mime_type:"video/quicktime",ext:"qt mov"},{mime_type:"video/raw"},{mime_type:"video/rtp-enc-aescm128"},{mime_type:"video/rtx"},{mime_type:"video/smpte292m"},{mime_type:"video/ulpfec"},{mime_type:"video/vc1"},{mime_type:"video/vnd.cctv"},{mime_type:"video/vnd.dlna.mpeg-tts"},{mime_type:"video/vnd.fvt",ext:"fvt"},{mime_type:"video/vnd.hns.video"},{mime_type:"video/vnd.iptvforum.1dparityfec-1010"},{mime_type:"video/vnd.iptvforum.1dparityfec-2005"},{mime_type:"video/vnd.iptvforum.2dparityfec-1010"},{mime_type:"video/vnd.iptvforum.2dparityfec-2005"},{mime_type:"video/vnd.iptvforum.ttsavc"},{mime_type:"video/vnd.iptvforum.ttsmpeg2"},{mime_type:"video/vnd.motorola.video"},{mime_type:"video/vnd.motorola.videop"},{mime_type:"video/vnd.mpegurl",ext:"mxu m4u"},{mime_type:"video/vnd.ms-playready.media.pyv",ext:"pyv"},{mime_type:"video/vnd.nokia.interleaved-multimedia"},{mime_type:"video/vnd.nokia.videovoip"},{mime_type:"video/vnd.objectvideo"},{mime_type:"video/vnd.sealed.mpeg1"},{mime_type:"video/vnd.sealed.mpeg4"},{mime_type:"video/vnd.sealed.swf"},{mime_type:"video/vnd.sealedmedia.softseal.mov"},{mime_type:"video/vnd.vivo",ext:"viv"},{mime_type:"video/x-dv",ext:"dv dif"},{mime_type:"video/x-f4v",ext:"f4v"},{mime_type:"video/x-fli",ext:"fli"},{mime_type:"video/x-flv",ext:"flv"},{mime_type:"video/x-ms-asf",ext:"asf asx"},{mime_type:"video/x-ms-wm",ext:"wm"},{mime_type:"video/x-ms-wmv",ext:"wmv"},{mime_type:"video/x-ms-wmx",ext:"wmx"},{mime_type:"video/x-ms-wvx",ext:"wvx"},{mime_type:"video/x-msvideo",ext:"avi"},{mime_type:"video/x-sgi-movie",ext:"movie"},{mime_type:"x-conference/x-cooltalk",ext:"ice"}]};var ic=Ko("splice"),nc=Math.max,ac=Math.min;Me({target:"Array",proto:!0,forced:!ic},{splice:function(e,t){var i,n,a,p,r,o,m=kt(this),c=xe(m.length),l=ge(e,c),s=arguments.length;if(0===s?i=n=0:1===s?(i=0,n=c-l):(i=s-2,n=ac(nc(ye(t),0),c-l)),c+i-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(a=Rn(m,n),p=0;p<n;p++)(r=l+p)in m&&Lp(a,p,m[r]);if(a.length=n,i<n){for(p=l;p<c-n;p++)o=p+i,(r=p+n)in m?m[o]=m[r]:delete m[o];for(p=c;p>c-n+i;p--)delete m[p-1]}else if(i>n)for(p=c-n;p>l;p--)o=p+i-1,(r=p+n-1)in m?m[o]=m[r]:delete m[o];for(p=0;p<i;p++)m[p+l]=arguments[p+2];return m.length=c-n+i,a}});var pc=wm.trim;Me({target:"String",proto:!0,forced:function(e){return t((function(){return!!xm[e]()||"​᠎"!="​᠎"[e]()||xm[e].name!==e}))}("trim")},{trim:function(){return pc(this)}});var rc=!t((function(){return Object.isExtensible(Object.preventExtensions({}))})),oc=a((function(e){var t=y.f,i=Z("meta"),n=0,a=Object.isExtensible||function(){return!0},p=function(e){t(e,i,{value:{objectID:"O"+ ++n,weakData:{}}})},r=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!F(e,i)){if(!a(e))return"F";if(!t)return"E";p(e)}return e[i].objectID},getWeakData:function(e,t){if(!F(e,i)){if(!a(e))return!0;if(!t)return!1;p(e)}return e[i].weakData},onFreeze:function(e){return rc&&r.REQUIRED&&a(e)&&!F(e,i)&&p(e),e}};te[i]=!0})).onFreeze,mc=Object.freeze,cc=t((function(){mc(1)}));Me({target:"Object",stat:!0,forced:cc,sham:!rc},{freeze:function(e){return mc&&o(e)?mc(oc(e)):e}});var lc=Object.freeze({ADDED:"ADDED",QUEUED:"QUEUED",UPLOADING:"UPLOADING",ERROR:"ERROR",DONE:"DONE"}),sc=Ko("slice"),dc=st("species"),uc=[].slice,fc=Math.max;function yc(e,t,i,n,a,p,r){try{var o=e[p](r),m=o.value}catch(e){return void i(e)}o.done?t(m):Promise.resolve(m).then(n,a)}Me({target:"Array",proto:!0,forced:!sc},{slice:function(e,t){var i,n,a,p=z(this),r=xe(p.length),m=ge(e,r),c=ge(void 0===t?r:t,r);if(Tn(p)&&("function"!=typeof(i=p.constructor)||i!==Array&&!Tn(i.prototype)?o(i)&&null===(i=i[dc])&&(i=void 0):i=void 0,i===Array||void 0===i))return uc.call(p,m,c);for(n=new(void 0===i?Array:i)(fc(c-m,0)),a=0;m<c;m++,a++)m in p&&Lp(n,a,p[m]);return n.length=a,n}}),a((function(e){!function(t){var i,n=Object.prototype,a=n.hasOwnProperty,p="function"==typeof Symbol?Symbol:{},r=p.iterator||"@@iterator",o=p.asyncIterator||"@@asyncIterator",m=p.toStringTag||"@@toStringTag",c=t.regeneratorRuntime;if(c)e.exports=c;else{(c=t.regeneratorRuntime=e.exports).wrap=h;var l="suspendedStart",s="suspendedYield",d="executing",u="completed",f={},y={};y[r]=function(){return this};var v=Object.getPrototypeOf,x=v&&v(v(I([])));x&&x!==n&&a.call(x,r)&&(y=x);var _=k.prototype=b.prototype=Object.create(y);w.prototype=_.constructor=k,k.constructor=w,k[m]=w.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,m in e||(e[m]="GeneratorFunction")),e.prototype=Object.create(_),e},c.awrap=function(e){return{__await:e}},A(E.prototype),E.prototype[o]=function(){return this},c.AsyncIterator=E,c.async=function(e,t,i,n){var a=new E(h(e,t,i,n));return c.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},A(_),_[m]="Generator",_[r]=function(){return this},_.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var n=t.pop();if(n in e)return i.value=n,i.done=!1,i}return i.done=!0,i}},c.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=i),!!a}for(var p=this.tryEntries.length-1;p>=0;--p){var r=this.tryEntries[p],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var m=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(m&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(m){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var p=n;break}}p&&("break"===e||"continue"===e)&&p.tryLoc<=t&&t<=p.finallyLoc&&(p=null);var r=p?p.completion:{};return r.type=e,r.arg=t,p?(this.method="next",this.next=p.finallyLoc,f):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),O(i),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var n=i.completion;if("throw"===n.type){var a=n.arg;O(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=i),f}}}function h(e,t,i,n){var a=t&&t.prototype instanceof b?t:b,p=Object.create(a.prototype),r=new T(n||[]);return p._invoke=function(e,t,i){var n=l;return function(a,p){if(n===d)throw new Error("Generator is already running");if(n===u){if("throw"===a)throw p;return R()}for(i.method=a,i.arg=p;;){var r=i.delegate;if(r){var o=S(r,i);if(o){if(o===f)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===l)throw n=u,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=d;var m=g(e,t,i);if("normal"===m.type){if(n=i.done?u:s,m.arg===f)continue;return{value:m.arg,done:i.done}}"throw"===m.type&&(n=u,i.method="throw",i.arg=m.arg)}}}(e,i,r),p}function g(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}function b(){}function w(){}function k(){}function A(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){function t(i,n,p,r){var o=g(e[i],e,n);if("throw"!==o.type){var m=o.arg,c=m.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,p,r)}),(function(e){t("throw",e,p,r)})):Promise.resolve(c).then((function(e){m.value=e,p(m)}),r)}r(o.arg)}var i;this._invoke=function(e,n){function a(){return new Promise((function(i,a){t(e,n,i,a)}))}return i=i?i.then(a,a):a()}}function S(e,t){var n=e.iterator[t.method];if(n===i){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=i,S(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=g(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var p=a.arg;return p?p.done?(t[e.resultName]=p.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=i),t.delegate=null,f):p:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function I(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,p=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=i,t.done=!0,t};return p.next=p}}return{next:R}}function R(){return{value:i,done:!0}}}(function(){return this}()||Function("return this")())}));var vc=t((function(){sn(1)}));function xc(e){var t=e.config,i=e.items,n=function(e,n,a){var p=[];Object.values(i.all).filter((function(t){return t.upload&&t.upload.id===e})).forEach((function(e){e.status=lc.ERROR,e.upload.retryErrorCounter?e.upload.retryErrorCounter-=1:e.upload.retryErrorCounter=t.maxRetryError,p.push(e.id)})),a(p,{errorType:n.type})},a=function(e,t,i,n,a,p,o,m){var c=e+t+1,l=i.file.webkitSlice?i.file.webkitSlice(e,c):i.file.slice(e,c);n.onloadend=function(s){s.target.readyState===FileReader.DONE&&(i.upload.blob=l,i.upload.chunkIndex=Math.floor(c/t),i.upload.nextSlice=c,i.upload.chunkStart=e,i.upload.sliceSize=t,i.upload.reader=n,r(m,[i],a,p,o))},n.readAsDataURL(l)},p=function(e,t){var n;void 0!==t&&Object.values(i.all).filter((function(t){return t.upload.id===e})).forEach((function(e){e.upload.chunking?(e.upload.loadedBytes+=t.loaded,e.upload.progress=100*e.upload.loadedBytes/e.file.size):(n=100*t.loaded/t.total,e.upload.progress=n)}))},r=function(){var e,i=(e=regeneratorRuntime.mark((function e(i,r,o,m,c){var l,s,d,u,f,y,v,x,_,h,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for((l=new XMLHttpRequest).open(t.method,t.url,!0),l.timeout=t.xhrTimeout,l.withCredentials=t.withCredentials,l.ontimeout=function(e){n(i,e,m)},l.onerror=function(e){n(i,e,m)},s={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},d=Object.keys(s),u=0;u<d.length;u+=1)f=d[u],l.setRequestHeader(f,s[f]);if(t.headers)for(d=Object.keys(t.headers),y=0;y<d.length;y+=1)v=d[y],"string"!=typeof(x=t.headers[v])&&"number"!=typeof x||l.setRequestHeader(v,x);return(null!=l.upload?l.upload:l).onprogress=function(e){return p(i,e)},_=new FormData,e.next=15,c(Object.values(r).filter((function(e){return e.upload.id===i})),l,_);case 15:for(h=0;h<r.length;h+=1)(g=r[h]).upload.id===i&&(g.upload.chunking?(_.set("fileName",g.file.name),_.set("chunkIndex",g.upload.chunkIndex),_.set(t.paramName,g.upload.blob,g.file.name)):_.append(t.paramName,g.file,g.file.name),g.status=lc.UPLOADING);l.onload=function(e){var t;if(4===l.readyState){if("arraybuffer"!==l.responseType&&"blob"!==l.responseType&&(t=l.responseText,l.getResponseHeader("content-type")&&~l.getResponseHeader("content-type").indexOf("application/json")))try{t=JSON.parse(t)}catch(e){t="Invalid JSON response from server."}if(l.status>=200&&l.status<300){var p=!0;Object.values(r).filter((function(e){return e.upload.id===i})).forEach((function(e){e.upload.chunking?e.upload.nextSlice<e.file.size?(p=!1,a(e.upload.nextSlice,e.upload.sliceSize,e,e.upload.reader,o,m,c,e.upload.id)):(e.status=lc.DONE,e.upload.progress=100):e.status=lc.DONE})),!0===p&&o(r)}else n(i,e,m)}},l.send(_);case 18:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(n,a){var p=e.apply(t,i);function r(e){yc(p,n,a,r,o,"next",e)}function o(e){yc(p,n,a,r,o,"throw",e)}r(void 0)}))});return function(e,t,n,a,p){return i.apply(this,arguments)}}();return{upload:function(e,i,n,a){for(var p=im(),o=!1,m=0;m<e.length;m+=1){var c=e[m];(c.status===lc.QUEUED||t.retryOnError&&c.status===lc.ERROR&&c.upload.retryErrorCounter>0)&&(c.upload.id=p,o=!0)}o&&r(p,e,i,n,a)},uploadWithChunking:function(e,i,n,p){var r=im();e.upload.id=r,e.upload.chunking=!0,e.upload.loadedBytes=0;var o=new FileReader,m=e.file.size/t.numberOfChunks;a(0,m,e,o,i,n,p,r)}}}Me({target:"Object",stat:!0,forced:vc},{keys:function(e){return sn(kt(e))}}),_t("match",1,(function(e,t,i){return[function(t){var i=U(this),n=null==t?void 0:t[e];return void 0!==n?n.call(t,i):new RegExp(t)[e](String(i))},function(e){var n=i(t,e,this);if(n.done)return n.value;var a=d(e),p=String(this);if(!a.global)return Tt(a,p);var r=a.unicode;a.lastIndex=0;for(var o,m=[],c=0;null!==(o=Tt(a,p));){var l=String(o[0]);m[c]=l,""===l&&(a.lastIndex=wt(p,xe(a.lastIndex),r)),c++}return 0===c?null:m}]}));var _c=[],hc=!1;function gc(e){var t=function(){hc||0===_c.length||(hc=!0,function(t){var i=new FileReader;i.addEventListener("load",(function(){e(t.id,i.result)}),!1),i.readAsDataURL(t.file)}(_c.shift()),hc=!1)};return{enqueueThumbnail:function(e,i){(/\.(jpe?g|png|gif)$/i.test(i.name)||i.type.match("image.*"))&&(_c.push({id:e,file:i}),setTimeout((function(){return t()}),0))}}}function bc(t){var i=t.config,n=t.context,a=e.reactive({ids:[],all:{}}),p=gc((function(e,t){a.all[e].thumbnail=t})).enqueueThumbnail,r=function(t){var i=t.config,n=t.items,a=t.context,p=function t(){var p=xc({config:i,items:n}),r=p.upload,o=p.uploadWithChunking,m=Object.values(n.all).filter((function(e){return e.status===lc.UPLOADING})).length;if(!(m>=i.parallelUpload)){var c=Object.values(n.all).filter((function(e){return e.status===lc.QUEUED||e.status===lc.ERROR&&i.retryOnError&&e.upload.retryErrorCounter>0}));if(!(c.length<=0)){var l=function(t,i,n){a.emit("sending",e.readonly(t.map((function(e){return e.file}))),i,n)},s=function(n){i.autoUpload&&t(),a.emit("uploaded",e.readonly(n.map((function(e){return e.file}))))},d=function(e,n){i.autoUpload&&t(),a.emit("error-upload",w({ids:A(e)},n))},u=m;if(i.chunking)o(c.shift(),s,d,l);else if(i.multipleUpload)r(c.slice(0,i.parallelUpload-m),s,d,l);else for(;u<=i.parallelUpload;){if(c.length<=0)return;r([c.shift()],s,d,l),u+=1}}}};return{enqueueFile:function(e){if(-1===n.ids.findIndex((function(t){return t===e})))throw new Error("File with ".concat(e," does not exist "));var t=n.all[e];if(t.status!==lc.ADDED||!0!==t.accepted)throw new Error("File ".concat(e," already in ").concat(e.status," state"));t.status=lc.QUEUED,i.autoUpload&&setTimeout((function(){return p()}),0)},processQueue:p}}({config:i,items:a,context:n}),o=r.enqueueFile,m=r.processQueue;return{itemManager:{getItems:function(){return a},removeFile:function(e){var t=a.ids.findIndex((function(t){return t===e}));if(!(t<0)){a.ids.splice(t,1);var i=a.all[e];delete a.all[e],n.emit("removed-file",{file:i.file,status:i.status,id:e})}},addFile:function(e,t){i.maxFileSize&&t.size>i.maxFileSize?n.emit("error-add",{files:[t],error:"MAX_FILE_SIZE"}):!function(e){if(null===i.accepts||0===i.accepts.length)return!0;var t=e.type,n=-1!==i.accepts.findIndex((function(e){return e.trim()===t.trim()}));if(!n){var a=e.name.split(".");if(a.length>1){var p=a[a.length-1],r=tc.data.filter((function(e){return e.ext&&!!e.ext.split(/\s/).find((function(e){return p===e}))})).map((function(e){return e.mime_type}));n=!!i.accepts.find((function(e){return r.find((function(t){return t===e}))}))}}return n}(t)?n.emit("error-add",{files:[t],error:"INVALID_TYPE"}):i.maxFiles&&a.ids.length+1>i.maxFiles?n.emit("error-add",{files:[t],error:"MAX_FILE"}):(a.ids.push(e),a.all[e]={file:t,thumbnail:null,upload:{progress:0},status:lc.ADDED,accepted:!0,id:e},p(e,t),o(e),n.emit("added-file",{file:a.all[e].file,id:e}))},processQueue:m}}}var wc=e.defineComponent({name:"DropZone",emits:["config-update","added-file","removed-file","error-upload","uploaded","sending","error-add"],props:w(w({},Nm),{},{dropzoneRef:{default:"dropzone"},dropzoneClassName:{default:"dropzone__box"},dropzoneMessageClassName:{default:"dropzone__message--style"},dropzoneItemClassName:{default:"dropzone__item--style"},dropzoneDetailsClassName:{default:"dropzone__details--style"}}),setup:function(t,i){var n=e.ref(),a=e.ref(!1),p=fm(),r=p.initHiddenFileInput,o=p.destroyHiddenFileInput,m=p.setMultiple,c=function(t){var i=t.props,n=t.context,a=t.setMultiple,p=e.reactive({paramName:i.paramName,headers:i.headers,xhrTimeout:i.xhrTimeout,withCredentials:i.withCredentials,url:i.url?i.url:null!==window.URL?window.URL:window.webkitURL,method:i.method,maxFiles:i.maxFiles,maxFileSize:i.maxFileSize,autoUpload:i.uploadOnDrop,parallelUpload:i.parallelUpload,hiddenInputContainer:i.hiddenInputContainer,clickable:i.clickable,acceptedFiles:i.acceptedFiles,retryOnError:i.retryOnError,maxRetryError:3,chunking:i.chunking,numberOfChunks:i.numberOfChunks,multipleUpload:!i.chunking&&i.multipleUpload,dropzoneMessageClassName:i.dropzoneMessageClassName,accepts:[]}),r=function(){var e=[];null!==i.acceptedFiles&&i.acceptedFiles.forEach((function(t){tc.data.filter((function(e){return e.ext&&!!e.ext.split(/\s/).find((function(e){return t===e}))||e.mime_type.startsWith(t)})).forEach((function(t){e.push(t.mime_type),t.ext&&e.push.apply(e,A(t.ext.split(/\s/).map((function(e){return".".concat(e)}))))}))})),p.accepts=[].concat(e)},o=function(){n.emit("config-update",w({},p))};return r(),o(),e.watch((function(){return i.paramName}),(function(e){p.paramName!==e&&(p.paramName=e,o())})),e.watch((function(){return i.acceptedFiles}),(function(e){p.acceptedFiles.every((function(t){return e.includes(t)}))||(p.acceptedFiles=A(e),r(),o())})),e.watch((function(){return i.headers}),(function(e){p.headers!==e&&(p.headers=e,o())})),e.watch((function(){return i.xhrTimeout}),(function(e){p.xhrTimeout!==e&&(p.xhrTimeout=e,o())})),e.watch((function(){return i.withCredentials}),(function(e){p.withCredentials!==e&&(p.withCredentials=e,o())})),e.watch((function(){return i.method}),(function(e){p.method!==e&&(p.method=e,o())})),e.watch((function(){return i.maxFiles}),(function(e){p.maxFiles!==e&&(p.maxFiles=e,o())})),e.watch((function(){return i.maxFileSize}),(function(e){p.maxFileSize!==e&&(p.maxFileSize=e,o(),p.maxFileSize>1?a(!0):a(!1))})),e.watch((function(){return i.hiddenInputContainer}),(function(e){p.hiddenInputContainer!==e&&(p.hiddenInputContainer=e,o())})),e.watch((function(){return i.clickable}),(function(e){p.hiddenInputContainer!==e&&(p.clickable=e,o())})),e.watch((function(){return i.uploadOnDrop}),(function(e){p.uploadOnDrop!==e&&(p.autoUpload=e,o())})),e.watch((function(){return i.parallelUpload}),(function(e){p.parallelUpload!==e&&(p.parallelUpload=e,o())})),e.watch((function(){return i.retryOnError}),(function(e){p.retryOnError!==e&&(p.retryOnError=e,o())})),e.watch((function(){return i.maxRetryError}),(function(e){p.maxRetryError!==e&&(p.maxRetryError=e,o())})),e.watch((function(){return i.multipleUpload}),(function(e){p.multipleUpload!==e&&(p.multipleUpload=!p.chunking&&e,o())})),e.watch((function(){return i.numberOfChunks}),(function(e){p.numberOfChunks!==e&&(p.numberOfChunks=e,o())})),e.watch((function(){return i.chunking}),(function(e){p.chunking!==e&&(p.chunking=e,p.multipleUpload=!e&&p.multipleUpload,o())})),{config:p}}({props:t,context:i,setMultiple:m}).config,l=bc({config:c,context:i}).itemManager,s=mm({itemManager:l}),d=s.handleDragOver,u=s.onDrop;return e.watch((function(){return l.getItems()}),(function(t){0===t.ids.length&&e.nextTick((function(){o(),r({config:c,dropzone:n,itemManager:l})}))}),{deep:!0}),e.watch((function(){return t.clickable}),(function(t){t||e.nextTick((function(){o()}))}),{deep:!0}),e.onMounted((function(){var e;a.value=("draggable"in(e=document.createElement("div"))||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window,r({config:c,dropzone:n,itemManager:l})})),e.onUnmounted((function(){o()})),w(w({},e.toRefs(l.getItems())),{},{accepts:c.accepts,onDrop:u,handleDragOver:d,removeFile:l.removeFile,filesize:om,processQueue:l.processQueue,dropzone:n})}}),kc=e.createTextVNode("Drop here"),Ac={class:"dropzone__item-thumbnail"},Ec={class:"dropzone__item-controls"},Sc=e.createVNode("i",{class:"gg-close"},null,-1),jc={class:"dropzone__progress"},Oc={class:"dropzone__success-mark"},Tc=e.createVNode("i",{class:"gg-check-o"},null,-1),Ic={class:"dropzone__error-mark"},Rc=e.createVNode("i",{class:"gg-danger"},null,-1),Lc={class:"dropzone__file-size"},Uc={class:"dropzone__filename"};wc.render=function(t,i,n,a,p,r){return e.openBlock(),e.createBlock("form",{ref:t.dropzoneRef,class:["dropzone",[t.dropzoneClassName]],onDrop:i[1]||(i[1]=function(){return t.onDrop&&t.onDrop.apply(t,arguments)}),onDragover:i[2]||(i[2]=function(){return t.handleDragOver&&t.handleDragOver.apply(t,arguments)})},[0===t.ids.length?(e.openBlock(),e.createBlock("div",{key:0,class:["dropzone__message",[t.dropzoneMessageClassName]]},[e.renderSlot(t.$slots,"message",{},(function(){return[kc]}))],2)):e.createCommentVNode("v-if",!0),(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(t.all,(function(i,n){return e.openBlock(),e.createBlock("div",{class:["dropzone__item",[{"dropzone--has-thumbnail":!!i.thumbnail,"dropzone--added":"ADDED"===i.status,"dropzone--processing":"UPLOADING"===i.status,"dropzone--success":"DONE"===i.status,"dropzone--has-error":"ERROR"===i.status},t.dropzoneItemClassName]],key:n},[e.createVNode("div",Ac,[i.thumbnail?(e.openBlock(),e.createBlock("img",{key:0,src:i.thumbnail},null,8,["src"])):e.createCommentVNode("v-if",!0)]),e.createVNode("div",Ec,[e.createVNode("div",{class:"dropzone__item-control",onClick:function(e){return t.removeFile(n)}},[e.renderSlot(t.$slots,"remove",{},(function(){return[Sc]}))],8,["onClick"])]),e.createVNode("div",jc,[e.createVNode("progress",{class:"dropzone__progress-bar",max:"100",value:i.upload.progress},null,8,["value"])]),e.createVNode("div",Oc,[e.renderSlot(t.$slots,"success",{},(function(){return[Tc]}))]),e.createVNode("div",Ic,[e.renderSlot(t.$slots,"error",{},(function(){return[Rc]}))]),e.createVNode("div",{class:["dropzone__details",[t.dropzoneDetailsClassName]]},[e.createVNode("div",Lc,[e.createVNode("span",{innerHTML:t.filesize(i.file.size)},null,8,["innerHTML"])]),e.createVNode("div",Uc,[e.createVNode("span",null,e.toDisplayString(i.file.name),1)])],2)],2)})),128))],34)},wc.__file="src/DropZone.vue";var zc=function(e){e.component(wc.name,wc)};"undefined"!=typeof window&&window.Vue&&zc(window.Vue),wc.install=zc,module.exports=wc;
//# sourceMappingURL=dropzone-vue.common.js.map


/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bootstrap4Pagination": () => (/* binding */ ae),
/* harmony export */   "Bootstrap5Pagination": () => (/* binding */ ne),
/* harmony export */   "RenderlessPagination": () => (/* binding */ B),
/* harmony export */   "TailwindPagination": () => (/* binding */ ie)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const B = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    keepLength: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange() {
      if (this.limit === -1)
        return 0;
      if (this.limit === 0)
        return this.lastPage;
      for (var t = this.currentPage, d = this.keepLength, a = this.lastPage, u = this.limit, f = t - u, m = t + u, h = (u + 2) * 2, e = (u + 2) * 2 - 1, n = [], g = [], P, l = 1; l <= a; l++)
        (l === 1 || l === a || l >= f && l <= m || d && l < h && t < h - 2 || d && l > a - e && t > a - e + 2) && n.push(l);
      return n.forEach(function(x) {
        P && (x - P === 2 ? g.push(P + 1) : x - P !== 1 && g.push("...")), g.push(x), P = x;
      }), g;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(t) {
      t !== "..." && this.$emit("pagination-change-page", t);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (t) => {
          t.preventDefault(), this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (t) => {
          t.preventDefault(), this.nextPage();
        }
      },
      pageButtonEvents: (t) => ({
        click: (d) => {
          d.preventDefault(), this.selectPage(t);
        }
      })
    });
  }
}, w = (t, d) => {
  const a = t.__vccOpts || t;
  for (const [u, f] of d)
    a[u] = f;
  return a;
}, E = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: B
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    showDisabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default",
      validator: (t) => ["small", "default", "large"].indexOf(t) !== -1
    },
    align: {
      type: String,
      default: "left",
      validator: (t) => ["left", "center", "right"].indexOf(t) !== -1
    }
  },
  methods: {
    onPaginationChangePage(t) {
      this.$emit("pagination-change-page", t);
    }
  }
}, $ = ["tabindex"], D = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xAB", -1), z = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Previous", -1), O = {
  key: 0,
  class: "sr-only"
}, N = ["tabindex"], j = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xBB", -1), L = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1);
function S(t, d, a, u, f, m) {
  const h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessPagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(h, {
    data: a.data,
    limit: a.limit,
    "keep-length": a.keepLength,
    onPaginationChangePage: m.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((e) => [
      e.computed.total > e.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, t.$attrs, {
        class: ["pagination", {
          "pagination-sm": a.size == "small",
          "pagination-lg": a.size == "large",
          "justify-content-center": a.align == "center",
          "justify-content-end": a.align == "right"
        }]
      }), [
        e.computed.prevPageUrl || a.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-prev-nav", { disabled: !e.computed.prevPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !e.computed.prevPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.prevButtonEvents, !0)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "prev-nav", {}, () => [
              D,
              z
            ])
          ], 16, $)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(e.computed.pageRange, (n, g) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-page-nav", { active: n == e.computed.currentPage }]),
          key: g
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#"
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.pageButtonEvents(n), !0)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n) + " ", 1),
            n == e.computed.currentPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", O, "(current)")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
          ], 16)
        ], 2))), 128)),
        e.computed.nextPageUrl || a.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-next-nav", { disabled: !e.computed.nextPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !e.computed.nextPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.nextButtonEvents, !0)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "next-nav", {}, () => [
              j,
              L
            ])
          ], 16, N)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ]),
    _: 3
  }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]);
}
const ae = /* @__PURE__ */ w(E, [["render", S]]), M = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: B
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: !1
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default",
      validator: (t) => ["small", "default", "large"].indexOf(t) !== -1
    },
    align: {
      type: String,
      default: "left",
      validator: (t) => ["left", "center", "right"].indexOf(t) !== -1
    }
  },
  methods: {
    onPaginationChangePage(t) {
      this.$emit("pagination-change-page", t);
    }
  }
}, V = ["tabindex"], T = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xAB", -1), F = ["aria-current"], H = ["tabindex"], q = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xBB", -1);
function G(t, d, a, u, f, m) {
  const h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessPagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(h, {
    data: a.data,
    limit: a.limit,
    "keep-length": a.keepLength,
    onPaginationChangePage: m.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((e) => [
      e.computed.total > e.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, t.$attrs, {
        class: ["pagination", {
          "pagination-sm": a.size == "small",
          "pagination-lg": a.size == "large",
          "justify-content-center": a.align == "center",
          "justify-content-end": a.align == "right"
        }]
      }), [
        e.computed.prevPageUrl || a.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-prev-nav", { disabled: !e.computed.prevPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !e.computed.prevPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.prevButtonEvents, !0)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "prev-nav", {}, () => [
              T
            ])
          ], 16, V)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(e.computed.pageRange, (n, g) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-page-nav", { active: n == e.computed.currentPage }]),
          key: g
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#"
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.pageButtonEvents(n), !0), {
            "aria-current": n == e.computed.currentPage ? "page" : null
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 17, F)
        ], 2))), 128)),
        e.computed.nextPageUrl || a.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-next-nav", { disabled: !e.computed.nextPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !e.computed.nextPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.nextButtonEvents, !0)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "next-nav", {}, () => [
              q
            ])
          ], 16, H)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ]),
    _: 3
  }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]);
}
const ne = /* @__PURE__ */ w(M, [["render", G]]), I = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: B
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    itemClasses: {
      type: Array,
      default: () => [
        "bg-white",
        "text-gray-500",
        "border-gray-300",
        "hover:bg-gray-50"
      ]
    },
    activeClasses: {
      type: Array,
      default: () => [
        "bg-blue-50",
        "border-blue-500",
        "text-blue-600"
      ]
    }
  },
  methods: {
    onPaginationChangePage(t) {
      this.$emit("pagination-change-page", t);
    }
  }
}, J = ["disabled"], K = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Previous", -1), Q = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "h-5 w-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), W = ["aria-current"], X = ["disabled"], Y = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1), Z = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1);
function ee(t, d, a, u, f, m) {
  const h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessPagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(h, {
    data: a.data,
    limit: a.limit,
    "keep-length": a.keepLength,
    onPaginationChangePage: m.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((e) => [
      e.computed.total > e.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, t.$attrs, {
        class: "isolate inline-flex -space-x-px rounded-md shadow-sm",
        "aria-label": "Pagination"
      }), [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          class: ["relative inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-medium focus:z-20 disabled:opacity-50", a.itemClasses],
          disabled: !e.computed.prevPageUrl
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.prevButtonEvents, !0)), [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "prev-nav", {}, () => [
            K,
            Q
          ])
        ], 16, J),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(e.computed.pageRange, (n, g) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          class: ["relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20", [
            n == e.computed.currentPage ? a.activeClasses : a.itemClasses,
            n == e.computed.currentPage ? "z-30" : ""
          ]],
          "aria-current": e.computed.currentPage ? "page" : null,
          key: g
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.pageButtonEvents(n), !0)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 17, W))), 128)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          class: ["relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-medium focus:z-20 disabled:opacity-50", a.itemClasses],
          disabled: !e.computed.nextPageUrl
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(e.nextButtonEvents, !0)), [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "next-nav", {}, () => [
            Y,
            Z
          ])
        ], 16, X)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", !0)
    ]),
    _: 3
  }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]);
}
const ie = /* @__PURE__ */ w(I, [["render", ee]]);



/***/ }),

/***/ "./node_modules/dropzone-vue/dist/dropzone-vue.common.css":
/*!****************************************************************!*\
  !*** ./node_modules/dropzone-vue/dist/dropzone-vue.common.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_vue_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./dropzone-vue.common.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone-vue/dist/dropzone-vue.common.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_vue_common_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_vue_common_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_style_index_0_id_38dcf893_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_style_index_0_id_38dcf893_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_style_index_0_id_38dcf893_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const swalPrefix = 'swal2-';

  /**
   * @param {string[]} items
   * @returns {object}
   */
  const prefix = items => {
    const result = {};
    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }
    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const consolePrefix = 'SweetAlert2:';

  /**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */
  const uniqueArray = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });
    const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  // Remember state in cases where opening and handling a modal will fiddle with it.
  const states = {
    previousBodyPadding: null
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      Array.from(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      Array.from(parsed.querySelector('body').childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement} elem
   */
  const hide = elem => {
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style[property] = value;
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();

    /* istanbul ignore if */
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {object} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  const animationEndEvent = (() => {
    // Prevent run in Node env
    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }
    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }
    return false;
  })();

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`]); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
    addClass(button, params[`${buttonType}ButtonClass`]);
  }

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml);

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = `grow-${grow}`;
      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  /// <reference path="../../../../sweetalert2.d.ts"/>

  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);
    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            getPopup().style.width = null;
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }
    addClass(icon, iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!params.progressSteps || params.progressSteps.length === 0) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @param {SweetAlert2} instance
   * @returns {HTMLElement | null}
   */
  function getInput(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => getDenyButton() && getDenyButton().click();

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => getCancelButton() && getCancelButton().click();

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (instance, event, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(instance, event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (instance, event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /* istanbul ignore file */

  // Fix iOS scrolling http://stackoverflow.com/q/39626302

  const iOSfix = () => {
    const iOS =
    // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */
  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    if (iOSSafari) {
      const bottomPanelHeight = 44;
      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
      }
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(getHtmlContainer()) &&
    // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = `${states.previousBodyPadding}px`;
      states.previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }

  /**
   * @returns {boolean}
   */
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert2} instance
   */
  const handleAwaitingPromise = instance => {
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance);
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        // @ts-ignore
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert2} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        // @ts-ignore
        didClose.bind(instance.params)();
      }
      // @ts-ignore
      instance._destroy();
    });
  };

  /**
   * @param {SweetAlert2} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    if (!input) {
      return;
    }
    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert2} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert2} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }
    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @typedef { string | number | boolean } InputValue
   */

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };
  const populateInputOptions = {
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);
      /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */
      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };
      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1];
        // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>
        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now
          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;
        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }
        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');
      if (radios.length) {
        radios[0].focus();
      }
    }
  };

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */
  const formatInputOptions = inputOptions => {
    const result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert2} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert2} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    // @ts-ignore
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };
  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {*} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };
  let ignoreOutsideClick = false;
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined;
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined;
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */
  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }
    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    /** @type {HTMLTemplateElement} */
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalFunctionParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup);
      // and remove the opacity workaround
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  let currentInstance;
  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      // @ts-ignore
      const promise = currentInstance._main(currentInstance.params);
      privateProps.promise.set(this, promise);
    }
    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }
    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert2} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        // @ts-ignore
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        // @ts-ignore
        dismissWith(DismissReason.close);
      };
      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  Object.assign(SweetAlert.prototype, instanceMethods);

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.7.3';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./resources/js/components/admin/media/FileUpload.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/media/FileUpload.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileUpload_vue_vue_type_template_id_38dcf893__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=template&id=38dcf893 */ "./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893");
/* harmony import */ var _FileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=script&lang=js */ "./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js");
/* harmony import */ var _FileUpload_vue_vue_type_style_index_0_id_38dcf893_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css */ "./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css");
/* harmony import */ var C_Users_Shivendra_OneDrive_Desktop_grownotics_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Shivendra_OneDrive_Desktop_grownotics_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FileUpload_vue_vue_type_template_id_38dcf893__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/admin/media/FileUpload.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FileUpload.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_template_id_38dcf893__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_template_id_38dcf893__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FileUpload.vue?vue&type=template&id=38dcf893 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=template&id=38dcf893");


/***/ }),

/***/ "./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FileUpload_vue_vue_type_style_index_0_id_38dcf893_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/media/FileUpload.vue?vue&type=style&index=0&id=38dcf893&lang=css");


/***/ })

}]);