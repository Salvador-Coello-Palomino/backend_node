const express = require('express');
const router = express.Router();
const sequelize = require('../db');

router.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ success: true, message: '✅ Conexión exitosa a la base de datos' });
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    res.status(500).json({ success: false, message: 'Error al conectar a la base de datos', error: error.message });
  }
});

module.exports = router;
