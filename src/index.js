const express = require('express');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes/libros.routes');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const app = express();

// Middleware
app.use(bodyParser.json());

app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

// Rutas
//app.use('/api', librosRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});