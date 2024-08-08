function validatePhone() {
    const phoneInputElement = document.getElementById('phone');
    const phoneValidationMessage = document.getElementById('divPhoneValidation');
    
    // Suponiendo que `phoneInput` es una instancia válida y `isValidNumber` valida el número
    const isValidPhone = phoneInput.isValidNumber();
    
    if (isValidPhone) {
        phoneValidationMessage.textContent = '';
        phoneInputElement.classList.remove('input-error');
        btnContact.disabled = false;
    } else {
        phoneValidationMessage.textContent = 'Invalid phone number';
        phoneInputElement.classList.add('input-error');
        btnContact.disabled = true;
    }
    
    return isValidPhone;
}
