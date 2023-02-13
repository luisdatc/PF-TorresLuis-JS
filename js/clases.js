//Clase Constructora del Curso
class Curso {
  constructor(idCurso, nombreCurso, categoria, precioCurso, inicioCurso) {
    (this.idCurso = idCurso),
      (this.nombreCurso = nombreCurso),
      (this.categoria = categoria),
      (this.precioCurso = precioCurso),
      (this.inicioCurso = inicioCurso);
  }
}

let cursosCatalogo = [];
let cursosDestacados = [];

//cargo el array cursosCatalogo con una peticion async-await
//luego de cargado los muestra en el dom en forma de cards
setTimeout(() => {
  const cargarCatalogo = async () => {
    const response = await fetch("cursos.json");
    const datos = await response.json();

    for (let curso of datos) {
      let cursoNuevo = new Curso(
        curso.idCurso,
        curso.nombreCurso,
        curso.categoria,
        curso.precioCurso,
        curso.inicioCurso
      );
      cursosCatalogo.push(cursoNuevo);
    }
    mostrarCatalogo(cursosCatalogo);
  };
  cargarCatalogo();
}, 3000);
