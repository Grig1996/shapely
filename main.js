const menu = document.querySelector(".burger-menu")
const headerBurger = document.querySelector(".header-burger")
var isMenuOpen = false

headerBurger.addEventListener("click", function() {
    menu.classList.remove("burger-menu-closeed")
    if (!isMenuOpen) {
        menu.classList.add("burger-menu-open")
        menu.classList.remove("burger-menu-close")
        isMenuOpen = true
    } else if (isMenuOpen) {
        menu.classList.remove("burger-menu-open")
        menu.classList.add("burger-menu-close")
        isMenuOpen = false
    }
})

//scroll

const customerWindow = document.querySelector(".customers")
const nextButton = document.querySelector(".sec7-next")
const pervButton = document.querySelector(".sec7-back")
var windowScroll = 0

nextButton.addEventListener("click", function(){
    windowScroll += window.innerWidth;
    if (windowScroll >= window.innerWidth*3) {
        windowScroll = window.innerWidth*2
    }
    customerWindow.scrollTo({
        left: windowScroll,
        behavior: "smooth"
    })
})

pervButton.addEventListener("click", function(){
    windowScroll -= window.innerWidth;
    if (windowScroll <= 0) {
        windowScroll = 0
    }
    customerWindow.scrollTo({
        left: windowScroll,
        behavior: "smooth"
    })
})