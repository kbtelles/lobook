/* Contenido de html */
let contenido_header = `
<h1 class="titulo">LOBOOK</h1>
<img class="carreta" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="">
<img class="comentario" src="https://cdn-icons-png.flaticon.com/512/1230/1230203.png" alt="">
`;

/* Se llama a la clase de la etiqueta */
let header = document.querySelector(".header");

/* Llamado para agregar el contenido*/
header.innerHTML= contenido_header;