let contenido_footer = `
<div class="fotinf">
    <h1 class="font_titu"> INFORMACIÓN </h1>
    <h2 class="font_one"> • ¿Quienes somos? </h2>
    <h2 class="font_two"> • ¿De donde surgió el nombre? </h2>
    <h2 class="font_three"> • ¿Cuáles son los métodos de pago? </h2>
</div>
<div class="fotcontac">
    <h1 class="font_titu"> CONTACTO </h1>
    <img class="cont_icon" src="https://www.pngmart.com/files/7/E-Mail-PNG-Clipart.png"> 
    <h2 class="correo"> lobook.777@gmail.com </h2>
</div>
`;

let footer = document.querySelector(".footer");
footer.innerHTML = contenido_footer;



/**¿Quiénes somos? */
let quienesSomos = document.querySelector(".font_one");
let ventanaEmergente1;

quienesSomos.addEventListener("click", function() {
  ventanaEmergente1 = document.createElement("div");
  ventanaEmergente1.className = "ventana-emergente-1";

  let botonCerrar1 = document.createElement("span");
  botonCerrar1.className = "ventana-cerrar";
  botonCerrar1.textContent = "X";
  botonCerrar1.addEventListener("click", cerrarVentanaEmergente1);

  let contenidoVentana1 = document.createElement("div");
  contenidoVentana1.innerHTML = "<p>Somos una página que brinda comodidad, accesibilidad y una amplia gama de opciones a los lectores, permitiéndoles descubrir, explorar y adquirir libros de manera conveniente desde cualquier lugar y en cualquier momento.</p>";

  ventanaEmergente1.appendChild(botonCerrar1);
  ventanaEmergente1.appendChild(contenidoVentana1);

  // Añadir estilos CSS y ajustar posición
  ventanaEmergente1.style.position = "absolute";
  ventanaEmergente1.style.padding = "10px";
  ventanaEmergente1.style.left = "50%";
  ventanaEmergente1.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(ventanaEmergente1);
});

function cerrarVentanaEmergente1() {
  ventanaEmergente1.remove();
}


/**¿De donde surgio el nombre? */
let surgioNombre = document.querySelector(".font_two");
let ventanaEmergente2;

surgioNombre.addEventListener("click", function() {
  ventanaEmergente2 = document.createElement("div");
  ventanaEmergente2.className = "ventana-emergente-2";

  let botonCerrar2 = document.createElement("span");
  botonCerrar2.className = "ventana-cerrar";
  botonCerrar2.textContent = "X";
  botonCerrar2.addEventListener("click", cerrarVentanaEmergente2);

  let contenidoVentana2 = document.createElement("div");
  contenidoVentana2.innerHTML = '<p>El nombre de nuestra página, "Lobook", se inspira en el prefijo "look", que en español significa "mirar", y se combina con la palabra "book", que significa "libros". Esta combinación fue creada por la autora de la página, quien imaginativamente unió estos términos para transmitir la idea de mirar hacia el mundo de los libros.</p>';
  
  ventanaEmergente2.appendChild(botonCerrar2);
  ventanaEmergente2.appendChild(contenidoVentana2);

   // Añadir estilos CSS y ajustar posición
   ventanaEmergente2.style.position = "absolute";
   ventanaEmergente2.style.padding = "10px";
   ventanaEmergente2.style.left = "50%";
   ventanaEmergente2.style.transform = "translate(-50%, -50%)";
  
  document.body.appendChild(ventanaEmergente2);
});

function cerrarVentanaEmergente2() {
  ventanaEmergente2.remove();
}



/**¿Cuales son los metodos de pago? */
let metodosPagos = document.querySelector(".font_three");
let ventanaEmergente3;

metodosPagos.addEventListener("click", function() {
    ventanaEmergente3 = document.createElement("div");
    ventanaEmergente3.className = "ventana-emergente-3";

  let botonCerrar3 = document.createElement("span");
  botonCerrar3.className = "ventana-cerrar";
  botonCerrar3.textContent = "X";
  botonCerrar3.addEventListener("click", cerrarVentanaEmergente3);

  let contenidoVentana3 = document.createElement("div");
  contenidoVentana3.innerHTML = "<p>En nuestra tienda actualmente solo ofrecemos el método de pago contra entrega. Sin embargo, estamos trabajando para incorporar más opciones de pago a medida que crecemos.</p>";
  
  ventanaEmergente3.appendChild(botonCerrar3);
  ventanaEmergente3.appendChild(contenidoVentana3);

     // Añadir estilos CSS y ajustar posición
     ventanaEmergente3.style.position = "absolute";
     ventanaEmergente3.style.padding = "10px";
     ventanaEmergente3.style.left = "50%";
     ventanaEmergente3.style.transform = "translate(-50%, -50%)";
  
  document.body.appendChild(ventanaEmergente3);
});

function cerrarVentanaEmergente3() {
    ventanaEmergente3.remove();
}

