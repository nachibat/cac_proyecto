const carrito = JSON.parse(localStorage.getItem('carrito') || []);
console.log(carrito);
const listCarrito = document.getElementById('listCarrito');
const totalpagar = document.getElementById('listTotalPagar');

var TotalPagar = 0;
carrito.forEach(item => {
    const card = `<div class="row">
                                <div class="col-sm-3 mt-4 text-center">
                                <img style="width: 230px; height: 200px;" src="${item.img}" class="card-img-top" alt="pava-electrica">
                                </div> 
                                <div class="col-sm-3 mt-4 text-center">
                                    <h5 style="color: black;">${item.nombre}</h5>
                                    <p>${item.descripcion}</p>
                                </div> 
                                <div class="col-sm-3 mt-4 text-center">
                                    <h5 style="color: black;">$ ${item.precio}</h5>
                                </div>
                                <div class="col-sm-3 mt-4 text-center">
                                    <button id="${item.id}" onclick="EliminarCarrito(${item.id})" class="btn btn-danger btn-lg" tabindex="-1" role="button">Eliminar</button>
                                </div>
                            </div> `;
    listCarrito.innerHTML += card;
    TotalPagar += item.precio;
    listTotalPagar.innerHTML = `<h5 style="color: black">$ ${TotalPagar}</h5>`

});


const EliminarCarrito = (id) => {
    const listaCarritoModificada = carrito.find(e => e.id === id);
    const button = document.getElementById(id);

    const myIndex = carrito.indexOf(listaCarritoModificada)
    if (myIndex !== -1) {
        carrito.splice(myIndex, 1);
    }
    button.innerHTML = "Eliminado";
    button.setAttribute('disabled', '');
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const card = ``;
    listCarrito.innerHTML = card;

    carrito.forEach(item => {
        const card = `<div class="row">
                                    <div class="col-sm-3 mt-4 text-center">
                                    <img style="width: 230px; height: 200px;" src="${item.img}" class="card-img-top" alt="pava-electrica">
                                    </div> 
                                    <div class="col-sm-3 mt-4 text-center">
                                        <h5 style="color: black;">${item.nombre}</h5>
                                        <p>${item.descripcion}</p>
                                    </div> 
                                    <div class="col-sm-3 mt-4 text-center">
                                        <h5 style="color: black;">$ ${item.precio}</h5>
                                    </div>
                                    <div class="col-sm-3 mt-4 text-center">
                                        <button id="${item.id}" onclick="EliminarCarrito(${item.id})" class="btn btn-danger btn-lg" tabindex="-1" role="button">Eliminar</button>
                                    </div>
                                </div> `;
        listCarrito.innerHTML += card;
        TotalPagar += item.precio;
        listTotalPagar.innerHTML = `<h5 style="color: black">$ ${TotalPagar}</h5>`

    });
}

console.log(carrito);