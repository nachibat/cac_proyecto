/*var user = [{
    nombre: nombre,
    apellido: apellido,
    password: pass,
}]
*/



const pintarMensajeError = () => {
    const alertPass = document.getElementById("alertPass");
    alertPass.classList.remove("d-none");
    //alertSuccess.textContent = "El email es incorrecto";
}





var nombre = document.getElementById("nombre"); //si acá pongo .value y abajo guardo directamente nombre?
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var confirmaPass = document.getElementById("confirmaPass");



function guardar(){

    if (pass.value != confirmaPass.value) {
        
        pintarMensajeError();
        return;
    }

    user = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: pass.value
    }

    localStorage.setItem('user', JSON.stringify(user));

    alert('Login Exitoso!')
    window.location.href = '../pages/login.html';



//localStorage.setItem(nombre);
/*localStorage.setItem("nombre", nombre.value);

localStorage.setItem("apellido", apellido.value);

localStorage.setItem("email", email.value);

localStorage.setItem("pass", pass.value);

localStorage.setItem("confirmaPass", confirmaPass.value);
*/

/*var user = [];



localStorage.setItem(user);
*/

};


//Necesito comparar contraseñas para que me deje guardar sólo si son iguales.


