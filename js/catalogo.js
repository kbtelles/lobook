// Este archivo sirve para poner informacion a las cajas de la sección "populares"

let populares_base = [
    {
        img: "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg",
        Titulo: "Orgullo y prejuicio",
        Precio: "195"
    },
    {
        img: "https://www.oceano.mx/img/obra/media/8378.jpg",
        Titulo: "El principito",
        Precio: "120"
    },
    {
        img: "https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-md.png",
        Titulo: "Don Quijote de la mancha",
        Precio: "200"
    },
    {
        img: "https://www.elejandria.com/covers/Las_aventuras_de_Pinocho-Carlo_Collodi-lg.png",
        Titulo: "Las aventuras de Pinocho",
        Precio: "100"
    },
    {
        img: "https://cdn.kemik.gt/2022/06/9786070752179-1200x1200-1-526x526.jpg",
        Titulo: "La chica del tren",
        Precio: "190"
    },
    {
        img: "https://encuentosydesencuentos.files.wordpress.com/2012/02/9780099511649.jpg",
        Titulo: "La dama de negro",
        Precio: "190"
    }

];

let contenido_populares = '';

for (let i = 0; i < populares_base.length; i++) {
    let libro = populares_base[i];
    contenido_populares += `
        <div class="cajas">
            <img class="imagen_pop" src="${libro.img}">
            <h2 class="titulo_pop" >${libro.Titulo}</h2>
            <p class="precio_pop" >Precio: ${libro.Precio}</p>
        </div>
    `;
}

let catalogo = document.querySelector(".catalogo");
catalogo.innerHTML = contenido_populares;