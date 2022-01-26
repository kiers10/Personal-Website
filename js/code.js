// Hide/Show nav bar when scrolling down/up
// var prevScrollPos = window.pageYOffset;
// window.onscroll = function() {
//     if ($(window).width() <= 600) {
//         var currentScrollPos = window.pageYOffset;
//         if (prevScrollPos > currentScrollPos) {
//             document.getElementById("navy-nav").style.top = "0";
//         } else {
//             document.getElementById("navy-nav").style.top = "-6em";
//         }
//         prevScrollPos = currentScrollPos;
//     }
// }

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

// Animations
// Source: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671
const scrollOffset = 100;

const scrollElement = document.querySelector(".sutton-scroll");
const scrollElement2 = document.querySelector(".majikk-scroll");
const scrollElement3 = document.querySelector(".kindling-scroll");


const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
}

const displayScrollElement2 = () => {
    scrollElement2.classList.add('scrolled');
}

const displayScrollElement3 = () => {
    scrollElement3.classList.add('scrolled');
}

const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
}

const hideScrollElement2 = () => {
    scrollElement2.classList.remove('scrolled');
}

const hideScrollElement3 = () => {
    scrollElement3.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
        hideScrollElement();
    }

    if (elementInView(scrollElement2, scrollOffset)) {
        displayScrollElement2();
    } else {
        hideScrollElement2();
    }

    if (elementInView(scrollElement3, scrollOffset)) {
        displayScrollElement3();
    } else {
        hideScrollElement3();
    }
}

//initialize throttleTimer as false
let throttleTimer = false;

const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;
    
    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;
    
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
	}, time);
}

window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 250);
})
