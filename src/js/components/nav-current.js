window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav__link");
  links.forEach((el) => {
    if (el.href == window.location) {
      el.classList.add("nav__link--current");
    }
  });
});
