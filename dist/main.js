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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/application */ \"./src/scripts/application.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scripts_application__WEBPACK_IMPORTED_MODULE_0__]);\n_scripts_application__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import Example from './scripts/application';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  // new Example(main);\n\n  console.log('hello world');\n  // this is where things will actually start\n  console.log((0,_scripts_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Witherhoard'));\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNxRTtBQUVyRUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDOztFQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDMUI7RUFDQUQsT0FBTyxDQUFDQyxHQUFHLENBQUNQLGdFQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5kZXJndWFyZGlhbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgd2VhcG9uRmV0Y2gsIHsgd2l0aGVyaG9hcmRJdGVtIH0gZnJvbSAnLi9zY3JpcHRzL2FwcGxpY2F0aW9uJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgLy8gbmV3IEV4YW1wbGUobWFpbik7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xyXG4gIC8vIHRoaXMgaXMgd2hlcmUgdGhpbmdzIHdpbGwgYWN0dWFsbHkgc3RhcnRcclxuICBjb25zb2xlLmxvZyh3ZWFwb25GZXRjaCgnV2l0aGVyaG9hcmQnKSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsid2VhcG9uRmV0Y2giLCJ3aXRoZXJob2FyZEl0ZW0iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/application.js":
/*!************************************!*\
  !*** ./src/scripts/application.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ weaponFetch; }\n/* harmony export */ });\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = '<h1>working!</h1>';\n    this.ele.addEventListener('click', () => this.handleClick());\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'slightly different working!';\n  }\n}\n// export default Example;\n\nconst apiKey = '3fd152d590a94ab088993fcc9292e6f9';\nconst manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';\n// const jsonFilePath = './d2.json';\n\nasync function weaponFetch(searchName) {\n  fetch(manifestUrl, {\n    headers: {\n      'X-API-Key': apiKey\n    }\n  }).then(response => response.json()).then(data => {\n    const manifest = data.Response;\n    const inventoryUrl = manifest.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;\n    fetch('https://www.bungie.net' + inventoryUrl, {\n      headers: {\n        'Accept-Encoding': 'gzip'\n      }\n    }).then(response => response.json()).then(inventoryData => {\n      const codeItem = Object.values(inventoryData).filter(item => item.displayProperties.name === searchName);\n      if (searchName) {\n        const {\n          displayProperties,\n          flavorText,\n          itemTypeAndTierDisplayName,\n          itemTypeDisplayName\n        } = codeItem[0];\n        console.log('Code item found!!!!!!', displayProperties, flavorText, itemTypeAndTierDisplayName, itemTypeDisplayName);\n      } else {\n        console.log('Ignition Code item not found :(((((((( ');\n      }\n    }).catch(error => {\n      console.error('Error fetching inventory data:', error);\n    });\n  });\n}\nconst witherhoardItem = await weaponFetch('Witherhoard');\nconst breakneckItem = await weaponFetch('Breakneck');\nconst osteoStrigaItem = await weaponFetch('Osteo Striga');\nconst gnawingHungerItem = await weaponFetch('Gnawing Hunger');\nconst forbearanceItem = await weaponFetch('Forbearance');\nconst cataclysmicItem = await weaponFetch('Cataclysmic');\nconst retrofitEscapadeItem = await weaponFetch('Retrofit Escapade');\nconst apexPredatorItem = await weaponFetch('Apex Predator');\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TW5DLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNuRSxNQUFNb0MsZ0JBQWdCLEdBQUcsTUFBTXBDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbmRlcmd1YXJkaWFucy8uL3NyYy9zY3JpcHRzL2FwcGxpY2F0aW9uLmpzPzgwYjQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XHJcbiAgY29uc3RydWN0b3IoZWxlKSB7XHJcbiAgICB0aGlzLmVsZSA9IGVsZTtcclxuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9ICc8aDE+d29ya2luZyE8L2gxPic7XHJcbiAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ3NsaWdodGx5IGRpZmZlcmVudCB3b3JraW5nISc7XHJcbiAgfVxyXG59XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XHJcblxyXG5jb25zdCBhcGlLZXkgPSAnM2ZkMTUyZDU5MGE5NGFiMDg4OTkzZmNjOTI5MmU2ZjknO1xyXG5jb25zdCBtYW5pZmVzdFVybCA9ICdodHRwczovL3d3dy5idW5naWUubmV0L1BsYXRmb3JtL0Rlc3RpbnkyL01hbmlmZXN0Lyc7XHJcbi8vIGNvbnN0IGpzb25GaWxlUGF0aCA9ICcuL2QyLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd2VhcG9uRmV0Y2goc2VhcmNoTmFtZSkge1xyXG4gIGZldGNoKG1hbmlmZXN0VXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdYLUFQSS1LZXknOiBhcGlLZXksXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gZGF0YS5SZXNwb25zZTtcclxuICAgICAgY29uc3QgaW52ZW50b3J5VXJsID1cclxuICAgICAgICBtYW5pZmVzdC5qc29uV29ybGRDb21wb25lbnRDb250ZW50UGF0aHMuZW5cclxuICAgICAgICAgIC5EZXN0aW55SW52ZW50b3J5SXRlbURlZmluaXRpb247XHJcblxyXG4gICAgICBmZXRjaCgnaHR0cHM6Ly93d3cuYnVuZ2llLm5ldCcgKyBpbnZlbnRvcnlVcmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGludmVudG9yeURhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvZGVJdGVtID0gT2JqZWN0LnZhbHVlcyhpbnZlbnRvcnlEYXRhKS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRpc3BsYXlQcm9wZXJ0aWVzLm5hbWUgPT09IHNlYXJjaE5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoc2VhcmNoTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheVByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgZmxhdm9yVGV4dCxcclxuICAgICAgICAgICAgICBpdGVtVHlwZUFuZFRpZXJEaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICBpdGVtVHlwZURpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICB9ID0gY29kZUl0ZW1bMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICdDb2RlIGl0ZW0gZm91bmQhISEhISEnLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgIGZsYXZvclRleHQsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVBbmRUaWVyRGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVEaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lnbml0aW9uIENvZGUgaXRlbSBub3QgZm91bmQgOigoKCgoKCgoICcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW52ZW50b3J5IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHdpdGhlcmhvYXJkSXRlbSA9IGF3YWl0IHdlYXBvbkZldGNoKCdXaXRoZXJob2FyZCcpO1xyXG5jb25zdCBicmVha25lY2tJdGVtID0gYXdhaXQgd2VhcG9uRmV0Y2goJ0JyZWFrbmVjaycpO1xyXG5jb25zdCBvc3Rlb1N0cmlnYUl0ZW0gPSBhd2FpdCB3ZWFwb25GZXRjaCgnT3N0ZW8gU3RyaWdhJyk7XHJcbmNvbnN0IGduYXdpbmdIdW5nZXJJdGVtID0gYXdhaXQgd2VhcG9uRmV0Y2goJ0duYXdpbmcgSHVuZ2VyJyk7XHJcbmNvbnN0IGZvcmJlYXJhbmNlSXRlbSA9IGF3YWl0IHdlYXBvbkZldGNoKCdGb3JiZWFyYW5jZScpO1xyXG5jb25zdCBjYXRhY2x5c21pY0l0ZW0gPSBhd2FpdCB3ZWFwb25GZXRjaCgnQ2F0YWNseXNtaWMnKTtcclxuY29uc3QgcmV0cm9maXRFc2NhcGFkZUl0ZW0gPSBhd2FpdCB3ZWFwb25GZXRjaCgnUmV0cm9maXQgRXNjYXBhZGUnKTtcclxuY29uc3QgYXBleFByZWRhdG9ySXRlbSA9IGF3YWl0IHdlYXBvbkZldGNoKCdBcGV4IFByZWRhdG9yJyk7XHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsImFwaUtleSIsIm1hbmlmZXN0VXJsIiwid2VhcG9uRmV0Y2giLCJzZWFyY2hOYW1lIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYW5pZmVzdCIsIlJlc3BvbnNlIiwiaW52ZW50b3J5VXJsIiwianNvbldvcmxkQ29tcG9uZW50Q29udGVudFBhdGhzIiwiZW4iLCJEZXN0aW55SW52ZW50b3J5SXRlbURlZmluaXRpb24iLCJpbnZlbnRvcnlEYXRhIiwiY29kZUl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlzcGxheVByb3BlcnRpZXMiLCJuYW1lIiwiZmxhdm9yVGV4dCIsIml0ZW1UeXBlQW5kVGllckRpc3BsYXlOYW1lIiwiaXRlbVR5cGVEaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwid2l0aGVyaG9hcmRJdGVtIiwiYnJlYWtuZWNrSXRlbSIsIm9zdGVvU3RyaWdhSXRlbSIsImduYXdpbmdIdW5nZXJJdGVtIiwiZm9yYmVhcmFuY2VJdGVtIiwiY2F0YWNseXNtaWNJdGVtIiwicmV0cm9maXRFc2NhcGFkZUl0ZW0iLCJhcGV4UHJlZGF0b3JJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/application.js\n");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	!function() {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = function(queue) {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach(function(fn) { fn.r--; });
/******/ 				queue.forEach(function(fn) { fn.r-- ? fn.r++ : fn(); });
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = function(deps) { return deps.map(function(dep) {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then(function(r) {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, function(e) {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = function(fn) { fn(queue); };
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = function() {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}); };
/******/ 		__webpack_require__.a = function(module, body, hasAwait) {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise(function(resolve, rej) {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = function(fn) { queue && fn(queue), depQueues.forEach(fn), promise["catch"](function() {}); };
/******/ 			module.exports = promise;
/******/ 			body(function(deps) {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = function() { return currentDeps.map(function(d) {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}); }
/******/ 				var promise = new Promise(function(resolve) {
/******/ 					fn = function() { resolve(getResult); };
/******/ 					fn.r = 0;
/******/ 					var fnQueue = function(q) { q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))); };
/******/ 					currentDeps.map(function(dep) { dep[webpackQueues](fnQueue); });
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, function(err) { (err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue); });
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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