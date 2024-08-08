// Función para obtener el nombre del mes en formato de texto
function obtenerNombreMes(index) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[index];
}

// Función para actualizar la fecha en el elemento 'hasta'
function actualizarFecha() {
    const hasta = document.getElementById("hastyear");

    // Obtener la fecha actual y ajustar el mes
    const fechaActual = new Date();
    fechaActual.setMonth(fechaActual.getMonth() - 10);

    // Obtener el mes de la fecha ajustada
    const mesActual = fechaActual.getMonth();

    // Obtener la fecha de cierre actual
    const fechaCierre = new Date();
    const mesCierre = fechaCierre.getMonth();

    // Actualizar el contenido del elemento 'hasta'
    hasta.innerHTML = `${fechaCierre.getDate()} de ${obtenerNombreMes(mesCierre).toLowerCase()} del ${fechaCierre.getFullYear()}`;
}

// Ejecutar la función para actualizar la fecha cuando el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', actualizarFecha);


