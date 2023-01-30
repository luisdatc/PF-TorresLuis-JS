/* //Clase Constructora del Curso
class Curso {
  constructor(idCurso, nombreCurso, precioCurso, inicioCurso) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.precioCurso = precioCurso;
    this.inicioCurso = inicioCurso;
  }
} */

const cursosCatalogo = [
  {
    idCurso: 1,
    nombreCurso: "Desarrollo WEB",
    categoria: "Programacion",
    precioCurso: 3000,
    inicioCursada: "15/01/2023",
  },
  {
    idCurso: 2,
    nombreCurso: "JavaScript",
    categoria: "Programacion",
    precioCurso: 5000,
    inicioCursada: "20/01/2023",
  },
  {
    idCurso: 3,
    nombreCurso: "ReactJS",
    categoria: "Programacion",
    precioCurso: 7000,
    inicioCursada: "05/02/2023",
  },
  {
    idCurso: 4,
    nombreCurso: "BackEnd",
    categoria: "Programacion",
    precioCurso: 10000,
    inicioCursada: "15/01/2023",
  },
  {
    idCurso: 5,
    nombreCurso: "UX/UI Basico",
    categoria: "Diseño",
    precioCurso: 6000,
    inicioCursada: "01/03/2023",
  },
  {
    idCurso: 6,
    nombreCurso: "UX/UI Avanzado",
    categoria: "Diseño",
    precioCurso: 9000,
    inicioCursada: "01/06/2023",
  },
  {
    idCurso: 7,
    nombreCurso: "UX Writing",
    categoria: "Diseño",
    precioCurso: 10000,
    inicioCursada: "15/03/2023",
  },
  {
    idCurso: 8,
    nombreCurso: "UX Research",
    categoria: "Diseño",
    precioCurso: 12000,
    inicioCursada: "15/04/2023",
  },
  {
    idCurso: 9,
    nombreCurso: "Data Analytics",
    categoria: "Data",
    precioCurso: 20000,
    inicioCursada: "15/01/2023",
  },
  {
    idCurso: 10,
    nombreCurso: "Data Scrience",
    categoria: "Data",
    precioCurso: 55000,
    inicioCursada: "15/02/2023",
  },
  {
    idCurso: 11,
    nombreCurso: "Tableau",
    categoria: "Data",
    precioCurso: 25000,
    inicioCursada: "15/03/2023",
  },
  {
    idCurso: 12,
    nombreCurso: "Power BI",
    categoria: "Data",
    precioCurso: 28000,
    inicioCursada: "15/06/2023",
  },
];

//Creacion array destacados

const cursosDestacados = [
  cursosCatalogo[0],
  cursosCatalogo[2],
  cursosCatalogo[5],
  cursosCatalogo[11],
];
