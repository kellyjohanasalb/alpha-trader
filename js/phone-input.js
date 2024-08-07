// phone-input.js
const errorMap = 'Número incorrecto. Favor de escribir su número correctamente.';
const input = document.querySelector("#phone");
const alertElement = document.querySelector("#msg-importand-hone");

// Inicializa intlTelInput
const iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: 'cr',
    autoPlaceholder: true,
});

// Función para mostrar/ocultar mensaje de alerta basado en la validez del número
function validatePhoneNumber() {
    if (iti.isValidNumber()) {
        alertElement.classList.add("d-none"); // Ocultar el mensaje de alerta si el número es válido
    } else {
        alertElement.classList.remove("d-none"); // Mostrar el mensaje de alerta si el número no es válido
    }
}

// Agregar un evento para validar el número cuando el usuario termine de ingresar
input.addEventListener('blur', validatePhoneNumber);
