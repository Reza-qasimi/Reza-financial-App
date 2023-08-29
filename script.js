const humburger = document.querySelector("#humburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelector("#hlink");
const faSolid = document.querySelector(".fa-solid");

humburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hlink.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});
