const form = document.getElementById('form');
const email = document.getElementById('email');
const password= document.getElementById('password');




var emailcheck=false;
var passcheck=false;



function mailVal(){
    
const emailValue = email.value.trim();
 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(emailValue === '') {
        setError(email, 'Email is required');
        emailcheck=false;
    } else if (!re.test(emailValue)) {
        setError(email, 'Provide a valid email address');
        emailcheck=false;
    } else {
        setSuccess(email);
        emailcheck=true;
     }
    
}
  
function pwdVal(){
    const passwordValue = password.value.trim();
// let rs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}(\W?)$/;
    let rs=/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
if(passwordValue === '') {
    setError(password, 'Password is required');
    passcheck=false;
} else if (!rs.test(passwordValue)) {
    setError(password, 'required* : minimum 8 character,atleast one uppercase ,one lowercase, atleast one number')
    passcheck=false;
} else {
 setSuccess(password);
    passcheck=true;   
}

}
  
function fullVal(){
    mailVal();
    pwdVal();
    if(emailcheck && passcheck){
    
        alert("login success");
    }else{
       return false;
    }

}


// if (isValidEmail(emailValue) && rs.test(passwordValue) ) {
//     setSuccess(password);
//     alert("Login success");
// }






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
