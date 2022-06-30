const country = document.querySelectorAll(".country");
if (document.querySelectorAll(".country").length) {
  const canada = document.querySelector(".country__canada");
  const popUp = document.querySelector(".worldwide-map__pop-up");
  const attrOne = canada.getAttribute("data-country");

  popUp.innerHTML = "We have partners in " + attrOne;
  country.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      canada.classList.remove("country__canada--active");
      const atr = e.target.getAttribute("data-country");
      popUp.innerHTML = "We have partners in " + atr;
    });
  });
}

// var myicon = document.getElementById("myicon");
// var mypopup = document.getElementById("mypopup");

// myicon.addEventListener("mouseover", showPopup);
// myicon.addEventListener("mouseout", hidePopup);

// function showPopup(evt) {
//   var iconPos = myicon.getBoundingClientRect();
//   mypopup.style.left = iconPos.right + 20 + "px";
//   mypopup.style.top = window.scrollY + iconPos.top - 60 + "px";
//   mypopup.style.display = "block";
// }

// function hidePopup(evt) {
//   mypopup.style.display = "none";
// }
