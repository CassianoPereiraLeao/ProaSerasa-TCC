const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('#menu-mobile .btn-fechar');

function openMenu() {
  menu.classList.add('abrir-menu');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('abrir-menu');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

btnMenu.addEventListener('click', openMenu);

if (btnFechar) {
  btnFechar.addEventListener('click', closeMenu);
}

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('abrir-menu')) {
    closeMenu();
  }
});

const linksMenu = document.querySelectorAll('#menu-mobile a');
linksMenu.forEach(link => {
  link.addEventListener('click', closeMenu);
});
