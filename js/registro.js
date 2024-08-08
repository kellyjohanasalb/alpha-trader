// scripts.js
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("a[href='#registro']").addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        document.querySelector('#registro').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


