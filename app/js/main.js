/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sliders */ "./src/js/components/sliders.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_sliders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/progress */ "./src/js/components/progress.js");
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_portfolio_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portfolio-tabs */ "./src/js/components/portfolio-tabs.js");
/* harmony import */ var _components_portfolio_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_portfolio_tabs__WEBPACK_IMPORTED_MODULE_2__);
console.log("components");




/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
// import { burger } from './functions/burger';
// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_graph_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/graph-accordion */ "./src/js/vendor/graph-accordion.js");
/* harmony import */ var _vendor_graph_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_graph_accordion__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/portfolio-tabs.js":
/*!*********************************************!*\
  !*** ./src/js/components/portfolio-tabs.js ***!
  \*********************************************/
/***/ (() => {

var portfolioTabsNav = document.querySelector(".portfolio-tabs-nav");
var portfolioTabsNavBtns = document.querySelectorAll(".portfolio-tabs-nav__btn");
var portfolioTabsItems = document.querySelectorAll(".portfolio-tabs__item");
var portfolioTabsItemsVisible = document.querySelectorAll(".portfolio-tabs__item--visible");
var loadMoreBtn = document.querySelector(".load-more__btn");
var maxItems = 9;

if (portfolioTabsNav) {
  // показать или скрыть кнопку
  var isLoadMoreNeeded = function isLoadMoreNeeded(selector) {
    if (selector.length <= maxItems) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }
  }; // Показывает необходимое кол-во элементов в зависимости от условия


  var hideMoreItems = function hideMoreItems(selector) {
    if (selector.length > maxItems) {
      // Создаем массив, зависящий от переданной переменной в функцию
      var arr = Array.from(selector); // Вырезаем из массива все элементы после 9

      var hiddenItems = arr.slice(maxItems, selector.length); // Теперь удаляем им классы, чтобы они скрылись

      hiddenItems.forEach(function (el) {
        el.classList.remove("portfolio-tabs__item--visible");
        el.classList.remove("portfolio-tabs__item--visible-more");
      });
    }
  }; // При загрузке стрнаицы скрываем все элементы, которых более 9


  hideMoreItems(portfolioTabsItems); // Кнопки навигации

  portfolioTabsNav.addEventListener("click", function (e) {
    var target = e.target;

    if (target.classList.contains("portfolio-tabs-nav__btn")) {
      var path = target.dataset.path; // подсвечиваем кнопку

      portfolioTabsNavBtns.forEach(function (el) {
        el.classList.remove("portfolio-tabs-nav__btn--active");
        target.classList.add("portfolio-tabs-nav__btn--active");
      }); // Очищаем от классов

      portfolioTabsItems.forEach(function (el) {
        el.classList.remove("portfolio-tabs__item--visible");
        el.classList.remove("portfolio-tabs__item--visible-more");
      }); // Добавляем НУЖНЫМ элементам классы, чтобы они показались

      document.querySelectorAll("[data-target=\"".concat(path, "\"]")).forEach(function (el) {
        el.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible");
      }); // Если элементов <=9, то убираем кнопку показать еще

      isLoadMoreNeeded(document.querySelectorAll("[data-target=\"".concat(path, "\"]"))); // делаем так чтобы элементов до нажатия кнопки было не более 9. Описание ф-ии смотри выше

      hideMoreItems(document.querySelectorAll(".portfolio-tabs__item--visible")); // При нажатии на кнопку все элементы

      if (path == "all") {
        // перебираем все элементы и добавляем им нужный класс, чтобы показать их все при нажатии
        portfolioTabsItems.forEach(function (el) {
          el.classList.add("portfolio-tabs__item--visible"); // Контолируем. Показывать или скрыть кнопку

          isLoadMoreNeeded(document.querySelectorAll(".portfolio-tabs__item--visible")); // Контролируем сколько элементов показать

          hideMoreItems(document.querySelectorAll(".portfolio-tabs__item--visible"));
        });
      }
    }
  }); // Кнопка показать еще

  loadMoreBtn.addEventListener("click", function (e) {
    // Показывает data-attr подсвеченой кнопки
    var path = document.querySelector(".portfolio-tabs-nav__btn--active").dataset.path; // Случай для всех элементов

    if (path == "all") {
      // Перебираем все элементы и добавляем им класс, который заставит всех показаться)
      portfolioTabsItems.forEach(function (el) {
        el.classList.add("portfolio-tabs__item--visible-more"); // Скрываем кнопку показать еще

        loadMoreBtn.style.display = "none";
      }); // Случай, когда выбираем каким элементам показаться
    } else {
      // Ищем элементы по data-attr, перебираем их, и присваиваем их родителю класс, который заставит показаться элементы по выбранному data-attr.
      document.querySelectorAll("[data-target=\"".concat(path, "\"]")).forEach(function (el) {
        el.closest(".portfolio-tabs__item").classList.add("portfolio-tabs__item--visible-more");
      }); // Скрываем кнопку показать еще

      loadMoreBtn.style.display = "none";
    }
  });
}

/***/ }),

/***/ "./src/js/components/progress.js":
/*!***************************************!*\
  !*** ./src/js/components/progress.js ***!
  \***************************************/
/***/ (() => {

var circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(function (el) {
  if (el.dataset.percentage == 'true') {
    var progress = el.querySelector('.progress');
    var valueBlock = el.querySelector('.facts-element__value');
    var radius = progress.getAttribute('r');
    var circleLength = 2 * Math.PI * radius;
    var full = el.dataset.full;
    var value = el.dataset.value;
    var percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    var _progress = el.querySelector('.progress');

    var _valueBlock = el.querySelector('.facts-element__value');

    var _radius = _progress.getAttribute('r');

    var _circleLength = 2 * Math.PI * _radius;

    var percent = el.dataset.percent;

    var _percentageProgress = Math.floor(percent);

    _valueBlock.textContent = percent + '%';

    _progress.setAttribute('stroke-dasharray', _circleLength);

    _progress.setAttribute('stroke-dashoffset', _circleLength - _circleLength * _percentageProgress / 100);
  }
});

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var root = document.querySelector(":root");
var getRootStyles = getComputedStyle(root);
var gap = parseInt(getRootStyles.getPropertyValue("--grid-gap"));
var projSlider = document.querySelector(".projects-section__items");

if (projSlider) {
  var projectsSlider = new Swiper(projSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    // Ищем главный слайд, чтобы от него найти следующие слайды и нацепить на него класс для управления Opasity и visible.
    on: {
      init: function init() {
        var activeSlide = projSlider.querySelector(".swiper-slide-active");
        var nextActiveSlide = activeSlide.nextElementSibling;
        var nextNextActiveSlide = nextActiveSlide.nextElementSibling;
        activeSlide.classList.add("slide-visible");
        nextActiveSlide.classList.add("slide-visible");
        nextNextActiveSlide.classList.add("slide-visible");
      }
    },
    navigation: {
      nextEl: ".projects-section__next",
      prevEl: ".projects-section__prew"
    }
  });
  document.querySelector(".projects-section__prew").addEventListener("click", function () {
    var activeSlide = projSlider.querySelector(".swiper-slide-next");
    document.querySelectorAll(".projects-section__items .swiper-slide").forEach(function (el) {
      el.classList.remove("slide-visible");
    });

    if (activeSlide.previousElementSibling) {
      var nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add("slide-visible");
      nextActiveSlide.classList.add("slide-visible");
      activeSlide.nextElementSibling.classList.add("slide-visible");
    }
  });
  document.querySelector(".projects-section__next").addEventListener("click", function () {
    var activeSlide = projSlider.querySelector(".swiper-slide-active");
    var nextActiveSlide = activeSlide.nextElementSibling;
    var nextNextActiveSlide = nextActiveSlide.nextElementSibling;
    var colects = document.querySelectorAll(".projects-section__items .swiper-slide");

    var _iterator = _createForOfIteratorHelper(colects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        elem.classList.remove("slide-visible");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    activeSlide.classList.add("slide-visible");
    nextActiveSlide.classList.add("slide-visible");
    nextNextActiveSlide.classList.add("slide-visible");
  });
}
/* 
.
.
.
.
.
.
.
.
 */
// testimonialsSlider


var testimonSliders = document.querySelector(".testimonials__items");

if (testimonSliders) {
  var testimonialsSlider = new Swiper(".testimonials__items", {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    on: {
      init: function init() {
        var activeSlide = testimonSliders.querySelector(".swiper-slide-active");
        var nextActiveSlide = activeSlide.nextElementSibling;
        var nextNextActiveSlide = nextActiveSlide.nextElementSibling;
        activeSlide.classList.add("slide-visible");
        nextActiveSlide.classList.add("slide-visible");
        nextNextActiveSlide.classList.add("slide-visible");
      }
    },
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prew"
    }
  });
} // Work-slider


var workImages = document.querySelector(".work-images-slider");

if (workImages) {
  var workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true
  });
  var workSliderNav = new Swiper(workImages, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prew"
    },
    thumbs: {
      swiper: workSlider
    }
  });
} // About slider


var historySlider = document.querySelector(".history-slider");

if (historySlider) {
  var aboutSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    mousewheel: true,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prew"
    }
  });
  var historyBtns = document.querySelectorAll(".history-nav__btn");
  historyBtns.forEach(function (el, index) {
    el.setAttribute("data-index", index);
    el.addEventListener("click", function (e) {
      var indexs = e.currentTarget.dataset.index;
      historyBtns.forEach(function (el) {
        el.classList.remove("history-nav__btn--active");
      });
      e.currentTarget.classList.add("history-nav__btn--active");
      aboutSlider.slideTo(indexs);
    });
  }); // Реакция кнопок на переключение слайдов стрелочками

  aboutSlider.on("slideChange", function () {
    historyBtns.forEach(function (el) {
      el.classList.remove("history-nav__btn--active");
      var indexBtn = el.dataset.index;

      if (aboutSlider.realIndex == indexBtn) {
        el.classList.add("history-nav__btn--active");
      }
    });
  });
}

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var mobileCheck = function mobileCheck() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/graph-accordion.js":
/*!******************************************!*\
  !*** ./src/js/vendor/graph-accordion.js ***!
  \******************************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GraphAccordion = /*#__PURE__*/function () {
  function GraphAccordion(selector, options) {
    _classCallCheck(this, GraphAccordion);

    var defaultOptions = {
      isOpen: function isOpen() {},
      isClose: function isClose() {},
      speed: 300
    };
    this.options = Object.assign(defaultOptions, options);
    this.accordion = document.querySelector(selector);
    this.control = this.accordion.querySelector('.accordion__control');
    this.content = this.accordion.querySelector('.accordion__content');
    this.event();
    this.start();
  }

  _createClass(GraphAccordion, [{
    key: "start",
    value: function start() {
      if (this.accordion) {
        if (this.accordion.classList.contains('is-open')) {
          this.open();
        }
      }
    }
  }, {
    key: "event",
    value: function event() {
      var _this = this;

      console.log('event!');

      if (this.accordion) {
        this.accordion.addEventListener('click', function (e) {
          _this.accordion.classList.toggle('open');

          if (_this.accordion.classList.contains('open')) {
            _this.open();
          } else {
            _this.close();
          }
        });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.accordion.style.setProperty('--accordion-time', "".concat(this.options.speed / 1000, "s"));
      this.accordion.classList.add('is-open');
      this.control.setAttribute('aria-expanded', true);
      this.content.setAttribute('aria-hidden', false);
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
      this.options.isOpen(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.accordion.classList.remove('is-open');
      this.control.setAttribute('aria-expanded', false);
      this.content.setAttribute('aria-hidden', true);
      this.content.style.maxHeight = null;
      this.options.isClose(this);
    }
  }]);

  return GraphAccordion;
}();

if (document.querySelector('.we-offer')) {
  var accordion1 = new GraphAccordion('.accordion-1', {
    speed: 300
  });
  var accordion2 = new GraphAccordion('.accordion-2', {
    speed: 300
  });
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map