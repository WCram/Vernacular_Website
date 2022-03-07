const btnNav = document.getElementById("btn-nav");
const navBar = document.getElementById("nav-bar");

btnNav.addEventListener('click', function() {
    let currentLoc = getComputedStyle(navBar).left;

    if(currentLoc === "0px") {
        navBar.style.left = "100%";
    }
    else {
        navBar.style.left = "0%";
    }
    
});