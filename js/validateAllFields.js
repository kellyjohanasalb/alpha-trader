function validateAllFields() {
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    return isEmailValid && isPhoneValid;
}
