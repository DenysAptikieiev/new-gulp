import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebP();
console.log("Hello world!");

// const swiper = new Swiper();

const burger = document.querySelector(".header_menu_burger");
const burgerMenu = document.querySelector(".header_menu_links-list-mobile");

const closeBurgerMenu = (e) => {
	console.log(e.target);
	if(e.target.classList.contains("header_menu_burger" || "header_menu_links-list-mobile")) {
		return
	}
	if (burger.classList.contains("open")) {
		burger.classList.remove("open");
		burgerMenu.classList.remove("open");
	  }
}

const toggleBurgerMenu = () => {
	if (burger.classList.contains("open")) {
		burger.classList.remove("open");
		burgerMenu.classList.remove("open");
	  } else {
		burger.classList.add("open");
		burgerMenu.classList.add("open");
	  }
}

burger.addEventListener("click", () => toggleBurgerMenu());

burger.removeEventListener("click", () => toggleBurgerMenu());

window.addEventListener('click', (e) => closeBurgerMenu(e))
