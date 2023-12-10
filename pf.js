const toggleBtn = document.getElementsByClassName('btn-toggle')
const menuList = document.querySelectorAll('.main-navbar ul')
const navbar = document.querySelector('.main-navbar')

toggleBtn[0].addEventListener("click", toggleMenu)

function toggleMenu(){
    menuList[0].classList.toggle("visible")
    navbar.classList.toggle("background")
}
console.log(navbar)