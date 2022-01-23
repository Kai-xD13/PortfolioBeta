let popup = document.querySelector(".window");
let flash = document.querySelectorAll(".open-window");
let burguerMenu = document.querySelector(".hamburger");
let hideNav = document.querySelector(".mobileMenu");
hideNav.style.display = "none";

function crossLine() {
    this.classList.toggle("menu");
    if(this.classList.contains("menu")){
        hideNav.style.display = "flex";
    }
    else {
        hideNav.style.display = "none";
    }
}
burguerMenu.addEventListener("click", crossLine);

flash.forEach(e => e.addEventListener("click", function (){
    if(popup.style.display === "none") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none"
    }
}));




