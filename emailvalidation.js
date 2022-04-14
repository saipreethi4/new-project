const form = document.getElementById('form');
const email = document.getElementById('email');
const password= document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
            }

    
if(passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

}


const setError = (element, message) => {
    const formbox = element.parentElement;
    const errorDisplay = formbox.querySelector('small');

    errorDisplay.innerText = message;
    formbox.classList.add('error');
    formbox.classList.remove('success');
}

const setSuccess = element => {
    const formbox = element.parentElement;
    const errorDisplay = formbox.querySelector('small');

    errorDisplay.innerText = '';
    formbox.classList.add('success');
    formbox.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}