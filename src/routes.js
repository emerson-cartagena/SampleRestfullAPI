const express = require('express');
const librosController = require('./controllers/libros.controller');
const router = express.Router();

// Rutas
router.get('/libros', librosController.findAll);
router.get('/libros/:isbn', librosController.findOne);
router.post('/libros', librosController.create);
router.put('/libros/:isbn', librosController.update);
router.delete('/libros/:isbn', librosController.delete);

module.exports = router;