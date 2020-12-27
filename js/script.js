// Functions 

const jobRole = () => {
    const otherJobField = document.querySelector('#other-job-role');
    const jobRoleDropDown = document.querySelector('#title');

    otherJobField.style.display = 'none';

    jobRoleDropDown.addEventListener('click', function(event) {
        if (event.target.value == "other") {
            otherJobField.style.display = '';
        } else {
            otherJobField.style.display = 'none';
        }
    });
}


const chooseShirt = () => {
    const designSelect = document.querySelector('#design');
    const colorSelect = document.querySelector('#color')

    designSelect.addEventListener('click', function(event) {
        if (event.target.value == "js puns") {
            colorSelect.disabled = false;
            colorSelect.innerHTML = `
                                    <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                                    <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
                                    <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>`;
        } else if (event.target.value == "heart js") {
            colorSelect.disabled = false;
            colorSelect.innerHTML = `
                                    <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                                    <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
                                    <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`;
        }
    });
}


const addPrice = () => {
    const activities = document.querySelector('#activities-box');
    const cost = document.querySelector('#activities-cost');
        
    activities.addEventListener('click', function() {
        let total = 0;
        let times = [];
        for (let i = 0; i < activities.children.length; i++) {
            if (activities.children[i].firstElementChild.checked) {
                total += parseInt(activities.children[i].firstElementChild.getAttribute("data-cost"));
            }
        }
        cost.innerHTML = `Total: $${total}`;
    })
}


const paymentSelection = () => {
    const paymentSelect = document.querySelector('#payment');
    const cardForm = document.querySelector('#credit-card');
    const paypal = document.querySelector('#paypal');
    const bitcoin = document.querySelector('#bitcoin');

    paypal.style.display = 'none';
    bitcoin.style.display = 'none';

    paymentSelect.addEventListener('click', function(event) {
        if (event.target.value == "paypal") {
            cardForm.style.display = "none";
            bitcoin.style.display = "none";
            paypal.style.display = "";
        } else if (event.target.value == "bitcoin") {
            bitcoin.style.display = "";
            cardForm.style.display = "none";
            paypal.style.display = "none";
        } else if (event.target.value == "credit-card") {
            bitcoin.style.display = "none";
            paypal.style.display = "none";
            cardForm.style.display = "";
        }
    })
}

const focusAccessibility = () => {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]');

    for (i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener('focus', (e) => {
            e.target.parentElement.className = "focus";
        })
    }

    for (i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener('blur', (e) => {
            e.target.parentElement.className = "";
        })
    }
}

// Form Validation Global Variables
const form = document.querySelector('.form-hint').parentNode; 
const nameField = document.querySelector('#name');
const nameHint = document.querySelector('#name-hint');
const emailField = document.querySelector('#email');
const emailHint = document.querySelector('#email-hint');
const events = document.querySelector('#activities-box');
const eventsHint = document.querySelector('#activities-hint');
const ccNumField = document.querySelector('#cc-num');
const ccHint = document.querySelector('#cc-hint');
const zipField = document.querySelector('#zip');
const zipHint = document.querySelector('#zip-hint');
const cvvField = document.querySelector('#cvv');
const cvvHint = document.querySelector('#cvv-hint');
const paymentFieldSet = document.querySelector('.payment-methods');
const basicInfoFieldSet = document.querySelector('.basic-info');



// Form validation helper functions

const isNameValid = () => {
    if (nameField.value.length == 0) {
        nameField.style.border = 'solid 5px red';
        nameHint.className = "name-hint";
        nameHint.style.color = 'red';
        return false;
    } else {
        nameField.style.border = '';
        nameHint.className = "name-hint hint";
        nameHint.style.color = '';
        return true;
    }
}

const isEmailValid = (email) => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if (regex == false) {
        emailField.style.border = 'solid 5px red';
        emailHint.className = "email-hint";
        emailHint.style.color = 'red';
        return false;
    } else {
        emailField.style.border = '';
        emailHint.className = "email-hint hint";
        emailHint.style.color = '';
        return true;
    }
}

const isCreditCardValid = (creditCardNumber) => {
    let regex = /^[0-9]{13}$|^[0-9]{14}$|^[0-9]{15}$|^[0-9]{16}$/.test(creditCardNumber);
    if (regex == false) {
        ccNumField.style.border = 'solid 5px red';
        ccHint.className = "cc-hint";
        ccHint.style.color = 'red';
        return false;
    } else {
        ccNumField.style.border = '';
        ccHint.className = "cc-hint hint";
        ccHint.style.color = "";
        return true;
    }
}

const isZipCodeValid = (zipcode) => {
    let regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
    if (regex == false) {
        zipField.style.border = 'solid 5px red';
        zipHint.className = "zip-hint";
        zipHint.style.color = 'red';
        return false;
    } else {
        zipField.style.border = '';
        zipHint.className = "zip-hint hint";
        zipHint.style.color = '';
        return true;
    }
}

const isCvvValid = (cvv) => {
    let regex = /^[0-9]{3,4}$/.test(cvv);
    if (regex == false) {
        cvvField.style.border = 'solid 5px red';
        cvvHint.className = "cvv-hint";
        cvvHint.style.color = 'red';
        return false;
    } else {
        cvvField.style.border = '';
        cvvHint.className = "cvv-hint hint";
        cvvHint.style.color = '';
        return true;
    }
}

const didUserSelectEvent = () => {
    let eventsChecked = []
    for (let i = 0; i < events.children.length; i++) {
        if (events.children[i].firstElementChild.checked == false) {
            console.log(events.children[i] + "is not checked");
        } else {
            eventsChecked.push(events.children[i]);
        }
    }

    if (eventsChecked.length == 0) {
        eventsHint.className = "activities-hint";
        eventsHint.style.color = "red";
        events.parentElement.className = "activities not-valid";
    } else if (eventsChecked.length != 0) {
        eventsHint.className = "activities-hint hint";
        events.parentElement.className = "activities valid"; // Adds valid class to fieldset if an event is selected
    }
}

// Form validation function
const formValidation = () => {
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        isNameValid()
        isEmailValid(emailField.value)
        didUserSelectEvent();
        isCreditCardValid(ccNumField.value)
        isZipCodeValid(zipField.value)
        isCvvValid(cvvField.value)

        // Adds validate class if all payment fields are filled out
        if ( isCreditCardValid(ccNumField.value) && isZipCodeValid(zipField.value) && isCvvValid(cvvField.value) ) {
            paymentFieldSet.className = 'payment-methods valid';
        } else {
            paymentFieldSet.className = 'paymnet-methods not-valid';
        }

        // Adds validate class if all basic info fields are filled out
        if ( isNameValid() && isEmailValid(emailField.value) ) {
            basicInfoFieldSet.className = 'basic-info valid';
        } else {
            basicInfoFieldSet.className = 'basic-info not-valid'
        }

    })
}




// Function Calls
jobRole();
chooseShirt();
addPrice();
paymentSelection();
formValidation();
focusAccessibility();