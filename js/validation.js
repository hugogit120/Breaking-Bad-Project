'use strict';

class Validator {
    constructor() {
        this.invalidEmailError = 'Introduce un email valido';
        this.repeatEmailError = 'este email ya esta en uso';
        this.passwordError = 'introduce una contraseña de almenos 6 caracteres';
        this.repeatPassError = 'los campos no coinciden';

        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPassError: this.repeatPassError,
        }
    }

    validateValidEmail = (email) => {
        //validar si el formato de email es correcto
        //si es correcto eliminara "invalidEmailError" de this.errors
        //si no es correcto añadira "invalidEmailError" a this.error
        //return this.errors
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            delete this.errors.invalidEmailError;
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
        }
        return this.errors;
    }

    validateUniqueEmail = (newEmail) => {
        //recoger de local storage los datos
        const userDB = JSON.parse(localStorage.getItem('users')); //parse para desconvertir el string
        console.log(userDB);

        if (!userDB) {
            delete this.errors.repeatEmailError;
            return this.errors;
        }

        let mailUnique = true;
        userDB.forEach(user => {
            if (user.email === newEmail) {
                mailUnique = false;
            }
        });
        if (mailUnique) {
            delete this.errors.repeatEmailError;
        } else {
            this.errors.repeatEmailError = this.repeatEmailError;
        }
        return this.errors;
        //comprobar que en local storage si esta el email
        //si el email esta añadimos "repeatEmailError"
        //si no esta quitamos el error "repeatEmailError" de this.error
        //return this.errors
    }

    validatePassword = (pwd) => {
        //comprobar si tiene mas de 5 caracteres
        //si tiene mas quitamos el error "passwordError"
        //si no tiene mas de 5 añadimos el error
        //return this.errors

        if (pwd.length === 5) {
            delete this.errors.passwordError;
        } else {
            this.errors.passwordError = this.passwordError;
        }
        return this.errors;
    }

    validatePasswordRepeat = (pwd, pwdVerify) => {
        //comprobar si password === passwordRepeat
        //si son iguales quitaremos "repeatPassError"
        //si son diferentes añadiremos "repeatPassError"
        //return this.errors
        if (pwd === pwdVerify) {
            delete this.errors.repeatPassError;
        } else {
            this.errors.repeatPassError = this.repeatPassError;
        }
        return this.errors;
    }

    checkErrors = (isSubmitted) => {
        if (isSubmitted) {
            this.errors = {
                invalidEmailError: this.invalidEmailError,
                passwordError: this.passwordError,
                repeatPassError: this.repeatPassError,
            }

        }
        return this.errors
    }
}

const validator = new Validator();