const carrito = JSON.parse(localStorage.getItem('carrito') || []);
console.log(carrito);
const listCarrito = document.getElementById('listCarrito');


carrito.forEach(item => {
    const card = `<div class="row">
                                <img src="${item.img}" class="card-img-top" alt="pava-electrica">
                                <div class="col-sm-3 mt-4">
                                    <h5 style="color: black;">${item.nombre}</h5>
                                    <p>${item.descripcion}</p>
                                </div>
                                <div class="col-sm-3">
                                    <h5 style="color: black;">$ ${item.precio}</h5>
                                </div>
                                <div class="col-sm-3">
                                    <button id="${item.id}" onclick="EliminarCarrito(${item.id})" class="btn btn-danger btn-lg" tabindex="-1" role="button">Eliminar</button>
                                </div>
                            </div> `;
    listCarrito.innerHTML += card;
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
}

console.log(carrito);