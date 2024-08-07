const mensaje = "Si invierte ₡135 000 hoy podrá reclamar un salario mensual mayor a ₡2 700 000";


function mostrarMensaje() {
    
    const mensajeElemento = document.createElement('div');
    mensajeElemento.className = 'mensaje-alerta';
    mensajeElemento.textContent = mensaje;


    document.body.appendChild(mensajeElemento);

    setTimeout(() => {
        if (mensajeElemento.parentElement) {
            mensajeElemento.parentElement.removeChild(mensajeElemento);
        }
    }, 5000); 
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', mostrarMensaje);
