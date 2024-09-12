/* Start Header*/

let anchorList = document.querySelectorAll("header>.container>nav>ul>li>a");

anchorList.forEach((item) => {
  item.addEventListener("click", () => {
    anchorList.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// -- nav menue for mobile --

let mobileBarsIcon = document.querySelector(
  "header>.container>nav>i.mobile-bars-icon"
);

let navList = document.querySelector("header>.container>nav>ul");

let navListItems = document.querySelectorAll("header>.container>nav>ul>li>a");

document.addEventListener("click", function (ev) {
  if (ev.target === mobileBarsIcon) {
    navList.classList.toggle("mobile-view");
  } else {
    let doNotRemove = false;
    for (let item of navListItems) {
      if (item === ev.target) {
        doNotRemove = true;
        break;
      }
    }
    if (!doNotRemove) navList.classList.remove("mobile-view");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navList.classList.remove("mobile-view");
  }
});

/* End Header*/

/* Start Portfolio */

let shuffleItems = document.querySelectorAll(
  ".portfolio>.container>.shuffle>li"
);

shuffleItems.forEach((item) => {
  item.addEventListener("click", () => {
    shuffleItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

/* End Portfolio */
