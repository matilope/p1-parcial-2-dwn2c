import { Carrito } from './carrito.js';

Carrito.crearHTML();
Carrito.mostrarProductos();

/* Boton agregar carrito  */



[document.querySelector("[data-cerrar]"), document.querySelector(".btn-close")].forEach(botones => botones.addEventListener("click", (e) => {
    Carrito.cerrarCarrito(e);
}));


document.querySelector("i").addEventListener("click", () => {
    Carrito.abrirCarrito();
    Carrito.vacioProductos();
    Carrito.mostrarProductos();
    Carrito.decrementador();
    Carrito.incrementador();
});