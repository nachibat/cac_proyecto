let img;
let p;
let h5;


function AgregarAcarrito() { // Capturar los datos del formulario con js
    // Clases en JS
    //class ProductoCarrito {

    // constructor() { // Obtengo las etiquetas (elementos) del DOM desde JS (index.html)

    let img = document.getElementById("img");
    let p = document.getElementById("p");
    let h5 = document.getElementById("h5");
    //let a = document.getElementById("a").value;
    localStorage.setItem("imagen", img);
    localStorage.setItem("precio", h5);
    localStorage.setItem("descripcion", p);

    //}
    //}

    alert("Se agregó el producto al carrito");
    console.log(p, h5, img);

    console.log(localStorage.getItem("imagen"));
    console.log(localStorage.getItem("precio"));
    console.log(localStorage.getItem("descripcion"));
}
//localStorage.clear()