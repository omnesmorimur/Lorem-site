document.addEventListener('DOMContentLoaded', function() {
    const footerButtons = document.querySelectorAll('.footer-button');
    
    footerButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.classList.toggle('rotated'); // Переключает класс
      });
    });
  });
 

  