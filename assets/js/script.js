document.addEventListener('mousemove', function (e) {
    var navbar = document.querySelector('.navbar');
    if (e.clientY < 50) {
        navbar.classList.remove('navbar-hidden');
    } else {
        navbar.classList.add('navbar-hidden');
    }
});

document.addEventListener('mousemove', function (e) {
    var navbarArrow = document.querySelector('.navbar-arrow');
    var screenHeight = window.innerHeight;

    if (e.clientY < screenHeight / 3) {
        navbarArrow.classList.remove('navbar-arrow-hidden');
    } else {
        navbarArrow.classList.add('navbar-arrow-hidden');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll('.fade').forEach(el => {
      observer.observe(el);
    });
  });  
  