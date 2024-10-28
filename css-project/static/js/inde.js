document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del menú móvil
    const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const header = this.closest('.header');
            const nav = header.querySelector('.main-nav');
            const actions = header.querySelector('.header-actions');
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            actions.style.display = actions.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Funcionalidad de los selectores de idioma
    const languageSelects = document.querySelectorAll('.language-select');
    languageSelects.forEach(select => {
        select.addEventListener('change', function() {
            console.log(`Idioma cambiado a: ${this.value}`);
            // Aquí iría la lógica para cambiar el idioma
        });
    });

    // Funcionalidad de los botones de búsqueda
    const searchBtns = document.querySelectorAll('.search-btn');
    searchBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Búsqueda iniciada');
            // Aquí iría la lógica para iniciar la búsqueda
        });
    });

    // Funcionalidad del formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log(`Suscripción al boletín con email: ${email}`);
            // Aquí iría la lógica para procesar la suscripción
        });
    }

    // Funcionalidad de los botones de acción
    const actionBtns = document.querySelectorAll('.sign-in-btn, .play-now-btn, .watch-live-btn, .apply-now-btn, .view-positions-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log(`Botón "${this.textContent}" clickeado`);
            // Aquí iría la lógica específica para cada botón
        });
    });
});