let contenido_busqueda = `
  <div class="busqueda">
    <input type="text" id="searchInput" placeholder="Buscar">
  </div>     
  <div class="indice">
    <img class="imgind" src="https://cdn-icons-png.flaticon.com/512/3527/3527778.png" alt="">
  </div>
`;

/* Se llama a la clase de la etiqueta */
let busque = document.querySelector(".caja1");

/* Llamado para agregar el contenido*/
busque.innerHTML = contenido_busqueda;

function buscarLibros() {
  let input = document.getElementById('searchInput');
  let consulta = input.value.toLowerCase();

  let divResultado = document.getElementById('resultado');
  divResultado.textContent = '';
  
  let librosCoincidentes = catalogo_completo.filter(libro => libro.Titulo.toLowerCase().includes(consulta));

  if (librosCoincidentes.length > 0) {
    librosCoincidentes.forEach(libro => {
      let div = document.createElement('div');
      div.className = 'div-flotante';
      div.innerHTML = `
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
      divResultado.appendChild(div);
    });

    // Ocultar los elementos adicionales
    let elementosOcultar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
    elementosOcultar.forEach(elemento => {
      elemento.style.display = 'none';
    });

    // Agregar evento de clic a los botones de compra
    agregarEventoCompra();
  } else {
    // Crear el div contenedor para el mensaje de no existencia
    let divNoExistencia = document.createElement('div');
    divNoExistencia.className = 'div-no-existencia';

    // Crear el mensaje de no existencia
    let mensajeNoExistencia = document.createElement('p');
    mensajeNoExistencia.className = 'mensajee';
    mensajeNoExistencia.textContent = '¡Ups! Lamento informarte que el libro no está en existencia en estos momentos.';

    // Agregar el mensaje al contenedor
    divNoExistencia.appendChild(mensajeNoExistencia);

    // Agregar el contenedor al div resultado
    divResultado.appendChild(divNoExistencia);

    // Ocultar los elementos adicionales
    let elementosOcultar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
    elementosOcultar.forEach(elemento => {
      elemento.style.display = 'none';
    });
  }
}

function agregarEventoCompra() {
  // Obtener todos los botones "Comprar"
  const botonesComprar = document.querySelectorAll('.Comprar');

  // Agregar evento de clic a cada botón "Comprar"
  botonesComprar.forEach((boton) => {
    boton.addEventListener('click', function () {
      let titulo = this.dataset.titulo;
      mostrarVentanaEmergenteComprar(titulo);
    });
  });
}

function mostrarVentanaEmergenteComprar(titulo) {
  agregarATienda(titulo); // Agregar el título del libro a la función agregarATienda
}

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

/********************************** */

// Obtener referencia al campo de búsqueda
let input = document.getElementById('searchInput');

// Agregar evento de búsqueda al campo de entrada
input.addEventListener('input', buscarLibros);

/********************************** */
let contenidoOriginal = document.getElementById('resultado').innerHTML;


// Agregar evento para reiniciar la página si el campo de búsqueda se vacía manualmente
input.addEventListener('keyup', function (event) {
  if (event.key === 'Backspace' && input.value.trim() === '') {
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = contenidoOriginal;

    // Mostrar los elementos adicionales
    let elementosMostrar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
    elementosMostrar.forEach(elemento => {
      elemento.style.display = 'flex';
    });
  }
});


/***************************************************************************************************** */

let indice = document.querySelector(".indice");

// Agregar evento de clic al elemento de índice
let indiceCreado = false;

// Agregar evento de clic al elemento de índice
indice.addEventListener("click", () => {
  if (!indiceCreado) {
    mostrarIndice();
    indiceCreado = true;
  } else {
    const indiceVertical = document.querySelector(".indice-vertical");
    indiceVertical.style.display = "block";
  }
});

function mostrarIndice() {
  // Crear el contenedor del índice
  const indiceVertical = document.createElement("div");
  indiceVertical.className = "indice-vertical";

  // Crear el botón de cerrar índice
  const cerrarIndiceBtn = document.createElement("button");
  cerrarIndiceBtn.className = "cerrar-indice";
  cerrarIndiceBtn.innerHTML = "X"; // Insertar el símbolo "X"
  cerrarIndiceBtn.addEventListener("click", () => {
    indiceVertical.style.display = "none";
  });

  // Agregar el botón de cerrar índice al contenedor del índice
  indiceVertical.appendChild(cerrarIndiceBtn);

  // Crear los elementos del índice
  let listaIndice = document.createElement("ul");
  listaIndice.className = "indice-lista";
  listaIndice.innerHTML = `
    <h1 class="titu-indice">CATEGORÍAS</h1>
    <li class="categoria-home">Home</li>
    <li class="categoria-novelas">Novelas</li>
    <li class="categoria-romance">Romance</li>
    <li class="categoria-infantiles">Infantiles</li>
    <li class="categoria-terror">Terror</li>
    <li class="categoria-suspenso">Suspenso</li>
  `;

  // Agregar elementos al contenedor del índice
  indiceVertical.appendChild(listaIndice);

  // Agregar contenedor del índice al cuerpo del documento
  document.body.appendChild(indiceVertical);

  // Agregar eventos de clic para cada categoría del índice
  let categoriaNovelasBtn = document.querySelector(".categoria-novelas");
  let categoriaRomanceBtn = document.querySelector(".categoria-romance");
  let categoriaInfantilesBtn = document.querySelector(".categoria-infantiles");
  let categoriaTerrorBtn = document.querySelector(".categoria-terror");
  let categoriaSuspensoBtn = document.querySelector(".categoria-suspenso");
  let categoriaHomeBtn = document.querySelector(".categoria-home");

  // Agregar evento de clic al elemento "Novelas" en el índice
  categoriaNovelasBtn.addEventListener("click", () => {
    mostrarCategoria(novelas_cont);
  });

  // Agregar evento de clic al elemento "Romance" en el índice
  categoriaRomanceBtn.addEventListener("click", () => {
    mostrarCategoria(romance_cont);
  });

  // Agregar evento de clic al elemento "Infantiles" en el índice
  categoriaInfantilesBtn.addEventListener("click", () => {
    mostrarCategoria(infantiles_cont);
  });

  // Agregar evento de clic al elemento "Terror" en el índice
  categoriaTerrorBtn.addEventListener("click", () => {
    mostrarCategoria(terror_cont);
  });

  // Agregar evento de clic al elemento "Suspenso" en el índice
  categoriaSuspensoBtn.addEventListener("click", () => {
    mostrarCategoria(suspenso_cont);
  });

  // Agregar evento de clic al elemento "Home"
// Agregar evento de clic al elemento "Home"
// ...

categoriaHomeBtn.addEventListener("click", (event) => {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();

  // Restaurar el contenido original y mostrar los elementos adicionales
  let divResultado = document.getElementById('resultado');
  divResultado.innerHTML = contenidoOriginal;

  let elementosMostrar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
  elementosMostrar.forEach(elemento => {
    elemento.style.display = 'flex';
  });
});


}
Compris();


function mostrarCategoria(categoria) {
  let divCategoria = document.createElement("div");
  divCategoria.className = "div-categoria";

  categoria.forEach(libro => {
    let div = document.createElement("div");
    div.innerHTML = `
    <section class="caja-catalogo">
      <h3 class="titu">${libro.Titulo}</h3>
      <div class="caja_column">
        <img class="caratula" src="${libro.img}" alt="Imagen del libro">
        <div class="caj_inf">
          <p>• Autor: ${libro.Autor}</p>
          <p>• Precio: ${libro.Precio}</p>
          <p>• Número de páginas: ${libro.No_páginas}</p>
          <p>• Descripción: ${libro.Descripción}</p>
          <img class="Comprar" src="${libro.Carreta}" alt="Imagen del libro">
        </div>
      </div>
      </section>
    `;

    // Agregar evento de clic al botón de compra directamente aquí
    let comprarBtn = div.querySelector(".Comprar");
    comprarBtn.addEventListener("click", () => {
      mostrarVentanaEmergenteComprar(libro.Titulo);
    });

    divCategoria.appendChild(div);
  });

  let divResultado = document.getElementById('resultado');
  divResultado.textContent = '';
  divResultado.appendChild(divCategoria);

  let elementosOcultar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
  elementosOcultar.forEach(elemento => {
    elemento.style.display = 'none';
  });
}


function mostrarVentanaEmergenteComprar(titulo) {
  agregarATienda(titulo); // Agregar el título del libro a la función agregarATienda

}

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



/********************************** */

function Compris() {
  const botonesComprar = document.querySelectorAll('.Comprar');

  // Agregar evento de clic a cada botón de compra
  botonesComprar.forEach((boton) => {
    boton.addEventListener('click', mostrarVentanaEmergenteComprar);
  });
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

/********************************** */
