import { Carrito } from './carrito.js';

let carrito = JSON.parse(localStorage.getItem("carrito"));

/* Inicializo metodos estaticos para su utilizacion en caso de ser necesarios */
Carrito.crearHTML(carrito);
Carrito.mostrarProductos();
Carrito.agregarProductos();
Carrito.actualizarCantidadProductos();


/* Agarro el evento cerrar */
document.querySelector(".btn-close").addEventListener("click", (e) => {
    Carrito.cerrarCarrito(e);
});


/* Agarro el evento click del carrito */
/* Aqui se despliega el carrito por lo tanto cada vez que se despliega por medio de metodos estaticos lo vacio (removeChild) y lo vuelvo a recorrer */

document.querySelector("i").addEventListener("click", () => {
    Carrito.abrirCarrito();
    Carrito.mostrarProductos();
    Carrito.decrementador();
    Carrito.incrementador();
});