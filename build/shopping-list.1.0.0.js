/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	
	  $("#js-shopping-list-form").submit(function (event) {
	    event.preventDefault();
	
	    $('.shopping-list').append('<li>' + '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + '<button class="shopping-item-delete">' + '<span class="button-label">delete</span></button>' + '</div>' + '</li>');
	    $(this)[0].reset();
	  });
	
	  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
	    $(this).closest("li").remove();
	  });
	  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
	    console.log("woo hoo");
	    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
	  });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=shopping-list.1.0.0.js.map