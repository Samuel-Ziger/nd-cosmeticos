const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro no servidor' });
    if (result.length === 0) return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
    res.json({ mensagem: 'Login realizado com sucesso', usuario: result[0] });
  });
});

router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro no cadastro' });
    res.status(201).json({ mensagem: 'Cadastro realizado com sucesso' });
  });
});

module.exports = router;
