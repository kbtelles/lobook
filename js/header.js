/* Contenido de html */
let contenido_header = `
<h1 class="titulo">LOBOOK</h1>
<img class="carreta" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="">
<img class="comentario" src="https://cdn-icons-png.flaticon.com/512/1230/1230203.png" alt="">
`;

/* Se llama a la clase de la etiqueta */
let header = document.querySelector(".header");

/* Llamado para agregar el contenido*/
header.innerHTML = contenido_header;


/**Comprar */
let Comprar = document.querySelector(".carreta");
let ventanaEmergente_comprar;

Comprar.addEventListener("click", function () {
  ventanaEmergente_comprar = document.createElement("div");
  ventanaEmergente_comprar.className = "ventana-emergente ventana-emergente-comprar";

  let botonCerrar = document.createElement("span");
  botonCerrar.className = "ventana-cerrar";
  botonCerrar.textContent = "X";
  botonCerrar.addEventListener("click", cerrarVentanaEmergenteComprar);

  let contenidoComprar = document.createElement("div");
  contenidoComprar.innerHTML = "<p>ola.</p>";

  ventanaEmergente_comprar.appendChild(botonCerrar);
  ventanaEmergente_comprar.appendChild(contenidoComprar);

  document.body.appendChild(ventanaEmergente_comprar);
});

function cerrarVentanaEmergenteComprar() {
  ventanaEmergente_comprar.remove();
}


/**Comentario */
let comentario = document.querySelector(".comentario");
let ventanaEmergente_comentario;

comentario.addEventListener("click", function () {
  ventanaEmergente_comentario = document.createElement("div");
  ventanaEmergente_comentario.className = "ventana-emergente ventana-emergente-comentario";

  let botonCerrar = document.createElement("span");
  botonCerrar.className = "ventana-cerrar";
  botonCerrar.textContent = "X";
  botonCerrar.addEventListener("click", cerrarVentanaEmergenteComentario);

  let contenidoComentario = document.createElement("div");
  contenidoComentario.innerHTML = "<p>jujujuj.</p>";

  ventanaEmergente_comentario.appendChild(botonCerrar);
  ventanaEmergente_comentario.appendChild(contenidoComentario);

  document.body.appendChild(ventanaEmergente_comentario);
});

function cerrarVentanaEmergenteComentario() {
  ventanaEmergente_comentario.remove();
}
