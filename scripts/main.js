document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------------
       Nav: scroll state + mobile toggle
    ----------------------------------------------------------------------- */
    const header    = document.getElementById('main-header');
    const hamburger = document.querySelector('.hamburger');
    const nav       = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', String(open));
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* -----------------------------------------------------------------------
       Scroll reveal: [data-reveal] and .stagger-children
    ----------------------------------------------------------------------- */
    const revealEls = document.querySelectorAll('[data-reveal], .stagger-children');

    if (revealEls.length) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('revealed');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => obs.observe(el));
    }

    /* -----------------------------------------------------------------------
       Parallax on .parallax-img > img
    ----------------------------------------------------------------------- */
    const parallaxItems = document.querySelectorAll('.parallax-img');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (parallaxItems.length && !reducedMotion) {
        const onScroll = () => {
            parallaxItems.forEach(wrap => {
                const rect = wrap.getBoundingClientRect();
                const img  = wrap.querySelector('img');
                if (!img) return;
                if (rect.bottom < 0 || rect.top > window.innerHeight) return;
                const progress = rect.top / window.innerHeight;
                img.style.transform = `translateY(${progress * 35}px)`;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* -----------------------------------------------------------------------
       Hero image fade-in
    ----------------------------------------------------------------------- */
    const heroImg = document.querySelector('.hero-home-right img');
    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transition = 'opacity 1.2s ease 0.3s';
        const show = () => { heroImg.style.opacity = '1'; };
        if (heroImg.complete) { show(); } else { heroImg.addEventListener('load', show); }
    }

    /* -----------------------------------------------------------------------
       WhatsApp booking form (book.html)
    ----------------------------------------------------------------------- */
    const waForm = document.getElementById('waForm');
    if (waForm) {
        waForm.addEventListener('submit', e => {
            e.preventDefault();
            const name    = document.getElementById('waName')?.value.trim()    || '';
            const project = document.getElementById('waProject')?.value        || '';
            const date    = document.getElementById('waDate')?.value           || 'Flexible';
            const guests  = document.getElementById('waGuests')?.value         || '';
            const message = document.getElementById('waMessage')?.value.trim() || '';

            const text = encodeURIComponent(
                `Hi Studio by Char!\n\nNew Booking Request\nName: ${name}\nService: ${project}\nDate: ${date}\nGuests: ${guests}\nProject notes: ${message}`
            );
            // Replace 66000000000 with real WhatsApp number (country code + number, no + or spaces)
            window.open(`https://wa.me/66000000000?text=${text}`, '_blank');
        });
    }

});
