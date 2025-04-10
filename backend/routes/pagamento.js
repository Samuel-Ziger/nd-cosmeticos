// backend/routes/pagamento.js
const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/', (req, res) => {
  const dadosPagamento = req.body;

  const python = spawn('python', ['backend/python/pagamento.py', JSON.stringify(dadosPagamento)]);

  let resultado = '';
  let erro = '';

  python.stdout.on('data', (data) => {
    resultado += data.toString();
  });

  python.stderr.on('data', (data) => {
    erro += data.toString();
  });

  python.on('close', (code) => {
    if (code === 0) {
      res.status(200).json({ resultado: JSON.parse(resultado) });
    } else {
      res.status(500).json({ erro: erro || 'Erro ao processar pagamento' });
    }
  });
});

module.exports = router;
