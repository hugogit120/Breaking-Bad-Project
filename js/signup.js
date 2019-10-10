'use strict';

class Signup {
    constructor(){
        this.nameInput = document.querySelector('#name'); 
        this.lastNameInput = document.querySelector('#lastName');
        this.phoneInput = document.querySelector('#phone');
        this.emailInput = document.querySelector('#email');
        this.pwdInput = document.querySelector('#pwd');
        this.pwdVerifyInput = document.querySelector('#pwdVerify');
    }

    saveData = (event) => { 
        event.preventDefault()//inpide que haga un submit del formulario
                       //aqui recojeremos los valores de los inputs
        const name = this.nameInput.value;
        const lastName = this.lastNameInput.value;
        const phone = this.phoneInput.value;
        const email = this.emailInput.value;
        const pwd = this.pwdInput.value;

       //console.log(name, pokemon, type, city, phone, email, password)
        
                      // crear una instancia de user
        const newUser = new User(name, lastName, phone, email, pwd);
        console.log(newUser);
                     // almacenar datos en el local storage
        let usersDB = JSON.parse(localStorage.getItem('users')) //recogemos del local storage

        if (usersDB){ //miro si hay usuarios registrados
            usersDB.push(newUser); //añado la lista
            localStorage.setItem('users', JSON.stringify(usersDB))
        }   else  {
            usersDB = [newUser]; //asigno un array con mi usuario
        }
        localStorage.setItem('users', JSON.stringify(usersDB));//envio a local storage mi base de datos
                   
        // vaciar el formulario una vez se haga el singup
        this.nameInput.value = '';
        this.lastNameInput.value = '';
        this.phoneInput.value = '';
        this.emailInput.value = '';
        this.pwdInput.value = '';
        this.pwdVerifyInput.value = '';

        validator.checkErrors(true);
    }
    
    handleInputsValues = () => {
        //comprobar los datos de inputs y validarlos
        //console.log(validator.validateValidEmail('hola'));
        this.emailInput.addEventListener('input', event => {
            const errors = validator.validateValidEmail(event.target.value);
            if (!('invalidEmailError' in errors)){
                validator.validateUniqueEmail(event.target.value)
            }
            //esta funcion devuelve los errores
            this.handleErrorMessages();
            this.hanbleIsValid();
        })
        this.pwdInput.addEventListener('input', even => {
            validator.validatePassword(event.target.value);
            validator.validatePasswordRepeat(event.target.value, this.pwdVerifyInput.value);
            this.handleErrorMessages();
            this.hanbleIsValid();
        })
        this.pwdVerifyInput.addEventListener('input', event => {
            const errors = validator.validatePasswordRepeat(this.pwdInput.value, event.target.value);
            this.handleErrorMessages();
            this.hanbleIsValid();
        })
    }

    handleErrorMessages = () => {
        this.errorsWrapper.innerHTML = ''; //esto es un parche para evitar que los errores se repitan una y otra vez
        //mostrar mensajes de error en HTMl si los hay
        const errors = validator.checkErrors()
        for (const prop in errors){
            const error = document.createElement('p');
            error.innerHTML = errors[prop];
            this.errorsWrapper.appendChild(error);
           
        }
    }

    hanbleIsValid = () => {
        //activar o desactivar del form en funcion de si hay o no errores
        const errors = validator.checkErrors();
        if (Object.keys(errors).length === 0) { // no hay errores
            this.buttonInput.removeAttribute("disabled");
        } else {
            this.buttonInput.setAttribute('disabled', '');
        }
    }
}

const signup = new Signup();
window.addEventListener('load', signup.handleInputsValues);