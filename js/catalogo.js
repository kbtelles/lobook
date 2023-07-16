// Este archivo sirve para poner informacion a las cajas de la sección "populares"

let populares_base = [
    {
        img: "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625452ebb0e15e764981b44c_6034d7d1f3e0f55fcab2b2de_Orgullo-y-prejuicio-jane-austen-editorial-alma.jpeg",
        Titulo: "Orgullo y prejuicio",
        Precio: "Q.76.93"
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
            <h2 class="titulo_pop" >${libro.Titulo}</h2>
            <p class="precio_pop" >Precio: ${libro.Precio}</p>
        </div>
    `;
}

let catalogo = document.querySelector(".catalogo");
catalogo.innerHTML = contenido_populares;
// Función para mostrar la información en un div flotante
function mostrarInformacion(event) {
    // Obtener el título del libro seleccionado
    const titulo = event.currentTarget.querySelector('.titulo_pop').textContent;
  
    // Buscar el libro correspondiente en el array catalogo_completo
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
        <img class="Comprar" src="${libro.Carreta}" alt="Imagen del libro">
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
    }
  }
  
  // Obtener todas las cajas de populares
  const cajasPopulares = document.querySelectorAll('.cajas');
  
  // Agregar evento de clic a cada caja
  cajasPopulares.forEach((caja) => {
    caja.addEventListener('click', mostrarInformacion);
  });
  