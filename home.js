const navUl = document.querySelector(".nav-ul")
const closeHamburgerMenu = document.querySelector(".close-hamburger-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu")

hamburgerMenu.addEventListener("click", show);
closeHamburgerMenu.addEventListener("click", close);

function show() {
    navUl.style.display = "flex";
    navUl.style.top = "0";
}

function close() {
    navUl.style.top = "-105%";
}