let containerDestacada = document.getElementById("container");

let nuevaRow = document.createElement("div");
nuevaRow.classList.add("row");
containerDestacada.appendChild(nuevaRow);

for (cursos of cursosDestacados) {
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
    <h5 class="card-title">${cursos.nombreCurso}</h5>
    <p class="card-text">
    Precio del curso: ${cursos.precioCurso}
    </p>
                <p class="card-text">
                El curso tiene una fecha estima de inicio: ${cursos.inicioCurso}
                </p>
                <a href="#" class="btn btn-primary">Agregar al Carrito</a>
                </div>
                </div>`;
                nuevaRow.appendChild(nuevaCard);
              }
              
              /*  let nuevaRow2 = document.createElement("div");
nuevaRow2.classList.add("row", "rowjs")

containerDestacada.appendChild(nuevaRow2)

for (cursos of cursosDestacados2) {
  let nuevaCard2 = document.createElement("div");
  nuevaCard2.classList.add(
    "col-xl-3",
    "col-lg-3",
    "col-md-6",
    "col-sm-6",
    "col-xs-12",
    "mb-2"
    );
    nuevaCard2.innerHTML = `
    <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
    <h5 class="card-title">${cursos.nombreCurso}</h5>
    <p class="card-text">
    ${cursos.inicioCurso}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;
  nuevaRow2.appendChild(nuevaCard2);
}
*/

//para colocar un id a un elemento html existente o nuevo
// nuevaRow.setAttribute("id", "idprueba")

