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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"borrarAlumno\": () => (/* binding */ borrarAlumno),\n/* harmony export */   \"insertarAlumno\": () => (/* binding */ insertarAlumno),\n/* harmony export */   \"inventarUsuario\": () => (/* binding */ inventarUsuario),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"traerAlumnos\": () => (/* binding */ traerAlumnos),\n/* harmony export */   \"verificarSession\": () => (/* binding */ verificarSession)\n/* harmony export */ });\nlet verificarSession = (onFinish) => {\n    // Lo que hay que hacer.\n    // Sumar un endpoint que cumpla el objetivo de verificar que la session sigue viva\n    // hacer fetch con get\n}\n\nlet login = (onFinish) => {\n    fetch('/login', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*'\n        },\n        body: JSON.stringify({nomUsuario: \"max\", password : \"max33RedBull\"})\n        })\n        .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n        })\n        .then(function(data) {\n            console.log('data = ', data);            \n            localStorage.setItem('jwt', data.token)\n            onFinish(data)\n        })\n        .catch(function(err) {\n            console.error(err);\n        });\n}\n\nlet inventarUsuario = async (onFinish) => {\n    let resp = await fetch('/inventarusuario', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*',\n            'x-jwt': localStorage.getItem('jwt')\n        }})\n\n    let respJson = await resp.json()\n    return respJson\n}\n\nlet traerAlumnos = (onFinish) => {\n    fetch('/alumno', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*',\n            'x-jwt': localStorage.getItem('jwt')\n        }\n        })\n        .then(function(response) {\n            console.log('response =', response);\n            return response.json();\n        })\n        .then(function(data) {\n            console.log('data = ', data);\n            onFinish(data)\n        })\n        .catch(function(err) {\n            console.error(err);\n        });\n}\n\nlet insertarAlumno = async (objAlu) => {\n    let resp = await fetch('/alumno', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*',\n            'x-jwt': localStorage.getItem('jwt')\n        },\n        body: JSON.stringify(objAlu)\n        })\n\n    console.log(resp)\n}\n\nlet borrarAlumno = (idAlu, onFinish) => {\n    let url = ['/alumno/', idAlu].join('')\n    fetch(url, {\n        method: 'DELETE',\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin':'*',\n            'x-jwt': localStorage.getItem('jwt')\n        }\n        })\n        .then(function(response) {\n            console.log('response =', response);\n            if (response.status === 200) {\n                onFinish(null)\n                return\n            }\n            onFinish(new Error('NO SE PUDO BORRAR'))\n        })\n        .catch(function(err) {\n            onFinish(err);\n        });\n}\n\n\n\n//# sourceURL=webpack://empty-project/./src/ajax.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./src/ajax.js\");\n/*\nimport \"./styles.css\"\nimport \"./controllers\"\nimport {doLongPolling, enviarMensaje} from './ajax'\nimport {v4 as uuid} from 'uuid'\n*/\n\n\n\nconsole.log(\"up n running\");\n\n\n\ndocument.addEventListener('click', e => {\n    e.stopPropagation()\n\n    let hasClass = e.target.classList.contains('js-botonBorradoUsuario');\n\n    if (hasClass) {\n        (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.borrarAlumno)(e.target.dataset.idborrar, (err) => {\n            if (err) {\n                alert(err)\n                return\n            }\n            alert('Borrado correctamente !!!')\n            ;(0,_ajax__WEBPACK_IMPORTED_MODULE_0__.traerAlumnos)(xs => renderizarAlumnos(xs))\n        })\n    }\n\n\n    if (hasClass) {\n        return\n    }\n\n    switch (e.target.id) {\n        case 'btnLogin':\n            (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.login)(resp => {\n                console.log(resp)\n            })\n            break;\n        case 'btnInventar_LODEJO':\n            (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.inventarUsuario)(resp => {\n                console.log(resp)\n            })\n            break;\n        case 'btnInventar':            \n            (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.traerAlumnos)((resp) => {\n                console.log(resp)\n                renderizarAlumnos(resp)\n            })\n            break;\n    }\n})\n\nlet renderizarAlumnos = (arrAlu) => {\n    let tmpl = document.getElementById('templateTablaUsuarios').innerHTML\n    let cocinado = Mustache.render(tmpl, { alumnos: arrAlu})\n    document.getElementById('tablaUsuarios').innerHTML = cocinado\n}\n\n\n\nlet pasamanos = async () => {\n    try {\n        for (let i = 0; i < 50; i++) {\n            let alumno = await (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.inventarUsuario)()\n            let resp = await (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.insertarAlumno)(alumno)\n            console.log(resp)\n        }\n    }\n    catch (err) {\n        console.log(alumno)\n    }\n}\n\npasamanos()\n\n\n\n//# sourceURL=webpack://empty-project/./src/index.js?");

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