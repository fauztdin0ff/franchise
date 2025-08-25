/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*---------------------------------------------------------------------------
Истории
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   // Swiper
   const storiesSlider = new Swiper(".stories__slider", {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
         nextEl: ".stories__slider-next",
         prevEl: ".stories__slider-prev",
      },
      pagination: {
         el: '.stories__slider-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
         },
         600: {
            slidesPerView: 2,
            spaceBetween: 0,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 0,
         },
         1024: {
            slidesPerView: 4,
            spaceBetween: 0,
         }
      }
   });

});
Fancybox.bind("[data-fancybox]", {
   Slideshow: {
      playOnStart: true,
      timeout: 3000,
   },
   Toolbar: {
      display: {
         left: [],
         middle: [],
         right: ["slideshow", "close"],
      },
   },
   Images: {
      zoom: false,
   },
});


/*---------------------------------------------------------------------------
Tariffs slider
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   let tariffsSlider = null;
   const tariffsSliderContainer = document.querySelector(".tariffs__items");

   function initTariffSlider() {
      if (window.innerWidth < 1200 && !tariffsSlider) {
         tariffsSlider = new Swiper(tariffsSliderContainer, {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: false,
            pagination: {
               el: '.tariffs__items-pagination',
               clickable: true,
            },
            breakpoints: {
               320: {
                  slidesPerView: 1.05,
               },
               525: {
                  slidesPerView: 1.5,
               },
               768: {
                  slidesPerView: 2,
               },
               1100: {
                  slidesPerView: 3,
               }
            }
         });
      } else if (window.innerWidth >= 1200 && tariffsSlider) {
         tariffsSlider.destroy(true, true);
         tariffsSlider = null;
      }
   }

   initTariffSlider();
   window.addEventListener("resize", initTariffSlider);
});

/*---------------------------------------------------------------------------
Range slider
---------------------------------------------------------------------------*/
const slider = document.querySelector(".range-slider");
if (slider) {
   const track = slider.querySelector(".range-slider__track");
   const progress = slider.querySelector(".range-slider__progress");
   const thumb = slider.querySelector(".range-slider__thumb");
   const label = document.getElementById("populationValue");

   if (track && progress && thumb && label) {
      const min = +slider.dataset.min || 0;
      const max = +slider.dataset.max || 100;
      const step = +slider.dataset.step || 1;
      let value = +slider.dataset.value || min;

      function updateSlider(val) {
         value = Math.min(Math.max(val, min), max);
         const percent = ((value - min) / (max - min)) * 100;

         thumb.style.left = percent + "%";
         progress.style.width = percent + "%";
         label.textContent = value.toLocaleString("ru-RU");
      }

      function handleMove(clientX) {
         const rect = track.getBoundingClientRect();
         let percent = (clientX - rect.left) / rect.width;
         percent = Math.min(Math.max(percent, 0), 1);
         let val = min + percent * (max - min);
         val = Math.round(val / step) * step;
         updateSlider(val);
      }

      // drag мышкой
      thumb.addEventListener("mousedown", e => {
         e.preventDefault();
         function onMove(e) {
            handleMove(e.clientX);
         }
         function onUp() {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
         }
         document.addEventListener("mousemove", onMove);
         document.addEventListener("mouseup", onUp);
      });

      // drag на тач-устройствах
      thumb.addEventListener("touchstart", e => {
         function onMove(e) {
            if (e.touches.length > 0) {
               handleMove(e.touches[0].clientX);
            }
         }
         function onUp() {
            document.removeEventListener("touchmove", onMove);
            document.removeEventListener("touchend", onUp);
         }
         document.addEventListener("touchmove", onMove);
         document.addEventListener("touchend", onUp);
      });

      track.addEventListener("click", e => {
         handleMove(e.clientX);
      });

      updateSlider(value);
   }
}


})();

/******/ })()
;