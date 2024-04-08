const mysql = require('mysql');
const dbConfig = require('../config/db.config');

module.exports = dbConfig;

/*
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

module.exports = connection;*/