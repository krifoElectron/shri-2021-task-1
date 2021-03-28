/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('wata fuck222888?!');\n\nconst params = location.search\n  .substr(1)\n  .split('&') // разбиваем на параметры\n  .reduce(function (res, a) {\n    // разбираем пары ключ-значение\n    const paramsArray = a.split('=');\n\n    // нужно декодировать и ключ и значение, значения может не быть\n    res[decodeURIComponent(paramsArray[0])] =\n      paramsArray.length === 1 ? null : decodeURIComponent(paramsArray[1]);\n    return res;\n  }, {});\n\nconsole.log(params);\n\nwindow.renderTemplate = function (alias, data) {\n  // ...\n  return '<div>oppana</div>';\n};\n\n\n//# sourceURL=webpack://shri-2021-task-1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;