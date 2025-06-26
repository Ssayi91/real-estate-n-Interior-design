
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
        
        // Gallery item animation
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('img').style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.querySelector('img').style.transform = 'scale(1)';
            });
        });
        
        // Testimonial carousel (simplified)
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            testimonials[index].style.display = 'block';
        }
        
        // Start by showing the first testimonial
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
  