//Clase Constructora del Curso
class Curso {
  constructor(idCurso, nombreCurso, precioCurso, inicioCurso) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.precioCurso = precioCurso;
    this.inicioCurso = inicioCurso;
  }
}

//Instanciacion de los cursos (objetos)
const curso1 = new Curso(1, "Desarrollo Web", 3000, "15/01/2023");
const curso2 = new Curso(2, "JavaScript", 3500, "20/01/2023");
const curso3 = new Curso(3, "ReactJS", 5000, "05/02/2023");
const curso4 = new Curso(4, "AngularJS", 5000, "05/02/2023");
const curso5 = new Curso(5, "SEO", 6000, "01/04/2023");
const curso6 = new Curso(6, "Programacion BackEnd", 10000, "18/02/2023");
const curso7 = new Curso(7, "JAVA", 8000, "20/04/2023");
const curso8 = new Curso(8, "Python", 6000, "20/05/2023");
const curso9 = new Curso(9, "UX/UI Basico", 4000, "01/03/2023");
const curso10 = new Curso(10, "UX/UI Avanzado", 9000, "01/06/2023");

//Creacion de array de objetos
const catalogo = [
  curso1,
  curso2,
  curso3,
  curso4,
  curso5,
  curso6,
  curso7,
  curso8,
  curso9,
  curso10,
];

//Creacion array destacados

const cursosDestacados = [
  curso1,
  curso3,
  curso8,
  curso10
];
const cursosDestacados2 = [
  curso1,
  curso3,
  curso8,
  curso10
];

