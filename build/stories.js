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

/***/ "./src/leaders/leaders.scss":
/*!**********************************!*\
  !*** ./src/leaders/leaders.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shri-2021-task-1/./src/leaders/leaders.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shri-2021-task-1/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _leaders_leaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaders/leaders */ \"./src/leaders/leaders.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n\n\nconsole.log('wata fuck222888?!');\n\nconst params = location.search\n  .substr(1)\n  .split('&') // разбиваем на параметры\n  .reduce(function (res, a) {\n    // разбираем пары ключ-значение\n    const paramsArray = a.split('=');\n\n    // нужно декодировать и ключ и значение, значения может не быть\n    res[decodeURIComponent(paramsArray[0])] =\n      paramsArray.length === 1 ? null : decodeURIComponent(paramsArray[1]);\n    return res;\n  }, {});\n\nconsole.log(params);\n\nwindow.renderTemplate = function (alias, data) {\n  // ...\n  return _leaders_leaders__WEBPACK_IMPORTED_MODULE_0__.leadersHtml;\n};\n\n\n//# sourceURL=webpack://shri-2021-task-1/./src/index.js?");

/***/ }),

/***/ "./src/leaders/leaders.js":
/*!********************************!*\
  !*** ./src/leaders/leaders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leadersHtml\": () => (/* binding */ leadersHtml)\n/* harmony export */ });\n/* harmony import */ var _leaders_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaders.scss */ \"./src/leaders/leaders.scss\");\n\n\nconst HEADER = 'Больше всего ️коммитов';\n\nconst leadersHtml = `<div class=\"header\">${HEADER}</div>`;\n\n\n//# sourceURL=webpack://shri-2021-task-1/./src/leaders/leaders.js?");

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
/******/ 			// no module.id needed
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