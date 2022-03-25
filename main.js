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

/***/ "./modulos/carousel.js":
/*!*****************************!*\
  !*** ./modulos/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carrosel)\n/* harmony export */ });\nfunction carrosel() {\r\n  $(() => {\r\n    function atualizar_info() {\r\n      $(\".projName\").text($(\".slick-center\").data(\"name\"));\r\n      $(\".projDesc\").text($(\".slick-center\").data(\"desc\"));\r\n    }\r\n    $(\".carrossel\").on(\"init\", () => {\r\n      atualizar_info();\r\n    });\r\n    $(\".carrossel\").slick({\r\n      infinite: !0,\r\n      centerMode: !0,\r\n      centerPadding: \"60px\",\r\n      slidesToShow: 3,\r\n      variableWidth: !0,\r\n      prevArrow: $(\"#prev\"),\r\n      nextArrow: $(\".next1\"),\r\n      responsive: [\r\n        {\r\n          breakpoint: 708,\r\n          settings: {\r\n            arrows: !1,\r\n            centerMode: !0,\r\n            centerPadding: \"10px\",\r\n            slidesToShow: 3,\r\n          },\r\n        },\r\n        {\r\n          breakpoint: 480,\r\n          settings: {\r\n            arrows: !1,\r\n            centerMode: !0,\r\n            centerPadding: \"10px\",\r\n            slidesToShow: 1,\r\n          },\r\n        },\r\n      ],\r\n    });\r\n    $(\".carrossel\").on(\"afterChange\", () => {\r\n      atualizar_info();\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/carousel.js?");

/***/ }),

/***/ "./modulos/cascate.js":
/*!****************************!*\
  !*** ./modulos/cascate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cascate)\n/* harmony export */ });\nfunction cascate() {\r\n  function rain() {\r\n    const amount = 5;\r\n    const foot = document.querySelector(\".final\");\r\n    let i = 0;\r\n    while (i < amount) {\r\n      const drop = document.createElement(\"i\");\r\n      const delay = Math.random() * -40;\r\n      const duration = Math.random * 5;\r\n      drop.style.animationDelay = `${delay}s`;\r\n      drop.style.animationDuration = `${duration}s`;\r\n      foot.appendChild(drop);\r\n      // eslint-disable-next-line no-plusplus\r\n      i++;\r\n    }\r\n  }\r\n  rain();\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/cascate.js?");

/***/ }),

/***/ "./modulos/easyScroll.js":
/*!*******************************!*\
  !*** ./modulos/easyScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initEasyScroll)\n/* harmony export */ });\nfunction initEasyScroll() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-anime=\"menu\"] a[href^=\"#\"]',\r\n  );\r\n  function scrollToSection(Event) {\r\n    Event.preventDefault();\r\n    const href = Event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n  }\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/easyScroll.js?");

/***/ }),

/***/ "./modulos/form.js":
/*!*************************!*\
  !*** ./modulos/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\nfunction form() {\r\n  const btn = document.querySelector(\".enviar\");\r\n  const enviar = document.querySelector(\"#enviar\");\r\n  const Nome = document.querySelector(\"#name\");\r\n  const Email = document.querySelector(\"#email\");\r\n  const mensagem = document.querySelector(\"#message\");\r\n  function EnviaMsg() {\r\n    const nome = Nome.value;\r\n    const email = Email.value;\r\n    const Mensagem = mensagem.value;\r\n    enviar.href = `mailto:dalvatechnologies@gmail.com?subject=${nome},%20${email}&body=${Mensagem}`;\r\n  }\r\n  btn.addEventListener(\"click\", EnviaMsg);\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/form.js?");

/***/ }),

/***/ "./modulos/initBackground.js":
/*!***********************************!*\
  !*** ./modulos/initBackground.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ background)\n/* harmony export */ });\nfunction background() {\r\n  const light = document.querySelector(\".light\");\r\n  const cont = document.querySelector(\".grid-container\");\r\n  function mouselight(e) {\r\n    const scrollY = document.documentElement.scrollTop;\r\n    light.style.left = `${e.clientX}px`;\r\n    light.style.top = `${e.clientY + scrollY}px`;\r\n    if (e.clientY + scrollY >= 2869) {\r\n      light.classList.remove(\"lightout\");\r\n      light.classList.add(\"blackout\");\r\n    } else {\r\n      light.classList.remove(\"blackout\");\r\n      light.classList.add(\"lightout\");\r\n    }\r\n  }\r\n  cont.addEventListener(\"mousemove\", mouselight);\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/initBackground.js?");

/***/ }),

/***/ "./modulos/initFly.js":
/*!****************************!*\
  !*** ./modulos/initFly.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fly)\n/* harmony export */ });\nfunction fly() {\r\n  const proj = document.querySelector(\".proj\");\r\n  if (proj.classList.contains(\"ativo\")) {\r\n    const text = document.querySelector(\".fly\");\r\n    text.innerHTML = text.textContent.replace(/\\S/g, \"<span>$&</span>\");\r\n    const animation = anime.timeline({\r\n      targets: \".fly span\",\r\n      easing: \"easeInOutExpo\",\r\n      loop: !1,\r\n    });\r\n    animation\r\n      .add({\r\n        rotate: () => anime.random(-360, 360),\r\n        translateX: () => anime.random(-500, 500),\r\n        translateY: () => anime.random(-500, 500),\r\n        duration: 1000,\r\n        delay: anime.stagger(20),\r\n      })\r\n      .add({\r\n        rotate: 0,\r\n        translateX: 0,\r\n        translateY: 0,\r\n        duration: 5000,\r\n        delay: anime.stagger(20),\r\n      });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/initFly.js?");

/***/ }),

/***/ "./modulos/initLogo.js":
/*!*****************************!*\
  !*** ./modulos/initLogo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logo)\n/* harmony export */ });\nfunction logo() {\r\n  var params = {\r\n    container: document.querySelector(\"#lottie\"),\r\n    renderer: \"svg\",\r\n    loop: !1,\r\n    autoplay: !0,\r\n    path: \"./img/D'alvaSVGOriginal.json\",\r\n  };\r\n  var anim = lottie.loadAnimation(params);\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/initLogo.js?");

/***/ }),

/***/ "./modulos/menu-mobile.js":
/*!********************************!*\
  !*** ./modulos/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./modulos/outsideClick.js\");\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"menu\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n  function openMenu() {\r\n    menuList.classList.add(\"ativo\");\r\n    menuButton.classList.add(\"ativo\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove(\"ativo\");\r\n      menuButton.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n  eventos.forEach(() => menuButton.addEventListener(\"click\", openMenu));\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/menu-mobile.js?");

/***/ }),

/***/ "./modulos/outsideClick.js":
/*!*********************************!*\
  !*** ./modulos/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elemento, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  function handleOutsideClick(event) {\r\n    if (!elemento.contains(event.target)) {\r\n      elemento.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n  if (!elemento.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      }, 0);\r\n    });\r\n    elemento.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/outsideClick.js?");

/***/ }),

/***/ "./modulos/scroll-anima.js":
/*!*********************************!*\
  !*** ./modulos/scroll-anima.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nfunction initAnimateScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowScreen = window.innerHeight * 0.6;\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const SectionVisible = sectionTop - windowScreen < 0;\r\n      if (SectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n  if (sections.length) {\r\n    animaScroll();\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./modulos/scroll-anima.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_initLogo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/initLogo.js */ \"./modulos/initLogo.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_initBackground_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/initBackground.js */ \"./modulos/initBackground.js\");\n/* harmony import */ var _modulos_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/scroll-anima.js */ \"./modulos/scroll-anima.js\");\n/* harmony import */ var _modulos_initFly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/initFly.js */ \"./modulos/initFly.js\");\n/* harmony import */ var _modulos_carousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/carousel.js */ \"./modulos/carousel.js\");\n/* harmony import */ var _modulos_cascate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/cascate.js */ \"./modulos/cascate.js\");\n/* harmony import */ var _modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/easyScroll.js */ \"./modulos/easyScroll.js\");\n/* harmony import */ var _modulos_form_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/form.js */ \"./modulos/form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modulos_initLogo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modulos_initBackground_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modulos_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modulos_initFly_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modulos_carousel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modulos_cascate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modulos_easyScroll_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modulos_form_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\n\n//# sourceURL=webpack://portfolio/./script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;