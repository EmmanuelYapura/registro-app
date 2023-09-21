//Requiere 
require('dotenv').config();
require('./config/database');

//Requiere la libreria express
const express = require('express');

//Llamar la funcion express y generar donde va a estar el puerto 
const app = express();

//Puerto generalmente utilizado
const PORT = 4000;

//Setea el puerto
app.set('port', PORT);

//Avisa por consola que la conexion se estableció
app.get('/', (req, res) => {
    res.send('Servidor creado');
});

//Escucha que pasa con la conectividad
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${app.get('port')}`));