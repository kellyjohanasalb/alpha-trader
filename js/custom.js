// Función para mostrar y ocultar un elemento con animación
function toggleElementClass(idpop) {
    const elemento = document.getElementById("personfloat" + idpop);
    if (elemento) {
        elemento.classList.add("popbubble");
        setTimeout(() => {
            elemento.classList.remove("popbubble");
        }, 4000); // Mantiene la clase 'popbubble' durante 4 segundos
    }
}

// Función para generar un número aleatorio entre 1 y 8
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Intervalo para ejecutar la función toggleElementClass cada 400 ms
function startRandomPopbubble() {
    const maxNumber = 8; // Número máximo para generar el número aleatorio
    setInterval(() => {
        const randomNumber = getRandomNumber(maxNumber);
        toggleElementClass(randomNumber);
    }, 400);
}

// Inicia la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    startRandomPopbubble();
});

