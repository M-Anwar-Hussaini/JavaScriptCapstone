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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  font-size: 62.5%;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #333;\n}\n\nbody {\n  font-size: 1.6rem;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: #333;\n}\n\n/* HEADER */\n\nheader {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\nnav {\n  max-width: 1024px;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  gap: 3.2rem;\n  align-items: center;\n  padding: 2rem 1rem;\n}\n\nnav ul {\n  gap: 1.6rem;\n  margin-left: 2vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 1rem;\n}\n\nnav ul li {\n  font-weight: 400;\n  margin: 0 5%;\n}\n\n/* MAIN PART */\nmain {\n  background: linear-gradient(-45deg, #081f37, #5fc9f3, #2e79ba, #1e549f);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n.wrapper {\n  max-width: 1440px;\n  margin: auto;\n  padding: 5rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 350px));\n  gap: 2.5rem;\n  justify-content: center;\n  place-items: center;\n}\n\n.wrapper__card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90vw;\n  max-width: 350px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.wrapper__card:hover {\n  transform: scale(1.01);\n  transition: all 0.1s ease-out;\n}\n\n.wrapper__card__img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n}\n\n.wrapper__card__details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.wrapper__card__details__title {\n  font-size: 1.6rem;\n}\n\n.wrapper__card__details__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper__card__details__likes-btn {\n  font-size: 2rem;\n  background-color: #fff;\n  border-radius: 10px;\n  border-style: none;\n  color: white;\n  -webkit-text-stroke: 1px darkgray;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.wrapper__card__details__likes-btn:hover {\n  transform: scale(1.1);\n  color: red;\n  -webkit-text-stroke: unset;\n}\n\n.likes-btn--active {\n  font-size: 2rem;\n  background-color: #fff;\n  border-radius: 10px;\n  border-style: none;\n  color: red;\n  -webkit-text-stroke: unset;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.likes-btn--active:hover {\n  transform: scale(1.1);\n}\n\n.wrapper__card__comments-btn,\n.card__btn {\n  width: 100%;\n  height: 40px;\n  margin-top: 1rem;\n  font-weight: 600;\n  color: white;\n  background-color: dodgerblue;\n  border-style: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.card-btn:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  transform: scale(1.01);\n}\n\n.card-btn:active {\n  background-color: royalblue;\n}\n\n/* POPUP */\n.pop-up--active {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3vh 0;\n  background: linear-gradient(-45deg, #081f37, #5fc9f3, #2e79ba, #1e549f);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  z-index: 50;\n}\n\n.hidden {\n  display: none;\n}\n\n.pop-up__container {\n  position: relative;\n  width: 90%;\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3rem 2rem;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.pop-up__container__close-btn {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  font-size: 2rem;\n  font-weight: 900;\n  border-radius: 10px;\n  border-style: none;\n  color: darkgray;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-shadow: 0 0 30px darkgray;\n}\n\n.pop-up__container__close-btn:hover {\n  color: orangered;\n  transform: rotate(180deg) scale(1.1);\n}\n\n.pop-up__container__img {\n  width: 80%;\n  max-width: 450px;\n  height: 40%;\n  min-height: 200px;\n  max-height: 300px;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n}\n\n.pop-up__container__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.pop-up__container__content__title,\nh3 {\n  font-size: 2rem;\n  margin: 1rem auto;\n}\n\n.pop-up__container__content__details {\n  width: 100%;\n  display: grid;\n  grid-auto-columns: 1fr 1fr;\n  grid-template-areas:\n    \"1 3\"\n    \"2 4\";\n  column-gap: 1rem;\n  font-size: 1.6rem;\n  padding: 0 1rem;\n}\n\n.bold-text {\n  font-weight: 600;\n}\n\n.pop-up__container__log {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0 1rem;\n}\n\n.pop-up__container__log__entries {\n  width: 100%;\n  max-height: 120px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.pop-up__btn {\n  width: 100%;\n  height: 40px;\n  margin-top: 1rem;\n  font-weight: 600;\n  color: white;\n  font-size: 1.6rem;\n  background-color: dodgerblue;\n  border-style: none;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.pop-up__btn:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  transform: scale(1.01);\n}\n\n.pop-up__btn:active {\n  background-color: royalblue;\n}\n\n.pop-up__container__form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0 1rem;\n}\n\n.pop-up__container__form form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1.6rem;\n}\n\nform input {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border-style: solid;\n  padding: 0 1rem;\n  font-size: 1.4rem;\n}\n\nform textarea {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  border-style: solid;\n  padding: 1rem;\n  font-size: 1.4rem;\n  resize: none;\n}\n\n/* FOOTER */\n\nfooter {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.footer__section {\n  max-width: 1024px;\n  margin: auto;\n  padding: 20px;\n}\n\n.footer__section__about {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.footer__section__about__logo {\n  margin-right: 2rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM.js */ \"./src/modules/DOM.js\");\n/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp.js */ \"./src/modules/popUp.js\");\n\n\n\n\nconst dom = new _modules_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst popUp = new _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ndom.displayAllCountries()\n  .then(() => {\n    popUp.displayPopUp();\n  });\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rest_countries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest_countries.js */ \"./src/modules/rest_countries.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp.js */ \"./src/modules/popUp.js\");\n\n\n\n\nclass DOM {\n  constructor() {\n    this.countries = new _rest_countries_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.container = document.querySelector('.wrapper');\n    this.involvement = new _involvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.popUp = new _popUp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  createCardEl = async (country) => {\n    const countryInfo = await this.countries.getCountryShortInfo(country);\n    const { name, flagURl } = countryInfo;\n    let likes = await this.involvement.getLikeAmount(name);\n\n    // The element structure\n    const _ = document;\n    const article = _.createElement('article');\n    article.className = 'wrapper__card';\n\n    const img = _.createElement('img');\n    img.className = 'wrapper__card__img';\n    img.src = flagURl;\n    img.alt = name;\n\n    const cardDetails = _.createElement('div');\n    cardDetails.className = 'wrapper__card__details';\n\n    const h3 = _.createElement('h3');\n    h3.className = 'wrapper__card__details__title';\n    h3.innerText = name;\n\n    const likeDiv = _.createElement('div');\n    likeDiv.className = 'wrapper__card__details__likes';\n\n    const btnLike = _.createElement('button');\n    btnLike.className = 'wrapper__card__details__likes-btn';\n    btnLike.innerHTML = '<i class=\"bi bi-heart-fill\"></i>';\n\n    const likeAmount = _.createElement('p');\n    likeAmount.innerText = `${likes} like(s)`;\n\n    const btnComments = _.createElement('button');\n    btnComments.innerText = 'Comment';\n    btnComments.className = 'wrapper__card__comments-btn card__btn';\n\n    likeDiv.appendChild(btnLike);\n    likeDiv.appendChild(likeAmount);\n\n    cardDetails.appendChild(h3);\n    cardDetails.appendChild(likeDiv);\n\n    article.appendChild(img);\n    article.appendChild(cardDetails);\n    article.appendChild(btnComments);\n\n    // ActionListeners\n    btnLike.addEventListener('click', async () => {\n      likes += 1;\n      likeAmount.innerText = `${likes} like(s)`;\n      await this.involvement.addLike(name);\n    });\n\n    btnComments.addEventListener('click', () => {\n      this.popUp.createPopUp(name);\n    });\n\n    return article;\n  };\n\n  displayAllCountries = async () => {\n    this.container.innerHTML = '';\n    const countries = this.countries.getSelectedCountries();\n    countries.forEach(async (country) => {\n      const el = await this.createCardEl(country);\n      this.container.appendChild(el);\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QaiC71NWlHq0cfCgEPcq/comments\nclass Involvement {\n  constructor() {\n    this.id = '0I1gsmjKECA6HGAxhWHD';\n    this.baseURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.id}/`;\n  }\n\n  addLike = async (country) => {\n    try {\n      await fetch(`${this.baseURL}likes`, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: country,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    } catch (error) {\n      throw new Error(error);\n    }\n  };\n\n  getLikeAmount = async (country) => {\n    const all = await this.getAllLikeInfo();\n    let result = await all.find((obj) => obj.item_id === country);\n    if (!result) {\n      return 0;\n    }\n    result = parseInt(result.likes, 10);\n    return result || 0;\n  };\n\n  getAllLikeInfo = async () => {\n    const likes = await fetch(`${this.baseURL}likes`);\n    const data = await likes.json();\n    return [...data];\n  };\n\n  addComment = async (country, currentDate, username, comment) => {\n    try {\n      await fetch(`${this.baseURL}comments`, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: country,\n          date: currentDate,\n          username,\n          comment,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    } catch (error) {\n      throw new Error(error);\n    }\n  };\n\n  getComment = async (country) => {\n    const res = await fetch(`${this.baseURL}comments?item_id=${country}`);\n    const data = await res.json();\n\n    if (Array.isArray(data)) {\n      return data;\n    }\n    return [];\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Involvement);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rest_countries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest_countries.js */ \"./src/modules/rest_countries.js\");\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\n\n\nclass PopUp {\n  constructor() {\n    this.countries = new _rest_countries_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.popupContainer = document.querySelector('main');\n  }\n\n  countComments = async (country) => {\n    const comments = await new _involvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getComment(country);\n    return comments.length;\n  };\n\n  createPopUp = async (country) => {\n    const countryInfo = this.countries.getCountryShortInfo(country);\n    const popUp = document.createElement('div');\n    popUp.classList.add('pop-up--active');\n\n    const popUpContent = document.createElement('div');\n    popUpContent.classList.add('pop-up__container');\n\n    const popUpImg = document.createElement('img');\n    popUpImg.classList.add('pop-up__container__img');\n    popUpImg.setAttribute('src', (await countryInfo).flagURl);\n    popUpImg.setAttribute('alt', (await countryInfo).name);\n    popUpContent.appendChild(popUpImg);\n\n    const popUpCloseBtn = document.createElement('div');\n    popUpCloseBtn.classList.add('pop-up__container__close-btn');\n    popUpCloseBtn.innerHTML = '<i class=\"bi bi-x-circle\"></i>';\n    popUpContent.appendChild(popUpCloseBtn);\n\n    const popUpContentContainer = document.createElement('div');\n    popUpContentContainer.classList.add('pop-up__container__content');\n\n    const popUpContentTitle = document.createElement('h3');\n    popUpContentTitle.classList.add('pop-up__container__content__title');\n    popUpContentTitle.textContent = (await countryInfo).name;\n    popUpContentContainer.appendChild(popUpContentTitle);\n\n    const popUpContentDetails = document.createElement('ul');\n    popUpContentDetails.classList.add('pop-up__container__content__details');\n\n    const details = [\n      { label: 'Continent', value: (await countryInfo).continent },\n      { label: 'Capital', value: (await countryInfo).capital },\n      { label: 'Area', value: `${(await countryInfo).area} km2` },\n      { label: 'Population', value: (await countryInfo).population },\n    ];\n\n    details.forEach((detail) => {\n      const listItem = document.createElement('li');\n      listItem.innerHTML = `<span class=\"bold-text\">${detail.label}: </span><span class=\"span__br\"><br></span>${detail.value}`;\n      popUpContentDetails.appendChild(listItem);\n    });\n\n    popUpContentContainer.appendChild(popUpContentDetails);\n    popUpContent.appendChild(popUpContentContainer);\n\n    const popUpContainerLog = document.createElement('div');\n    popUpContainerLog.classList.add('pop-up__container__log');\n\n    const popUpContainerLogTitle = document.createElement('h3');\n    popUpContainerLogTitle.classList.add('pop-up__container__log__title');\n    const commentsCount = await this.countComments(country);\n    popUpContainerLogTitle.textContent = `Comments (${commentsCount})`;\n    popUpContainerLog.appendChild(popUpContainerLogTitle);\n\n    const popUpContainerLogEntries = document.createElement('ul');\n    popUpContainerLogEntries.classList.add('pop-up__container__log__entries');\n\n    const popUpContainerComments = document.createElement('ul');\n    popUpContainerComments.classList.add('pop-up__container__log__entries');\n\n    const logEntries = await new _involvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getComment(country);\n\n    if (logEntries) {\n      logEntries.forEach((entry) => {\n        const listItem = document.createElement('li');\n        listItem.innerHTML = `<span class=\"bold-text\">${entry.creation_date} ${entry.username}:</span> ${entry.comment}`;\n        popUpContainerComments.appendChild(listItem);\n      });\n    }\n\n    popUpContainerLogEntries.appendChild(popUpContainerComments);\n    popUpContainerLog.appendChild(popUpContainerLogEntries);\n    popUpContent.appendChild(popUpContainerLog);\n\n    const popUpContainerForm = document.createElement('div');\n    popUpContainerForm.classList.add('pop-up__container__form');\n\n    const popUpContainerFormTitle = document.createElement('h3');\n    popUpContainerFormTitle.classList.add('pop-up__container__form__title');\n    popUpContainerFormTitle.textContent = 'Add a comment';\n    popUpContainerForm.appendChild(popUpContainerFormTitle);\n\n    const popUpContainerFormElement = document.createElement('form');\n    popUpContainerFormElement.setAttribute('action', '');\n\n    const popUpContainerFormNameInput = document.createElement('input');\n    popUpContainerFormNameInput.setAttribute('type', 'text');\n    popUpContainerFormNameInput.setAttribute('placeholder', 'Name');\n    popUpContainerFormElement.appendChild(popUpContainerFormNameInput);\n\n    const popUpContainerFormTextArea = document.createElement('textarea');\n    popUpContainerFormTextArea.setAttribute('name', '');\n    popUpContainerFormTextArea.setAttribute('id', '');\n    popUpContainerFormTextArea.setAttribute('cols', '30');\n    popUpContainerFormTextArea.setAttribute('rows', '10');\n    popUpContainerFormTextArea.setAttribute('placeholder', 'Your insights');\n    popUpContainerFormElement.appendChild(popUpContainerFormTextArea);\n\n    const popUpContainerFormBtn = document.createElement('button');\n    popUpContainerFormBtn.classList.add('pop-up__btn');\n    popUpContainerFormBtn.textContent = 'Submit';\n\n    popUpContainerFormElement.appendChild(popUpContainerFormBtn);\n    popUpContainerForm.appendChild(popUpContainerFormElement);\n    popUpContent.appendChild(popUpContainerForm);\n    popUp.appendChild(popUpContent);\n    this.popupContainer.appendChild(popUp);\n\n    const closeBtn = popUp.querySelector('.pop-up__container__close-btn');\n\n    closeBtn.addEventListener('click', () => {\n      popUp.classList.add('hidden');\n    });\n\n    popUpContainerFormBtn.addEventListener('click', async (event) => {\n      event.preventDefault();\n\n      const username = popUpContainerFormNameInput.value;\n      const comment = popUpContainerFormTextArea.value;\n      if (username && comment) {\n        const currentDate = new Date().toLocaleDateString('en-US');\n\n        const involvement = new _involvement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        await involvement.addComment(country, currentDate, username, comment);\n\n        popUpContainerFormNameInput.value = '';\n        popUpContainerFormTextArea.value = '';\n\n        const listItem = document.createElement('li');\n        listItem.innerHTML = `<span class=\"bold-text\">${currentDate} ${username}:</span> ${comment}`;\n        popUpContainerComments.appendChild(listItem);\n\n        const commentsCount = await this.countComments(country);\n        popUpContainerLogTitle.textContent = `Comments (${commentsCount})`;\n\n        const commentsBtns = document.querySelectorAll(\n          '.wrapper__card__comments-btn',\n        );\n        commentsBtns.forEach((commentsBtn, index) => {\n          commentsBtn.addEventListener('click', () => {\n            this.createPopUp((this.countries)[index]);\n          });\n        });\n      }\n    });\n\n    this.popupContainer.appendChild(popUp);\n  };\n\n  displayPopUp = async () => {\n    const countries = this.countries.getSelectedCountries();\n    const commentsBtns = document.querySelectorAll(\n      '.wrapper__card__comments-btn',\n    );\n    commentsBtns.forEach((commentsBtn, index) => {\n      commentsBtn.addEventListener('click', () => {\n        this.createPopUp(countries[index]);\n      });\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopUp);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/popUp.js?");

/***/ }),

/***/ "./src/modules/rest_countries.js":
/*!***************************************!*\
  !*** ./src/modules/rest_countries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Countries {\n  constructor() {\n    this.selectedCountries = [\n      'turkey',\n      'russia',\n      'canada',\n      'iran',\n      'egypt',\n      'colombia',\n      'afghanistan',\n      'japan',\n      'china',\n      'india',\n      'iraq',\n      'nigeria',\n      'france',\n      'italy',\n      'spain',\n      'thailand',\n      'australia',\n      'brazil',\n      'argentina',\n      'pakistan',\n      'mexico',\n      'venezuela',\n      'UK',\n      'germany',\n    ];\n  }\n\n  getCountryFullData = async (country) => {\n    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);\n    const [data] = await res.json();\n    return data;\n  };\n\n  getCountryShortInfo = async (country) => {\n    const data = await this.getCountryFullData(country);\n    return {\n      name: data.name.common,\n      flagURl: data.flags.png,\n      population: data.population,\n      continent: data.region,\n      capital: data.capital[0] || 'Unknown',\n      area: data.area,\n    };\n  };\n\n  getSelectedCountries = () => this.selectedCountries;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countries);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/rest_countries.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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