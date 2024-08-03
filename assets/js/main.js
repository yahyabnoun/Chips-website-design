/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClass = document.getElementById("nav-close") 

if (navToggle) {
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

if (navClass) {
    navClass.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link") 

const linkAction = ()=> {
    navMenu.classList.remove("show-menu")
} 

navLink.forEach(n => n.addEventListener("click",linkAction))

/*=============== SHADOW HEADER ===============*/


/*=============== SWIPER FAVORITES ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

