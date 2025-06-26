
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Property card hover effect
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('.property-img img').style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.querySelector('.property-img img').style.transform = 'scale(1)';
            });
        });
        
        // Search button effect
        document.querySelector('.search-button').addEventListener('click', () => {
            alert('In a real implementation, this would filter and display properties based on selected criteria.');
        });
        
        // Housing card animations
        document.querySelectorAll('.housing-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('.housing-img img').style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.querySelector('.housing-img img').style.transform = 'scale(1)';
            });
        });
