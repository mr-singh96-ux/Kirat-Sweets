document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const menu = document.getElementById('menu');
  const closeBtn = document.getElementById('closeBtn');

  if (!hamburgerMenu || !menu || !closeBtn) {
    console.warn('Menu elements not found!');
    return;
  }

  // Toggle menu on hamburger click
  hamburgerMenu.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent window click
    menu.classList.toggle('show');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.setAttribute('aria-expanded', menu.classList.contains('show'));
  });

  // Close on close button
  closeBtn.addEventListener('click', function () {
    closeMenu();
  });

  // Prevent closing when clicking inside menu
  menu.addEventListener('click', function (event) {
    event.stopPropagation(); // Don't bubble to window
  });

  // Close on outside click
  window.addEventListener('click', function () {
    closeMenu();
  });

  // Close on Escape key
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // Function to close menu
  function closeMenu() {
    menu.classList.remove('show');
    hamburgerMenu.classList.remove('active');
    hamburgerMenu.setAttribute('aria-expanded', 'false');
  }
});