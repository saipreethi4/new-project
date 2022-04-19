var username = document.getElementById('username');
var email1 = document.getElementById('email1');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var mobile = document.getElementById('mobile');
const pwd1=document.querySelector('.pswd1');
var usernameErr = document.getElementById('uerr');
var email1Err = document.getElementById('emrr');
var password1Err = document.getElementById('ps1rr');
var password2Err = document.getElementById('ps2rr');
var mobileErr = document.getElementById('mbrr');

const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const msg = document.querySelector(".msg");
const showBtn = document.querySelector(".showBtn");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function valName(){
    if(username.value.length===0){
        username.style.borderColor="red";
        usernameErr.textContent="Please enter your username";
        
    }
    else if(! /^[a-zA-Z\s]+$/.test(username.value)){
        username.style.borderColor="red";
        usernameErr.textContent="Please enter a valid username";
    }
    else{
        username.style.borderColor="#2ecc71";
        usernameErr.style.display="none";
    }
}

function emailfunction(){
    if(email1.value.length===0){
        email1.style.borderColor="red";
        email1Err.textContent="Please enter your email";
    }
    else if(! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email1.value)){
        email1.style.borderColor="red";
        email1Err.textContent="Please enter a valid email";
    }
    else{
        email1.style.borderColor="#2ecc71";
        email1Err.style.display="none";

    }
}
function mobnum(){
    if(mobile.value.length===0){
        mobile.style.borderColor="red";
        mobileErr.textContent="Please enter your number";
    }
    else if(! /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(mobile.value)){
        mobile.style.borderColor="red";
        mobileErr.textContent="Please enter a valid 10 digit mobile number in any of these format (XXXXXXXXXX) or (XXX-XXX-XXXX) or (XXX.XXX.XXXX) or (XXX XXX XXXX)";
    }
    else{
        mobile.style.borderColor="#2ecc71";
        mobileErr.style.display="none";

    }
}

function pass1(){
    if(password1.value.length===0){
        password1.style.borderColor="red";
        password1Err.textContent="Please enter your password";
    }else if(no == 4){
        password1.style.borderColor="#2ecc71";
        password1Err.style.display="none";
    }
}


function trigger(){
    if(pwd1.value != ""){
      indicator.style.display = "block";
      indicator.style.display = "flex";
      password1Err.textContent="";
      if(pwd1.value.length <= 3 && (pwd1.value.match(regExpWeak) || pwd1.value.match(regExpMedium) || pwd1.value.match(regExpStrong)))no=1;
      if(pwd1.value.length >= 8 && ((pwd1.value.match(regExpWeak) && pwd1.value.match(regExpMedium)) || (pwd1.value.match(regExpMedium) && pwd1.value.match(regExpStrong)) || (pwd1.value.match(regExpWeak) && pwd1.value.match(regExpStrong))))no=2;
      if(pwd1.value.length >= 8 && pwd1.value.match(regExpWeak) && pwd1.value.match(regExpMedium) && pwd1.value.match(regExpStrong))no=3;
      if(no == 1){
        weak.classList.add("active");
        msg.style.display = "block";
        msg.textContent = "Your password is too weak";
        msg.classList.add("weak");
      }
      if(no == 2){
        medium.classList.add("active");
        msg.textContent = "Your password is medium";
        msg.classList.add("medium");
      }else{
        medium.classList.remove("active");
        msg.classList.remove("medium");
      }
      if(no == 3){
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        msg.textContent = "Your password is strong";
        msg.classList.add("strong");
        no=4;
      }else{
        strong.classList.remove("active");
        msg.classList.remove("strong");
      }
      showBtn.style.display = "block";
      showBtn.onclick = function(){
        if(pwd1.type == "password"){
          pwd1.type = "text";
          showBtn.textContent = "HIDE";
          showBtn.style.color = "#23ad5c";
        }else{
          pwd1.type = "password";
          showBtn.textContent = "SHOW";
          showBtn.style.color = "#000";
        }
      }
     
    }
    else{
        indicator.style.display = "none";
        msg.style.display= "none";
        showBtn.style.display = "none";
    }
}

function pass2(){
if(password2.value.length===0){
    password2.style.borderColor="red";
    password2Err.textContent="Please enter password again";
}else if ((password1.value !== password2.value) || (no!=4)){
    password1.style.borderColor="red";
    password2.style.borderColor="red";
    password2Err.textContent="password isn't matched";
}
else{
    password2.style.borderColor="#2ecc71";
    password2Err.style.display="none";
}
}


function fullVal(){
    valName();
    emailfunction();
    mobnum();
    pass1();
    pass2();
    
}