const toggle = document.getElementById("toggle");
const sideBar = document.querySelector(".sidebarWrapper");
const outerSpace = document.querySelector(".utterSpace");
const social = document.querySelector(".socials-hover");
const socialBtn = document.querySelector(".socialContainer");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("toggle-open");
  sideBar.classList.toggle("close");
  if (social.classList.contains("on")) {
    social.classList.remove("on");
  }
});
outerSpace.addEventListener("click", () => {
  if (social.classList.contains("on")) {
    social.classList.remove("on");
  }
});
socialBtn.addEventListener("click", () => {
  social.classList.toggle("on");
});
