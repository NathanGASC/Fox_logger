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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLogger\": () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_0__.createLogger)\n/* harmony export */ });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./src/log.ts\");\n\r\n\r\n\n\n//# sourceURL=webpack://@nathangasc/fox_logger/./src/index.ts?");

/***/ }),

/***/ "./src/log.ts":
/*!********************!*\
  !*** ./src/log.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLogger\": () => (/* binding */ createLogger)\n/* harmony export */ });\nclass _Logger {\r\n    constructor(options, namespaces) {\r\n        var config = {\r\n            options,\r\n            namespaces,\r\n        };\r\n        this.setNamespaceProperties(config);\r\n    }\r\n    setNamespaceProperties(config) {\r\n        const _this = this;\r\n        function createLogOn(obj, namespace, level) {\r\n            if (typeof window != \"undefined\") {\r\n                Object.defineProperty(obj, level, {\r\n                    get: function (...msg) {\r\n                        if (config.options.isLogged.log && config.namespaces[namespace].isLogged) {\r\n                            const template = _this.template(config, namespace);\r\n                            return window.console[level].bind(window.console, template, ...msg);\r\n                        }\r\n                        else {\r\n                            return () => { };\r\n                        }\r\n                    },\r\n                });\r\n            }\r\n            else {\r\n                Object.defineProperty(obj, level, {\r\n                    value: function (...msg) {\r\n                        if (config.options.isLogged.log && config.namespaces[namespace].isLogged) {\r\n                            const template = _this.template(config, namespace);\r\n                            console[level](template, ...msg);\r\n                        }\r\n                        else {\r\n                            return () => { };\r\n                        }\r\n                    },\r\n                });\r\n            }\r\n            return obj;\r\n        }\r\n        //back-end logs\r\n        Object.keys(config.namespaces).forEach((key) => {\r\n            config.namespaces[key] = createLogOn(config.namespaces[key], key, \"debug\");\r\n            config.namespaces[key] = createLogOn(config.namespaces[key], key, \"error\");\r\n            config.namespaces[key] = createLogOn(config.namespaces[key], key, \"info\");\r\n            config.namespaces[key] = createLogOn(config.namespaces[key], key, \"log\");\r\n            config.namespaces[key] = createLogOn(config.namespaces[key], key, \"warn\");\r\n            Object.defineProperty(this, key, {\r\n                value: config.namespaces[key],\r\n                writable: true,\r\n            });\r\n        });\r\n    }\r\n    template(config, namespace) {\r\n        const now = new Date();\r\n        const h = now.getHours();\r\n        const m = now.getMinutes();\r\n        const s = now.getSeconds();\r\n        let template = config.options.format;\r\n        template = template.replace(\"{{h}}\", h.toString());\r\n        template = template.replace(\"{{m}}\", m.toString());\r\n        template = template.replace(\"{{s}}\", s.toString());\r\n        template = template.replace(\"{{namespace}}\", namespace);\r\n        return template;\r\n    }\r\n}\r\nconst logLevels = [\"debug\", \"log\", \"error\", \"warn\", \"info\"];\r\nconst Logger = _Logger;\r\nfunction createLogger(config) {\r\n    return new Logger(config.options, config.namespaces);\r\n}\r\n\n\n//# sourceURL=webpack://@nathangasc/fox_logger/./src/log.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;