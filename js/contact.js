const form = document.getElementById("form-register");
const imputs = document.querySelectorAll('#form-register input');
const progressbar = document.querySelector(".progress");

function send(event) {
    if (!$('.main_form').valid()){
        event.preventDefault();
        return false
    }

    const values = new FormData(event.target);
    const phoneNumber = phoneInput.getNumber();

    $('#phoneNumber').val(phoneNumber);



}

disable = document.getElementById("btnContact");



function validateEmail() {
    let mail = document.getElementById('txtEmail');
    let divEmailValidation = document.getElementById('divEmailValidation');

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {
        divEmailValidation.style.display = 'none';
        mail.style.boxShadow = 'none';
        mail.style.border = '1px solid #ced4da';
        disable.disabled = false;
        return (true)
    } else {
        divEmailValidation.style.display = 'flex';
        divEmailValidation.style.color = 'red';
        mail.style.border = '1px solid red';
        disable.disabled = true;
        return (false)
    }
}

function validatePhone() {

    let phone = document.getElementById('phone');
    let divPhoneValidation = document.getElementById('divPhoneValidation');


    
    if (phoneInput.isValidNumber()) {
        divPhoneValidation.style.display = 'none';
        phone.style.boxShadow = 'none';
        phone.style.border = '1px solid #ced4da';
        disable.disabled = false;
        return (true)
    } else {
        divPhoneValidation.style.display = 'flex';
        divPhoneValidation.style.color = 'red';
        phone.style.border = '1px solid red';
        disable.disabled = true;
        return (false)
    }
}


// form.addEventListener("submit", send, (e) => {
//     e.preventDefault();
// });



function show_loader() {


    document.getElementById("loader").style.display = "block";
    jQuery(".upper_modal").show();



}



