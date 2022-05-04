function AgregarAcarrito() {
    // Clases en JS
    class ProductoCarrito {

        constructor() { // Obtengo las etiquetas (elementos) del DOM desde JS

            let a = document.getElementById("img").value;
            let p = document.getElementById("p").value;
            let h5 = document.getElementById("h5").value;
            //let a = document.getElementById("a").value;

            localStorage.setItem("imagen", img);
            localStorage.setItem("precio", h5);
            localStorage.setItem("descripcion", p);

        }
    }
    console.log(p, h5, a);
    alert("Se agregó el producto al carrito");
}