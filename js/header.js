let burbuja; // Declarar burbuja como variable global

let contenido_header = `
  <h1 class="titulo">LOBOOK</h1>
  <div class="div-derecho">
    <div class="caja-carreta">
      <img class="carreta" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="">
      <span class="burbuja">${0}</span>
    </div>
    <img class="comentario" src="https://cdn-icons-png.flaticon.com/512/1230/1230203.png" alt="">
  </div>

`;

/* Se llama a la clase de la etiqueta */
let header = document.querySelector(".header");

/* Llamado para agregar el contenido */
header.innerHTML = contenido_header;


/**Comprar */

let Comprar = document.querySelector(".carreta");
let ventanaEmergente_comprar;


// Función para abrir la ventana emergente de compra
function abrirVentanaEmergenteComprar(titulo) {
  ventanaEmergente_comprar = document.createElement("div");
  ventanaEmergente_comprar.className = "ventana-emergente ventana-emergente-comprar";

  let botonCerrar = document.createElement("span");
  botonCerrar.className = "ventana-cerrar";
  botonCerrar.textContent = "X";
  botonCerrar.addEventListener("click", cerrarVentanaEmergenteComprar);

  let contenidoComprar = document.createElement("div");
  contenidoComprar.innerHTML = `
    <h2 class="titu-compra">Compra en línea</h2>
    <p class="text1-compra">Aquí puedes realizar tu compra en línea.</p>
    <div class="compras-header">
      <!-- Aquí se agregarán los títulos de los libros -->
    </div>

    <section class="caja_com">
    <button class="total-compra"> Total </button>
    <button class="borrar-todo">Borrar Compra</button>
    </section>
    <form class="form-compra">
      <label for="nombreCompleto">Nombre completo:</label>
      <input type="text" id="nombreCompleto" placeholder="Ingresa tu nombre completo" required>

      <label for="direccion">Dirección exacta:</label>
      <input type="text" id="direccion" placeholder="Ingresa tu dirección exacta" required>

      <label for="telefono">Teléfono:</label>
      <input type="tel" id="telefono" placeholder="Ingresa tu teléfono" required>

      <button type="button" onclick="realizarCompra('${titulo}')" class="comprar-comprar">Comprar</button>
    </form>
  `;

  ventanaEmergente_comprar.appendChild(botonCerrar);
  ventanaEmergente_comprar.appendChild(contenidoComprar);

  document.body.appendChild(ventanaEmergente_comprar);

  // Mostrar los títulos de compras actualizados en la sección "compras-header" al abrir la ventana emergente
  mostrarTitulosComprasEnEsteMomento();

    // Agregar evento de clic al botón "borrar-todo"
    let botonBorrarTodo = document.querySelector(".borrar-todo");
    botonBorrarTodo.addEventListener("click", borrarTodosLosTitulos);


    let botonTotalCompra = document.querySelector(".total-compra");
    botonTotalCompra.addEventListener("click", () => {
      mostrarTotalCompra();
    });
    
}



// Nueva función para realizar la compra
function realizarCompra(titulo) {
  // Obtener el historial de compras del local storage
  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];

  // Agregar el título de la compra actual al historial
  tienda.push(titulo);
  localStorage.setItem("tienda", JSON.stringify(tienda));

  // Actualizar la burbuja sumando 1
  let cantidadArticulos = tienda.length;
  burbuja.textContent = cantidadArticulos.toString();
  mostrarTotalCompra();

}

Comprar.addEventListener("click", () => {
  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];
  realizarCompra(tienda.length + 1); // Sumar 1 a la cantidad actual de artículos en la tienda
  abrirVentanaEmergenteComprar();
});


function obtenerPrecioDelCatalogo(titulo) {
  const libroEncontrado = catalogo_completo.find((libro) => libro.Titulo === titulo);
  return parseFloat(libroEncontrado.Precio.replace("Q", ""));
}

function mostrarTotalCompra() {
  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];
  let totalCompra = 0;

  tienda.forEach((titulo) => {
    let precio = obtenerPrecioDelCatalogo(titulo);
    totalCompra += precio;
  });

  let botonTotalCompra = document.querySelector(".total-compra");
  botonTotalCompra.textContent = `Total: Q${totalCompra.toFixed(2)}`;
}

function mostrarTitulosComprasEnEsteMomento() {
  let comprasHeader = document.querySelector(".compras-header");
  comprasHeader.innerHTML = ""; // Limpiar el contenido anterior

  let tienda = JSON.parse(localStorage.getItem("tienda")) || [];
  let totalCompra = 0; // Inicializar el total de la compra a 0

  tienda.forEach((titulo) => {
    let tituloElemento = document.createElement("p");
    tituloElemento.textContent = titulo;
    comprasHeader.appendChild(tituloElemento);

    // Obtener el precio del libro desde el catálogo
    let precio = obtenerPrecioDelCatalogo(titulo);

    // Sumar el precio al total de la compra
    totalCompra += precio;
  });

  // Mostrar el total de la compra en el botón "total-compra"
  let botonTotalCompra = document.querySelector(".total-compra");
  botonTotalCompra.textContent = `Total: Q${totalCompra.toFixed(2)}`;
}


// Función para borrar todos los títulos del local storage y actualizar la vista
function borrarTodosLosTitulos() {
  localStorage.removeItem("tienda");
  mostrarTitulosComprasEnEsteMomento();
  mostrarTotalCompra();


  // Reiniciar la burbuja a 0
  let burbuja = document.querySelector(".burbuja");
  burbuja.textContent = "0";
}

window.onload = function () {
  burbuja = document.querySelector(".burbuja");
  localStorage.removeItem("tienda");
  localStorage.removeItem("tienda");

  // Reiniciar la burbuja a 0 al cargar la página
  burbuja.textContent = "0";

  // Mostrar los títulos de compras actualizados en la sección "compras-header"
  mostrarTitulosComprasEnEsteMomento();
  mostrarTotalCompra();

};


/**Comentario */
let comentario = document.querySelector(".comentario");
let ventanaEmergente_comentario;

comentario.addEventListener("click", function () {
  ventanaEmergente_comentario = document.createElement("div");
  ventanaEmergente_comentario.className = "ventana-emergente ventana-emergente-comentario";
  

  let botonCerrar = document.createElement("span");
  botonCerrar.className = "ventana-cerrarr";
  botonCerrar.textContent = "X";
  botonCerrar.addEventListener("click", cerrarVentanaEmergenteComentario);

  let contenidoComentario = document.createElement("div");

  let comentarioInput = document.createElement("textarea");
  comentarioInput.className = "comentario-input";
  comentarioInput.placeholder = "Escribe tu comentario aquí";

  let enviarBtn = document.createElement("button");
  enviarBtn.textContent = "Enviar";
  enviarBtn.classList="Enviar"
  enviarBtn.addEventListener("click", enviarComentario);

  contenidoComentario.appendChild(comentarioInput);
  contenidoComentario.appendChild(enviarBtn);

  ventanaEmergente_comentario.appendChild(botonCerrar);
  ventanaEmergente_comentario.appendChild(contenidoComentario);

  document.body.appendChild(ventanaEmergente_comentario);
});

function cerrarVentanaEmergenteComentario() {
  ventanaEmergente_comentario.remove();
}

function enviarComentario() {
  let comentarioInput = document.querySelector(".comentario-input");
  let comentarioTexto = comentarioInput.value;

  /*console.log("Comentario enviado:", comentarioTexto); */

  cerrarVentanaEmergenteComentario();
}