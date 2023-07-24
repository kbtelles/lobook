let mes_populares = [
    {
        Titulo: "Autor del mes",
        img: "https://s3.thingpic.com/images/Hw/TLnzQgvr5mEYjvZeJrShdNuD.jpeg",
        Autor: "Paula Hawkins",
        Descripcion: "Es una escritora británica nacida en Harare, Zimbabwe el 26 de agosto del año 1972. Comenzó a escribir ensayo por encargo, pero se inició en la narrativa dentro del género de la comedia romántica, en 2015 publicó La chica del tren, una novela de intriga y suspense que logró un gran éxito a nivel internacional. Tras su primer gran éxito Hawkins publicó Escrito en el agua."
    },
    {
        Titulo: "Autor del mes",
        img: "https://cdn.britannica.com/75/187875-050-EDF182F9/Gillian-Flynn-American.jpg",
        Autor: "Gillian Flynn",
        Descripcion: "Escritora y periodista americana, Gillian Flynn estudió Inglés y Periodismo en la Universidad de Kansas. Con su tercera novela, Perdida, con la que Flynn logró un verdadero éxito internacional."
    },
    {
        Titulo: "Autor del mes",
        img: "https://www.aboutespanol.com/thmb/nVGZsXlvj-jUVmzAZWHJfGr4nQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/migueldecervantes-56a5ab363df78cf7728955bd.jpg",
        Autor: "Miguel de Cervantes Saavedra",
        Descripcion: "Novelista, poeta y dramaturgo español. Es considerado la máxima figura de la literatura española. Es universalmente conocido, sobre todo por haber escrito El ingenioso hidalgo Don Quijote de la Mancha, que muchos críticos han descrito como la primera novela moderna y una de las mejores obras de la literatura universal. Se le ha dado el sobrenombre de Príncipe de los Ingenios."
    },
    {
        Titulo: "Autor del mes",
        img: "https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg",
        Autor: "Jane Austen",
        Descripcion: "Escritora inglesa nacida en Steventon el 16 de diciembre de 1775, Jane Austen es considerada una de las autoras más influyentes dentro de la literatura anglosajona. Varias de las obras de Austen han sido adaptadas al cine y a la televisión."
    }
];

let contenido_autor_mes = ``;

// Obtener un autor aleatorio
let autorAleatorio = mes_populares[Math.floor(Math.random() * mes_populares.length)];

contenido_autor_mes = `
    <section class="onemes">
        <h1 class="tit"> AUTOR DEL MES </h1>
        <img class="imgmes" src="${autorAleatorio.img}" alt="${autorAleatorio.Autor}">
    </section>

    <section class="caja_tezt_mes">
        <div class="textmes">${autorAleatorio.Autor}
        <p class="descripción" >${autorAleatorio.Descripcion}</p>
        </div>
    </section>
`;

let autor = document.querySelector(".mes");
autor.innerHTML = contenido_autor_mes;
