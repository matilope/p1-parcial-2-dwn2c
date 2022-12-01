import { productos } from './index.js';
export class Carrito {

    static crearHTML(carrito) {
        let modal = document.querySelector(".modal");
        let fondoModal = document.querySelector(".modal-backdrop");
        let modal_bodySelector = document.querySelector(".modal-body");
        let itemsSelector = document.querySelectorAll(".modal-body *");
        itemsSelector.forEach(item=> item.remove());
        let items;

        if (!modal && !fondoModal) {
            /* Fondo modal */
            let fondoModal = document.createElement("div");
            fondoModal.classList.add(...["modal-backdrop", "fade", "show"]);
            document.body.appendChild(fondoModal);

            /* Creacion de elementos para el modal */
            let modal = document.createElement("div");
            let modal_dialog = document.createElement("div");
            let modal_content = document.createElement("div");
            let modal_header = document.createElement("div");
            let h4 = document.createElement("h4");
            let boton = document.createElement("button");
            let modal_body = document.createElement("div");
            let modal_footer = document.createElement("div");
            let boton_continuar = document.createElement("button");

            /* Appends */
            document.body.appendChild(modal);
            modal.appendChild(modal_dialog);
            modal_dialog.appendChild(modal_content);
            modal_content.appendChild(modal_header);
            modal_content.appendChild(modal_body);
            modal_content.appendChild(modal_footer);
            modal_header.appendChild(h4);
            modal_header.appendChild(boton);
            modal_footer.appendChild(boton_continuar);

            /* Informacion */
            h4.innerHTML = "Carrito";
            boton_continuar.innerHTML = "Continuar";

            /* Se agregan las clases y atributos de Bootstrap */
            modal.classList.add("modal");
            modal.id = "exampleModalScrollable";
            modal_dialog.classList.add(...["modal-dialog", "modal-dialog-scrollable"]);
            modal_content.classList.add(...["modal-content", "bg-customize"]);
            modal_header.classList.add("modal-header");
            h4.classList.add(...["modal-title", "text-center"]);
            boton.classList.add("btn-close");
            boton.setAttribute("type", "button");
            modal_body.classList.add("modal-body");
            modal_footer.classList.add("modal-footer");
            boton_continuar.classList.add(...["btn", "btn-lg", "btn-success", "text-light"]);
            boton_continuar.setAttribute("data-continuar", "true");
        } else if (carrito && carrito.length > 0){
            let precioTotal = 0;
            let separador = document.createElement("hr");
            let precio = document.createElement("span");

            carrito.forEach(item =>{
                let div = document.createElement("div");
                modal_bodySelector.appendChild(div);
                div.classList.add(...["items"]);
                div.setAttribute("data-id-item", item.id);
                let img = document.createElement("img");
                let h5 = document.createElement("h5");
                let span = document.createElement("span");
                let divContenedorInput = document.createElement("div");
                let decrementador = document.createElement("button");
                let input = document.createElement("input");
                let incrementador = document.createElement("button");
                div.appendChild(img);
                div.appendChild(h5);
                div.appendChild(span);
                div.appendChild(divContenedorInput);
                divContenedorInput.appendChild(decrementador);
                divContenedorInput.appendChild(input);
                divContenedorInput.appendChild(incrementador);
                decrementador.setAttribute("data-name", "decrementador");
                incrementador.setAttribute("data-name", "incrementador");
                decrementador.textContent = "-";
                incrementador.textContent = "+";
                img.style = "width:20%";
                h5.textContent = item.nombre;
                img.src = item.imagenes[0];
                span.textContent = item.precio;
                input.value = item.cantidad;
                input.type = "number";
                precioTotal+=item.precio;   
            });
            modal_bodySelector.appendChild(separador);
            modal_bodySelector.appendChild(precio);
            precio.textContent = `Precio total: ${precioTotal}`;
        }

        if(modal_bodySelector!=null){
            items = modal_bodySelector.childNodes;
        }
        return items;
    }

    static agregarProductos() {
        let agregarCarrito = document.querySelectorAll("[data-id]");
        for (let i = 0; i < agregarCarrito.length; i++) {
            agregarCarrito[i].addEventListener('click', (e) => {
                let atributoId = e.target.getAttribute("data-id");
                let productoCarrito = new Carrito(productos[atributoId]);
                productoCarrito.mensajeCarrito(atributoId);
                Carrito.actualizarCantidadProductos();
            });
        }
    }

    static actualizarCantidadProductos(){
        let cantidadProductos = document.querySelector(".cantidad-productos");
        cantidadProductos.textContent = JSON.parse(localStorage.getItem("carrito"))?.length;
    }

    static abrirCarrito() {
        let modalBackdrop = document.querySelector(".modal-backdrop");
        let modal = document.querySelector(".modal");
        /* Animacion */
        modal.classList.add("transicionModal");
        modal.style.display = "block";
        modalBackdrop.style.display = "block";
    }

    static cerrarCarrito(e) {
        /* Animacion */
        let padre = e.target.parentElement.parentElement.parentElement.parentElement;
        padre.previousElementSibling.classList.add("transicionInversaFondo");
        padre.classList.add("transicionInversa");
        // Elimino los elementos html para que no carguen la pagina por si se ejecutan varias veces, etc
        setTimeout(() => {
            padre.previousElementSibling.classList.remove("transicionInversaFondo");
            padre.classList.remove("transicionInversa");
            padre.previousElementSibling.style = "display:none;";
            padre.style = "display:none;";
        }, 1000);
    }

    static mostrarProductos() {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let modal_body = document.querySelector(".modal-body");
        if(carrito&&carrito.length>0){
            carrito.sort((a, b) => b.id - a.id);
            let carritoActualizado = this.crearHTML(carrito);
            modal_body.replaceChildren(...carritoActualizado);
            this.incrementador();
            this.decrementador();
        } else {
            let p = document.createElement("p");
            p.textContent = "No hay productos agregados al carrito";
            modal_body?.replaceChildren(p);
        }
    }

    static incrementador() {
        let incrementador = document.querySelectorAll("[data-name='incrementador']");
        for (let i = 0; i < incrementador.length; i++) {
            incrementador[i].addEventListener("click", (e) => {
                let padre = e?.target?.parentElement.parentElement;
                let carrito = JSON.parse(localStorage.getItem("carrito")).sort((a, b) => b.id - a.id);
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                let precio = producto.precio/producto.cantidad;
                if (producto.cantidad == 10) {
                    alert("No se pueden agregar más de 10 productos");
                } else {
                    producto.cantidad++;
                    producto.precio += precio;
                    carrito.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                }
                this.mostrarProductos();
            });
        }
    }

    static decrementador() {
        let carrito = JSON.parse(localStorage.getItem("carrito"))?.sort((a, b) => b.id - a.id);
        let decrementador = document.querySelectorAll("[data-name='decrementador']");
        for (let i = 0; i < decrementador.length; i++) {
            decrementador[i].addEventListener("click", (e) => {
                let padre = e?.target?.parentElement.parentElement;
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                let precio = producto.precio/producto.cantidad;
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    producto.precio -= precio;
                    carrito.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                } else {
                    if (confirm("No puede tener menos de un item, ¿estas seguro de que quieres eliminarlo?")) {
                        padre.remove();
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        this.actualizarCantidadProductos();
                    } else {
                        alert("No se ha eliminado");
                    }
                }
                this.mostrarProductos();
            });
        }
    }

    producto;

    constructor(producto) {
        this.producto = producto;
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        if (carrito) {
            for (let i = 0; i < carrito.length; i++) {
                if (carrito[i].nombre == producto.nombre) {
                    var validador = true;
                    var carritoIndex = i;
                    break;
                }
            }

            if (!validador) {
                this.producto.cantidad = 1;
                carrito.push(this.producto);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                return;
            }

            let productoCarrito = carrito.splice(carritoIndex, 1)[0];

            if (productoCarrito.cantidad >= 10) {
                alert("No se pueden agregar mas de 10 veces el mismo producto");
            } else {
                productoCarrito.cantidad++;
                let precioUnitario = this.producto.precio;
                productoCarrito.precio+=precioUnitario;
                carrito.push(productoCarrito);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }

        } else {
            this.producto.cantidad = 1;
            localStorage.setItem("carrito", JSON.stringify([this.producto]));
        }
    }

    mensajeCarrito(i) {
        let toast = document.createElement("div");
        let toastHeader = document.createElement("div");
        let img = document.createElement("img");
        let strong = document.createElement("strong");
        let small = document.createElement("small");
        let button = document.createElement("button");
        let toastBody = document.createElement("div");

        toast.classList.add(...["toast"]);
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");
        toastHeader.classList.add(...["toast-header"]);
        img.classList.add(...["rounded", "me-2"]);
        strong.classList.add(...["me-auto"]);
        button.classList.add(...["btn-close"]);
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-dismiss", "toast");
        button.setAttribute("aria-label", "close");
        toastBody.classList.add(...["toast-body"]);
        strong.textContent = "Tienda";
        small.textContent = "Hace un segundo";
        toastBody.textContent = `Se ha agregado el item ${productos[i].nombre}`;
        document.body.appendChild(toast);
        toast.appendChild(toastHeader);
        toast.appendChild(toastBody);

        toast.style = `display: block; position: fixed; top: 0; right: 0;`;
        [img, strong, small, button].forEach((HTMLElement) => {
            toastHeader.appendChild(HTMLElement);
        });
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 2000);
    }

    montoTotal(){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
    }

    eliminarItem(i) {
    }


}
