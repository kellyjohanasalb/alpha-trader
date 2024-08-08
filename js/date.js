// Función para obtener el nombre del mes en formato de texto
function obtenerNombreMes(index) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[index];
}

// Obtener la fecha actual
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
const mesActualIndex = fechaActual.getMonth();
const diaActual = fechaActual.getDate();

// Determinar el nombre del mes en letras
const nombreMesActual = obtenerNombreMes(mesActualIndex);
const nombreMesAnterior = obtenerNombreMes((mesActualIndex + 11) % 12); // Mes anterior con lógica circular

// Función para actualizar el contenido de los elementos con los valores calculados
function actualizarContenido() {
    document.querySelectorAll('span#year').forEach(span => {
        span.textContent = añoActual;
    });
    document.querySelectorAll('span#mont').forEach(span => {
        span.textContent = nombreMesAnterior;
    });
    document.querySelectorAll('span[id="mesActual"]').forEach(span => {
        span.textContent = nombreMesActual;
    });
    document.querySelectorAll('span[id="diaactual"]').forEach(span => {
        span.textContent = diaActual;
    });
}

// Ejecutar la actualización del contenido cuando la página esté completamente cargada
window.addEventListener('DOMContentLoaded', actualizarContenido);
