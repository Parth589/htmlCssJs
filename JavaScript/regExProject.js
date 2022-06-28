console.log("Hello world!!");
const submit = document.getElementById("submit");
const uname = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const msg = (color, message, id) => {
    const msgBox = document.getElementById(id);
    msgBox.innerText = message;
    msgBox.style.color = color;
};
const Bigmsg = (color, message) => {
    const msgBox = document.getElementById("bigmsg");
    msgBox.innerText = message;
    msgBox.style.color = color;
};
let unameValidated = false;
let phoneValidated = false;
let emailValidated = false;
let passwValidated = false;

const validateName = (x) => {
    const regEx =
        /^([a-zA-Z_])([a-zA-Z_0-9]){2,13}$/;
    const s = uname.value;
    if (s !== "" || x)
        if (regEx.test(s)) {
            uname.style.outline = "2px solid green";
            msg("red", "", "unamemsg");
            unameValidated = true;
        }
        else {

            uname.style.outline = "2px solid red";
            msg("red", "username can't have leading digit. neither it can have any special characters.", "unamemsg");
            unameValidated = false;
        }
};
const validatePhone = (x) => {
    const regEx =
        /^([0-9]){10}$/;
    const s = phone.value;
    if (s !== "" || x)
        if (regEx.test(s)) {
            phone.style.outline = "2px solid green";
            msg("red", "", "phonemsg");
            phoneValidated = true;
        }
        else {
            phone.style.outline = "2px solid red";
            msg("red", "phone number must be of 10 digits. don't put your country code.", "phonemsg");
            phoneValidated = false;
        }
};
const validateEmail = (x) => {
    const regEx =
        /^([a-zA-Z0-9_]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,8}$/;
    const s = email.value;
    if (s !== "" || x)
        if (regEx.test(s)) {

            email.style.outline = "2px solid green";
            msg("red", "", "emailmsg");
            emailValidated = true;
        }
        else {

            email.style.outline = "2px solid red";
            msg("red", "invalid email address.", "emailmsg");
            emailValidated = false;
        }
};
const validatePass = (x) => {
    const regEx =
        /[@_#\$%\^&*\(\)!\+=\-~`\/\.\,\?\\]/g;

    const s = pass.value;
    if (s !== "" || x)
        if (/\s/.test(s) == false) {
            const match = s.match(regEx);
            if (match !== null) {
                if (match.length >= 3) {
                    pass.style.outline = "2px solid green";
                    msg("green", "Strong password.", "passmsg");
                    passwValidated = true;
                }
                else if (match.length > 0) {
                    pass.style.outline = "2px solid orange";
                    msg("orange", "Not a strong password.", "passmsg");
                    passwValidated = true;
                }
                else {
                    pass.style.outline = "2px solid red";
                    msg("red", "Weak password.", "passmsg");
                    passwValidated = false;
                }
            }
            else {
                pass.style.outline = "2px solid red";
                msg("red", "use at least one special character(@,$,&,...) in your password.", "passmsg");
                passwValidated = false;
            }
        }
        else {
            pass.style.outline = "2px solid red";
            msg("red", "don't use spaces in your password.", "passmsg");
            passwValidated = false;

        }
};
const validateAll = () => {
    validateName(false);
    validatePhone(false);
    validateEmail(false);
    validatePass(false);
};
validateAll();
submit.addEventListener("click", () => {
    if (unameValidated && phoneValidated && emailValidated && passwValidated) {
        Bigmsg("green", "Submitted :)");
    }
    else {
        Bigmsg("red", "Not-Submitted :(");

    }
});
uname.addEventListener("blur", () => {
    validateName(true);
});
phone.addEventListener("blur", () => {
    validatePhone(true);
});
email.addEventListener("blur", () => {
    validateEmail(true);
});
pass.addEventListener("blur", () => {
    validatePass(true);
});