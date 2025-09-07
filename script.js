    // kembali ke atas
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        
        // navbar mobile
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
        }
      });
    });
    

    
    // animasi
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
      observer.observe(card);
    });
    
    // efek scroll navbar
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        navbar.style.padding = '0.5rem 0';
      } else {
        navbar.classList.remove('shadow-sm');
        navbar.style.padding = '1rem 0';
      }
    });
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });

    window.addEventListener('load', function() {
      const loadingScreen = document.querySelector('.loading-screen');
      
      // simulasi loading
      setTimeout(function() {
        loadingScreen.classList.add('hidden');
        

        setTimeout(function() {
          loadingScreen.remove();
        }, 500);
      }, 1500); // atur waktu
    });
