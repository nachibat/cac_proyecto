const productos = JSON.parse(localStorage.getItem('productos')) || [];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const listProd = document.getElementById('listProd');

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

productos.forEach(item => {
    const card = `
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.img}" class="img-fluid rounded-start" alt="${item.nombre}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.descripcion}</p>
                    <p class="card-text"><small class="text-muted">$ ${item.precio}</small></p>
                    <button id="${item.id}" onclick="agregarCarrito(${item.id})" id="agregar" class="btn btn-dark text-center" style="width:100%">Agregar al carrito</button>
                </div>
            </div>
        </div>
        </div>
    `;
    listProd.innerHTML += card;
});


const agregarCarrito = (id) => {
    const producto = productos.find(e => e.id === id);
    const button = document.getElementById(id);
    carrito.push(producto);
    button.innerHTML = "Agregado al carrito";
    button.setAttribute('disabled', '');
    localStorage.setItem('carrito', JSON.stringify(carrito));
    verificarCuenta();
}