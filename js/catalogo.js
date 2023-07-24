
let populares_base = [
  {
    img: "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg",
    Titulo: "Orgullo y prejuicio",
    Precio: "Q.76.93",
    Carreta: "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  },
  {
    img: "https://www.oceano.mx/img/obra/media/8378.jpg",
    Titulo: "El principito",
    Precio: "Q67.03"
  },
  {
    img: "https://m.media-amazon.com/images/I/813lsPHKBnL._AC_UF1000,1000_QL80_.jpg",
    Titulo: "Matilda",
    Precio: "Q51.40", 
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    Titulo: "Matar a un ruiseñor",
    Precio: "Q82.93", 
  },
  {
    img: "https://cdn.kemik.gt/2022/06/9786070752179-1200x1200-1-526x526.jpg",
    Titulo: "La chica del tren",
    Precio: "62.37"
  },
  {
    img: "https://queleerlibros.com/wp-content/uploads/2017/12/Libro-cien-a%C3%B1os-de-soledad.jpg",
    Titulo: "Cien años de soledad",
    Precio: "Q88.55", 
  }
];


let contenido_populares = '';

for (let i = 0; i < populares_base.length; i++) {
  let libro = populares_base[i];
  contenido_populares += `
    <div class="cajas">
      <img class="imagen_pop" src="${libro.img}">
      <h2 class="titulo_pop">${libro.Titulo}</h2>
      <p class="precio_pop">Precio: ${libro.Precio}</p>
    </div>
  `;
}

let catalogo = document.querySelector(".catalogo");
catalogo.innerHTML = contenido_populares;

// Función para agregar el título a la tienda y actualizar la burbuja
function agregarATienda(titulo) {
  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];
  tienda.push(titulo);
  localStorage.setItem("tienda", JSON.stringify(tienda));

  // Actualizar la burbuja en "header.js"
  let burbuja = document.querySelector(".burbuja");
  let cantidad = parseInt(burbuja.textContent) + 1;
  burbuja.textContent = cantidad;

  // Mostrar los títulos de compra en la sección "compras-header" en ese momento
  mostrarTitulosComprasEnEsteMomento();
}
// Obtener todos los botones "Comprar"
const botonesComprar = document.querySelectorAll('.Comprar');

// Agregar evento de clic a cada botón "Comprar"
botonesComprar.forEach((boton) => {
  boton.addEventListener('click', function () {
    let titulo = this.dataset.titulo;
    agregarATienda(titulo);
  });
});


// Obtener todos los elementos que contienen información de los libros
const elementosLibro = document.querySelectorAll('.populares-elemento');

// Agregar evento de clic a cada elemento para mostrar la información del libro correspondiente
elementosLibro.forEach((elemento) => {
  elemento.addEventListener('click', mostrarInformacion);
});

// Función para mostrar la información en un div flotante
function mostrarInformacion(event) {
  
  const titulo = event.currentTarget.querySelector('.titulo_pop').textContent;

  // Buscar el libro correspondiente en el array populares_base
  const libro = catalogo_completo.find((libro) => libro.Titulo === titulo);

  // Verificar si se encontró el libro
  if (libro) {
    // Crear el div flotante con la información del libro
    const divFlotante = document.createElement('div');
    divFlotante.className = 'div-flotante';
    divFlotante.innerHTML = `
      <button class="cerrar-flotante">X</button>
      <h3 class="titu">${libro.Titulo}</h3>
      <div class="caja_column">
        <img class="caratula" src="${libro.img}" alt="Imagen del libro">
        <div class="caj_inf">
          <p>• Autor: ${libro.Autor}</p>
          <p>• Precio: ${libro.Precio}</p>
          <p>• Número de páginas: ${libro.No_páginas}</p>
          <p>• Descripción: ${libro.Descripción}</p>
          <img class="Comprar" src="${libro.Carreta}" alt="Imagen del libro" data-titulo="${libro.Titulo}">
        </div>
      </div>
    `;

    // Agregar el div flotante al body
    document.body.appendChild(divFlotante);

    // Obtener el botón de cierre del div flotante
    const botonCerrar = divFlotante.querySelector('.cerrar-flotante');

    // Agregar evento de clic al botón de cierre para eliminar el div flotante
    botonCerrar.addEventListener('click', () => {
      divFlotante.remove();
    });


    const botonComprar = divFlotante.querySelector('.Comprar');
    botonComprar.addEventListener('click', function () {
      agregarATienda(titulo); // Utilizamos "titulo" en lugar de "libro.Titulo"
      // Mostrar los títulos actualizados en la sección de compras al agregar un libro
      mostrarTitulosComprasEnEsteMomento();
  }  );
}
}
Comprar.addEventListener("click", abrirVentanaEmergenteComprar);

function cerrarVentanaEmergenteComprar() {
  ventanaEmergente_comprar.remove();
}

function mostrarTitulosComprasEnEsteMomento() {
  let comprasHeader = document.querySelector(".compras-header");
  comprasHeader.innerHTML = ""; // Limpiar el contenido anterior

  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];
  tienda.forEach((titulo) => {
    let tituloElemento = document.createElement("p");
    tituloElemento.textContent = titulo;
    comprasHeader.appendChild(tituloElemento);
  });
}

function realizarCompra() {
  let compra = document.querySelector("#telefono");
  let tituloCompraActual = compra.value.trim(); // Guardar el título de la compra actual (eliminamos espacios en blanco al inicio y final)

  if (tituloCompraActual !== "") {
    // Validar que el título de compra no esté vacío
    console.log("Compra realizada:", tituloCompraActual);

    cerrarVentanaEmergenteComprar();
   /* alert("¡Compra realizada con éxito!"); */
    location.reload();


    // Reiniciar la burbuja a 0
    let burbuja = document.querySelector(".burbuja");
    burbuja.textContent = "0";

    // Obtener el historial de títulos de compra del local storage
    let tienda = JSON.parse(localStorage.getItem("tienda")) || [];

    // Agregar el título de la compra actual al historial
    tienda.push(tituloCompraActual);
    localStorage.setItem("tienda", JSON.stringify(tienda));

    // Mostrar los títulos de compra en la sección "compras-header"
    mostrarTitulosComprasEnEsteMomento();
  }
}


// Obtener todas las cajas de populares
const cajasPopulares = document.querySelectorAll('.cajas');

// Agregar evento de clic a cada caja
cajasPopulares.forEach((caja) => {
  caja.addEventListener('click', mostrarInformacion);
});
