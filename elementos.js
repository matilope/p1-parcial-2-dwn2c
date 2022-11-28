Carrito.crearHTML();
mostrarProductos();
Carrito.abrirCarrito();

/* Boton agregar carrito  */
let agregarCarrito = document.querySelectorAll("[data-id]");
let productoCarrito;
for (let i = 0; i < agregarCarrito.length; i++) {
    agregarCarrito[i].addEventListener('click', (e) => {
        let atributoId = e.target.getAttribute("data-id");
        productoCarrito = new Carrito(productos[atributoId]);
        productoCarrito.mensajeCarrito(atributoId);
    });
}


[document.querySelector("[data-cerrar]"), document.querySelector(".btn-close")].forEach(botones => botones.addEventListener("click", (e) => {
    Carrito.cerrarCarrito(e);
}));


document.querySelector("i").addEventListener("click", () => {
    Carrito.abrirCarrito();
    vacioProductos();
    mostrarProductos();
});


function mostrarProductos() {
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
let modalBody = document.querySelector(".modal-body");
function vacioProductos(){


    document.querySelectorAll(".modal-body .items")?.forEach(e=>{
    modalBody.removeChild(e);
    });

    document.querySelectorAll(".modal-body p")?.forEach(e=>{
        modalBody.removeChild(e);
    });
}

let decrementador = document.querySelectorAll("[data-name='decrementador']");
for(let i = 0; i<decrementador.length;i++){
    decrementador[i].addEventListener("click", (e) => {
        let padre = e.target.parentElement.parentElement;
        let input = e.target.nextElementSibling;
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let id = padre.getAttribute("data-id-item");
        let producto = carrito.splice(id, 1)[0];
        console.log(id)
        console.log(producto)
        if(producto.cantidad>1){
            producto.cantidad--;
            input.value = producto.cantidad;
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        } else {
            if(confirm("No puede tener menos de un item, ¿estas seguro de que quieres eliminarlo?")){
                let modalBody = padre.parentElement;
                modalBody.removeChild(padre);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            } else {
                alert("No se ha eliminado");
            }
        }
        vacioProductos();
        mostrarProductos();
    });
}