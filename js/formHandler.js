// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".intgrtn-step-2, .intgrtn-step-3, .intgrtn-loader-holder").forEach(el => el.style.display = 'none');

    var blinkname = document.getElementById('nameprint');
    var blinkphonenume = document.getElementById('printphone');
    var blinkphonenume2 = document.getElementById('printphone2');

    var fistname = document.querySelector('[name="firstName"]'),
        lastname = document.querySelector('[name="lastName"]'),
        email = document.querySelector('[name="email"]'),
        phone = document.querySelector('[name="phone"]'),
        button = document.querySelector('[type="submit"]');       

    const errorMsg = document.querySelector("#error-msg");
    var constinput = document.getElementById('phone');

    // on input event: validate
    constinput.addEventListener('input', () => {            
        if (iti.isValidNumberPrecise()) {
            constinput.classList.remove('errorinput');
            constinput.classList.add("allokinput");
            document.getElementById('msg-importand-hone').classList.add('d-none');
        } else {      
            if (constinput.value.length >= 4){
                constinput.classList.add('errorinput');
                constinput.classList.remove('allokinput');
                document.getElementById('msg-importand-hone').classList.remove('d-none')
                return 
            }   
        }
    });

    document.getElementById('_signup_form').addEventListener('submit', function (e) {
        e.preventDefault();

        blinkname.innerHTML= fistname.value;
        blinkphonenume.innerHTML = phone.value;
        blinkphonenume2.innerHTML = phone.value;

        if (fistname.value.length < 3) {
            fistname.nextElementSibling.style.display = 'block';
            console.log("Nombre no validado");
            return;
        } else {
            fistname.nextElementSibling.style.display = 'none';
            console.log("Nombre validado");
        }

        if (lastname.value.length < 3) {
            lastname.nextElementSibling.style.display = 'block';
            return;
        } else {
            lastname.nextElementSibling.style.display = 'none';
        }

        if (email.value.length < 1) {
            email.nextElementSibling.innerHTML = "Se requiere la dirección de correo electrónico.";
            email.nextElementSibling.style.display = 'block';
            return;
        } else {
            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                validEmail = pattern.test(String(email.value).toLowerCase());
            if (validEmail === false) {
                email.nextElementSibling.innerHTML = "Dirección de correo electrónico inválido";
                email.nextElementSibling.style.display = 'block';
                return;
            } else {
                email.nextElementSibling.style.display = 'none';
            }
        }

        if (phone.value.trim()) {
            if (iti.isValidNumberPrecise()) {
                console.log("Telefono validado");
            } else {                
                errorMsg.innerHTML = errorMap;
                constinput.classList.add('errorinput');
                return;
            }
        }

        document.querySelectorAll(".intgrtn-input-message-error").forEach(el => el.style.display = 'none');
        if ('_affcreateerror' in window && window['_affcreateerror']) {
            window['_affcreateerror'] = '';
        }

        document.querySelector(".intgrtn-loader-holder").style.display = 'block';
        document.querySelector(".intgrtn-step-3").style.display = 'none';

        document.getElementById("phoneNumber").value = "+" + iti.getSelectedCountryData().dialCode + document.getElementById("phone").value;
       
        let url_string = window.location.href;
        let url = new URL(url_string);
        let c = url.searchParams.get("MPC_3");
        let d = url.searchParams.get("MPC_2");
        let iframe = document.createElement('iframe');
        let iframeURL = "https://{sub_id_8}/thankyou.php?px={sub_id_7}"
        iframe.src = iframeURL;
        iframe.width = "1";
        iframe.allowFullscreen;
        iframe.frameBorder = "0";
        iframe.height = "1";
        iframe.style.overflow = 'hidden';
        setTimeout(function() {
            document.body.appendChild(iframe);
        }, 1500);

        document.getElementById("overlay").style.display = "block";
        setTimeout(function(){
            document.getElementById("s1").className = "";
            document.getElementById("s2").style = "";
            setTimeout(function(){
                document.getElementById("s2").className = "";
                document.getElementById("s3").style = "";
            }, 5000);
        }, 5000);

        e.currentTarget.submit();
    });
});


<script src="scripts.js" defer></script>