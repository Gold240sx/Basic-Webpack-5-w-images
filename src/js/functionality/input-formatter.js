function preventNonNumericalInput(evt) {
    var e = evt || window.event;
    var key = e.keyCode || e.which;

    if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
    // numbers   
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tab and Enter
    key == 8 || key == 9 || key == 13 ||
    // Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45) {
        // input is VALID
    }
    else {
        // input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }
};

function preventNonAlphabeticalInput(evt) {
    var e = evt || window.event;
    var key = e.key || e.which;
    var regEx = /^(?!^ +$)([A-Za-z]+)$/;

        if (key == " " ) {
            evt.returnValue = true;
        } 
        else if (key == ".") {
            evt.returnValue = true;
        }
        else if(key.match(regEx)){
            evt.returnValue = true;
        } else {
            // Do not output a non-letter
            console.log("input invalid - Inputs accepted: a-z, A-Z, SPACE, .");
            evt.returnValue = false;
        }
};

function formatPhoneNumber(value) {
    const phoneNumberInput = document.getElementById('newProject-phoneNumber');

    phoneNumberInput.addEventListener('focusout', (phone) => {
        const number = phone.target.value;
        const phoneAlert = document.getElementById('phone-alert');
        const newProjectPhoneNumber = document.getElementById('newProject-phoneNumber');

        console.log(number.length);
        if (number.length == 14){
            phoneAlert.classList.add("hidden");
            phoneNumberInput.classList.remove("alert");
        } else if (number === "") {
            phoneAlert.classList.add("hidden");
        } else {
            phoneAlert.classList.remove("hidden");
            phoneNumberInput.classList.add("alert");

            phoneNumberInput.addEventListener('click', () => {
                phoneNumberInput.classList.remove("alert");
                phoneAlert.classList.add("hidden");
            })
        }
    });

    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
};

function phoneNumberFormatter() {
    const inputField = document.getElementById('newProject-phoneNumber');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
};







const addNewEmailInput = document.querySelector('.add-new-email-verification');

console.log(addNewEmailInput);

addNewEmailInput.addEventListener('keydown', (evt) => {
    var e = evt || window.event;
    var key = e.key || e.which;
    var regEx = /^(?!^ +$)([A-Za-z0-9]+)$/;

    if (key == " "){
        console.log("incompatible entry");
        e.returnValue = false;
    }
    else if (key.match(regEx) || 
    key >= 48 && key <= 57 ||
    // Numeric keypad
    key >= 96 && key <= 105 ||
    // Backspace and Tab and Enter
    key == e.shiftKey || key == 9 || key == 13 ||
    // shiftKey and Home and End
    key == 35 || key == 36 ||
    // left and right arrows
    key == 37 || key == 39 ||
    // Del and Ins
    key == 46 || key == 45)
    {
        //returns, true
    };
        
    addNewEmailInput.addEventListener('focusout', (key) => {
            const email = key.target.value;
            const emailAlert = document.getElementById('email-alert');
            const newProjectEmail = document.getElementById('newProject-email');

            if (/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email)){ 
                console.log(`${email} is a valid Email!`);
                emailAlert.classList.add("hidden");
                newProjectEmail.classList.remove("alert");
            } else if (email.length == 0) {
                emailAlert.classList.add("hidden");
            } else {
                emailAlert.classList.remove("hidden");
                newProjectEmail.classList.add("alert");

                addNewEmailInput.addEventListener('click', () => {
                    newProjectEmail.classList.remove("alert");
                    emailAlert.classList.add("hidden");
                })
            }
        }
    )
});