import { productos } from './index.js';
export class Carrito{

    producto;

    constructor(producto) {
        if(producto!==undefined){
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
                    this.alerta("No se pueden agregar más de 10 veces el mismo producto");
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
    }

    crearHTML(carrito) {
        let modal = document.querySelector(".modal");
        let fondoModal = document.querySelector(".modal-backdrop");
        let modalSelector = document.querySelector(".modal-body");
        let itemsSelector = document.querySelectorAll(".modal-body *");
        let footerAll = document.querySelectorAll(".modal-footer *");
        itemsSelector.forEach(item=> item.remove());
        footerAll.forEach(item=> item.remove());

        if (!modal && !fondoModal) {
            /* Fondo modal */
            let fondoModal = document.createElement("div");
            fondoModal.classList.add(...["modal-backdrop", "fade", "show"]);
            document.body.appendChild(fondoModal);

            /* Creacion de elementos para el modal */
            let modal = document.createElement("div");
            let modalDialog = document.createElement("div");
            let modalContent = document.createElement("div");
            let modalHeader = document.createElement("div");
            let h4 = document.createElement("h4");
            let boton = document.createElement("button");
            let modalBody = document.createElement("div");
            let modalFooter = document.createElement("div");

            /* Appends */
            document.body.appendChild(modal);
            modal.appendChild(modalDialog);
            modalDialog.appendChild(modalContent);
            modalContent.append(modalHeader, modalBody, modalFooter);
            modalHeader.append(h4, boton);

            /* Informacion */
            h4.textContent = "Carrito";

            /* Se agregan las clases y atributos de Bootstrap */
            modal.classList.add("modal");
            modal.id = "exampleModalScrollable";
            modalDialog.classList.add(...["modal-dialog", "modal-dialog-scrollable"]);
            modalContent.classList.add(...["modal-content", "bg-customize"]);
            modalHeader.classList.add("modal-header");
            h4.classList.add(...["modal-title", "text-center"]);
            boton.classList.add("btn-close");
            boton.setAttribute("type", "button");
            modalBody.classList.add("modal-body");
            modalFooter.classList.add("modal-footer");

        } else if (carrito && carrito.length > 0){
            let precioTotal = 0;
            let separador = document.createElement("hr");
            let precio = document.createElement("span");
            let botonEliminar = document.createElement("button");
            let modalFooter = document.querySelector(".modal-footer");
            modalFooter.append(botonEliminar);
            botonEliminar.textContent = "Vaciar carrito";
            botonEliminar.classList.add(...["btn", "btn-lg", "btn-danger", "text-light"]);

            carrito.forEach(item =>{
                let div = document.createElement("div");
                modalSelector.appendChild(div);
                div.classList.add(...["items", "gap-3", "mb-5"]);
                div.setAttribute("data-id-item", item.id);
                let img = document.createElement("img");
                let h5 = document.createElement("h5");
                let span = document.createElement("span");
                let divContenedorInput = document.createElement("div");
                let decrementador = document.createElement("button");
                let input = document.createElement("input");
                let incrementador = document.createElement("button");
                let eliminarItem = document.createElement("i");
                div.append(img, h5, span, divContenedorInput, eliminarItem);
                divContenedorInput.append(decrementador, input, incrementador);
                divContenedorInput.classList.add(...["contenedorInput"]);
                decrementador.setAttribute("data-name", "decrementador");
                incrementador.setAttribute("data-name", "incrementador");
                eliminarItem.classList.add(...["bi", "bi-trash2", "trash"]);
                decrementador.textContent = "-";
                incrementador.textContent = "+";
                img.style = "width:16%";
                h5.textContent = item.nombre;
                img.src = item.imagenes[0];
                span.textContent = `$${item.precio}`;
                input.value = item.cantidad;
                input.type = "number";
                precioTotal+=item.precio;   
            });
            modalSelector.append(separador, precio);
            precio.classList.add("precio-total");
            precio.textContent = `Precio total: `;
            let spanPrecioTotal = document.createElement("span");
            precio.appendChild(spanPrecioTotal);
            spanPrecioTotal.textContent = `$${precioTotal}`;
        }

        /* Creo el boton de continuar */
        let modalFooter = document.querySelector(".modal-footer");
        let botonContinuar = document.createElement("button");
        modalFooter.append(botonContinuar);
        botonContinuar.textContent = "Continuar";
        botonContinuar.classList.add(...["btn", "btn-lg", "btn-success", "text-light"]);
        botonContinuar.setAttribute("data-continuar", "true");
        
        if(modalSelector!=null){
            let items = modalSelector.childNodes;
            return items;
        }
    }

    actualizarCantidadProductos(){
        let cantidadProductos = document.querySelector(".cantidad-productos");
        cantidadProductos.textContent = JSON.parse(localStorage.getItem("carrito"))?.length | 0;
    }

    abrirCarrito() {
        let modalBackdrop = document.querySelector(".modal-backdrop");
        let modal = document.querySelector(".modal");
        /* Animacion */
        modal.classList.add("transicionModal");
        modal.style.display = "block";
        modalBackdrop.style.display = "block";
    }

    cerrarCarrito(e) {
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

    mostrarProductos() {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let modalBody = document.querySelector(".modal-body");
        let modalFooter = document.querySelector(".modal-footer");
        let vaciarProducto = document.querySelector(".btn-danger");
        let continuar = document.querySelector("[data-continuar]");
        if(carrito&&carrito.length>0){
            carrito.sort((a, b) => b.id - a.id);
            let carritoActualizado = this.crearHTML(carrito);
            modalBody.replaceChildren(...carritoActualizado);
            this.incrementador();
            this.decrementador();
            this.eliminarItem();
            this.vaciarCarrito();
            if(vaciarProducto){
                vaciarProducto.style="display:block;";
            }
            continuar.disabled = false;
            modalFooter.style="justify-content:space-between;";
        } else {
            let p = document.createElement("p");
            p.textContent = "No hay productos agregados al carrito";
            modalBody?.replaceChildren(p);
            if(vaciarProducto){
                vaciarProducto.style="display:none;";
            }
            continuar.disabled=true;
            modalFooter.style="justify-content:flex-end;";
        }
        this.actualizarCantidadProductos();
    }

    incrementador() {
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
                    this.alerta("No se pueden agregar más de 10 productos");
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

    decrementador() {
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
                    const thisCarrito = this;
                    if (this.alerta("No puede tener menos de un item,<br /> ¿Estas seguro de que quieres eliminarlo?", true, function(confirm){
                        if(confirm){
                            padre.remove();
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                            thisCarrito.mostrarProductos();
                        }
                    })) {
                    } else {
                        this.alerta("El producto no se ha eliminado del carrito", undefined);
                    }
                }
                this.mostrarProductos();
            });
        }
    }

    eliminarItem() {
        let carrito = JSON.parse(localStorage.getItem("carrito"))?.sort((a, b) => b.id - a.id);
        let eliminar = document.querySelectorAll(".bi-trash2");
        eliminar.forEach(itemEliminado => {
            itemEliminado.addEventListener('click', (e) => {
                let padre = e?.target?.parentElement;
                let id = padre.getAttribute("data-id-item");
                let filtrado = carrito.filter(item => item.id == id)[0];
                let indexCarrito = carrito.indexOf(filtrado);
                let producto = carrito.splice(indexCarrito, 1)[0];
                const thisCarrito = this;
                if (this.alerta("¿Estas seguro de que quieres eliminarlo?", true, function(confirm){
                    if(confirm){
                        padre.remove();
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                        thisCarrito.mostrarProductos();
                    }
                })) {
                } else {
                    this.alerta(`No se ha eliminado el producto ${producto.nombre}`);
                }
                this.mostrarProductos();
            });
        });
    }

    vaciarCarrito() {
        let vaciar = document.querySelector(".btn-danger");
        vaciar?.addEventListener('click', () => {
            const thisCarrito = this;
            if (this.alerta("¿Estas seguro de que quieres vaciar el carrito?", true, function(confirm){
                if(confirm){
                    localStorage.removeItem("carrito");
                    thisCarrito.mostrarProductos();
                }
            })) {
            } else {
                this.alerta(`No se ha vaciado el carrito`);
            }
            this.mostrarProductos();
        });
    }

    alerta(texto, confirmacion, callback) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let fondoModal = document.createElement("div");
        let modal = document.querySelector(".modal");
        let alerta = document.querySelector(".alert");

        if(!alerta){
            document.body.appendChild(fondoModal);
            document.body.appendChild(div);
            div.appendChild(p);
            let botonAceptar = document.createElement("button");

            fondoModal.classList.add(...["modal-back-alert"]);
            div.classList.add(...["p-3", "bg-white", "alert", "transicionModal"]);
            
            modal.style="display:none";

            botonAceptar.classList.add(...["bg-success", "border", "rounded", "p-2", "text-white"]);
            p.style="font-size:18px; text-align:center;";

            p.innerHTML = texto;
            botonAceptar.textContent = "Aceptar";

            if(confirmacion){
                let botonCancelar = document.createElement("button");
                div.append(botonCancelar, botonAceptar);
                botonCancelar.classList.add(...["bg-danger", "border", "rounded", "p-2", "text-white"]);
                botonCancelar.textContent = "Cancelar";
                botonCancelar?.addEventListener('click', (e)=>{
                    e.target.parentElement.remove();
                    modal.style="display:block";
                    document.querySelector(".modal-backdrop").style="display:block;";
                    fondoModal.remove();
                    return callback(false);
                });
                botonAceptar?.addEventListener('click', (e)=>{
                    return callback(true);
                });
            } else {
                div.append(botonAceptar);
            }
            botonAceptar?.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
                modal.style="display:block";
                document.querySelector(".modal-backdrop").style="display:block;";
                fondoModal.remove();
            });
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

        button.addEventListener('click', () => {
            document.body.removeChild(toast);
        });
        
        toast.style = `display: block; position: fixed; top: 0; right: 0;`;
        [img, strong, small, button].forEach((HTMLElement) => {
            toastHeader.appendChild(HTMLElement);
        });
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 2000);
    }

    continuarCheckout(){
        
    }

}
