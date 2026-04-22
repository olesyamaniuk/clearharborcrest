document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".o-i-navigation-list");
  const headerRef = document.querySelector(".o-i-header");
  const navigationRef = document.querySelector(".o-i-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".o-i-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    }),
  );
});
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".o-i-toggle-button img");

  answer.classList.toggle("open");

  if (answer.classList.contains("open")) {
    buttonImg.src = "/img/4 (1).png";
    buttonImg.classList.add("rotated");
  } else {
    buttonImg.src = "/img/4 (2).png";
    buttonImg.classList.remove("rotated");
  }
}
