const mailConfig = {
    "default": [],
};

const _country = "mx";
const thisCountryEmail = mailConfig.hasOwnProperty(_country) ? mailConfig[_country] : mailConfig['default'];

const appendEmails = (emailList) => {
    const presentation = $("#presentation");
    presentation.children().remove();
    emailList.forEach(email => {
        presentation.append(`<div class="mail-ext">${email}</div>`);
    });
};

const searchItems = (inputElement) => {
    const key = inputElement.value.toLowerCase();
    const atIndex = key.indexOf('@');
    
    if (key === "") {
        $("#presentation").hide();
        return;
    }

    const emailList = atIndex > -1 ? 
        thisCountryEmail.filter(email => email.startsWith(key.substring(atIndex))) :
        thisCountryEmail.map(email => key + email);

    if (emailList.length > 0) {
        appendEmails(emailList);
        $("#presentation").show();
    } else {
        $("#presentation").hide();
    }
};

const showList = () => {
    const val = document.querySelector("input[name='email']").value;
    if (val !== '') {
        $("#presentation").show();
    }
};

const initEmailAutocomplete = () => {
    appendEmails(thisCountryEmail);

    $("input[name='email']").on({
        "click": showList,
        "focus": showList,
        "input": function (e) {
            e.stopPropagation();
            searchItems(this);
        }
    });

    $(document).click(() => {
        $("#presentation").hide();
    });

    $("#presentation").on("click", ".mail-ext", function () {
        document.querySelector("input[name='email']").value = this.innerHTML;
        $("#presentation").hide();
    });
};

// Initialize the email autocomplete functionality
$(document).ready(initEmailAutocomplete);
