// Hide/Show nav bar when scrolling down/up
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navy-nav").style.top = "0";
    } else {
        document.getElementById("navy-nav").style.top = "-6em";
    }
    prevScrollPos = currentScrollPos;
}

// Mobile navigation menu
function mobileNavCTA() {
    console.log("image was clicked");
    let openMenuBtn = document.getElementById("open-nav");
    let closeMenuBtn = document.getElementById("close-nav");

    let nav = document.getElementById("nav-items-cta");

    // Open mobile nav
    if (openMenuBtn.style.display != "none") {
        console.log("menu is being displayed");
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "inline";

        nav.style.display = "block";
    } 
    // Close mobile nav
    else {
        console.log("x is being displayed");
        openMenuBtn.style.display = "inline";
        closeMenuBtn.style.display = "none";

        nav.style.display = "none";
    }

}
