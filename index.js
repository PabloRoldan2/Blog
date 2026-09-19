//Importar dependencias para la conexion
const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");
const path = require("path"); //para usar dirname y poder servir el front-end

//Ejecutar la conexión a la base de datos MongoDB
conexion();

//Crear constantes para la aplicación de Express
const app = express();
const puerto = 3900;

//Configurar CORS (Permite peticiones desde aplicaciones cliente como React, Angular, etc.)
app.use(cors());

//Convertir los cuerpos de las peticiones HTTP a objetos JSON procesables
app.use(express.json()); //Soporta contenido application/json
app.use(express.urlencoded({ extended: true })); //Soporta datos enviados en formularios (form-urlencoded)

//definir rutas como api
const rutas_articulo = require("./rutas/articulo_rutas");
app.use("/api", rutas_articulo);

//Servir la carpeta de subidas de forma estática para su uso en index_script.js
//Esto es para que pueda acceder a la carpeta de uploads ya que por ser front end
//por defecto no tiene permitido navegar o interactuar con index.js
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Servidor HTTP a la escucha de peticiones
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${puerto}`);
});

// Servir frontend
app.use(express.static(path.join(__dirname, "Pagina_blog")));