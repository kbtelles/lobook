/* Contenido de html */
let contenido_busqueda = `
  <div class="busqueda">
    <input type="text" id="searchInput" placeholder="Buscar">
    <button id="reiniciarBtn">Borrar</button>
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
  } else {
    // Crear el div contenedor para el mensaje de no existencia
    let divNoExistencia = document.createElement('div');
    divNoExistencia.className = 'div-no-existencia';

    // Crear el mensaje de no existencia
    let mensajeNoExistencia = document.createElement('p');
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

// Obtener referencia al campo de búsqueda
let input = document.getElementById('searchInput');

// Agregar evento de búsqueda al campo de entrada
input.addEventListener('input', buscarLibros);

/********************************** */
// Obtener referencia al botón de reinicio
let reiniciarBtn = document.getElementById('reiniciarBtn');

// Agregar evento de clic al botón de reinicio
reiniciarBtn.addEventListener('click', () => {
  // Reiniciar la página
  location.reload();
});

/********************************** */// Obtener referencia al elemento de índice
let indice = document.querySelector(".indice");

// Agregar evento de clic al elemento de índice
indice.addEventListener("click", mostrarIndice);

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
    <h1>CATEGORÍAS</h1>
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
  let categoriaNovelas = document.querySelector(".categoria-novelas");
  let categoriaRomance = document.querySelector(".categoria-romance");
  let categoriaInfantiles = document.querySelector(".categoria-infantiles");
  let categoriaTerror = document.querySelector(".categoria-terror");
  let categoriaSuspenso = document.querySelector(".categoria-suspenso");
  let categoriaHome = document.querySelector(".categoria-home");



// Agregar evento de clic al elemento "Novelas"
categoriaNovelas.addEventListener("click", () => {
  // Crear el contenedor para mostrar las novelas
  let divNovelas = document.createElement("div");
  divNovelas.className = "div-novelas";

  // Recorrer el array de novelas y crear elementos para mostrar cada una
  novelas_cont.forEach(novela => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h3 class="titu">${novela.Titulo}</h3>
      <div class="caja_column">
      <img class="caratula" src="${libro.img}" alt="Imagen del libro">
      <div class="caj_inf">
      <p>• Autor: ${novela.Autor}</p>
      <p>• Precio: ${novela.Precio}</p>
      <p>• Número de páginas: ${novela.No_páginas}</p>
      <p>• Descripción: ${novela.Descripción}</p>
      <img class="Comprar" src="${novela.Carreta}" alt="Imagen del libro">
      </div>
      </div>
    `;
    divNovelas.appendChild(div);
  });

  // Agregar el contenedor de novelas al div resultado
  let divResultado = document.getElementById('resultado');
  divResultado.textContent = '';
  divResultado.appendChild(divNovelas);

  // Ocultar los elementos adicionales
  let elementosOcultar = document.querySelectorAll('.name, .catalogo, .mes, .footer');
  elementosOcultar.forEach(elemento => {
    elemento.style.display = 'none';
  });
});


  
  categoriaRomance.addEventListener("click", () => {
    // Lógica para redirigir a la página de Romance
  });

  categoriaInfantiles.addEventListener("click", () => {
    // Lógica para redirigir a la página de Infantiles
  });

  categoriaTerror.addEventListener("click", () => {
    // Lógica para redirigir a la página de Terror
  });

  categoriaSuspenso.addEventListener("click", () => {
    // Lógica para redirigir a la página de Suspenso
  });

  // Agregar evento de clic al elemento "Home"
categoriaHome.addEventListener("click", (event) => {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();

  // Reiniciar la página
  window.location.href = window.location.href;
});


}
