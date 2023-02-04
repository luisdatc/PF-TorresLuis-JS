let cart;
let total = 0;

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

let modalBody = document.getElementById("modalBody");
let btnCarrito = document.getElementById("carrito");

let precioTotalCurso = document.getElementById("precioTotalCurso");

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
      <div class="card-body">
      <h5 class="card-title">${curso.nombreCurso}</h5>
      <p class="card-text"> El curso tiene un Precio de: $${curso.precioCurso} ARS.
      </p>
      <p class="card-text">
      El curso tiene una fecha estima de inicio de: ${curso.inicioCursada}
      </p>
      
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
    El curso tiene una fecha estima de inicio de: ${curso.inicioCursada}
    </p>
    <button class="btn btn-primary" id="btnAgregar${curso.idCurso}">Agregar al Carrito</button>
    </div>
    </div>`;
    rowCategoria.appendChild(div);
    quitarClaseActive();

    let btnAgregarCarro = document.getElementById(`btnAgregar${curso.idCurso}`);

    btnAgregarCarro.addEventListener("click", () => {
      agregarAlCarro(curso);
    });
  });
}

//funcion para mostrar cursos por categoria
function mostrarCursosCategoria(curso) {
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
      <h5 class="card-title">${curso.nombreCurso}</h5>
      <p class="card-text"> El curso tiene un Precio de: $${curso.precioCurso} pesos argentinos.
    </p>
    <p class="card-text">
    El curso tiene una fecha estima de inicio: ${curso.inicioCursada}
    </p>
    <button class="btn btn-primary" id="btnAgregar${curso.idCurso}">Agregar al Carrito</button>
    </div>
    </div>`;
  rowCategoria.appendChild(div);

  let btnAgregarCarro = document.getElementById(`btnAgregar${curso.idCurso}`);

  btnAgregarCarro.addEventListener("click", () => {
    agregarAlCarro(curso);
  });
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

//funciones de ordenamiento:
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

//funcion agregar al carrito
function agregarAlCarro(producto) {
  if (cart.includes(producto)) {
    Swal.fire({
      title: "¡Error!",
      text: `El curso ${producto.nombreCurso} ya se encuentra agregado al carrito`,
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    cart.push(producto);
    localStorage.setItem("carrito", JSON.stringify(cart));
    Toastify({
      text: `El curso ${producto.nombreCurso} fue agregado al carrito satisfactoriamente`,
      duration: 2000,
      gravity: "top", 
      position: "center", 
      style: {
        background: "linear-gradient(to right, navy, lighblue)",
        color: "black"
      },
    }).showToast();
  }
}

//cargar el carrito si es que hay algo
if (localStorage.getItem("carrito")) {
  cart = JSON.parse(localStorage.getItem("carrito"));
} else {
  cart = [];
  localStorage.setItem("carrito", JSON.stringify(cart));
}

//funcion para mostrar los cursos en el carrito y eliminarlos del carrito 
function cursosCarrito(array) {
  modalBody.innerHTML = "";
  array.forEach((cursoEnCarrito) => {
    modalBody.innerHTML += `
        <div class="card border-primary mb-2" id="cursoEnCarrito${cursoEnCarrito.idCurso}">
                 <div class="card-body">
                        <h4 class="card-title">${cursoEnCarrito.nombreCurso}</h4>
                         <p class="card-text">$${cursoEnCarrito.precioCurso}</p> 
                         <button class= "btn btn-danger" id="btnEliminar${cursoEnCarrito.idCurso}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `;
  });

  //otro for each para el evento
  array.forEach((cursoEnCarrito) =>
    document
      .getElementById(`btnEliminar${cursoEnCarrito.idCurso}`)
      .addEventListener("click", () => {
        let cardCurso = document.getElementById(
          `cursoEnCarrito${cursoEnCarrito.idCurso}`
        );
        cardCurso.remove();

        let cursoEliminar = array.find(
          (curso) => curso.id == cursoEnCarrito.id
        );

        let indice = array.indexOf(cursoEliminar);
        array.splice(indice, 1);

        localStorage.setItem("carrito", JSON.stringify(array));
        totalCarrito(array);
      })
  );
  totalCarrito(array);
}

//Funcion para obtener y actualizar el total del carrito
function totalCarrito(array) {
  let total = array.reduce(
    (acc, cursoEnCarrito) => acc + cursoEnCarrito.precioCurso,
    0
  );

  total == 0
    ? (precioTotalCurso.innerHTML = `El carrito de compras esta vacios, si te intereso algun curso ¡Agregalo!`)
    : (precioTotalCurso.innerHTML = `El monto total a pagar es: <strong>${total}</strong>`);
}

//LLAMADO DE FUNCION

//Mostrar todos los productos
mostrarProductos(cursosCatalogo)

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
  buscarInfo(busqueda.value.toLowerCase(), cursosCatalogo);
});

//evento menor a mayor
btnMenorMayor.addEventListener("click", () => {
  cursoMenorMayor(cursosCatalogo);
});
//evento mayor a menor
btnMayorMenor.addEventListener("click", () => {
  cursoMayorMenor(cursosCatalogo);
});
//evento alfabeticamente
btnAlfabetico.addEventListener("click", () => {
  cursoAlfabeticoNombre(cursosCatalogo);
});

//boton carrito
btnCarrito.addEventListener("click", () => {
  cursosCarrito(cart);
});
