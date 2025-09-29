document.addEventListener('DOMContentLoaded', () => {
    // Language dropdown
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = langMenu.classList.toggle('active');
            langBtn.setAttribute('aria-expanded', isExpanded);
        });

        document.addEventListener('click', () => {
            if (langMenu.classList.contains('active')) {
                langMenu.classList.remove('active');
                langBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            // Optional: Change icon to 'X' on open
            mobileMenuBtn.innerHTML = isActive
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });
    }

    // Intersection Observer for scroll animations
    const animatedSections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Copy to clipboard feedback for coupon
    const coupon = document.querySelector('.coupon-code');
    if (coupon) {
        coupon.addEventListener('click', () => {
            const originalText = coupon.querySelector('span').textContent;
            coupon.querySelector('span').textContent = 'Đã sao chép!';
            setTimeout(() => {
                coupon.querySelector('span').textContent = originalText;
            }, 2000);
        });
    }
});