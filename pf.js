const toggleBtn = document.getElementsByClassName('btn-toggle')
const navbar = document.querySelectorAll('.main-navbar ul')

toggleBtn[0].addEventListener("click", toggleMenu)

function toggleMenu(){
    navbar[0].classList.toggle("visible")
}
console.log(navbar)