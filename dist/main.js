/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/application */ \"./src/scripts/application.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  new _scripts_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  console.log('hello world');\n  // this is where things will actually start\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7QUFFNUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSiw0REFBTyxDQUFDRyxJQUFJLENBQUM7RUFFakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUMxQjtBQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbmRlcmd1YXJkaWFucy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9hcHBsaWNhdGlvbic7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIG5ldyBFeGFtcGxlKG1haW4pO1xyXG5cclxuICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcclxuICAvLyB0aGlzIGlzIHdoZXJlIHRoaW5ncyB3aWxsIGFjdHVhbGx5IHN0YXJ0XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/application.js":
/*!************************************!*\
  !*** ./src/scripts/application.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// const apiKey = '3fd152d590a94ab088993fcc9292e6f9';\n// const URL =\n//   'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/';\n// fetch(URL, { headers: { 'X-API-Key': apiKey } });\n\n// const bungie = async function () {\n//   let response = await fetch(URL, { headers: { 'X-API-Key': apiKey } });\n\n//   let data = await response.json();\n//   console.log(data);\n// };\n\n// bungie();\n\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = '<h1>working!</h1>';\n\n    // this.handleClick = this.handleClick.bind(this);\n    // this.ele.addEventListener('click', this.handleClick);\n    this.ele.addEventListener('click', () => this.handleClick());\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'slightly different working!';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxDQUFDO0VBQ1pDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxtQkFBbUI7O0lBRXhDO0lBQ0E7SUFDQSxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQzlEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyw2QkFBNkI7RUFDaEU7QUFDRjtBQUVBLCtEQUFlUCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2luZGVyZ3VhcmRpYW5zLy4vc3JjL3NjcmlwdHMvYXBwbGljYXRpb24uanM/ODBiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcGlLZXkgPSAnM2ZkMTUyZDU5MGE5NGFiMDg4OTkzZmNjOTI5MmU2ZjknO1xyXG4vLyBjb25zdCBVUkwgPVxyXG4vLyAgICdodHRwczovL3d3dy5idW5naWUubmV0L3BsYXRmb3JtL0Rlc3RpbnkvTWFuaWZlc3QvSW52ZW50b3J5SXRlbS8xMjc0MzMwNjg3Lyc7XHJcbi8vIGZldGNoKFVSTCwgeyBoZWFkZXJzOiB7ICdYLUFQSS1LZXknOiBhcGlLZXkgfSB9KTtcclxuXHJcbi8vIGNvbnN0IGJ1bmdpZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuLy8gICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgaGVhZGVyczogeyAnWC1BUEktS2V5JzogYXBpS2V5IH0gfSk7XHJcblxyXG4vLyAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyB9O1xyXG5cclxuLy8gYnVuZ2llKCk7XHJcblxyXG5jbGFzcyBFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihlbGUpIHtcclxuICAgIHRoaXMuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gJzxoMT53b3JraW5nITwvaDE+JztcclxuXHJcbiAgICAvLyB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgLy8gdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ3NsaWdodGx5IGRpZmZlcmVudCB3b3JraW5nISc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xyXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/application.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5kZXJndWFyZGlhbnMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;