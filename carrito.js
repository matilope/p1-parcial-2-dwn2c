class Carrito {
    
    static crearHTML() {
        let modal = document.querySelector(".modal");
        let fondoModal = document.querySelector(".modal-backdrop");
        if(!modal&&!fondoModal){
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
            let boton_cerrar = document.createElement("button");

            /* Appends */
            document.body.appendChild(modal);
            modal.appendChild(modal_dialog);
            modal_dialog.appendChild(modal_content);
            modal_content.appendChild(modal_header);
            modal_content.appendChild(modal_body);
            modal_content.appendChild(modal_footer);
            modal_header.appendChild(h4);
            modal_header.appendChild(boton);
            modal_footer.appendChild(boton_cerrar);

            /* Informacion */
            h4.innerHTML = "Carrito";
            boton_cerrar.innerHTML = "Cerrar";

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
            boton_cerrar.classList.add(...["btn", "btn-lg", "btn-success", "text-light"]);
            boton_cerrar.setAttribute("data-cerrar", true);
        }
    }

    static abrirCarrito(){
        let modalBackdrop = document.querySelector(".modal-backdrop");
        let modal = document.querySelector(".modal");
        /* Animacion */
        modal.classList.add("transicionModal");
        modal.style.display = "block";
        modalBackdrop.style.display="block";
    }

    static cerrarCarrito(e){
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
        let modalBody = document.querySelector(".modal-body");
        if(carrito&&carrito.length>0){
            for(let i = 0; i<carrito.length;i++){
                let div = document.createElement("div");
                modalBody.appendChild(div);
                div.classList.add(...["items"]);
                div.setAttribute("data-id-item", i);
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
                decrementador.textContent="-";
                incrementador.textContent="+";
                img.style="width:20%";
                h5.textContent=carrito[i].nombre;
                img.src=carrito[i].imagenes[0];
                span.textContent=carrito[i].precio;
                input.value=carrito[i].cantidad;
                input.type="number";
            }
        } else {
            let p = document.createElement("p");
            modalBody.appendChild(p);
            p.textContent="No hay productos agregados al carrito";
        }
    }

    static vacioProductos(){
        let modalBody = document.querySelector(".modal-body");

        document.querySelectorAll(".modal-body .items")?.forEach(e=>{
        modalBody.removeChild(e);
        });

        document.querySelectorAll(".modal-body p")?.forEach(e=>{
            modalBody.removeChild(e);
        });

    }

    static incrementador(e){

    }

    static decrementador(e){
        let padre = e.target.parentElement.parentElement;
        let local = JSON.parse(localStorage.getItem("carrito"));
        let id = padre.getAttribute("data-id-item");
        let producto = local.splice(local[id], 1);
        console.log(producto);
        if(producto.cantidad>1){
            producto.cantidad--;
            
        } else {
            if(confirm("No puede tener menos de un item, ¿estas seguro de que quieres eliminarlo?")){
                let modalBody = padre.parentElement;
                modalBody.removeChild(padre);
            } else {
                alert("No se ha eliminado");
            }
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

            var productoCarrito = carrito.splice(carritoIndex, 1)[0];

            productoCarrito.cantidad++;

            carrito.push(productoCarrito);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        } else {
            this.producto.cantidad = 1;
            localStorage.setItem("carrito", JSON.stringify([this.producto]));
        }
    }

    mensajeCarrito(i){
        let toast = document.createElement("div");
        let toastHeader = document.createElement("div");
        let img = document.createElement("img");
        let strong = document.createElement("strong");
        let small = document.createElement("small");
        let button = document.createElement("button");
        let toastBody = document.createElement("div");

        toast.classList.add(...["toast"]);
        toast.setAttribute("role","alert");
        toast.setAttribute("aria-live","assertive");
        toast.setAttribute("aria-atomic","true");
        toastHeader.classList.add(...["toast-header"]);
        img.classList.add(...["rounded", "me-2"]);
        strong.classList.add(...["me-auto"]);
        button.classList.add(...["btn-close"]);
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-dismiss", "toast");
        button.setAttribute("aria-label", "close");
        toastBody.classList.add(...["toast-body"]);
        strong.textContent="Tienda";
        small.textContent="Hace un segundo";
        toastBody.textContent=`Se ha agregado el item ${productos[i].nombre}`;
        document.body.appendChild(toast);
        toast.appendChild(toastHeader);
        toast.appendChild(toastBody);

        toast.style=`display: block; position: absolute; top: 0; right: 0;`;
        [img,strong,small,button].forEach((HTMLElement)=>{
            toastHeader.appendChild(HTMLElement);
        });
        setTimeout(()=>{
            document.body.removeChild(toast);
        },2000);
    }

    eliminarItem() {

    }


}