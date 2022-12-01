import { Carrito } from './carrito.js';

let carrito = JSON.parse(localStorage.getItem("carrito"));

/* Inicializo metodos estaticos para su utilizacion */
Carrito.crearHTML(carrito);
Carrito.agregarProductos();
Carrito.actualizarCantidadProductos();


/* Agarro el evento cerrar */
document.querySelector(".btn-close").addEventListener("click", (e) => {
    Carrito.cerrarCarrito(e);
});


/* Agarro el evento click del carrito */
/* Aqui se despliega el carrito por lo tanto cada vez que se despliega por medio de metodos estaticos lo vacio (remove) y lo vuelvo a recorrer */

document.querySelector(".bi-cart2").addEventListener("click", () => {
    Carrito.abrirCarrito();
    Carrito.mostrarProductos();
});