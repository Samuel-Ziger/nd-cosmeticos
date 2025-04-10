const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { usuario_id, produtos, valor_total } = req.body;
  db.query('INSERT INTO vendas (usuario_id, produtos, valor_total) VALUES (?, ?, ?)', [usuario_id, JSON.stringify(produtos), valor_total], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro ao registrar venda' });
    res.status(201).json({ mensagem: 'Venda registrada' });
  });
});

module.exports = router;