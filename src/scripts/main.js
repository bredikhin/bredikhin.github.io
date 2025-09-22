// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const finalValue = statNumber.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                
                if (!isNaN(numericValue)) {
                    animateNumber(statNumber, 0, numericValue, 2000, finalValue);
                }
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });

    // Number animation function
    function animateNumber(element, start, end, duration, originalText) {
        const startTime = performance.now();
        const suffix = originalText.replace(/\d/g, '');
        
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(start + (end - start) * progress);
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        
        requestAnimationFrame(updateNumber);
    }

    // Enhanced scroll effect to header
    const header = document.querySelector('.modern-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
            header.style.borderBottom = '1px solid rgba(226, 232, 240, 0.8)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
            header.style.borderBottom = '1px solid rgba(226, 232, 240, 0.3)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Sophisticated parallax effect for code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        codeBlocks.forEach((element, index) => {
            const speed = (index + 1) * 0.04;
            const currentTransform = element.style.transform || '';
            const baseTransform = element.classList.contains('sql') ? 'translateX(-50%)' : '';
            element.style.transform = `${baseTransform} translateY(${rate * speed}px)`;
        });
    });

    // Add typing animation to code blocks on scroll
    const codeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const codeContent = entry.target.querySelector('.code-content');
                if (codeContent && !entry.target.hasAttribute('data-animated')) {
                    entry.target.setAttribute('data-animated', 'true');
                    animateCodeContent(codeContent);
                }
            }
        });
    }, { threshold: 0.5 });

    codeBlocks.forEach(block => {
        codeObserver.observe(block);
    });

    // Animate code content with typing effect
    function animateCodeContent(element) {
        const originalHTML = element.innerHTML;
        element.innerHTML = '';
        
        let index = 0;
        const text = originalHTML.replace(/<[^>]*>/g, ''); // Strip HTML for typing
        
        const typeWriter = () => {
            if (index < text.length) {
                element.innerHTML = originalHTML.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 30);
            } else {
                element.innerHTML = originalHTML; // Restore full formatting
            }
        };
        
        setTimeout(typeWriter, 200);
    }

    // Add modern card reveal animations
    const observeElements = document.querySelectorAll('.tech-card, .project-card, .language-item, .stat-item');
    const cardObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, cardObserverOptions);

    observeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(el);
    });

    // Add enhanced hover effects for tech cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add smooth reveal for section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    const headerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const divider = entry.target.querySelector('.section-divider');
                if (divider) {
                    divider.style.width = '60px';
                    divider.style.transition = 'width 0.8s ease 0.3s';
                }
            }
        });
    }, { threshold: 0.5 });

    sectionHeaders.forEach(header => {
        const divider = header.querySelector('.section-divider');
        if (divider) {
            divider.style.width = '0px';
        }
        headerObserver.observe(header);
    });
});
