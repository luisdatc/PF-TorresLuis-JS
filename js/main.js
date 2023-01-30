//Capturas del DOM

let containerDestacada = document.getElementById("container");
let rowCategoria = document.getElementById("rowcategoria");
let btnMostrarCursos = document.getElementById("btnMostrarTodo");
let btnOcultarTodo = document.getElementById("btnOcultarTodo");
let btnProgramacion = document.getElementById("btnProgramacion");
let btnDiseño = document.getElementById("btnDiseño");
let btnData = document.getElementById("btnData");
let botones = [btnProgramacion, btnDiseño, btnData];
let busqueda = document.getElementById("searchInput");
let encontrado = document.getElementById("encontrado");
let btnMenorMayor = document.getElementById("menorMayor");
let btnMayorMenor = document.getElementById("mayorMenor");
let btnAlfabetico = document.getElementById("alfabetico");

//funcion para mostrar cursos en la seccion cursos destacados
function cursosTop(array) {
  let nuevaRow = document.createElement("div");
  nuevaRow.classList.add("row");
  containerDestacada.appendChild(nuevaRow);

  for (curso of array) {
    let nuevaCard = document.createElement("div");
    nuevaCard.classList.add(
      "col-xl-3",
      "col-lg-3",
      "col-md-6",
      "col-sm-6",
      "col-xs-12",
      "mb-2"
    );
    nuevaCard.innerHTML = `
      <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
      <h5 class="card-title">${curso.nombreCurso}</h5>
      <p class="card-text"> El curso tiene un Precio de: $${curso.precioCurso} ARS.
      </p>
      <p class="card-text">
      El curso tiene una fecha estima de inicio de: ${curso.inicioCursada}
      </p>
      <a href="#" class="btn btn-primary" id="btnAgregar${curso.idCurso}">Agregar al Carrito</a>
      </div>
      </div>`;
    nuevaRow.appendChild(nuevaCard);
  }
}

//funcion para mostrar todos los cursos
function mostrarProductos(todos) {
  rowCategoria.innerHTML = "";
  todos.forEach((curso) => {
    let div = document.createElement("div");
    div.classList.add(
      "col-xl-3",
      "col-lg-4",
      "col-md-6",
      "col-sm-6",
      "col-xs-12"
    );

    div.innerHTML = `
    <div class="card catalogoSection-card">
    <div class="card-body">
      <h5 class="card-title">${curso.nombreCurso}</h5>
      <p class="card-text"> El curso tiene un Precio de: $${curso.precioCurso} pesos argentinos.
    </p>
    <p class="card-text">
    El curso tiene una fecha estima de inicio: ${curso.inicioCursada}
    </p>
    <a href="#" class="btn btn-primary" id="btnAgregar${curso.idCurso}">Agregar al Carrito</a>
    </div>
    </div>`;
    rowCategoria.appendChild(div);
    quitarClaseActive();
  });
}

//funcion para mostrar cursos por categoria
function mostrarCursosCategoria(cursos) {
  let div = document.createElement("div");
  div.classList.add(
    "col-xl-3",
    "col-lg-3",
    "col-md-6",
    "col-sm-6",
    "col-xs-12"
  );

  div.innerHTML = `
    <div class="card catalogoSection-card">
    <div class="card-body">
      <h5 class="card-title">${cursos.nombreCurso}</h5>
      <p class="card-text"> El curso tiene un Precio de: $${cursos.precioCurso} pesos argentinos.
    </p>
    <p class="card-text">
    El curso tiene una fecha estima de inicio: ${cursos.inicioCursada}
    </p>
    <a href="#" class="btn btn-primary" id="btnAgregar${cursos.idCurso}">Agregar al Carrito</a>
    </div>
    </div>`;
  rowCategoria.appendChild(div);
}

//funcion quitar clase active a los botones y agregar solo al boton seleccionado
function quitarClaseActive() {
  let botonActivo = false;
  botones.forEach((boton) => {
    if (boton.classList.remove("active")) {
      botonActivo = true;
    }
  });

  if (botonActivo) {
    botones.forEach((boton) => {
      boton.classList.remove("active");
    });
  }
}

//funcion buscar por nombre de curso y por categoria
function buscarInfo(cursoBuscado, arrayCurso) {
  let busquedaCurso = arrayCurso.filter(
    (curso) =>
      curso.nombreCurso.toLowerCase().includes(cursoBuscado) ||
      curso.categoria.toLowerCase().includes(cursoBuscado) ||
      curso.nombreCurso.toUpperCase().includes(cursoBuscado) ||
      curso.categoria.toUpperCase().includes(cursoBuscado)
  );
  if (busquedaCurso.length == 0) {
    encontrado.innerHTML = `<h3>No hay cursos que coincidan con tu criterio de busqueda</h3>`;
    mostrarProductos(busquedaCurso);
  } else {
    encontrado.innerHTML = "";
    mostrarProductos(busquedaCurso);
  }
}

function cursoMenorMayor(curso) {
  const menMay = [].concat(curso);
  menMay.sort((curso01, curso02) => curso01.precioCurso - curso02.precioCurso);
  mostrarProductos(menMay);
}
function cursoMayorMenor(curso) {
  const mayMen = [].concat(curso);
  mayMen.sort((a, b) => b.precioCurso - a.precioCurso);
  mostrarProductos(mayMen);
}
function cursoAlfabeticoNombre(curso) {
  const cursoAlfabetico = [].concat(curso);
  cursoAlfabetico.sort((a, b) => {
    if (a.nombreCurso > b.nombreCurso) {
      return 1;
    }
    if (a.nombreCurso < b.nombreCurso) {
      return -1;
    }
    return 0;
  });
  mostrarProductos(cursoAlfabetico);
}

//LLAMADO DE FUNCIONES

//Mostrar Seccion de cursos Destacados
cursosTop(cursosDestacados);

//EVENTOS//

//funcionabilidad boton mostrar todo
btnMostrarCursos.addEventListener("click", () => {
  mostrarProductos(cursosCatalogo);
  busqueda.value = "";
});
//funcionabilidad boton ocultar todo
btnOcultarTodo.addEventListener("click", () => {
  rowCategoria.innerHTML = "";
  quitarClaseActive();
  busqueda.value = "";
  encontrado.innerHTML = "";
});

//filtrado de cursos por categoria
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    quitarClaseActive();
    boton.classList.add("active");
    let categoria = boton.innerText;
    let cursosFiltrados = cursosCatalogo.filter(
      (obj) => obj.categoria === categoria
    );
    rowCategoria.innerHTML = "";
    cursosFiltrados.forEach(mostrarCursosCategoria);
  });
});

//evento input de busqueda
busqueda.addEventListener("input", () => {
  buscarInfo(busqueda.value, cursosCatalogo);
});

//evento menor a mayor
btnMenorMayor.addEventListener("click", ()=>{
  cursoMenorMayor(cursosCatalogo)
})
//evento mayor a menor
btnMayorMenor.addEventListener("click", ()=>{
  cursoMayorMenor(cursosCatalogo)
})
//evento alfabeticamente
btnAlfabetico.addEventListener("click", ()=>{
  cursoAlfabeticoNombre(cursosCatalogo)
})

/* //filtrado de array para boton categoria programacion
btnProgramacion.addEventListener("click", ()=>{
  // btnProgramacion.classList.remove("Active");
  rowCategoria.innerHTML = "";
  btnProgramacion.classList.add("Active");
  let filtradoCursos = cursosCatalogo.filter((cursosCat)=> cursosCat.categoria === "programacion");
  filtradoCursos.forEach(mostrarCursosCategoria)
});

//filtrado de array para boton categoria diseño
btnDiseño.addEventListener("click", ()=>{
  btnProgramacion.classList.remove("Active");
  btnDiseño.classList.add("Active");
  rowCategoria.innerHTML = "";
  let filtradoCursos = cursosCatalogo.filter((cursosCat)=> cursosCat.categoria === "diseño");
  filtradoCursos.forEach(mostrarCursosCategoria)
});
//filtrado de array para boton categoria data
btnData.addEventListener("click", ()=>{
  btnData.classList.add("Active");
  rowCategoria.innerHTML = "";
  let filtradoCursos = cursosCatalogo.filter((cursosCat)=> cursosCat.categoria === "data");
  filtradoCursos.forEach(mostrarCursosCategoria)
});  */
