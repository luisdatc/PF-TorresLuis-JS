//CAPTURAS DEL DOM

//Captura para seccion cursos destacados
let containerDestacada = document.getElementById("container");

//captura para seccion catalogo de cursos
let rowCategoria = document.getElementById("rowcategoria");

//Captura de botones de seccion catalogo
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

//capturas para carrito
let btnCarrito = document.getElementById("carrito");
let modalBody = document.getElementById("modalBody");
let modalB = document.getElementById("modalB");
let precioTotalCurso = document.getElementById("precioTotalCurso");
let btnConfirmarCompra = document.getElementById("btnConfirmarCompra");

//Captura para mostrar el loader en la seccion catalogo
let loader = document.getElementById("loader");
let loader2 = document.getElementById("loader2");

//Inicializador del array del carrito y total del carrito
let cart = [];
let total = 0;

//funcion para mostrar cursos en la seccion cursos destacados
async function mostrarCursosDestacados(selectedCourses) {
  await new Promise((resolve) => {
    if (selectedCourses) {
      resolve();
    }
  });
  let cursosSeleccionados = Array.from(selectedCourses);
  let nuevaRow = document.createElement("div");
  nuevaRow.classList.add("row");
  containerDestacada.appendChild(nuevaRow);

  for (let curso of cursosSeleccionados) {
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
        <div class="card-body text-center">
          <h5 class="card-title">${curso.nombreCurso}</h5>
          <p class="card-text"> El curso tiene un Precio de: <strong>$${curso.precioCurso} ARS</strong>.
          </p>
          <p class="card-text">
            El curso tiene una fecha estima de inicio de: ${curso.inicioCurso}
          </p>

        </div>
      </div>`;
    nuevaRow.appendChild(nuevaCard);
  }
}

//funcion para mostrar todos los cursos
function mostrarCatalogo(cursos) {
  rowCategoria.innerHTML = "";
  cursos.forEach((curso) => {
    mostrarCursos(curso);
  });
}

//funcion mostrar cursos
function mostrarCursos(curso) {
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
      <p class="card-text"> El curso tiene un Precio de: <strong>$${curso.precioCurso} ARS</strong>.
    </p>
    <p class="card-text">
    El curso tiene una fecha estima de inicio de: ${curso.inicioCurso}
    </p>
    <div class="text-center">
    <button class="btn btn-primary" id="btnAgregar${curso.idCurso}">Agregar al Carrito</button>
  </div>
      </div>
    </div>`;
  rowCategoria.appendChild(div);

  let btnAgregarCarro = document.getElementById(`btnAgregar${curso.idCurso}`);

  btnAgregarCarro.addEventListener("click", () => {
    agregarAlCarro(curso);
  });
}

//funcion para mostrar cursos por categoria
function mostrarCursosCategoria(curso) {
  mostrarCursos(curso);
}

//funcion quitar clase active a los botones y agregar solo al boton seleccionado
function quitarClaseActive() {
  let botonActivo = false;

  botones.forEach((boton) => {
    boton.classList.remove("active") && (botonActivo = true);
  });

  botonActivo &&
    botones.forEach((boton) => {
      boton.classList.remove("active");
    });
}

//funcion buscar por nombre de curso y por categoria
function buscarCurso(cursoBuscado, arrayCurso) {
  let busquedaCurso = arrayCurso.filter(
    (curso) =>
      curso.nombreCurso.toLowerCase().includes(cursoBuscado) ||
      curso.nombreCurso.toUpperCase().includes(cursoBuscado)
  );

  busquedaCurso.length == 0
    ? ((encontrado.innerHTML = `<h3 class="text-center">No hay cursos que coincidan con tu criterio de busqueda</h3>`),
      mostrarCatalogo(busquedaCurso))
    : ((encontrado.innerHTML = ""), mostrarCatalogo(busquedaCurso));
}

//funciones de ordenamiento:
function cursoMenorMayor(curso) {
  const menMay = [].concat(curso);
  menMay.sort((curso01, curso02) => curso01.precioCurso - curso02.precioCurso);
  mostrarCatalogo(menMay);
}

function cursoMayorMenor(curso) {
  const mayMen = [].concat(curso);
  mayMen.sort((a, b) => b.precioCurso - a.precioCurso);
  mostrarCatalogo(mayMen);
}

function cursoAlfabeticoNombre(curso) {
  const cursoAlfabetico = [].concat(curso);
  cursoAlfabetico.sort((a, b) =>
    a.nombreCurso > b.nombreCurso ? 1 : a.nombreCurso < b.nombreCurso ? -1 : 0
  );
  mostrarCatalogo(cursoAlfabetico);
}

//funcion para agregar curso al carro
function agregarAlCarro(cursosCarrito) {
  let carritoAgregado = cart.find(
    (elem) => elem.idCurso == cursosCarrito.idCurso
  );

  carritoAgregado == undefined
    ? (cart.push(cursosCarrito),
      localStorage.setItem("carrito", JSON.stringify(cart)),
      Toastify({
        text: `El curso ${cursosCarrito.nombreCurso} fue agregado al carrito satisfactoriamente`,
        duration: 2000,
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(to right, navy, lighblue)",
          color: "black",
        },
      }).showToast())
    : Swal.fire({
        title: "¡Uppps!",
        text: `El curso ${cursosCarrito.nombreCurso} ya se encuentra agregado al carrito`,
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
      });
}

//funcion finalizar comprar
function finalizarCompra(array) {
  Swal.fire({
    title: "Confirma la compra?",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Sí, confirmar",
    cancelButtonText: "No!",
    confirmButtonColor: "navy",
    cancelButtonColor: "lightblue",
  }).then((result) => {
    if (result.isConfirmed) {
      //alert es a nivel DOM
      Swal.fire({
        title: "Compra confirmada",
        icon: "success",
        confirmButtonColor: "navy",
        text: `Muchas gracias por confiar en nosotros para empezar en esta nueva aventura de desarrollo.`,
      });
      cart = [];
      localStorage.setItem("carrito", []);
      cursosCarrito(cart);
    } else {
      Swal.fire({
        title: "Compra no realizada",
        icon: "info",
        text: `La compra no ha sido confirmada! Tus cursos agregados siguen en el carrito!`,
        confirmButtonColor: "navy",
        timer: 3500,
      });
    }
  });
}

//cargar el carrito si es que hay algo
localStorage.getItem("carrito")
  ? (cart = JSON.parse(localStorage.getItem("carrito")))
  : ((cart = []), localStorage.setItem("carrito", JSON.stringify(cart)));

//funcion para mostrar los cursos en el carrito y eliminarlos del carrito
function cursosCarrito(array) {
  modalBody.innerHTML = "";
  array.forEach((cursoEnCarrito) => {
    modalBody.innerHTML += `
    <tr id="cursoEnCarrito${cursoEnCarrito.idCurso}">
      <td>${cursoEnCarrito.nombreCurso}</td>
      <td>${cursoEnCarrito.precioCurso} $ARS</td>
      <td>
        <button class="btn btn-danger" id="btnEliminar${cursoEnCarrito.idCurso}">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>`;
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
    ? ((precioTotalCurso.innerHTML = `El carrito de compras esta vacio, si te intereso algun curso ¡Agregalo!`),
      (modalB.style.display = "none"))
    : ((precioTotalCurso.innerHTML = `El monto total a pagar es: <strong>${total} $ARS</strong>`),
      (modalB.style.display = "inline-flex"));
}

//funcion asincronica timeout para el loader
setTimeout(() => {
  loader.remove();
  loader2.remove();
}, 3000);

//EVENTOS//

//funcionabilidad boton mostrar todo
btnMostrarCursos.addEventListener("click", () => {
  mostrarCatalogo(cursosCatalogo);
  busqueda.value = "";
  quitarClaseActive();
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
    encontrado.innerHTML = "";
    busqueda.value = "";
    cursosFiltrados.forEach(mostrarCursosCategoria);
  });
});

//evento input de busqueda
busqueda.addEventListener("input", () => {
  buscarCurso(busqueda.value.toLowerCase(), cursosCatalogo);
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

//confirmacion de compra
btnConfirmarCompra.addEventListener("click", () => {
  if (cart.length > 0) {
    finalizarCompra(cart);
  } else {
    Swal.fire({
      title: "¡Uppps!",
      text: `No ha agregado algun curso en el carrito, dale un vistazo a nuestro catalogo`,
      icon: "warning",
      showConfirmButton: false,
      timer: 2000,
    });
  }
});

//Funcion para seleccionar 4 cursos aleatorio del json
let selectedCourses;
fetch("cursos.json")
  .then((response) => response.json())
  .then((jsonObject) => {
    // Función que selecciona 4 objetos aleatorios del array
    function getSelectedCourses() {
      const selectedCourses = [];
      while (selectedCourses.length < 4) {
        const randomIndex = Math.floor(Math.random() * jsonObject.length);
        const selectedCourse = jsonObject[randomIndex];
        if (!selectedCourses.includes(selectedCourse)) {
          selectedCourses.push(selectedCourse);
        }
      }
      return selectedCourses;
    }

    // Usamos la función getSelectedCourses() cada vez que necesitemos los 4 objetos aleatorios
    selectedCourses = getSelectedCourses();

    // Llamada a la función mostrarCursosDestacados
    if (selectedCourses) {
      setTimeout(() => {
        mostrarCursosDestacados(selectedCourses);
      }, 3000);
    }
  });
