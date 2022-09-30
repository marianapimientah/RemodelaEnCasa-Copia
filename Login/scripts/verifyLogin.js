const form = document.getElementById('form-login');
const user = document.getElementById('username');
const password = document.getElementById('password');
const correction = document.getElementById('main-form');
//Control validacion

const objectValid = {
    correo : false,
    clave : false
};

// Validar formulario

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validForm() === -1){
        const miNodoAlert = document.createElement('p');
        miNodoAlert.classList.add('login-suc');
        miNodoAlert.textContent = 'Successful login!';
        form.appendChild(miNodoAlert);
        location.href="../Home/index.html";
    }else{
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
}

user.addEventListener('change', function(e){
    let campo = e.target.value
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    objectValid.correo = campo.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});

password.addEventListener('change', function(e){
    let valorPassword = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    objectValid.clave = valorPassword.match(passwordRegex) ? true : false;
    console.log(Object.values(objectValid));
});

/** Validacion contrasena, debe cumplir los siguientes requisitos;

Contiene al menos 8 caracteres y un máximo de 20 caracteres.
Contiene al menos un dígito.
Contiene al menos un alfabeto en mayúsculas.
Contiene al menos un alfabeto en minúscula.
Contiene al menos un carácter especial que incluye ! @ # $% & *() - + = ^ .
No contiene ningún espacio en blanco. 

*/