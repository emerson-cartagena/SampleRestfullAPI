require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env
const mysql = require('mysql');

let dbConfig;

if (process.env.NODE_ENV === 'production') {
    dbConfig = {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.DB_NAME,
        PORT: process.env.DB_PORT,
    };
} else {
    dbConfig = {
        HOST: process.env.DB_HOST || "localhost",
        USER: process.env.DB_USER || "root",
        PASSWORD: process.env.DB_PASSWORD || "",
        DB: process.env.DB_NAME || "libros",
        PORT: process.env.DB_PORT || 3306,
    };
}


// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT
});

// Conectar a la base de datos
connection.connect(error => {
    if (error) {
        throw error;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;