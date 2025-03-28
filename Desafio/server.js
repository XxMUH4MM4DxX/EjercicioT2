import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

const temas = [
  {
    id: "1",
    nombre: "Lenguajes y Frameworks",
    descripcion: "Exploración de los lenguajes y frameworks utilizados en el desarrollo back-end.",
    palabrasClave: ["JavaScript", "Node.js", "Express", "Python", "Django"],
    practicas: [
      {
        titulo: "Crear un servidor básico",
        descripcion: "Configura un servidor básico utilizando Express.",
        objetivo: "Familiarizarse con el uso de Express y Node.js."
      },
      {
        titulo: "Uso de frameworks en Python",
        descripcion: "Explorar el uso de Django para crear una API.",
        objetivo: "Comprender cómo funcionan los frameworks para APIs en Python."
      }
    ]
  },
  {
    id: "2",
    nombre: "API",
    descripcion: "Introducción a las APIs y cómo interactúan con otras aplicaciones.",
    palabrasClave: ["REST", "Endpoints", "JSON", "Fetch"],
    practicas: [
      {
        titulo: "Consumiendo una API",
        descripcion: "Crea una aplicación que consuma una API externa utilizando Fetch.",
        objetivo: "Aprender cómo hacer peticiones HTTP desde el front-end."
      },
      {
        titulo: "Creando una API REST",
        descripcion: "Desarrolla una API REST básica que maneje peticiones GET y POST.",
        objetivo: "Comprender cómo crear endpoints en una API REST."
      }
    ]
  },
  {
    id: "3",
    nombre: "Base de Datos",
    descripcion: "Manejo de bases de datos, consultas y relaciones entre tablas.",
    palabrasClave: ["SQL", "MongoDB", "MySQL", "Consultas"],
    practicas: [
      {
        titulo: "Conexión con base de datos",
        descripcion: "Conectar una aplicación Node.js con MongoDB.",
        objetivo: "Familiarizarse con la conexión y manipulación de bases de datos."
      },
      {
        titulo: "Consultas SQL",
        descripcion: "Realizar consultas SQL básicas en una base de datos MySQL.",
        objetivo: "Practicar el uso de SQL para consultas y manipulación de datos."
      }
    ]
  },
  {
    id: "4",
    nombre: "Pruebas",
    descripcion: "Prácticas de pruebas unitarias y pruebas de integración en aplicaciones back-end.",
    palabrasClave: ["Jest", "Mocha", "Chai", "Pruebas Unitarias"],
    practicas: [
      {
        titulo: "Pruebas unitarias con Jest",
        descripcion: "Escribe pruebas unitarias para una función matemática en Node.js.",
        objetivo: "Comprender la importancia de las pruebas unitarias y cómo escribirlas."
      },
      {
        titulo: "Pruebas de integración con Mocha",
        descripcion: "Realiza pruebas de integración para una API usando Mocha y Chai.",
        objetivo: "Aprender a realizar pruebas de integración entre módulos."
      }
    ]
  },
  {
    id: "5",
    nombre: "Implementación",
    descripcion: "Despliegue de aplicaciones en un servidor y manejo de entorno de producción.",
    palabrasClave: ["Docker", "Heroku", "AWS", "CI/CD"],
    practicas: [
      {
        titulo: "Despliegue en Heroku",
        descripcion: "Despliega una API en Heroku y configura las variables de entorno.",
        objetivo: "Aprender el proceso de despliegue de aplicaciones en la nube."
      },
      {
        titulo: "Uso de Docker",
        descripcion: "Configura un contenedor Docker para una aplicación Node.js.",
        objetivo: "Comprender cómo Docker ayuda a la portabilidad de aplicaciones."
      }
    ]
  }
];

app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/tema/:type', (req, res) => {
  const tema = temas.find(t => t.nombre.toLowerCase() === req.params.type.toLowerCase());
  res.json(tema || { error: "Tema no encontrado" });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}/`);
});
