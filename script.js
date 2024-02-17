document.querySelector(".icon_menu").addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.add("show_menu");
});
document.querySelector(".icon_menu_close").addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.remove("show_menu");
});
