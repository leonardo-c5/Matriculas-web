const db = require('../config/database');

exports.obtenerEstudiantes = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM alumnos');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

exports.crearEstudiante = async (req, res) => {
    try {
        const { primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, tipo_documento, numero_documento, fecha_nacimiento } = req.body;
        const result = await db.query(
            'INSERT INTO alumnos (primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, tipo_documento, numero_documento, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, tipo_documento, numero_documento, fecha_nacimiento]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Error al crear estudiante');
    }
};