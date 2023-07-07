export function validation(user){

    const regexEmail = new RegExp(/\S+@\S+\.\S+/);
    const regexPassword = new RegExp("[0-9]");

    let incorrect = {};

    if(!regexEmail.test(user.email)){
        
        incorrect.email = 'Ingrese un email valido'

    }else if(!user.email){

        incorrect.email = 'Debe ingresar un email'

    }else if(user.email.length > 35){

        incorrect.email = 'El email debe tener menos de 35 caracteres'

    }

    if(!regexPassword.test(user.password)){

        incorrect.password =  'password debe tener al menos un numero'

    }else if(user.password.length < 6 || user.password.length > 10){

        incorrect.password = 'Password entre 6 y 10 caracteres'

    }

    return incorrect

}