function mostrarMensaje() {
    const mensajeElemento = document.createElement('div');
    mensajeElemento.className = 'mensaje-alerta ajs-top ajs-right';

    mensajeElemento.innerHTML = `
        <div class="ajs-message ajs-facebook ajs-visible">
            <div class="imgface">
                <img src="img/6.jpg" alt="imagne">
                <img src="img/icocall" alt="icono">
            </div>
            <div class="textface">
                <p class="fb-user">María García</p>
                <p class="pwin">acaba de generar ₡2&nbsp;464&nbsp;499 de un depósito de ₡135&nbsp;000</p>
            </div>
        </div>
    `;

    document.body.appendChild(mensajeElemento);

    setTimeout(() => {
        if (mensajeElemento.parentElement) {
            mensajeElemento.parentElement.removeChild(mensajeElemento);
        }
    }, 5000);
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', mostrarMensaje);
