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

/* 
    This Function selects the needed document elements, then loops through the event labels 
    and if they are checked, it adds up the prices in a variable and saves the day and time in an array.
    The second loop goes through the elements after having the date and time data and disables the events
    that have the same date and time

*/
const addPriceAndFilterEvents = () => {
    const activities = document.querySelector('#activities-box');
    const cost = document.querySelector('#activities-cost');
        
    activities.addEventListener('click', function() {
        let total = 0;
        let times = [];
        for (let i = 0; i < activities.children.length; i++) {
            if (activities.children[i].firstElementChild.checked) {
                total += parseInt(activities.children[i].firstElementChild.getAttribute("data-cost"));
                times.push(activities.children[i].firstElementChild.getAttribute("data-day-and-time"));
            }
        }
        
        for (let i = 0; i < activities.children.length; i++) {
            if ( times.includes(activities.children[i].firstElementChild.getAttribute("data-day-and-time")) && activities.children[i].firstElementChild.checked == false) {
                activities.children[i].firstElementChild.className = "disabled";
                activities.children[i].firstElementChild.parentElement.className = "disabled";
            } else {
                activities.children[i].firstElementChild.className = "";
                activities.children[i].firstElementChild.parentElement.className = "";
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
const paymentSelect = document.querySelector('#payment')

/* All code beyond this point is for form validation */


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

/* 
   This function takes an email parameter and creates a regex string for emails and if the
   given email passes the test, the function returns true but if it doesn't, the email field gives the user an error
*/
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

/* 
   This function takes a credit card number parameter and creates a regex string for credit card numbers and if the
   given credit card number passes the test, the function returns true but if it doesn't, the credit card number field gives the user an error
*/
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

/* 
   This function takes an zip code parameter and creates a regex string for zip codes and if the
   given zip code passes the test, the function returns true but if it doesn't, the zip code field gives the user an error
*/
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

/* 
   This function takes an cvv parameter and creates a regex string for cvv's and if the
   given cvv passes the test, the function returns true but if it doesn't, the cvv field gives the user an error
*/
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

/* 
   This function loops through the events and stores the checked ones in an array, if the array is empty, the events field
   gives the user an error
*/
const didUserSelectEvent = () => {
    let eventsChecked = []
    for (let i = 0; i < events.children.length; i++) {
        if (events.children[i].firstElementChild.checked == false) {
            // Pass
        } else {
            eventsChecked.push(events.children[i]);
        }
    }

    if (eventsChecked.length == 0) {
        eventsHint.className = "activities-hint";
        eventsHint.style.color = "red";
        events.parentElement.className = "activities not-valid";
        return false;
    } else if (eventsChecked.length != 0) {
        eventsHint.className = "activities-hint hint";
        events.parentElement.className = "activities valid"; // Adds valid class to fieldset if an event is selected
        return true;
    }
}

/* 
   This function calls each of the helper functions and if any of them return false, the form is not submitted,
   this function also does field validation for the basic info field and the payment field
*/
const formValidation = () => {
    form.addEventListener('submit', function(e) {

        if ( isNameValid == false) {
            e.preventDefault();
        }

        if ( isEmailValid(emailField.value) == false) {
            e.preventDefault();
        }
        
        if ( isCreditCardValid(ccNumField.value) == false && paymentSelect.value == "credit-card") {
            e.preventDefault();
        }

        if ( isZipCodeValid(zipField.value) == false && paymentSelect.value == "credit-card") {
            e.preventDefault();
        }

        if ( isCvvValid(cvvField.value) == false && paymentSelect.value == "credit-card") {
            e.preventDefault();
        }

        if ( didUserSelectEvent() == false && paymentSelect.value == "credit-card") {
            e.preventDefault();
        }


        // Adds validate class if all payment fields are filled out
        if ( isCreditCardValid(ccNumField.value) && isZipCodeValid(zipField.value) && isCvvValid(cvvField.value) ) {
            paymentFieldSet.className = 'payment-methods valid';
        } else if (paymentSelect.value != "credit-card") {
            paymentFieldSet.className = 'payment-methods valid';
        } else {
            paymentFieldSet.className = 'payment-methods not-valid';
        }

        
        // Adds validate class if all basic info fields are filled out
        if ( isNameValid() && isEmailValid(emailField.value) ) {
            basicInfoFieldSet.className = 'basic-info valid';
        } else {
            basicInfoFieldSet.className = 'basic-info not-valid'
        }



    })

    // Real Time error message for name field
    nameField.addEventListener('keyup', function() {
        let nameRegex = /^[a-zA-Z ]{1,30}$/;
        if ( nameRegex.test(nameField.value) ) {
            nameField.style.border = '';
            nameHint.className = "name-hint hint";
            nameHint.style.color = '';
        } else {
            nameField.style.border = 'solid 5px red';
            nameHint.className = "name-hint";
            nameHint.style.color = 'red';
        }
    })

    // This section displays conditional error messages depending on what the error is in the email field
    emailField.addEventListener('blur', function() {
        if (emailField.value.includes("@") == false) {
            emailField.style.border = 'solid 5px red';
            emailHint.className = "email-hint";
            emailHint.textContent = 'Your email address is missing the "@" character';
            emailHint.style.color = 'red';
        } else if (emailField.value.includes(".") == false) {
            emailField.style.border = 'solid 5px red';
            emailHint.className = "email-hint";
            emailHint.textContent = 'The ".com/.net/org" section of your email address needs to be formatted properly';
            emailHint.style.color = 'red';
        } else if (emailField.value.length == 0) {
            emailField.style.border = 'solid 5px red';
            emailHint.className = "email-hint";
            emailHint.textContent = 'No email entered, please enter an email address';
            emailHint.style.color = 'red';
        } else {
            emailField.style.border = '';
            emailHint.className = "email-hint hint";
            emailHint.style.color = '';
        }
    })
}



// Function Calls
jobRole();
chooseShirt();
addPriceAndFilterEvents();
paymentSelection();
formValidation();
focusAccessibility();