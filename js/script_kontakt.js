const nav = document.getElementById('nav-links_delsida')
const burger = document.getElementById('burger_delsida')
const logo = document.getElementById('logo')
const more = document.getElementById('more')

function toggleMenu() {
    nav.classList.toggle('nav-active_delsida')
    burger.classList.toggle('crossed_line')
    logo.classList.toggle('logo-active')
  

} 

function toggleMenuMore() {
more.classList.toggle('more-active')
}

burger.addEventListener('click', toggleMenu)    
more.addEventListener('click', toggleMenuMore)  