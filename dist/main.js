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

eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/application */ \"./src/scripts/application.js\");\n/* harmony import */ var _scripts_itemFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/itemFetch */ \"./src/scripts/itemFetch.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scripts_itemFetch__WEBPACK_IMPORTED_MODULE_1__]);\n_scripts_itemFetch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  new _scripts_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  console.log('hello world');\n  // this is where things will actually start\n  // console.log(weaponFetch('Witherhoard'));\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0E7QUFFNUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJTCw0REFBTyxDQUFDSSxJQUFJLENBQUM7RUFFakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUMxQjtFQUNBO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5kZXJndWFyZGlhbnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgaXRlbUZldGNoIGZyb20gJy4vc2NyaXB0cy9pdGVtRmV0Y2gnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBuZXcgRXhhbXBsZShtYWluKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XHJcbiAgLy8gdGhpcyBpcyB3aGVyZSB0aGluZ3Mgd2lsbCBhY3R1YWxseSBzdGFydFxyXG4gIC8vIGNvbnNvbGUubG9nKHdlYXBvbkZldGNoKCdXaXRoZXJob2FyZCcpKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiaXRlbUZldGNoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/application.js":
/*!************************************!*\
  !*** ./src/scripts/application.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var the_new_css_reset_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! the-new-css-reset/css/reset.css */ \"./node_modules/the-new-css-reset/css/reset.css\");\n\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = '<h1>working!</h1>';\n    this.ele.addEventListener('click', () => this.handleClick());\n  }\n  handleClick() {\n    this.ele.children[0].innerText = 'slightly different working!';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOztBQUF5QztBQUV6QyxNQUFNQSxPQUFPLENBQUM7RUFDWkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtJQUN4QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQzlEO0VBQ0FBLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyw2QkFBNkI7RUFDaEU7QUFDRjtBQUNBLCtEQUFlUCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2luZGVyZ3VhcmRpYW5zLy4vc3JjL3NjcmlwdHMvYXBwbGljYXRpb24uanM/ODBiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RoZS1uZXctY3NzLXJlc2V0L2Nzcy9yZXNldC5jc3MnO1xyXG5cclxuY2xhc3MgRXhhbXBsZSB7XHJcbiAgY29uc3RydWN0b3IoZWxlKSB7XHJcbiAgICB0aGlzLmVsZSA9IGVsZTtcclxuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9ICc8aDE+d29ya2luZyE8L2gxPic7XHJcbiAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ3NsaWdodGx5IGRpZmZlcmVudCB3b3JraW5nISc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/application.js\n");

/***/ }),

/***/ "./src/scripts/itemFetch.js":
/*!**********************************!*\
  !*** ./src/scripts/itemFetch.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ itemFetchAndDisplay; }\n/* harmony export */ });\nconst apiKey = '3fd152d590a94ab088993fcc9292e6f9';\nconst manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';\n// const jsonFilePath = './d2.json';\n\nasync function itemFetchAndDisplay(searchName) {\n  fetch(manifestUrl, {\n    headers: {\n      'X-API-Key': apiKey\n    }\n  }).then(response => response.json()).then(data => {\n    const manifest = data.Response;\n    const inventoryUrl = manifest.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;\n    fetch('https://www.bungie.net' + inventoryUrl, {\n      headers: {\n        'Accept-Encoding': 'gzip'\n      }\n    }).then(response => response.json()).then(inventoryData => {\n      const codeItem = Object.values(inventoryData).filter(item => item.displayProperties.name === searchName);\n      if (searchName) {\n        const {\n          displayProperties,\n          flavorText,\n          itemTypeAndTierDisplayName,\n          itemTypeDisplayName\n        } = codeItem[0];\n        console.log('Code item found!!!!!!', displayProperties, flavorText, itemTypeAndTierDisplayName, itemTypeDisplayName);\n        displayItemProperties(displayProperties, flavorText, itemTypeAndTierDisplayName, itemTypeDisplayName);\n      } else {\n        console.log('item not found :(((((((( ');\n      }\n    }).catch(error => {\n      console.error('Error fetching inventory data:', error);\n    });\n  });\n}\nfunction displayItemProperties(displayProperties, flavorText, itemTypeAndTierDisplayName, itemTypeDisplayName) {\n  const ul = document.createElement('ul');\n  const properties = [displayProperties.name, itemTypeAndTierDisplayName, itemTypeDisplayName, flavorText];\n  const icon = document.createElement('IMG');\n  const propImg = 'https://bungie.net' + displayProperties.icon;\n  icon.src = propImg;\n  ul.appendChild(icon);\n  properties.forEach(prop => {\n    const li = document.createElement('li');\n    li.textContent = prop;\n    ul.style.padding = '8px';\n    ul.style.border = '.5rem solid #ccc';\n    ul.style.marginBottom = '8px';\n    ul.appendChild(li);\n  });\n  document.getElementById('item-container').appendChild(ul);\n}\nconst witherhoardItem = await itemFetchAndDisplay('Witherhoard');\nconst breakneckItem = await itemFetchAndDisplay('Breakneck');\nconst osteoStrigaItem = await itemFetchAndDisplay('Osteo Striga');\nconst gnawingHungerItem = await itemFetchAndDisplay('Gnawing Hunger');\nconst forbearanceItem = await itemFetchAndDisplay('Forbearance');\nconst cataclysmicItem = await itemFetchAndDisplay('Cataclysmic');\nconst retrofitEscapadeItem = await itemFetchAndDisplay('Retrofit Escapade');\nconst apexPredatorItem = await itemFetchAndDisplay('Apex Predator');\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWSxLQUFLLENBQUNFLE1BQU0sR0FBRyxrQkFBa0I7SUFDcENkLEVBQUUsQ0FBQ1ksS0FBSyxDQUFDRyxZQUFZLEdBQUcsS0FBSztJQUU3QmYsRUFBRSxDQUFDTyxXQUFXLENBQUNHLEVBQUUsQ0FBQztFQUNwQixDQUFDLENBQUM7RUFFRlQsUUFBUSxDQUFDZSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1QsV0FBVyxDQUFDUCxFQUFFLENBQUM7QUFDM0Q7QUFDQSxNQUFNaUIsZUFBZSxHQUFHLE1BQU0vQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7QUFDaEUsTUFBTWdELGFBQWEsR0FBRyxNQUFNaEQsbUJBQW1CLENBQUMsV0FBVyxDQUFDO0FBQzVELE1BQU1pRCxlQUFlLEdBQUcsTUFBTWpELG1CQUFtQixDQUFDLGNBQWMsQ0FBQztBQUNqRSxNQUFNa0QsaUJBQWlCLEdBQUcsTUFBTWxELG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0FBQ3JFLE1BQU1tRCxlQUFlLEdBQUcsTUFBTW5ELG1CQUFtQixDQUFDLGFBQWEsQ0FBQztBQUNoRSxNQUFNb0QsZUFBZSxHQUFHLE1BQU1wRCxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7QUFDaEUsTUFBTXFELG9CQUFvQixHQUFHLE1BQU1yRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztBQUMzRSxNQUFNc0QsZ0JBQWdCLEdBQUcsTUFBTXRELG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2luZGVyZ3VhcmRpYW5zLy4vc3JjL3NjcmlwdHMvaXRlbUZldGNoLmpzPzYyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gJzNmZDE1MmQ1OTBhOTRhYjA4ODk5M2ZjYzkyOTJlNmY5JztcclxuY29uc3QgbWFuaWZlc3RVcmwgPSAnaHR0cHM6Ly93d3cuYnVuZ2llLm5ldC9QbGF0Zm9ybS9EZXN0aW55Mi9NYW5pZmVzdC8nO1xyXG4vLyBjb25zdCBqc29uRmlsZVBhdGggPSAnLi9kMi5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1GZXRjaEFuZERpc3BsYXkoc2VhcmNoTmFtZSkge1xyXG4gIGZldGNoKG1hbmlmZXN0VXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdYLUFQSS1LZXknOiBhcGlLZXksXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gZGF0YS5SZXNwb25zZTtcclxuICAgICAgY29uc3QgaW52ZW50b3J5VXJsID1cclxuICAgICAgICBtYW5pZmVzdC5qc29uV29ybGRDb21wb25lbnRDb250ZW50UGF0aHMuZW5cclxuICAgICAgICAgIC5EZXN0aW55SW52ZW50b3J5SXRlbURlZmluaXRpb247XHJcblxyXG4gICAgICBmZXRjaCgnaHR0cHM6Ly93d3cuYnVuZ2llLm5ldCcgKyBpbnZlbnRvcnlVcmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGludmVudG9yeURhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvZGVJdGVtID0gT2JqZWN0LnZhbHVlcyhpbnZlbnRvcnlEYXRhKS5maWx0ZXIoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmRpc3BsYXlQcm9wZXJ0aWVzLm5hbWUgPT09IHNlYXJjaE5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoc2VhcmNoTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheVByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgZmxhdm9yVGV4dCxcclxuICAgICAgICAgICAgICBpdGVtVHlwZUFuZFRpZXJEaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICBpdGVtVHlwZURpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICB9ID0gY29kZUl0ZW1bMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICdDb2RlIGl0ZW0gZm91bmQhISEhISEnLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgIGZsYXZvclRleHQsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVBbmRUaWVyRGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVEaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheUl0ZW1Qcm9wZXJ0aWVzKFxyXG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgIGZsYXZvclRleHQsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVBbmRUaWVyRGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgaXRlbVR5cGVEaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gbm90IGZvdW5kIDooKCgoKCgoKCAnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGludmVudG9yeSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SXRlbVByb3BlcnRpZXMoXHJcbiAgZGlzcGxheVByb3BlcnRpZXMsXHJcbiAgZmxhdm9yVGV4dCxcclxuICBpdGVtVHlwZUFuZFRpZXJEaXNwbGF5TmFtZSxcclxuICBpdGVtVHlwZURpc3BsYXlOYW1lXHJcbikge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgcHJvcGVydGllcyA9IFtcclxuICAgIGRpc3BsYXlQcm9wZXJ0aWVzLm5hbWUsXHJcbiAgICBpdGVtVHlwZUFuZFRpZXJEaXNwbGF5TmFtZSxcclxuICAgIGl0ZW1UeXBlRGlzcGxheU5hbWUsXHJcbiAgICBmbGF2b3JUZXh0LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICBjb25zdCBwcm9wSW1nID0gJ2h0dHBzOi8vYnVuZ2llLm5ldCcgKyBkaXNwbGF5UHJvcGVydGllcy5pY29uO1xyXG4gIGljb24uc3JjID0gcHJvcEltZztcclxuICB1bC5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9IHByb3A7XHJcblxyXG4gICAgdWwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xyXG4gICAgdWwuc3R5bGUuYm9yZGVyID0gJy41cmVtIHNvbGlkICNjY2MnO1xyXG4gICAgdWwuc3R5bGUubWFyZ2luQm90dG9tID0gJzhweCc7XHJcblxyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1jb250YWluZXInKS5hcHBlbmRDaGlsZCh1bCk7XHJcbn1cclxuY29uc3Qgd2l0aGVyaG9hcmRJdGVtID0gYXdhaXQgaXRlbUZldGNoQW5kRGlzcGxheSgnV2l0aGVyaG9hcmQnKTtcclxuY29uc3QgYnJlYWtuZWNrSXRlbSA9IGF3YWl0IGl0ZW1GZXRjaEFuZERpc3BsYXkoJ0JyZWFrbmVjaycpO1xyXG5jb25zdCBvc3Rlb1N0cmlnYUl0ZW0gPSBhd2FpdCBpdGVtRmV0Y2hBbmREaXNwbGF5KCdPc3RlbyBTdHJpZ2EnKTtcclxuY29uc3QgZ25hd2luZ0h1bmdlckl0ZW0gPSBhd2FpdCBpdGVtRmV0Y2hBbmREaXNwbGF5KCdHbmF3aW5nIEh1bmdlcicpO1xyXG5jb25zdCBmb3JiZWFyYW5jZUl0ZW0gPSBhd2FpdCBpdGVtRmV0Y2hBbmREaXNwbGF5KCdGb3JiZWFyYW5jZScpO1xyXG5jb25zdCBjYXRhY2x5c21pY0l0ZW0gPSBhd2FpdCBpdGVtRmV0Y2hBbmREaXNwbGF5KCdDYXRhY2x5c21pYycpO1xyXG5jb25zdCByZXRyb2ZpdEVzY2FwYWRlSXRlbSA9IGF3YWl0IGl0ZW1GZXRjaEFuZERpc3BsYXkoJ1JldHJvZml0IEVzY2FwYWRlJyk7XHJcbmNvbnN0IGFwZXhQcmVkYXRvckl0ZW0gPSBhd2FpdCBpdGVtRmV0Y2hBbmREaXNwbGF5KCdBcGV4IFByZWRhdG9yJyk7XHJcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJtYW5pZmVzdFVybCIsIml0ZW1GZXRjaEFuZERpc3BsYXkiLCJzZWFyY2hOYW1lIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtYW5pZmVzdCIsIlJlc3BvbnNlIiwiaW52ZW50b3J5VXJsIiwianNvbldvcmxkQ29tcG9uZW50Q29udGVudFBhdGhzIiwiZW4iLCJEZXN0aW55SW52ZW50b3J5SXRlbURlZmluaXRpb24iLCJpbnZlbnRvcnlEYXRhIiwiY29kZUl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlzcGxheVByb3BlcnRpZXMiLCJuYW1lIiwiZmxhdm9yVGV4dCIsIml0ZW1UeXBlQW5kVGllckRpc3BsYXlOYW1lIiwiaXRlbVR5cGVEaXNwbGF5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5SXRlbVByb3BlcnRpZXMiLCJjYXRjaCIsImVycm9yIiwidWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsInByb3BJbWciLCJzcmMiLCJhcHBlbmRDaGlsZCIsImZvckVhY2giLCJwcm9wIiwibGkiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsImdldEVsZW1lbnRCeUlkIiwid2l0aGVyaG9hcmRJdGVtIiwiYnJlYWtuZWNrSXRlbSIsIm9zdGVvU3RyaWdhSXRlbSIsImduYXdpbmdIdW5nZXJJdGVtIiwiZm9yYmVhcmFuY2VJdGVtIiwiY2F0YWNseXNtaWNJdGVtIiwicmV0cm9maXRFc2NhcGFkZUl0ZW0iLCJhcGV4UHJlZGF0b3JJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/itemFetch.js\n");

/***/ }),

/***/ "./node_modules/the-new-css-reset/css/reset.css":
/*!******************************************************!*\
  !*** ./node_modules/the-new-css-reset/css/reset.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdGhlLW5ldy1jc3MtcmVzZXQvY3NzL3Jlc2V0LmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5kZXJndWFyZGlhbnMvLi9ub2RlX21vZHVsZXMvdGhlLW5ldy1jc3MtcmVzZXQvY3NzL3Jlc2V0LmNzcz9hODQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/the-new-css-reset/css/reset.css\n");

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