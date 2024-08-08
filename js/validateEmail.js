function validateEmail() {
    const emailInput = document.getElementById('txtEmail');
    const emailValidationMessage = document.getElementById('divEmailValidation');
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailInput.value);
    
    if (isValidEmail) {
        emailValidationMessage.textContent = '';
        emailInput.classList.remove('input-error');
        btnContact.disabled = false;
    } else {
        emailValidationMessage.textContent = 'Invalid email address';
        emailInput.classList.add('input-error');
        btnContact.disabled = true;
    }
    
    return isValidEmail;
}
