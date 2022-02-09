const hamburger = document.getElementById("ham")

const navUl = document.getElementById("nav_ul")

hamburger.addEventListener("click", dropDown)

function dropDown() {
    navUl.classList.toggle('show')
}