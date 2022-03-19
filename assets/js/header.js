/* Menu mobile*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('show-menu');
  const showMenu = nav.classList.contains('show-menu');
  event.currentTarget.setAttribute('aria-expanded', showMenu);
  if (showMenu) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.menu__link');
for(const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('show-menu');
  }, {passive: true})
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  // backToTop()
  // activateMenuAtCurrentSection()
})