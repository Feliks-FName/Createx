let root = document.querySelector(":root");
let getRootStyles = getComputedStyle(root);
let gap = parseInt(getRootStyles.getPropertyValue("--grid-gap"));

const projSlider = document.querySelector(".projects-section__items");

if (projSlider) {
  const projectsSlider = new Swiper(projSlider, {
    slidesPerView: 1,
    spaceBetween: gap,

    // Ищем главный слайд, чтобы от него найти следующие слайды и нацепить на него класс для управления Opasity и visible.
    on: {
      init: function () {
        const activeSlide = projSlider.querySelector(".swiper-slide-active");

        const nextActiveSlide = activeSlide.nextElementSibling;

        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add("slide-visible");
        nextActiveSlide.classList.add("slide-visible");
        nextNextActiveSlide.classList.add("slide-visible");
      },
    },

    navigation: {
      nextEl: ".projects-section__next",
      prevEl: ".projects-section__prew",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  document
    .querySelector(".projects-section__prew")
    .addEventListener("click", () => {
      const activeSlide = projSlider.querySelector(".swiper-slide-next");

      document
        .querySelectorAll(".projects-section__items .swiper-slide")
        .forEach((el) => {
          el.classList.remove("slide-visible");
        });

      if (activeSlide.previousElementSibling) {
        const nextActiveSlide = activeSlide.previousElementSibling;

        activeSlide.classList.add("slide-visible");
        nextActiveSlide.classList.add("slide-visible");
        activeSlide.nextElementSibling.classList.add("slide-visible");
      }
    });

  document
    .querySelector(".projects-section__next")
    .addEventListener("click", () => {
      const activeSlide = projSlider.querySelector(".swiper-slide-active");

      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      let colects = document.querySelectorAll(
        ".projects-section__items .swiper-slide"
      );

      for (const elem of colects) {
        elem.classList.remove("slide-visible");
      }

      activeSlide.classList.add("slide-visible");
      nextActiveSlide.classList.add("slide-visible");
      nextNextActiveSlide.classList.add("slide-visible");
    });
}

// testimonialsSlider
const testimonSliders = document.querySelector(".testimonials__items");
if (testimonSliders) {
  const testimonialsSlider = new Swiper(".testimonials__items", {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,

    on: {
      init: function () {
        const activeSlide = testimonSliders.querySelector(
          ".swiper-slide-active"
        );

        const nextActiveSlide = activeSlide.nextElementSibling;

        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add("slide-visible");
        nextActiveSlide.classList.add("slide-visible");
        nextNextActiveSlide.classList.add("slide-visible");
      },
    },

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prew",
    },
  });
}

// Work-slider
const workImages = document.querySelector(".work-images-slider");
if (workImages) {
  const workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const workSliderNav = new Swiper(workImages, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prew",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

// About slider
const historySlider = document.querySelector(".history-slider");
if (historySlider) {
  const aboutSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    mousewheel: true,

    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prew",
    },
  });

  const historyBtns = document.querySelectorAll(".history-nav__btn");
  historyBtns.forEach((el, index) => {
    el.setAttribute("data-index", index);

    el.addEventListener("click", (e) => {
      const indexs = e.currentTarget.dataset.index;

      historyBtns.forEach((el) => {
        el.classList.remove("history-nav__btn--active");
      });
      e.currentTarget.classList.add("history-nav__btn--active");
      aboutSlider.slideTo(indexs);
    });
  });

  // Реакция кнопок на переключение слайдов стрелочками
  aboutSlider.on("slideChange", function () {
    historyBtns.forEach((el) => {
      el.classList.remove("history-nav__btn--active");
      const indexBtn = el.dataset.index;

      if (aboutSlider.realIndex == indexBtn) {
        el.classList.add("history-nav__btn--active");
      }
    });
  });
}

// hero-slider
const heroSliderSpeed = 1500;
const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue("--hero-slider-speed"); //get
document.body.style.setProperty("--hero-slider-speed", heroSliderSpeed + "ms"); //set
const heroSlider = document.querySelector(".hero-slider");
if (heroSlider) {
  const aboutSlider = new Swiper(heroSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      prevEl: ".hero__prew",
      nextEl: ".hero__next",
    },
    speed: heroSliderSpeed,
    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".hero-slider__pag",
      type: "bullets",
      clickable: true,
    },

    on: {
      init: function () {
        const paginationBullets = document.querySelectorAll(
          ".hero-slider__pag .swiper-pagination-bullet"
        );

        paginationBullets.forEach((el) => {
          el.innerHTML = `<span class="hero-slider__bar"></span>`;
        });
      },
    },
  });
}
