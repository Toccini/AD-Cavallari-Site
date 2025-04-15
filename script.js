document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    // Animação do ícone hamburguer para X
    menuToggle.classList.toggle('active');
    
    // Mostrar/ocultar menu mobile
    mobileMenu.classList.toggle('active');
    
    // Impedir scroll do body quando menu está aberto
    document.body.classList.toggle('no-scroll');
  });
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.mobile-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
