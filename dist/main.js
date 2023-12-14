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

eval("__webpack_require__.r(__webpack_exports__);\nconst apiKey = '3fd152d590a94ab088993fcc9292e6f9';\nconst URL = 'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/';\nfetch(URL, {\n  headers: {\n    'X-API-Key': apiKey\n  }\n});\nconst getGjall = async function () {\n  let response = await fetch(URL, {\n    headers: {\n      'X-API-Key': apiKey\n    }\n  });\n  let data = await response.json();\n  console.log(data);\n};\ngetGjall();\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = '<h1>working!</h1>';\n\n    // this.handleClick = this.handleClick.bind(this);\n    // this.ele.addEventListener('click', this.handleClick);\n    this.ele.addEventListener('click', () => this.handleClick());\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'slightly different working!';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\n\n// possible useful fetches\n// Trending.GetTrendingCategories\n// Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.\n\n// Trending.GetTrendingCategory\n// Returns paginated lists of trending items for a category.\n\n// Trending.GetTrendingEntryDetail\n// Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsTUFBTSxHQUFHLGtDQUFrQztBQUNqRCxNQUFNQyxHQUFHLEdBQ1AsNEVBQTRFO0FBQzlFQyxLQUFLLENBQUNELEdBQUcsRUFBRTtFQUFFRSxPQUFPLEVBQUU7SUFBRSxXQUFXLEVBQUVIO0VBQU87QUFBRSxDQUFDLENBQUM7QUFFaEQsTUFBTUksUUFBUSxHQUFHLGVBQUFBLENBQUEsRUFBa0I7RUFDakMsSUFBSUMsUUFBUSxHQUFHLE1BQU1ILEtBQUssQ0FBQ0QsR0FBRyxFQUFFO0lBQUVFLE9BQU8sRUFBRTtNQUFFLFdBQVcsRUFBRUg7SUFBTztFQUFFLENBQUMsQ0FBQztFQUVyRSxJQUFJTSxJQUFJLEdBQUcsTUFBTUQsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztFQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztBQUNuQixDQUFDO0FBRURGLFFBQVEsQ0FBQyxDQUFDO0FBRVYsTUFBTU0sT0FBTyxDQUFDO0VBQ1pDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxtQkFBbUI7O0lBRXhDO0lBQ0E7SUFDQSxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQzlEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyw2QkFBNkI7RUFDaEU7QUFDRjtBQUVBLCtEQUFlUCxPQUFPLEVBQUM7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5kZXJndWFyZGlhbnMvLi9zcmMvc2NyaXB0cy9hcHBsaWNhdGlvbi5qcz84MGI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9ICczZmQxNTJkNTkwYTk0YWIwODg5OTNmY2M5MjkyZTZmOSc7XHJcbmNvbnN0IFVSTCA9XHJcbiAgJ2h0dHBzOi8vd3d3LmJ1bmdpZS5uZXQvcGxhdGZvcm0vRGVzdGlueS9NYW5pZmVzdC9JbnZlbnRvcnlJdGVtLzEyNzQzMzA2ODcvJztcclxuZmV0Y2goVVJMLCB7IGhlYWRlcnM6IHsgJ1gtQVBJLUtleSc6IGFwaUtleSB9IH0pO1xyXG5cclxuY29uc3QgZ2V0R2phbGwgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7IGhlYWRlcnM6IHsgJ1gtQVBJLUtleSc6IGFwaUtleSB9IH0pO1xyXG5cclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufTtcclxuXHJcbmdldEdqYWxsKCk7XHJcblxyXG5jbGFzcyBFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihlbGUpIHtcclxuICAgIHRoaXMuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gJzxoMT53b3JraW5nITwvaDE+JztcclxuXHJcbiAgICAvLyB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgLy8gdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ3NsaWdodGx5IGRpZmZlcmVudCB3b3JraW5nISc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xyXG5cclxuLy8gcG9zc2libGUgdXNlZnVsIGZldGNoZXNcclxuLy8gVHJlbmRpbmcuR2V0VHJlbmRpbmdDYXRlZ29yaWVzXHJcbi8vIFJldHVybnMgdHJlbmRpbmcgaXRlbXMgZm9yIEJ1bmdpZS5uZXQsIGNvbGxhcHNlZCBpbnRvIHRoZSBmaXJzdCBwYWdlIG9mIGl0ZW1zIHBlciBjYXRlZ29yeS4gRm9yIHBhZ2luYXRpb24gd2l0aGluIGEgY2F0ZWdvcnksIGNhbGwgR2V0VHJlbmRpbmdDYXRlZ29yeS5cclxuXHJcbi8vIFRyZW5kaW5nLkdldFRyZW5kaW5nQ2F0ZWdvcnlcclxuLy8gUmV0dXJucyBwYWdpbmF0ZWQgbGlzdHMgb2YgdHJlbmRpbmcgaXRlbXMgZm9yIGEgY2F0ZWdvcnkuXHJcblxyXG4vLyBUcmVuZGluZy5HZXRUcmVuZGluZ0VudHJ5RGV0YWlsXHJcbi8vIFJldHVybnMgdGhlIGRldGFpbGVkIHJlc3VsdHMgZm9yIGEgc3BlY2lmaWMgdHJlbmRpbmcgZW50cnkuIE5vdGUgdGhhdCB0cmVuZGluZyBlbnRyaWVzIGFyZSB1bmlxdWVseSBpZGVudGlmaWVkIGJ5IGEgY29tYmluYXRpb24gb2YgKmJvdGgqIHRoZSBUcmVuZGluZ0VudHJ5VHlwZSAqYW5kKiB0aGUgaWRlbnRpZmllcjogdGhlIGlkZW50aWZpZXIgYWxvbmUgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgZ2xvYmFsbHkgdW5pcXVlLlxyXG4iXSwibmFtZXMiOlsiYXBpS2V5IiwiVVJMIiwiZmV0Y2giLCJoZWFkZXJzIiwiZ2V0R2phbGwiLCJyZXNwb25zZSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/application.js\n");

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