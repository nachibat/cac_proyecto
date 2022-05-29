/*Comienzo Muestra de productos del carrito*/
const carrito = JSON.parse(localStorage.getItem('carrito') || []);
console.log(carrito);
const listCarrito = document.getElementById('listCarrito');

const verificarCuenta = () => {
    if (carrito.length != 0) {
        counter.innerHTML = carrito.length;
        counter.classList.remove('d-none');
        counter.classList.add('jump');
        setTimeout(() => {
            counter.classList.remove('jump');
        }, 600);
    }
}
verificarCuenta();

var TotalPagar = 0;
carrito.forEach(item => {
    const card = `
                    <div class="card border-secondary">
                        <img width="200" height="200" src="${item.img}" class="img-fluid rounded-start" alt="...">
                    
                            <div class="card-body">
                                <h5 class="card-header">${item.nombre}</h5>
                                <p style="color: grey;" class="card-header">${item.descripcion}</p>
                                <!--p style="color: grey;" class="card-text">Cantidad: </p-->
                                <div class="row">
                                    <div class="col">
                                        <p style="color: grey;" class="card-text">Producto</p>
                                        <p style="color: grey;" class="card-text">Envío</p>
                                        <p style="color: grey;" class="card-text">Protección</p>
                                    </div>
                                    <div class="col">
                                        <p style="color: grey;" class="card-text">$ ${item.precio}</p>
                                        <p style="color: green;" class="card-text">Gratis</p>
                                        <p style="color: grey;" class="card-text">$1000</p>
                                    </div>
                                </div>
                            </div>
`;
    listCarrito.innerHTML += card;

});


/*<div class="col-md-2">
                        <img width="200" height="200" src="https://arcencohogar.vtexassets.com/arquivos/ids/285016-500-auto?v=637651649771170000&width=500&height=auto&aspect=true" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <h5 class="card-title">Lámpara Colgante Ganges</h5>
                            <p style="color: grey;" class="card-text">Lámpara Colgante Ganges 3 Luces,38 Cm. Abitare</p>
                            <p style="color: grey;" class="card-text">Cantidad: 1</p>
                            <div class="row">
                                <div class="col">
                                    <p style="color: grey;" class="card-text">Producto</p>
                                    <p style="color: grey;" class="card-text">Envío</p>
                                    <p style="color: grey;" class="card-text">Protección</p>
                                </div>
                                <div class="col">
                                    <p style="color: grey;" class="card-text">$4325.00</p>
                                    <p style="color: green;" class="card-text">Gratis</p>
                                    <p style="color: grey;" class="card-text">$1000</p>
                                </div>
                            </div>
                        </div>
                    </div>*/


function ComprarProductoTarjeta() { // Capturar los datos del formulario con js

    alert("Compra realizada correctamente");
    console.log(p, h5, img);

}

/*Fin Muestra de productos carrito*/

/*Comienzo Formulario Tarjeta*/
var formulario = document.getElementById("form");
var numTarjeta = document.getElementById("numTarjeta");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var codigoSeg = document.getElementById("codigoSeg");
var fecExp = document.getElementById("fecExp");

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Se realizó la compra correctamente!";
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

    //Validamos Numero de Tarjeta
    if (numTarjeta.value == "") {
        errores.push({
            tipo: alertTarjeta,
            msg: "Ingrese número de tarjeta",
        });
    } else {
        alertTarjeta.classList.add("d-none");
    }

    //  Validamos fecha de expiración
    if (fecExp.value == "") {
        errores.push({
            tipo: alertCodSegFecExp,
            msg: "Ingrese fecha de expiración y código de seguridad",
        });
    } else {
        alertCodSegFecExp.classList.add("d-none");
    }


    // Validamos nombre y apellido
    if (nombre.value == "" || apellido.value == "") {
        errores.push({
            tipo: alertNombreApellido,
            msg: "Ingrese nombre y apellido",
        });
    } else {
        alertNombreApellido.classList.add("d-none");
    }

    //  Validamos dni
    if (dni.value == "") {
        errores.push({
            tipo: alertDNI,
            msg: "Ingrese el DNI",
        });
    } else {
        alertDNI.classList.add("d-none");
    }


    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }


    tarjeta = {
        numeroTarjeta: numTarjeta.value,
        CodigoSeguridad: codigoSeg.value,
        FechaExpiracion: fecExp.value,
        Nombre: nombre.value,
        Apellido: apellido.value,
        DNI: dni.value
    }

    localStorage.setItem('tarjeta', JSON.stringify(tarjeta));


    pintarMensajeExito();

    function redirigir() {
        window.location.href = '../index.html';
    }

    setTimeout(redirigir, 2000);

});

//Fin Formulario Tarjeta