const carrito = JSON.parse(localStorage.getItem('carrito') || []);
console.log(carrito);
const listCarrito = document.getElementById('listCarrito');


var TotalPagar = 0;
carrito.forEach(item => {
    const card = `<div class="row-md-2">
                <img width="200" height="200" src="${item.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p style="color: grey;" class="card-text">${item.descripcion}</p>
                            <p style="color: grey;" class="card-text">Cantidad: </p>
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
                    </div>`;
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