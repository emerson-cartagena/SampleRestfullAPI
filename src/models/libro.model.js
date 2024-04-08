const connection = require("./db.js");

// constructor
const Libro = function (libro) {
    this.isbn = libro.isbn;
    this.autor = libro.autor;
    this.titulo = libro.titulo;
    this.precio = libro.precio;
};

Libro.create = (newLibro, result) => {
    /*sql.query("INSERT INTO libros SET ?", newLibro, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Libro creado: ", { isbn: res.insertId, ...newLibro });
        result(null, { isbn: res.insertId, ...newLibro });
    });*/
    console.log(connection.HOST);
    result(null, { isbn: res.insertId, ...newLibro, HOST: connection.HOST});
};

Libro.findByISBN = (isbn, result) => {
    /*sql.query(`SELECT * FROM libros WHERE isbn = '${isbn}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Libro encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        // Libro no encontrado
        result({ kind: "not_found" }, null);
    });*/
    result({ kind: "not_found" }, null);
};

Libro.getAll = (result) => {
    /*let query = "SELECT * FROM libros";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("libros: ", res);
        result(null, res);
    });*/
    result({ kind: "not_found" }, null);
};

Libro.updateByISBN = (isbn, libro, result) => {
    /*sql.query(
        "UPDATE libros SET autor = ?, titulo = ?, precio = ? WHERE isbn = ?",
        [libro.autor, libro.titulo, libro.precio, isbn],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // No se encontro libro con isbn
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Libro actualizado: ", { isbn: isbn, ...libro });
            result(null, { isbn: isbn, ...libro });
        }
    );*/
    result(null, { isbn: isbn, ...libro });
};

Libro.remove = (isbn, result) => {
    /*sql.query("DELETE FROM libros WHERE isbn = ?", isbn, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // Libro no encontrado
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Se eliminó libro con ISBN: ", isbn);
        result(null, res);
    });*/
    result({ kind: "not_found" }, null);
};

module.exports = Libro;