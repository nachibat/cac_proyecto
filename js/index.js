const ultimos = document.getElementById('ult-visitados');
const dest = document.getElementById('destacados');
const counter = document.getElementById('counter');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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

const productos = [
    {
        id: 1,
        nombre: 'Zapatillas Nike Winflo 8',
        img: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfeda8bdf/products/NI_CW3419-006/NI_CW3419-006-1.JPG',
        precio: 21999,
        descripcion: 'Tus grandes aliadas para correr sobre asfalto que te aseguran zancadas con una optima amortiguación y dinamismo, las Zapatillas Nike Winflo 8 te da la seguridad y la confianza que necesitás para tus jornadas deportivas equilibrando la capacidad de reacción y el confort en cada kilómetro recorrido.',
        stock: 20,
        categoria: 'indumentaria'
    },
    {
        id: 2,
        nombre: 'Campera Loop Up Summer',
        img: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc1428b58/products/LU_INSS210003/LU_INSS210003-1.JPG',
        precio: 4099,
        descripcion: 'La Campera Loop Up Summer es perfecta para llevar esos días calurosos que refrescan una vez que cae el sol. Fiel compañera de tus jornadas, es confortable, cómoda y super clásica para que te la pongas con lo que quieras. Confeccionada en tela suave, es ideal para tenerla siempre a mano.',
        stock: 4,
        categoria: 'indumentaria'
    },
    {
        id: 3,
        nombre: 'Pava eléctrica SD1070 1.7lt Smart-tek',
        img: 'https://www.cetrogar.com.ar/media/catalog/product/4/_/4_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
        precio: 5729,
        descripcion: 'Perilla selectora de temperatura, tapa con botón de apertura, protección contra la ebullición en seco, ventana con indicador de nivel de agua, base con conexión central, con giro de 360°, base desmontable con enrolla cable, filtro de agua removible, cuerpo plástico, tapa y mango fríos al tacto, luz LED indicadora, fácil de Usar.',
        stock: 20,
        categoria: 'electrodomestico'
    },
    {
        id: 4,
        nombre: 'Tostadora Atma TO8020I',
        img: 'https://www.cetrogar.com.ar/media/catalog/product/t/o/to8020ip_ia0bsm0003.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
        precio: 5699,
        descripcion: '2 ranuras rebanadas, potencia 700w',
        stock: 2,
        categoria: 'electrodomestico'
    },
    {
        id: 5,
        nombre: 'Sillón relax ecocuero negro Siracusa',
        img: 'https://pardohogar.vtexassets.com/arquivos/ids/167485-800-auto?v=637514128053330000&width=800&height=auto&aspect=true',
        precio: 35999,
        descripcion: 'Sillon reclinable color negro, ecocuero. Ancho x Profundidad x Altura: 0.8 m x 0.9 m x 1.1 m. Peso: 40 kg',
        stock: 2,
        categoria: 'mueble'
    },
    {
        id: 6,
        nombre: 'Silla oficina Tulip Blanco Garden Life',
        img: 'https://pardohogar.vtexassets.com/arquivos/ids/173143-800-auto?v=637780330399700000&width=800&height=auto&aspect=true',
        precio: 9499,
        descripcion: 'Silla de oficina marca Garde Life color blanco. Silla de diseño escandinavo Tulip neumática. Regulación de altura neumática y estrella de 5 ruedas cromada. Casco Tulip con almohadón de cuero',
        stock: 4,
        categoria: 'mueble'
    },
    {
        id: 7,
        nombre: 'Bicicleta MTB Rodado 26 Unibike',
        img: 'https://pardohogar.vtexassets.com/arquivos/ids/174764-800-auto?v=637824472744430000&width=800&height=auto&aspect=true',
        precio: 44899,
        descripcion: 'Bicicleta montane bike rodado 26 de doble suspension.',
        stock: 3,
        categoria: 'rodado'
    },
    {
        id: 8,
        nombre: 'Monopatín eléctrico Xiaomi',
        img: 'https://pardohogar.vtexassets.com/arquivos/ids/172278-800-auto?v=637716366844030000&width=800&height=auto&aspect=true',
        precio: 84999,
        descripcion: 'Monopatín Xioami con pantalla LED con indicador de velocidad, nivel de batería y km. Con luz delantera de alto brillo 1.1W. Velocidad máxima de 20Km/h',
        stock: 5,
        categoria: 'rodado'
    },
    {
        id: 9,
        nombre: 'Pantalón Nike Fc Dri-FIT',
        img: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd1cf27a6/products/NI_DC9016-010/NI_DC9016-010-1.JPG',
        precio: 11499,
        descripcion: 'Forma tu equipo y asegurate la prenda necesaria para lucirte en él con el Pantalón Nike Fc Dri-FIT, un diseño pensado para que des todo de vos dentro y fuera de la cancha. El estilo ligero cuenta con un corte slim que se adapta a vos y acompaña todos tus movimientos.',
        stock: 5,
        categoria: 'indumentaria'
    },
    {
        id: 10,
        nombre: 'Horno Electrico Facilcook AO132',
        img: 'https://tiendafc.vtexassets.com/arquivos/ids/155612-800-auto?v=637674049743300000&width=800&height=auto&aspect=true',
        precio: 19760,
        descripcion: 'Cómodas perillas de comandos indicadoras de funciones. Temperatura hasta 250ºC. Timer programable con aviso sonoro. Bandeja antiadherente y rejilla metálica. Accesorios removibles para facilitar la limpieza interior.',
        stock: 5,
        categoria: 'electrodomestico'
    },
];

localStorage.setItem('productos', JSON.stringify(productos));

// const prod = JSON.parse(localStorage.getItem('productos') || []);
// console.log(prod);

const ult_visitados = [];
const destacados = [];
ult_visitados.push(productos[9]);
ult_visitados.push(productos[7]);
ult_visitados.push(productos[6]);
ult_visitados.push(productos[3]);
destacados.push(productos[0]);
destacados.push(productos[8]);
destacados.push(productos[4]);
destacados.push(productos[1]);

const agregarCarrito = (id) => {
    const producto = productos.find(e => e.id === id);
    const button = document.getElementById(id);
    carrito.push(producto);
    button.innerHTML = "Agregado al carrito";
    button.setAttribute('disabled', '');
    localStorage.setItem('carrito', JSON.stringify(carrito));
    verificarCuenta();
}

const crearCard = (item) => {
    return `
        <div class="col">
            <div class="card">
            <img src="${item.img}" class="card-img" alt="${item.nombre}" style="width:100%; height: 200px; object-fit:cover;">
            <div class="card-body">
                <h5 class="card-title">$ ${item.precio}</h5>
                <p class="card-text">${item.nombre}</p>
                <button id="${item.id}" onclick="agregarCarrito(${item.id})" href="#" class="btn btn-dark text-center">Agregar al carrito</button>
            </div>
            </div>        
        </div>
    `;
}

ult_visitados.forEach(item => {
    const card = crearCard(item);
    ultimos.innerHTML += card;
});

destacados.forEach(item => {
    const card = crearCard(item);
    dest.innerHTML += card;
});