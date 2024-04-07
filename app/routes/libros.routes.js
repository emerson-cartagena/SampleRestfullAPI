const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros.controller');

// Rutas
router.get('/libros', librosController.findAll);
router.get('/libros/:isbn', librosController.findOne);
router.post('/libros', librosController.create);
router.put('/libros/:isbn', librosController.update);
router.delete('/libros/:isbn', librosController.delete);

module.exports = router;