document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animacja elementów podczas przewijania (Scroll Reveal)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // Dystans od dołu, kiedy element ma się pojawić

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Opcjonalnie: usuń klasę, jeśli chcesz, by znikały przy przewijaniu w górę
                // reveal.classList.remove('active'); 
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Wywołaj raz na starcie, by pokazać elementy widoczne od razu
    revealOnScroll();


    // 2. Proste menu mobilne (Hamburger)
    // Uwaga: W CSS .nav-links jest ukryte na mobile. 
    // Dodamy klasę .nav-active, którą trzeba obsłużyć w CSS, 
    // lub proste przełączanie display w JS dla demonstracji.
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Prosta obsługa stylu inline dla demonstracji czystego JS
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // 3. Efekt Smooth Scroll dla linków kotwicowych
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Zamknij menu mobilne po kliknięciu (jeśli otwarte)
                if (window.innerWidth <= 768) {
                   navLinks.style.display = 'none';
                }
            }
        });
    });

    // 4. Mały "Easter Egg" w konsoli dla profesora ;)
    console.log("Strona załadowana pomyślnie. Koty gotowe do działania! 🐈");
});