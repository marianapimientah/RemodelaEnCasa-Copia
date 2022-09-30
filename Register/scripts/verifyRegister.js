const form = document.getElementById('form-register');
const email = document.getElementById('username');
const password = document.getElementById('password');
const validacion = document.getElementById('validacion');
//const policy = document.getElementById('checkPolitica');

//Control de validacion

const objectValid = {
    correo : false,
    clave : false,
    clave_Vr : false
    //politica : false
};

//Validar el formulario completo

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(validForm() === -1){
        const miNodoAlert = document.createElement('p');
        miNodoAlert.classList.add('login-suc');
        miNodoAlert.textContent = 'Successful registration!';
        form.appendChild(miNodoAlert);
        location.href="../Home/index.html";
    }
    else{
        const miNodoAlert = document.createElement('p');
        miNodoAlert.classList.add('check-error');
        miNodoAlert.textContent = 'Error, check the information!';
        form.appendChild(miNodoAlert);
    }
});

const validForm = () =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
};

email.addEventListener('change', function(e){

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let valorEmail = e.target.value;
    objectValid.correo = valorEmail.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});

password.addEventListener('change', function(e){
    
    const passwordRegex = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%+=])" + "(?=\\S+$).{8,20}$";
    let valorPassword = e.target.value;
    objectValid.clave = valorPassword.match(passwordRegex) ? true : false;
    console.log(Object.values(objectValid));

});

validacion.addEventListener('change', function(e){

    if (password.value === validacion.value){
        objectValid.clave_Vr = true;
    }
    else{
        console.log("Error");
    }
    console.log(Object.values(objectValid));

});

/*policy.addEventListener('change', function(e){
    objectValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});**/