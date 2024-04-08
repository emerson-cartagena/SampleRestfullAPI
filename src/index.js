const express = require('express');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const app = express();

// Configurar Express para servir archivos estáticos
app.use(express.static('public'));

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', librosRoutes);

// Manejador de rutas para manejar rutas no definidas
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});