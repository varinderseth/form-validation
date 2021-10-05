document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('zipcode').addEventListener('blur',validateZipcode);
document.getElementById('mobile').addEventListener('blur',validateMobile);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/
    validate(name.value,re,name);
}
//emal
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