import { Carrito } from "./carrito.js";

const data = [{
        nombre: "Iphone 14",
        imagenes: ["/imagenes/iphones/iphone-14/iphone-14-azul-128gb.webp", "/imagenes/iphones/iphone-14/iphone-14-blanco-128gb.webp", "/imagenes/iphones/iphone-14/iphone-14-morado-128gb.webp"],
        descripcion: "El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.",
        precio: 120000,
        categoria: "celulares",
        id: 0
    },
    {
        nombre: "Iphone 13",
        imagenes: ["/imagenes/iphones/iphone-13/iphone-13-azul-128gb.webp", "/imagenes/iphones/iphone-13/iphone-13-blanco-128gb.webp", "/imagenes/iphones/iphone-13/iphone-13-rosa-128gb.webp"],
        descripcion: "iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.",
        precio: 120000,
        categoria: "celulares",
        id: 1
    },
    {
        nombre: "Iphone 12",
        imagenes: ["/imagenes/iphones/iphone-12/iphone-12-azul-128gb.webp", "/imagenes/iphones/iphone-12/iphone-12-blanco-128gb.webp", "/imagenes/iphones/iphone-12/iphone-12-morado-128gb.webp"],
        descripcion: "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic.",
        precio: 120000,
        categoria: "celulares",
        id: 2
    },
    {
        nombre: "Iphone 11",
        imagenes: ["/imagenes/iphones/iphone-11/iphone-11-azul-128gb.webp", "/imagenes/iphones/iphone-11/iphone-11-blanco-128gb.webp", "/imagenes/iphones/iphone-11/iphone-11-morado-128gb.webp"],
        descripcion: "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas",
        precio: 120000,
        categoria: "celulares",
        id: 3
    },
    {
        nombre: "Iphone SE",
        imagenes: ["/imagenes/iphones/iphone-SE/iphone-se-azul-128gb.webp", "/imagenes/iphones/iphone-SE/iphone-se-blanco-128gb.webp", "/imagenes/iphones/iphone-SE/iphone-se-rojo-128gb.webp"],
        descripcion: "Chip A15 Bionic superrápido. Una increíble duración de batería y una cámara que es una superestrella. Y además, el vidrio más resistente en un smartphone y botón de inicio con la seguridad de Touch ID.",
        precio: 120000,
        categoria: "celulares",
        id: 4
    },
    {
        nombre: "Iphone XR",
        imagenes: ["/imagenes/iphones/iphone-XR/iphone-xr-negro-128gb.webp", "/imagenes/iphones/iphone-XR/iphone-xr-blanco-128gb.webp", "/imagenes/iphones/iphone-XR/iphone-xr-rojo-128gb.webp"],
        descripcion: "El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas (2) y está disponible en seis colores increíbles. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión en tus apps con sólo una mirada. El chip A12 Bionic usa el aprendizaje automático en tiempo real para llevar aún más allá todo lo que puedes hacer con tus fotos, juegos, realidad aumentada y más.",
        precio: 120000,
        categoria: "celulares",
        id: 5
    },
    {
        nombre: "Auriculares con cable",
        imagenes: ["/imagenes/accesorios/accesorios-auriculares-cable.webp"],
        descripcion: "A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods se basa en la geometría del oído, por eso son más cómodos que cualquier otro audífono de este tipo.",
        precio: 120000,
        categoria: "accesorios",
        id: 6
    },
    {
        nombre: "Auriculares inalambricos",
        imagenes: ["/imagenes/accesorios/accesorios-auriculares-inalambricos.webp"],
        descripcion: "Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad, acceso a Siri activado por voz y un estuche de carga que te ofrece más de 24 horas de reproducción de audio",
        precio: 120000,
        categoria: "accesorios",
        id: 7
    },
    {
        nombre: "Cargador con cable",
        imagenes: ["/imagenes/accesorios/accesorios-cargador-cable.webp"],
        descripcion: "El adaptador de corriente USB tipo C de 20W de Apple ofrece una carga rápida y eficiente en el hogar, en la oficina o mientras viaja. El cable USB C Conecta tu iPhone, iPad o iPod al Adaptador de corriente de 20W para cargar tus dispositivos con la máxima velocidad.",
        precio: 120000,
        categoria: "accesorios",
        id: 8
    },
    {
        nombre: "Cargador inalambrico",
        imagenes: ["/imagenes/accesorios/accesorios-cargador-inalambrico.webp"],
        descripcion: "El cargador MagSafe inalámbrico incorpora imanes perfectamente alineados para fijarse al instante a tu iPhone y cargarlo sin cables aún más rápido con hasta 15W",
        precio: 120000,
        categoria: "accesorios",
        id: 9
    },
    {
        nombre: "Usb lightning",
        imagenes: ["/imagenes/accesorios/accesorios-usb.webp"],
        descripcion: "Este cable USB 2.0 conecta tu iPhone, iPad o iPod con conector Lightning al puerto USB de tu computadora para sincronizarlos y cargarlos. También puedes conectar tu dispositivo al adaptador de corriente USB de Apple para cargarlo desde una toma de corriente.",
        precio: 120000,
        categoria: "accesorios",
        id: 10
    },
    {
        nombre: "Funda blanca",
        imagenes: ["/imagenes/accesorios/accesorios-funda-blanco.webp"],
        descripcion: "Funda blanca de silicona, no a prueba de agua, modelos compatibles 11, 12 y 13",
        precio: 120000,
        categoria: "accesorios",
        id: 11
    },
    {
        nombre: "Funda Morada",
        imagenes: ["/imagenes/accesorios/accesorios-funda-morado.webp"],
        descripcion: "Funda morada de silicona, no a prueba de agua, modelos compatibles 11, 12 y 13",
        precio: 120000,
        categoria: "accesorios",
        id: 12
    },
    {
        nombre: "Apple watch series 8",
        imagenes: ["/imagenes/watches/watch-8-azul.webp"],
        descripcion: "El Apple Watch Series 8 viene con apps y sensores de salud avanzados con los que puedes hacerte un electrocardiograma, medir tu frecuencia cardiaca y nivel de oxígeno en la sangre, y registrar cambios de temperatura para obtener información relevante sobre tu ciclo menstrual.",
        precio: 120000,
        categoria: "relojes",
        id: 13
    },
    {
        nombre: "Apple watch series 7",
        imagenes: ["/imagenes/watches/watch-7-blanco.webp"],
        descripcion: "El Apple Watch Series 7 tiene la pantalla Retina siempre activa más grande y avanzada hasta ahora. Todo se ve increíble y es más fácil de usar. También es el más resistente a golpes gracias a su nuevo cristal frontal. Sus funcionalidades avanzadas te permiten medir tu nivel de oxígeno en la sangre, monitorear tus horas de sueño y practicar la conciencia plena.",
        precio: 120000,
        categoria: "relojes",
        id: 14
    },
    {
        nombre: "Apple watch series 6",
        imagenes: ["/imagenes/watches/watch-6-rojo.webp"],
        descripcion: "Con el Apple Watch Series 6, puedes medir tu nivel de oxígeno en la sangre gracias a una app y un sensor revolucionarios. Además, tienes los datos de tus entrenamientos a la vista en la mejorada pantalla Retina siempre activa, que ahora es 2.5 veces más brillante cuando estás al aire libre y tu muñeca no está levantada.",
        precio: 120000,
        categoria: "relojes",
        id: 15
    },
    {
        nombre: "Apple watch series 3",
        imagenes: ["/imagenes/watches/watch-3-blanco.webp"],
        descripcion: "Monitorea tu frecuencia cardiaca y recibe notificaciones si está demasiado baja o demasiado alta. Mide tus entrenamientos, lleva un registro de tu actividad y compártela. Además, recibe llamadas, responde mensajes y sincroniza tu música y podcasts favoritos. Con el Apple Watch Series 3, tienes todo esto al alcance de tu mano.",
        precio: 120000,
        categoria: "relojes",
        id: 16
    },
    {
        nombre: "Apple watch series SE",
        imagenes: ["/imagenes/watches/watch-se-blanco.webp"],
        descripcion: "Tiene las funcionalidades esenciales para ayudarte a llevar una vida más activa, saludable y conectada. El Apple Watch SE es dos veces más rápido y tiene una pantalla un 30% más grande que la del Series 3. Y las funcionalidades de seguridad como Detección de Caídas y Emergencia SOS pueden pedir ayuda por ti cuando más la necesitas.",
        precio: 120000,
        categoria: "relojes",
        id: 17
    }
];

if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(data));
}

export const productos = JSON.parse(localStorage.getItem("productos")).sort((a, b) => {
    return a.id - b.id;
});

let main = document.querySelector("main");
let section = document.createElement("section");
main.appendChild(section);

function crearHtmlProductos(productos){
    let articles = [];
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
        button.classList.add(...["btn", "btn-lg", "btn-primary"]);
        button.setAttribute("data-id", `${productos[i].id}`);

        h3.innerHTML = productos[i].nombre;
        p.innerHTML = productos[i].descripcion;
        spanPrecio.innerHTML = productos[i].precio;
        spanCategoria.innerHTML = productos[i].categoria;
        button.innerHTML = "Agregar al carrito";
        articles.push(article);
    }
    return articles;
}

crearHtmlProductos(productos);

// filtrado

let breadcrumb = document.querySelectorAll(".breadcrumb-item");
breadcrumb.forEach((categoria)=>{
    categoria.addEventListener('click', (e)=>{
        let filtrados = productos.filter(item => item.categoria == categoria.textContent.toLowerCase());
        let articles = crearHtmlProductos(filtrados);
        section.replaceChildren(...articles);
        Carrito.agregarProductos();
    });
});

function crearModalProducto(filtrado){
    let fondoModal = document.createElement("div");
    fondoModal.classList.add(...["modal-backdrop", "fade", "show"]);
    fondoModal.style="display: block; z-index:1;";
    document.body.appendChild(fondoModal);

    let article = document.createElement("article");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let spanPrecio = document.createElement("span");
    let spanCategoria = document.createElement("span");
    let button = document.createElement("button");
    let modal_header = document.createElement("div");
    let boton_cerrar = document.createElement("button");

    document.body.appendChild(article);
    article.appendChild(modal_header);
    modal_header.appendChild(boton_cerrar);

    for (let i = 0; i < filtrado.imagenes.length; i++) {
        let imagen = document.createElement("img");
        imagen.classList.add(["card-img-top"])
        article.appendChild(imagen);
        imagen.src = filtrado.imagenes[i];
        if (i !== 0) {
            imagen.style.display = "none";
        }
    }
    
    article.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(spanPrecio);
    div.appendChild(spanCategoria);
    div.appendChild(button);

    article.classList.add(...["card", "m-3"]);
    article.style="position:fixed; z-index:2; top:0; left:0; right:0; bottom:0; margin: 2rem auto !important; padding: 2rem;";
    article.style.width = "24rem";
    div.classList.add(...["card-body"]);
    h3.classList.add(...["card-title"]);
    p.classList.add(...["card-text"]);
    button.classList.add(...["btn", "btn-lg", "btn-primary"]);
    button.setAttribute("data-id", `${filtrado.id}`);
    boton_cerrar.classList.add(...["btn-close"]);
    modal_header.classList.add(...["modal-header"]);

    h3.innerHTML = filtrado.nombre;
    p.innerHTML = filtrado.descripcion;
    spanPrecio.innerHTML = filtrado.precio;
    spanCategoria.innerHTML = filtrado.categoria;
    button.innerHTML = "Agregar al carrito";

    /* Evento cerrar */
    [fondoModal, boton_cerrar].forEach(cerrar => {
        cerrar.addEventListener('click', () => {
            document.body.removeChild(article);
            document.body.removeChild(fondoModal);
        });
    });
}

let articles = document.querySelectorAll("img");
articles.forEach(article =>{
    article.addEventListener('click', (e)=>{
        let padre = e.target.parentElement;
        let children = padre.children;
        let id = children[children.length-1].children[children[children.length-1].children.length-1].getAttribute("data-id");
        let filtrado = productos.filter(item => item.id == id)[0];
        crearModalProducto(filtrado);
        Carrito.agregarProductos();
    });
})