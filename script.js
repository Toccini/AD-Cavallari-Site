document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('close-btn');
    
    function toggleMenu() {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    }
    
    // Abrir/fechar menu
    toggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    // Fechar ao clicar no overlay ou links
    overlay.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.mobile-btn').forEach(link => {
      link.addEventListener('click', function() {
        // Fecha o menu apenas para links âncora
        if(this.getAttribute('href').startsWith('#')) {
          toggleMenu();
        }
      });
    });
  });