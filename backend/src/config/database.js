const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'sistema_matriculas',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432,
});

const inicializarDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS alumnos (
                id_alumno SERIAL PRIMARY KEY,
                primer_nombre VARCHAR(50),
                segundo_nombre VARCHAR(50),
                apellido_paterno VARCHAR(50),
                apellido_materno VARCHAR(50),
                tipo_documento VARCHAR(20),
                numero_documento VARCHAR(20),
                fecha_nacimiento DATE
            );
        `);
        console.log('✅ Conexión a PostgreSQL y tabla de alumnos verificada');
    } catch (error) {
        console.error('❌ Error al crear la tabla', error);
    }
};

inicializarDB();
module.exports = pool;