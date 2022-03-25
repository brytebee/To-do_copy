/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: rgb(171, 199, 190);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  color: rgb(26, 114, 114);\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding-inline-start: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  margin: 10% 30%;\\r\\n  padding: 1%;\\r\\n  background-color: rgb(219, 214, 207);\\r\\n  box-shadow: 10px 5px 8px #9c8080;\\r\\n}\\r\\n\\r\\n.max-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.double-line-height {\\r\\n  line-height: 2;\\r\\n}\\r\\n\\r\\n.d-flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.parent-flex {\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.child-flex-large {\\r\\n  flex: 9;\\r\\n}\\r\\n\\r\\n.child-flex-small {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.b-border {\\r\\n  border-bottom: 1px solid #9c8080;\\r\\n}\\r\\n\\r\\n.strike-out {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.success {\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.bg-success {\\r\\n  background-color: rgb(127, 206, 127);\\r\\n}\\r\\n\\r\\n.bg-success:hover {\\r\\n  background-color: green;\\r\\n  font-size: 1.4em;\\r\\n}\\r\\n\\r\\n.danger {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.bg-danger {\\r\\n  background-color: rgb(214, 93, 93);\\r\\n}\\r\\n\\r\\n.bg-danger:hover {\\r\\n  background-color: red;\\r\\n  color: white;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do_/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do_/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do_/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do_/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do_/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_addItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addItem.js */ \"./src/module/addItem.js\");\n/* harmony import */ var _module_clearAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/clearAll.js */ \"./src/module/clearAll.js\");\n/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/display.js */ \"./src/module/display.js\");\n/* harmony import */ var _module_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/storage.js */ \"./src/module/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.addBtn').addEventListener('click', () => {\r\n  (0,_module_addItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\ndocument.querySelector('.clear').addEventListener('click', () => (0,_module_clearAll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_module_storage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()));\r\n\r\nconst lists = [\r\n].sort((a, b) => b.index - a.index);\r\n\r\nif (!JSON.parse(localStorage.getItem('to-do'))) {\r\n  localStorage.setItem('to-do', JSON.stringify(lists));\r\n}\r\n\r\nconst storageList = JSON.parse(localStorage.getItem('list'));\r\n\r\nif (storageList) {\r\n  (0,_module_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(storageList);\r\n}\r\n\n\n//# sourceURL=webpack://to-do_/./src/index.js?");

/***/ }),

/***/ "./src/module/addItem.js":
/*!*******************************!*\
  !*** ./src/module/addItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/module/display.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateIndex.js */ \"./src/module/updateIndex.js\");\n\r\n\r\n\r\n\r\nclass List {\r\n  constructor(description, list) {\r\n    this.completed = false;\r\n    this.description = description;\r\n    this.index = list.length + 1;\r\n    this.id = `id${this.index}`;\r\n  }\r\n}\r\n\r\nconst add = () => {\r\n  if (document.querySelector('.addList').value !== '') {\r\n    let list = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const newItem = new List(`${document.querySelector('.addList').value}`, list);\r\n    list.push(newItem);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveInStorage)(list);\r\n    list = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    list = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list);\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\r\n    document.querySelector('.addList').value = '';\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n//# sourceURL=webpack://to-do_/./src/module/addItem.js?");

/***/ }),

/***/ "./src/module/clearAll.js":
/*!********************************!*\
  !*** ./src/module/clearAll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateIndex.js */ \"./src/module/updateIndex.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/module/display.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n\r\n\r\n\r\n\r\nconst clearAll = (list) => {\r\n  list = list.filter((task) => task.completed !== true);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveInStorage)(list);\r\n  list = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAll);\n\n//# sourceURL=webpack://to-do_/./src/module/clearAll.js?");

/***/ }),

/***/ "./src/module/delete.js":
/*!******************************!*\
  !*** ./src/module/delete.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateIndex.js */ \"./src/module/updateIndex.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n\r\n\r\n\r\nconst removeItem = (list, task, display) => {\r\n  list = list.filter((eachTask) => eachTask.index !== task.index);\r\n  list = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveInStorage)(list);\r\n  display((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeItem);\n\n//# sourceURL=webpack://to-do_/./src/module/delete.js?");

/***/ }),

/***/ "./src/module/display.js":
/*!*******************************!*\
  !*** ./src/module/display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ \"./src/module/delete.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ \"./src/module/edit.js\");\n/* harmony import */ var _stateChange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateChange.js */ \"./src/module/stateChange.js\");\n\r\n\r\n\r\n\r\nconst root = document.querySelector('#root');\r\n\r\nconst display = (array) => {\r\n  root.textContent = '';\r\n  array.forEach((item) => {\r\n    const ul = document.createElement('ul');\r\n    const li = document.createElement('li');\r\n\r\n    const listDiv = document.createElement('div');\r\n    listDiv.className = 'list d-flex parent-flex b-border';\r\n\r\n    const descriptionDiv = document.createElement('div');\r\n    descriptionDiv.className = 'child-flex-large';\r\n\r\n    const check = document.createElement('input');\r\n    check.type = 'checkbox';\r\n    check.className = 'check';\r\n\r\n    const descriptionSpan = document.createElement('span');\r\n    descriptionSpan.setAttribute('contenteditable', true);\r\n    descriptionSpan.className = 'description';\r\n    descriptionSpan.textContent = item.description;\r\n\r\n    const iconsDiv = document.createElement('div');\r\n    iconsDiv.className = 'd-flex child-flex-small';\r\n\r\n    const optionsSpan = document.createElement('span');\r\n    optionsSpan.className = 'options';\r\n    optionsSpan.innerHTML = '<i class=\"fas fa-ellipsis-v\"></i>';\r\n\r\n    const trashSpan = document.createElement('span');\r\n    trashSpan.className = 'trash hidden child-flex-small danger';\r\n    trashSpan.innerHTML = '<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>';\r\n\r\n    const taskCompleteSpan = document.createElement('span');\r\n    taskCompleteSpan.className = 'done hidden child-flex-small success';\r\n    taskCompleteSpan.innerHTML = '<i class=\"fas fa-check\"></i>';\r\n\r\n    optionsSpan.addEventListener('click', (e) => (0,_stateChange_js__WEBPACK_IMPORTED_MODULE_2__.visualChange)(e, li, optionsSpan, taskCompleteSpan, trashSpan, array));\r\n\r\n    descriptionSpan.addEventListener('keyup', () => (0,_edit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array, item, descriptionSpan));\r\n\r\n    trashSpan.addEventListener('click', () => (0,_delete_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, item, display));\r\n\r\n    check.addEventListener('change', (e) => {\r\n      (0,_stateChange_js__WEBPACK_IMPORTED_MODULE_2__.stateChange)(e, item, array);\r\n      (0,_stateChange_js__WEBPACK_IMPORTED_MODULE_2__.visualChange)(e, li, optionsSpan, taskCompleteSpan, trashSpan, array);\r\n    });\r\n\r\n    if (item.completed) {\r\n      check.checked = true;\r\n      li.classList.add('strike-out');\r\n    }\r\n\r\n    descriptionDiv.append(check, descriptionSpan);\r\n    iconsDiv.append(optionsSpan, taskCompleteSpan, trashSpan);\r\n\r\n    listDiv.append(descriptionDiv, iconsDiv);\r\n\r\n    li.appendChild(listDiv);\r\n    ul.append(li);\r\n    root.append(ul);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://to-do_/./src/module/display.js?");

/***/ }),

/***/ "./src/module/edit.js":
/*!****************************!*\
  !*** ./src/module/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n\r\n\r\nconst editItem = (list, task, textHolder) => {\r\n  task.description = textHolder.textContent;\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveInStorage)(list);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);\n\n//# sourceURL=webpack://to-do_/./src/module/edit.js?");

/***/ }),

/***/ "./src/module/stateChange.js":
/*!***********************************!*\
  !*** ./src/module/stateChange.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stateChange\": () => (/* binding */ stateChange),\n/* harmony export */   \"visualChange\": () => (/* binding */ visualChange)\n/* harmony export */ });\nconst stateChange = (e, list, lists) => {\r\n  if (e.target.checked) {\r\n    list.completed = true;\r\n  } else {\r\n    list.completed = false;\r\n  }\r\n  localStorage.setItem('list', JSON.stringify(lists));\r\n};\r\n\r\nconst visualChange = (e, list, optionIcon, taskCompleteIcon, trashIcon, lists) => {\r\n  if (e.target.checked) {\r\n    list.classList.add('strike-out');\r\n    optionIcon.classList.add('hidden');\r\n    taskCompleteIcon.classList.remove('hidden');\r\n    trashIcon.classList.remove('hidden');\r\n  } else {\r\n    list.classList.remove('strike-out');\r\n    optionIcon.classList.remove('hidden');\r\n    taskCompleteIcon.classList.add('hidden');\r\n    trashIcon.classList.add('hidden');\r\n  }\r\n  localStorage.setItem('list', JSON.stringify(lists));\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do_/./src/module/stateChange.js?");

/***/ }),

/***/ "./src/module/storage.js":
/*!*******************************!*\
  !*** ./src/module/storage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveInStorage\": () => (/* binding */ saveInStorage)\n/* harmony export */ });\nconst getFromStorage = () => {\r\n  if (localStorage.getItem('list') !== null) {\r\n    return JSON.parse(localStorage.getItem('list'));\r\n  }\r\n  return [];\r\n};\r\n\r\nconst saveInStorage = (list) => {\r\n  localStorage.setItem('list', JSON.stringify(list));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFromStorage);\r\n\n\n//# sourceURL=webpack://to-do_/./src/module/storage.js?");

/***/ }),

/***/ "./src/module/updateIndex.js":
/*!***********************************!*\
  !*** ./src/module/updateIndex.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/module/storage.js\");\n\r\n\r\nconst indexUpdate = (list) => {\r\n  let counter = 1;\r\n  list.forEach((task) => {\r\n    task.index = counter;\r\n    counter += 1;\r\n  });\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveInStorage)(list);\r\n  return list;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indexUpdate);\n\n//# sourceURL=webpack://to-do_/./src/module/updateIndex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;