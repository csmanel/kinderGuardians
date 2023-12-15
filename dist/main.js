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

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = '<h1>working!</h1>';\n    this.ele.addEventListener('click', () => this.handleClick());\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'slightly different working!';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\nconst apiKey = '3fd152d590a94ab088993fcc9292e6f9';\nconst manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';\n// const jsonFilePath = './d2.json';\n\nconst weaponFetch = async function () {\n  let response = await fetch(manifestUrl, {\n    headers: {\n      'X-API-Key': apiKey\n    }\n  }).then(response => response.json()).then(data => {\n    const manifest = data.Response;\n\n    // const manifestKeys = Object.keys(manifest);\n    // // console.log('Manifest Keys:', manifestKeys);\n\n    // const worldComponentKeys = Object.keys(\n    //   manifest.jsonWorldComponentContentPaths.en\n    // );\n    // console.log(\n    //   'jsonWorldComponentContentPaths.en Keys:',\n    //   worldComponentKeys\n    // );\n    const inventoryUrl = manifest.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;\n    fetch('https://www.bungie.net' + inventoryUrl, {\n      headers: {\n        'Accept-Encoding': 'gzip'\n      }\n    }).then(response => response.json()).then(inventoryData => {\n      const ignitionCodeItem = Object.values(inventoryData).filter(item => item.displayProperties.name === 'Ignition Code');\n      if (ignitionCodeItem) {\n        console.log('Ignition Code item found!!!!!!', ignitionCodeItem);\n      } else {\n        console.log('Ignition Code item not found :(((((((( ');\n      }\n    }).catch(error => {\n      console.error('Error fetching inventory data:', error);\n    });\n  });\n};\nweaponFetch();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsT0FBTyxDQUFDO0VBQ1pDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxtQkFBbUI7SUFDeEMsSUFBSSxDQUFDRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUM5RDtFQUNBQSxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsNkJBQTZCO0VBQ2hFO0FBQ0Y7QUFDQSwrREFBZVAsT0FBTyxFQUFDO0FBRXZCLE1BQU1RLE1BQU0sR0FBRyxrQ0FBa0M7QUFDakQsTUFBTUMsV0FBVyxHQUFHLG9EQUFvRDtBQUN4RTs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsZUFBQUEsQ0FBQSxFQUFrQjtFQUNwQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxXQUFXLEVBQUU7SUFDdENJLE9BQU8sRUFBRTtNQUNQLFdBQVcsRUFBRUw7SUFDZjtFQUNGLENBQUMsQ0FBQyxDQUNDTSxJQUFJLENBQUVILFFBQVEsSUFBS0EsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ25DRCxJQUFJLENBQUVFLElBQUksSUFBSztJQUNkLE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxRQUFROztJQUU5QjtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsTUFBTUMsWUFBWSxHQUNoQkYsUUFBUSxDQUFDRyw4QkFBOEIsQ0FBQ0MsRUFBRSxDQUN2Q0MsOEJBQThCO0lBRW5DVixLQUFLLENBQUMsd0JBQXdCLEdBQUdPLFlBQVksRUFBRTtNQUM3Q04sT0FBTyxFQUFFO1FBQ1AsaUJBQWlCLEVBQUU7TUFDckI7SUFDRixDQUFDLENBQUMsQ0FDQ0MsSUFBSSxDQUFFSCxRQUFRLElBQUtBLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNuQ0QsSUFBSSxDQUFFUyxhQUFhLElBQUs7TUFDdkIsTUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSCxhQUFhLENBQUMsQ0FBQ0ksTUFBTSxDQUN6REMsSUFBSSxJQUFLQSxJQUFJLENBQUNDLGlCQUFpQixDQUFDQyxJQUFJLEtBQUssZUFDNUMsQ0FBQztNQUNELElBQUlOLGdCQUFnQixFQUFFO1FBQ3BCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRVIsZ0JBQWdCLENBQUM7TUFDakUsQ0FBQyxNQUFNO1FBQ0xPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlDQUF5QyxDQUFDO01BQ3hEO0lBQ0YsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBRUMsS0FBSyxJQUFLO01BQ2hCSCxPQUFPLENBQUNHLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRUEsS0FBSyxDQUFDO0lBQ3hELENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRHhCLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2luZGVyZ3VhcmRpYW5zLy4vc3JjL3NjcmlwdHMvYXBwbGljYXRpb24uanM/ODBiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcihlbGUpIHtcclxuICAgIHRoaXMuZWxlID0gZWxlO1xyXG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gJzxoMT53b3JraW5nITwvaDE+JztcclxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAnc2xpZ2h0bHkgZGlmZmVyZW50IHdvcmtpbmchJztcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcclxuXHJcbmNvbnN0IGFwaUtleSA9ICczZmQxNTJkNTkwYTk0YWIwODg5OTNmY2M5MjkyZTZmOSc7XHJcbmNvbnN0IG1hbmlmZXN0VXJsID0gJ2h0dHBzOi8vd3d3LmJ1bmdpZS5uZXQvUGxhdGZvcm0vRGVzdGlueTIvTWFuaWZlc3QvJztcclxuLy8gY29uc3QganNvbkZpbGVQYXRoID0gJy4vZDIuanNvbic7XHJcblxyXG5jb25zdCB3ZWFwb25GZXRjaCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtYW5pZmVzdFVybCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnWC1BUEktS2V5JzogYXBpS2V5LFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IGRhdGEuUmVzcG9uc2U7XHJcblxyXG4gICAgICAvLyBjb25zdCBtYW5pZmVzdEtleXMgPSBPYmplY3Qua2V5cyhtYW5pZmVzdCk7XHJcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdNYW5pZmVzdCBLZXlzOicsIG1hbmlmZXN0S2V5cyk7XHJcblxyXG4gICAgICAvLyBjb25zdCB3b3JsZENvbXBvbmVudEtleXMgPSBPYmplY3Qua2V5cyhcclxuICAgICAgLy8gICBtYW5pZmVzdC5qc29uV29ybGRDb21wb25lbnRDb250ZW50UGF0aHMuZW5cclxuICAgICAgLy8gKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgIC8vICAgJ2pzb25Xb3JsZENvbXBvbmVudENvbnRlbnRQYXRocy5lbiBLZXlzOicsXHJcbiAgICAgIC8vICAgd29ybGRDb21wb25lbnRLZXlzXHJcbiAgICAgIC8vICk7XHJcbiAgICAgIGNvbnN0IGludmVudG9yeVVybCA9XHJcbiAgICAgICAgbWFuaWZlc3QuanNvbldvcmxkQ29tcG9uZW50Q29udGVudFBhdGhzLmVuXHJcbiAgICAgICAgICAuRGVzdGlueUludmVudG9yeUl0ZW1EZWZpbml0aW9uO1xyXG5cclxuICAgICAgZmV0Y2goJ2h0dHBzOi8vd3d3LmJ1bmdpZS5uZXQnICsgaW52ZW50b3J5VXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChpbnZlbnRvcnlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpZ25pdGlvbkNvZGVJdGVtID0gT2JqZWN0LnZhbHVlcyhpbnZlbnRvcnlEYXRhKS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRpc3BsYXlQcm9wZXJ0aWVzLm5hbWUgPT09ICdJZ25pdGlvbiBDb2RlJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChpZ25pdGlvbkNvZGVJdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZ25pdGlvbiBDb2RlIGl0ZW0gZm91bmQhISEhISEnLCBpZ25pdGlvbkNvZGVJdGVtKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZ25pdGlvbiBDb2RlIGl0ZW0gbm90IGZvdW5kIDooKCgoKCgoKCAnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGludmVudG9yeSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG53ZWFwb25GZXRjaCgpO1xyXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJhcGlLZXkiLCJtYW5pZmVzdFVybCIsIndlYXBvbkZldGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImRhdGEiLCJtYW5pZmVzdCIsIlJlc3BvbnNlIiwiaW52ZW50b3J5VXJsIiwianNvbldvcmxkQ29tcG9uZW50Q29udGVudFBhdGhzIiwiZW4iLCJEZXN0aW55SW52ZW50b3J5SXRlbURlZmluaXRpb24iLCJpbnZlbnRvcnlEYXRhIiwiaWduaXRpb25Db2RlSXRlbSIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJkaXNwbGF5UHJvcGVydGllcyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/application.js\n");

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