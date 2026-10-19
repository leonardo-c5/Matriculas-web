const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

router.get('/', estudianteController.obtenerEstudiantes);
router.post('/', estudianteController.crearEstudiante);

module.exports = router;