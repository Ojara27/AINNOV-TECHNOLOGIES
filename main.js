
// Sticky navigation
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= navbar.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky"); 
    }
}

//Navbar Toggle
//nav is #menu sidenav
//img is #menu close menu btn
var menuClose = document.getElementById("menuClose");
var menu = document.getElementById("menu");

menu.style.right = "-400px";
menuClose.onclick = function(){
    if(menu.style.right == "-400px"){
        menu.style.right = "0";
    }
    else{
        menu.style.right = "-400px";
    }
}