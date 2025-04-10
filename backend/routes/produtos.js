const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar produtos' });
    res.json(results);
  });
});

module.exports = router;
