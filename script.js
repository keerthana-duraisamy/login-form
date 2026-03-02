var form=document.getElementById("formValid")
var email=document.getElementById("email")
var password=document.getElementById("password")
var emailerr=document.getElementById("emailerr")
var passerr=document.getElementById("passerr")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    advancedValidation(email.value,password.value);

})

const advancedValidation=(email,pass)=>{

    const emailregex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    const passregex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/


    if(email.match(emailregex)){
        console.log("Valid email");
        emailerr.textContent=""
    }
    else{
        emailerr.textContent="Invalid email"
        console.log("Invalid email");
    }


    if(pass.match(passregex)){
        console.log("Valid password");
    }
    else{
        passerr.textContent="Invalid password"
        console.log("Invalid password");
    }


}