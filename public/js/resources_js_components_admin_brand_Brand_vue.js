"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_brand_Brand_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js");
/* harmony import */ var _include_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/Header.vue */ "./resources/js/components/admin/include/Header.vue");
/* harmony import */ var _include_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/Footer.vue */ "./resources/js/components/admin/include/Footer.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "brand",
  components: {
    AdminHeader: _include_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminFooter: _include_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
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
      brands: {}
    };
  },
  mounted: function mounted() {
    this.getBrand(); //method1 will execute at pageload
  },

  methods: {
    //user login function and api call
    addBrand: function addBrand() {
      var _this = this;
      var currentObj = this;
      axios.post('http://127.0.0.1:8000/api/addbrand', this.form).then(function (response) {
        currentObj.output = response.data;
        _this.getBrand();
        _this.form.name = '';
        _this.form.id = '';
        _this.form.name.reset();
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;
      });
    },
    getBrand: function getBrand() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page, currentObj;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              currentObj = _this2;
              axios.get('http://127.0.0.1:8000/api/getbrand?page=' + page).then(function (_ref) {
                var data = _ref.data;
                currentObj.brands = data;
              })["catch"](function (e) {
                _this2.errors = e.response.data.errors;
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deleteBrand: function deleteBrand(id) {
      var _this3 = this;
      var currentObj = this;
      axios.post('http://127.0.0.1:8000/api/deletebrand/' + id).then(function (response) {
        currentObj.categories = response.data;
        _this3.getcategory();
      });
    },
    active_deactive: function active_deactive(id) {
      var currentObj = this;
      axios.post('http://127.0.0.1:8000/api/active_deactive_brand/' + id);
      // .then((response) =>{
      //     currentObj.subcategories = response.data;
      //     this.getproduct()
      // })
    },
    editBrand: function editBrand(id) {
      var currentObj = this;
      axios.get('http://127.0.0.1:8000/api/editbrand/' + id).then(function (response) {
        currentObj.form = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-12"
};
var _hoisted_4 = {
  "class": "card shadow-sm"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Brand")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-10"
};
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exampleInputEmail1"
}, "Brand Name", -1 /* HOISTED */);
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-2",
  style: {
    "margin-top": "22px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit")])], -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "container"
};
var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-12"
};
var _hoisted_16 = {
  "class": "card shadow-sm"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Brand List")], -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "card-body"
};
var _hoisted_19 = {
  "class": "row"
};
var _hoisted_20 = {
  "class": "table"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Brand Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Brand Slug"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Active/Deactive"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Action")])], -1 /* HOISTED */);
var _hoisted_22 = {
  scope: "row"
};
var _hoisted_23 = {
  "class": "switch"
};
var _hoisted_24 = ["onChange"];
var _hoisted_25 = ["onChange"];
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "slider round"
}, null, -1 /* HOISTED */);
var _hoisted_27 = ["onClick"];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-edit",
  title: "Edit"
}, null, -1 /* HOISTED */);
var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = ["onClick"];
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash",
  title: "Delete"
}, null, -1 /* HOISTED */);
var _hoisted_32 = [_hoisted_31];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AdminHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminHeader");
  var _component_Bootstrap4Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Bootstrap4Pagination");
  var _component_AdminFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdminFooter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminHeader), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addBrand && $options.addBrand.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.id = $event;
    }),
    "class": "form-control"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.name = $event;
    }),
    "class": "form-control",
    placeholder: "Enter Brand Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]])]), $data.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(String($data.errors.name)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_12])], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.output.message), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.brands.data, function (brand, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(brand.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(brand.slug), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_23, [brand.status == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: 0,
      type: "checkbox",
      onChange: function onChange($event) {
        return $options.active_deactive([brand.id, 1]);
      }
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_24)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: 1,
      type: "checkbox",
      onChange: function onChange($event) {
        return $options.active_deactive([brand.id, 0]);
      },
      checked: ""
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_25)), _hoisted_26])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.editBrand(brand.id);
      }, ["prevent"]),
      type: "button",
      "class": "btn btn-primary",
      href: "#",
      "data-toggle": "modal",
      "data-target": "#exampleModal"
    }, _hoisted_29, 8 /* PROPS */, _hoisted_27), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.deleteBrand(brand.id);
      }, ["prevent"]),
      "class": "btn btn-danger",
      href: "#"
    }, _hoisted_32, 8 /* PROPS */, _hoisted_30)])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Bootstrap4Pagination, {
    align: "center",
    data: $data.brands,
    onPaginationChangePage: $options.getBrand
  }, null, 8 /* PROPS */, ["data", "onPaginationChangePage"])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdminFooter)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\n}\n.switch input { \r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\n}\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\n}\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\n}\ninput:checked + .slider {\r\n  background-color: #2196F3;\n}\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\n}\r\n\r\n/* Rounded sliders */\n.slider.round {\r\n  border-radius: 34px;\n}\n.slider.round:before {\r\n  border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_style_index_0_id_1feabc38_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_style_index_0_id_1feabc38_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_style_index_0_id_1feabc38_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/admin/brand/Brand.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/brand/Brand.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Brand_vue_vue_type_template_id_1feabc38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.vue?vue&type=template&id=1feabc38 */ "./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38");
/* harmony import */ var _Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand.vue?vue&type=script&lang=js */ "./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js");
/* harmony import */ var _Brand_vue_vue_type_style_index_0_id_1feabc38_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css */ "./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css");
/* harmony import */ var C_xampp_htdocs_grow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_grow_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Brand_vue_vue_type_template_id_1feabc38__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/admin/brand/Brand.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_template_id_1feabc38__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_template_id_1feabc38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=template&id=1feabc38 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=template&id=1feabc38");


/***/ }),

/***/ "./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Brand_vue_vue_type_style_index_0_id_1feabc38_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/brand/Brand.vue?vue&type=style&index=0&id=1feabc38&lang=css");


/***/ })

}]);