var formulario = document.getElementById("form");
var nombre = document.getElementById("nombre"); 
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var fechaNacimiento = document.getElementById("input-nacimiento");
var sexoMas = document.getElementById("sexoMas");
var sexoFem = document.getElementById("sexoFem");
var sexoOtro = document.getElementById("sexoOtro");
var domicilio = document.getElementById("domicilio");
var codigoPostal = document.getElementById("codigoPostal");
var pass = document.getElementById("pass");
var confirmaPass = document.getElementById("confirmaPass");


const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Registro Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};


// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (evento) => {

    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    evento.preventDefault();

    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];


    // Validamos nombre y apellido
    if (nombre.value == "" || apellido.value == "") {
        errores.push({
            tipo: alertNombreApellido,
            msg: "Ingrese nombre y apellido",
        });
    } else {
        alertNombreApellido.classList.add("d-none");
    }


    // Validamos email
    if (email.value == "") {
        email.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Ingrese una dirección de e-mail",
        });
    } else {
        
        if (email.value.length > 35) {
            email.classList.add("is-invalid");

            errores.push({
                tipo: alertEmail,
                msg: "Cantidad de caracteres supera el limite",
            });
        }
        else{
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
            alertEmail.classList.add("d-none");
        }
        
    }


    //  Validamos fecha de nacimiento
    if (fechaNacimiento.value == "") {
        errores.push({
            tipo: alertFechaNacimiento,
            msg: "Ingrese la fecha de su nacimiento",
        });
    } else {
        alertFechaNacimiento.classList.add("d-none");
    }


    //  Validamos sexo
    if (sexoMas.checked || sexoFem.checked || sexoOtro.checked) {
        alertSexo.classList.add("d-none");
    } else {
        errores.push({
            tipo: alertSexo,
            msg: "Marque su sexo",
        });
    }


    //  Validamos domicilio
    if (domicilio.value == "") {
        errores.push({
            tipo: alertDomicilio,
            msg: "Ingrese su domicilio",
        });
    } else {
        alertDomicilio.classList.add("d-none");
    }


    //  Validamos código postal
    if (codigoPostal.value == "") {
        errores.push({
            tipo: alertCodigoPostal,
            msg: "Ingrese su código postal",
        });
    } else {
        alertCodigoPostal.classList.add("d-none");
    }


    // Validamos la contraseña del user
    if (pass.value == "" || confirmaPass.value == "") {
        errores.push({
            tipo: alertPass,
            msg: "Ingrese una contraseña",
        });
    } 
    if (pass.value != confirmaPass.value) {
        errores.push({
            tipo: alertPass,
            msg: "Las contraseñas no coinciden",
        });
    } else {
        alertPass.classList.add("d-none");
    }


    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }


    user = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: pass.value
    }

    localStorage.setItem('user', JSON.stringify(user));


    //pintarMensajeExito();                       //ME GUSTARÍA QUE MUESTRE UN MENSAJE DE REGISTRO EXITOSO, ESPERE 2 SEGUNDOS Y REDIRIGA A LA PÁGINA DE LOGIN
    alert("Registro exitoso!")
    window.location.href = '../pages/login.html';

});
