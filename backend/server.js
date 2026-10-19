const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./src/config/database'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

const estudianteRoutes = require('./src/routes/estudianteRoutes');
app.use('/api/estudiantes', estudianteRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});