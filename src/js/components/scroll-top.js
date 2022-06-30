const smoothLink = document.querySelector(".to-top");
const headerHeight = document.querySelector(".header");
smoothLink.addEventListener("click", (e) => {
  e.preventDefault();
  const id = smoothLink.getAttribute("href");

  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

if (document.querySelector(".hero")) {
  showToTop(".hero", headerHeight.scrollHeight);
} else {
  showToTop(".page-hero", 0);
}

function showToTop(block, hightHeader) {
  window.addEventListener("scroll", () => {
    smoothLink.classList.remove("to-top--visible");
    const hero = document.querySelector(block);
    const top = window.scrollY;

    if (top >= hero.scrollHeight + hightHeader) {
      smoothLink.classList.add("to-top--visible");
    }
  });
}
