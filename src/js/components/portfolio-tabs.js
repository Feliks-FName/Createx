const portfolioTabsNav = document.querySelector(".portfolio-tabs-nav");
const portfolioTabsNavBtns = document.querySelectorAll(
  ".portfolio-tabs-nav__btn"
);
const portfolioTabsItems = document.querySelectorAll(".portfolio-tabs__item");
const portfolioTabsItemsVisible = document.querySelectorAll(
  ".portfolio-tabs__item--visible"
);
const loadMoreBtn = document.querySelector(".load-more__btn");
const maxItems = 9;

if (portfolioTabsNav) {
  // показать или скрыть кнопку
  const isLoadMoreNeeded = (selector) => {
    if (selector.length <= maxItems) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }
  };

  // Показывает необходимое кол-во элементов в зависимости от условия
  const hideMoreItems = (selector) => {
    if (selector.length > maxItems) {
      // Создаем массив, зависящий от переданной переменной в функцию
      const arr = Array.from(selector);
      // Вырезаем из массива все элементы после 9
      const hiddenItems = arr.slice(maxItems, selector.length);

      // Теперь удаляем им классы, чтобы они скрылись
      hiddenItems.forEach((el) => {
        el.classList.remove("portfolio-tabs__item--visible");
        el.classList.remove("portfolio-tabs__item--visible-more");
      });
    }
  };

  // При загрузке стрнаицы скрываем все элементы, которых более 9
  hideMoreItems(portfolioTabsItems);

  // Кнопки навигации
  portfolioTabsNav.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("portfolio-tabs-nav__btn")) {
      const path = target.dataset.path;

      // подсвечиваем кнопку
      portfolioTabsNavBtns.forEach((el) => {
        el.classList.remove("portfolio-tabs-nav__btn--active");
        target.classList.add("portfolio-tabs-nav__btn--active");
      });

      // Очищаем от классов
      portfolioTabsItems.forEach((el) => {
        el.classList.remove("portfolio-tabs__item--visible");
        el.classList.remove("portfolio-tabs__item--visible-more");
      });

      // Добавляем НУЖНЫМ элементам классы, чтобы они показались
      document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
        el.closest(".portfolio-tabs__item").classList.add(
          "portfolio-tabs__item--visible"
        );
      });

      // Если элементов <=9, то убираем кнопку показать еще
      isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));

      // делаем так чтобы элементов до нажатия кнопки было не более 9. Описание ф-ии смотри выше
      hideMoreItems(
        document.querySelectorAll(".portfolio-tabs__item--visible")
      );

      // При нажатии на кнопку все элементы
      if (path == "all") {
        // перебираем все элементы и добавляем им нужный класс, чтобы показать их все при нажатии
        portfolioTabsItems.forEach((el) => {
          el.classList.add("portfolio-tabs__item--visible");

          // Контолируем. Показывать или скрыть кнопку
          isLoadMoreNeeded(
            document.querySelectorAll(".portfolio-tabs__item--visible")
          );
          // Контролируем сколько элементов показать
          hideMoreItems(
            document.querySelectorAll(".portfolio-tabs__item--visible")
          );
        });
      }
    }
  });

  // Кнопка показать еще
  loadMoreBtn.addEventListener("click", (e) => {
    // Показывает data-attr подсвеченой кнопки
    const path = document.querySelector(".portfolio-tabs-nav__btn--active")
      .dataset.path;

    // Случай для всех элементов
    if (path == "all") {
      // Перебираем все элементы и добавляем им класс, который заставит всех показаться)
      portfolioTabsItems.forEach((el) => {
        el.classList.add("portfolio-tabs__item--visible-more");
        // Скрываем кнопку показать еще
        loadMoreBtn.style.display = "none";
      });

      // Случай, когда выбираем каким элементам показаться
    } else {
      // Ищем элементы по data-attr, перебираем их, и присваиваем их родителю класс, который заставит показаться элементы по выбранному data-attr.
      document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
        el.closest(".portfolio-tabs__item").classList.add(
          "portfolio-tabs__item--visible-more"
        );
      });
      // Скрываем кнопку показать еще
      loadMoreBtn.style.display = "none";
    }
  });
}
