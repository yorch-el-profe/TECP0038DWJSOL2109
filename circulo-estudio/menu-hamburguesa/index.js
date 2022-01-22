var button = document.getElementById("hamburguer");
var menu = document.getElementById("menu");

button.addEventListener("click", function () {
  menu.classList.toggle("menu-abierto");
});
