document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const validityMessage = document.getElementById('phone-validity-message');
    
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipinfo.io?token=<YOUR_TOKEN_HERE>')
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback('us'));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    phoneInput.addEventListener('input', () => {
        const inputValue = phoneInput.value;
        const selectedCountryData = iti.getSelectedCountryData();
        const phoneNumber = libphonenumber.parsePhoneNumberFromString(inputValue, selectedCountryData.iso2.toUpperCase());
        
        if (phoneNumber) {
            if (phoneNumber.isValid()) {
                validityMessage.textContent = 'Número de teléfono válido';
                validityMessage.style.color = 'green';
            } else {
                validityMessage.textContent = 'Número de teléfono no válido';
                validityMessage.style.color = 'red';
            }
        } else {
            validityMessage.textContent = 'Número de teléfono no válido';
            validityMessage.style.color = 'red';
        }
    });
});
