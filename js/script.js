// Плавная прокрутка к секции
function scrollToSection(id) {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Переключение меню на мобильных устройствах
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
  }
  