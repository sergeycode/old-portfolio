// simple parallax effect
var parallax = document.getElementById("wrap");

window.addEventListener("scroll", function() {
  var scrolledHeight = window.pageYOffset;
  var limit = parallax.offsetTop + parallax.offsetHeight;
  if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop)/1.5  + "px";
    } else {
      parallax.style.backgroundPositionY = "0";
    }
});

//mobile menu toggle
var nav = document.getElementById("nav");
var hero = document.getElementById("hero");
var menuImg = document.getElementById("menu-img");
var width = window.matchMedia( "(max-width: 480px)" );
if (width.matches) {
  nav.style.display = "none";
}
document.getElementById("menu").addEventListener("click", function() {
  if (nav.style.display === "none") {
        nav.style.display = "block";
        hero.style.display = "none";
        menuImg.src="images/icons/close.svg"
    } else {
        nav.style.display = "none";
        hero.style.display = "block";
        menuImg.src="images/icons/menu.svg"
    }
});
