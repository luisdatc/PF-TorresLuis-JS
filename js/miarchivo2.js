//Declaro Variables
let salirDelMenu = false;
let cursos;
let consulta;
let precioCursos = 0;
let cart = [];



//funcion para mostrar el catalogo de cursos
function mostrarCatalogo(arrayCursos) {
  console.log("Nuestros cursos disponibles son: ");
  arrayCursos.forEach((curso) => {
    console.log(
      `El curso ${curso.nombreCurso} tiene un precio de:${curso.precioCurso} con inicio de cursada del ${curso.inicioCurso}.`
    );
  });
}

//Funcion para buscar curso
function buscarCurso(buscar) {
  let cursoBuscado = prompt(`Ingrese el nombre del curso que desea buscar`);
  let cursoEncontrado = buscar.find(
    (curso) =>
      curso.nombreCurso.toLowerCase() == cursoBuscado.toLocaleLowerCase()
  );
  if (cursoEncontrado == undefined) {
    alert(
      `El curso ${cursoBuscado} no esta en nuestro catalogo por los momentos!`
    );
  } else {
    alert(`Se encontro el curso ${cursoEncontrado.nombreCurso} y puedes ver toda su informacion aca:  
    Precio: ${cursoEncontrado.precioCurso}
    Inicio de Cursada: ${cursoEncontrado.inicioCurso} `);
  }
}

//Funcion para agregar al carrito
function agregarAlCarro(producto) {
  if (cart.includes(producto.nombreCurso)) {
    alert("El curso ya ha sido agregado al carrito");
  } else {
    cart.push(producto.nombreCurso);
    precioCursos += producto.precioCurso;
    alert(`Agregaste el curso ${producto.nombreCurso} al carro de compras.
    Recorda que el inicio de cursada es el dia ${producto.inicioCurso}`);
  }
}

//funciones para ordenar el carrito por precio y por orden alfabetico
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
  cursoAlfabetico.sort((a, b) => {
    if (a.nombreCurso > b.nombreCurso) {
      return 1;
    }
    if (a.nombreCurso < b.nombreCurso) {
      return -1;
    }
    return 0;
  });
  mostrarCatalogo(cursoAlfabetico);
}



//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRO DE COMPRAS
function comprarcarroDeCompras() {
  consulta = prompt(
    `Desea comprar los cursos agregados al carro de compras? Indique si o no.`
  ).toLowerCase();

  if (consulta === "si") {
    alert(
      `¡¡FELICIDADES!! compraste ${cart} preparate para empezar a aprender y disfrutar!`
    );
    cart = [];
    precioCursos = 0;
  } else if (consulta == "no") {
    alert(
      "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos!!"
    );
    cart = [];
    precioCursos = 0;
  } else {
    alert("Ingresa si o no");
  }
}

