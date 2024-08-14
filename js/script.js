document.getElementById("form__wrapper").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const fields = ["first-name", "last-name", "email", "message"];

    fields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.nextElementSibling;

        if (!field.value.trim()) {
            errorMessage.classList.remove("invisible");
            field.classList.add("error-form");
            isValid = false;
        } else {
            errorMessage.classList.add("invisible"); 
            field.classList.remove("invisible");

            if (fieldId ==="email" && !isValidEmail(field.value.trim())) {
                errorMessage.classList.remove("invisible");
                field.classList.add("error-form");
                isValid = false;
            } else if (fieldId === "email") {
                field.classList.remove("error-form");
            }
        }
    });
    
    const queryTypeField = document.querySelector('input[name="query-type"]:checked');
    const queryErrorMessage = document.querySelector('.form__query .error-message');

    if (!queryTypeField) {
        queryErrorMessage.classList.remove("invisible");
        isValid = false;
    } else {
        queryErrorMessage.classList.add("invisible");
    }

    const consentCheckbox = document.getElementById("checkbox");
    const consentErrorMessage = consentCheckbox.closest('.form__checkbox').querySelector('.error-message');

    if (!consentCheckbox.checked) {
        consentErrorMessage.classList.remove("invisible");
        isValid = false;
    } else {
        consentErrorMessage.classList.add("invisible");
    }

    if (isValid) {
        openPopup();
    }
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.querySelector("body").addEventListener("click", closePopup);

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}  

window.addEventListener("load", function() {
    closePopup();
});
