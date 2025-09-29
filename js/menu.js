const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('#menu-mobile .btn-fechar');

// abrir menu
function openMenu() {
  menu.classList.add('abrir-menu');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden'; // opcional: evita scroll ao fundo
}

// fechar menu
function closeMenu() {
  menu.classList.remove('abrir-menu');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// listeners
btnMenu.addEventListener('click', openMenu);

if (btnFechar) {
  btnFechar.addEventListener('click', closeMenu);
}

// clicar no overlay fecha
overlay.addEventListener('click', closeMenu);

// fechar com ESC (opcional)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('abrir-menu')) {
    closeMenu();
  }
});

// 🔥 fechar menu ao clicar nos links
const linksMenu = document.querySelectorAll('#menu-mobile a');
linksMenu.forEach(link => {
  link.addEventListener('click', closeMenu);
});
