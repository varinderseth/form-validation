document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('zipcode').addEventListener('blur',validateZipcode);
document.getElementById('mobile').addEventListener('blur',validateMobile);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/
    validate(name.value,re,name);
}
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\~\-]+)@([a-zA-Z0-9_\.\~\-]+)\.[a-zA-Z]{2,5}$/
    validate(email.value,re,email);
}
function validateZipcode() {
    const zipcode = document.getElementById('zipcode');
    const re = /^[1-9]{1}[0-9]{2}\s{0,1}?[0-9]{3}$/
    validate(zipcode.value,re,zipcode);
}
function validateMobile() {
    const mobile = document.getElementById('mobile');
    const re = /^[\d]{10}$/
    validate(mobile.value,re,mobile);
}


function validate(str,re,id){
    if(!re.test(str)){
        id.classList.add('is-invalid');
    }else{
        id.classList.remove('is-invalid');
    }
}
