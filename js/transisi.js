document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.transisi');
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      contents.forEach((content, index) => {
        const rect = content.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (isVisible) {
          if (currentScrollY > lastScrollY) {
            // Scroll ke bawah
            content.classList.add('active');
            if (index > 0) {
              contents[index - 1].classList.remove('active');
              contents[index - 1].classList.add('hiddenn');
            }
          } else {
            // Scroll ke atas
            content.classList.add('active');
            if (index < contents.length - 1) {
              contents[index + 1].classList.remove('active');
              contents[index + 1].classList.add('hiddenn');
            }
          }
        }
      });
  
      lastScrollY = currentScrollY;
    });
  });
  