document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
        }
    });
});
document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    navMenu.classList.toggle('show-menu');
    navbar.classList.toggle('menu-active');
  });
  $(document).ready(function() {
    // Hamburger menu toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar').length) {
            $('.mobile-nav').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.mobile-nav').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const spans = hamburger.querySelectorAll('span');

    // Hamburger menu click handler
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-negative-45');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            spans.forEach(span => {
                span.classList.remove('rotate-45', 'opacity-0', 'rotate-negative-45');
            });
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            spans.forEach(span => {
                span.classList.remove('rotate-45', 'opacity-0', 'rotate-negative-45');
            });
        }
    });
});
