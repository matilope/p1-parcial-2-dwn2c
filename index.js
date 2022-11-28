const data = [{
        nombre: "Iphone 14",
        imagenes: ["/imagenes/iphones/iphone-14/iphone-14-azul-128gb.webp", "/imagenes/iphones/iphone-14/iphone-14-blanco-128gb.webp", "/imagenes/iphones/iphone-14/iphone-14-morado-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 0
    },
    {
        nombre: "Iphone 13",
        imagenes: ["/imagenes/iphones/iphone-13/iphone-13-azul-128gb.webp", "/imagenes/iphones/iphone-13/iphone-13-blanco-128gb.webp", "/imagenes/iphones/iphone-13/iphone-13-rosa-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 1
    },
    {
        nombre: "Iphone 12",
        imagenes: ["/imagenes/iphones/iphone-12/iphone-12-azul-128gb.webp", "/imagenes/iphones/iphone-12/iphone-12-blanco-128gb.webp", "/imagenes/iphones/iphone-12/iphone-12-morado-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 2
    },
    {
        nombre: "Iphone 11",
        imagenes: ["/imagenes/iphones/iphone-11/iphone-11-azul-128gb.webp", "/imagenes/iphones/iphone-11/iphone-11-blanco-128gb.webp", "/imagenes/iphones/iphone-11/iphone-11-morado-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 3
    },
    {
        nombre: "Iphone SE",
        imagenes: ["/imagenes/iphones/iphone-SE/iphone-se-azul-128gb.webp", "/imagenes/iphones/iphone-SE/iphone-se-blanco-128gb.webp", "/imagenes/iphones/iphone-SE/iphone-se-rojo-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 4
    },
    {
        nombre: "Iphone XR",
        imagenes: ["/imagenes/iphones/iphone-XR/iphone-xr-negro-128gb.webp", "/imagenes/iphones/iphone-XR/iphone-xr-blanco-128gb.webp", "/imagenes/iphones/iphone-XR/iphone-xr-rojo-128gb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "telefonos",
        id: 5
    },
    {
        nombre: "Auriculares con cable",
        imagenes: ["/imagenes/accesorios/accesorios-auriculares-cable.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 6
    },
    {
        nombre: "Auriculares inalambricos",
        imagenes: ["/imagenes/accesorios/accesorios-auriculares-inalambricos.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 7
    },
    {
        nombre: "Cargador con cable",
        imagenes: ["/imagenes/accesorios/accesorios-cargador-cable.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 8
    },
    {
        nombre: "Cargador inalambrico",
        imagenes: ["/imagenes/accesorios/accesorios-cargador-inalambrico.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 9
    },
    {
        nombre: "Usb lightning",
        imagenes: ["/imagenes/accesorios/accesorios-usb.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 10
    },
    {
        nombre: "Funda blanca",
        imagenes: ["/imagenes/accesorios/accesorios-funda-blanco.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 11
    },
    {
        nombre: "Funda Morada",
        imagenes: ["/imagenes/accesorios/accesorios-funda-morado.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "accesorios",
        id: 12
    },
    {
        nombre: "Apple watch series 8",
        imagenes: ["/imagenes/watches/watch-8-azul.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 13
    },
    {
        nombre: "Apple watch series 7",
        imagenes: ["/imagenes/watches/watch-7-blanco.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 14
    },
    {
        nombre: "Apple watch series 6",
        imagenes: ["/imagenes/watches/watch-6-rojo.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 15
    },
    {
        nombre: "Apple watch series 5",
        imagenes: ["/imagenes/watches/watch-5-negro.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 16
    },
    {
        nombre: "Apple watch series 3",
        imagenes: ["/imagenes/watches/watch-3-blanco.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 17
    },
    {
        nombre: "Apple watch series SE",
        imagenes: ["/imagenes/watches/watch-se-blanco.webp"],
        descripcion: "",
        precio: 120000,
        categoria: "relojes",
        id: 18
    }
];

if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(data));
}

let productos = JSON.parse(localStorage.getItem("productos")).sort((a, b) => {
    return a.id - b.id;
});

let main = document.querySelector("main");
let section = document.createElement("section");
main.appendChild(section);

for (let i = 0; i < productos.length; i++) {
    let article = document.createElement("article");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let spanPrecio = document.createElement("span");
    let spanCategoria = document.createElement("span");
    let button = document.createElement("button");


    for (let j = 0; j < productos[i].imagenes.length; j++) {
        let imagen = document.createElement("img");
        imagen.classList.add(["card-img-top"])
        article.appendChild(imagen);
        imagen.src = productos[i].imagenes[j];
        if (j !== 0) {
            imagen.style.display = "none";
        }
    }

    section.appendChild(article);
    article.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(spanPrecio);
    div.appendChild(spanCategoria);
    div.appendChild(button);

    main.classList.add(["container"]);
    section.classList.add(...["row", "justify-content-center"]);
    article.classList.add(...["card", "m-3", "col-lg-4", "col-md-6", "col-sm-12"]);
    article.style.width = "18rem";
    div.classList.add(["card-body"]);
    h3.classList.add(["card-title"]);
    p.classList.add(["card-text"]);
    button.classList.add(...["btn", "btn-primary"]);
    button.setAttribute("data-id", `${i}`);


    h3.innerHTML = productos[i].nombre;
    p.innerHTML = productos[i].descripcion;
    spanPrecio.innerHTML = productos[i].precio;
    spanCategoria.innerHTML = productos[i].categoria;
    button.innerHTML = "Agregar al carrito";
}