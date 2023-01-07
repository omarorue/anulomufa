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

/***/ "./src/ajax.js":
/*!*********************!*\
  !*** ./src/ajax.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doLongPolling\": () => (/* binding */ doLongPolling),\n/* harmony export */   \"enviarMensaje\": () => (/* binding */ enviarMensaje),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"retirarMensaje\": () => (/* binding */ retirarMensaje),\n/* harmony export */   \"verificarSession\": () => (/* binding */ verificarSession)\n/* harmony export */ });\nlet verificarSession = (onFinish) => {\n    // Lo que hay que hacer.\n    // Sumar un endpoint que cumpla el objetivo de verificar que la session sigue viva\n    // hacer fetch con get\n}\n\nlet login = (onFinish) => {\n    fetch('/login', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*'\n        },\n        body: JSON.stringify({nombreUsu: \"max\", password : \"max33redBull\"})\n        })\n        .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n        })\n        .then(function(data) {\n            console.log('data = ', data);\n            onFinish(data)\n        })\n        .catch(function(err) {\n            console.error(err);\n        });\n}\n\nlet retirarMensaje = ({idMensaje}, onMessageRecieved) => {\n    let url = ['/api/retirar/', idMensaje].join('')\n    fetch(url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*'\n        }})\n    .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n    })\n    .then(function(data) {\n        console.log('data************* = ', data);\n        onMessageRecieved(data.msg)\n    })\n    .catch(function(err) {\n        console.error(err);\n    });\n}\n\nlet enviarMensaje = (msg, onFinish) => {\n    let idDest = document.getElementById('idDestinatario').value\n    let url = ['/api/notify/', idDest].join('')    \n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*'\n        },\n        body: JSON.stringify({msg})\n        })\n        .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n        })\n        .then(function(data) {\n            console.log('data = ', data);\n            onFinish(data)\n        })\n        .catch(function(err) {\n            console.error(err);\n        });\n}\n\n\nlet doLongPolling = (guid, onMessageRecieved) => {\n    let url = ['/api/listen/', guid].join('')\n    fetch(url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*'\n        }})\n    .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n    })\n    .then(function(data) {\n        console.log(data)\n        if (data.status === 'TIMEOUT') {\n            doLongPolling(guid, onMessageRecieved)\n            return\n        }\n        if (data.status === 'NEW_MESSAGE') {\n            doLongPolling(guid, onMessageRecieved)\n            retirarMensaje(data, onMessageRecieved)\n        }\n    })\n    .catch(function(err) {\n        console.error(err);\n    });\n}\n\n//# sourceURL=webpack://empty-project/./src/ajax.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./src/ajax.js\");\n/*\nimport \"./styles.css\"\nimport \"./controllers\"\nimport {doLongPolling, enviarMensaje} from './ajax'\nimport {v4 as uuid} from 'uuid'\n*/\n\n\n\nconsole.log(\"up n running\");\n\n\n\ndocument.addEventListener('click', e => {\n    e.stopPropagation()\n\n    console.log(e.target.id)\n    switch (e.target.id) {\n        case 'btnLogin':\n            alert('se hizo click sobre el boton de login')\n            ;(0,_ajax__WEBPACK_IMPORTED_MODULE_0__.login)(resp => {\n                console.log(resp)\n            })\n            break;\n    }\n})\n\n\n/*\n{\n    if (localStorage.getItem('chatId') === null) {\n        localStorage.setItem('chatId', uuid())\n    }\n}\n\ndoLongPolling(localStorage.getItem('chatId'), (mensaje) => {\n    document.getElementById('mensajes').innerHTML = \n    document.getElementById('mensajes').innerHTML + ['<div class=\"msgRecibido\">RSP: ', mensaje, '<div />'].join('')\n})\n\ndocument.addEventListener('submit', e => {\n    e.preventDefault()\n    let texto = document.getElementById('textoEnviar').value\n    document.getElementById('mensajes').innerHTML = \n    document.getElementById('mensajes').innerHTML + ['<div class=\"msgEnviado\">', texto, '<div />'].join('')\n    enviarMensaje(texto, () => {})\n})\n*/\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

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