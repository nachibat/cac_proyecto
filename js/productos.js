const productos = JSON.parse(localStorage.getItem('productos') || []);
const listProd = document.getElementById('listProd');

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
                    <button onclick="agregarCarrito(${item.id})" id="agregar" class="btn btn-dark text-center" style="width:100%">Agregar al carrito</button>
                </div>
            </div>
        </div>
        </div>
    `;
    listProd.innerHTML += card
});


const agregarCarrito = (producto) => {
    console.log(producto);
}