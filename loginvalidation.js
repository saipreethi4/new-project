// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const password= document.getElementById('password');
// var emailcheck=true;
// var passcheck=true;

// form.addEventListener('submit', e => {
//     e.preventDefault();
    
//     validateInputs();

// });

// const validateInputs = () => {
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//    let rs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


//     if(emailValue === '') {
//         setError(email, 'Email is required');
//         emailcheck=false;
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//         emailcheck=false;
//     } else {
//         setSuccess(email);
//         emailcheck=true;
//                             }

    
// if(passwordValue === '') {
//     setError(password, 'Password is required');
//     passcheck=false;
// } else if (!rs.test(passwordValue)) {
//     setError(password, 'required* : minimum 8 character,atleast one uppercase ,one lowercase, atleast one number')
//     passcheck=false;
// } else {
//  setSuccess(password);
//     passcheck=true;
    
// }
// if(emailcheck && passcheck){
    
//     setSuccess(email);
//     setSuccess(password);
//     alert("login success");
// }else{
//     alert("please enter the details");
// }

// // if (isValidEmail(emailValue) && rs.test(passwordValue) ) {
// //     setSuccess(password);
// //     alert("Login success");
// // }

// }




// const setError = (element, message) => {
//     const formbox = element.parentElement;
//     const errorDisplay = formbox.querySelector('small');

//     errorDisplay.innerText = message;
//     formbox.classList.add('error');
//     formbox.classList.remove('success');
// }

// const setSuccess = element => {
//     const formbox = element.parentElement;
//     const errorDisplay = formbox.querySelector('small');

//     errorDisplay.innerText = '';
//     formbox.classList.add('success');
//     formbox.classList.remove('error');
   
//     };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
