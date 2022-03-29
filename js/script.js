const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')
const logo = document.getElementById('logo')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
    logo.classList.toggle('logo-active')

}

burger.addEventListener('click', toggleMenu)