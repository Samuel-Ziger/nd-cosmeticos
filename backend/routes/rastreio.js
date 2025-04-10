const express = require('express');
const router = express.Router();

router.get('/:codigo', (req, res) => {
  const { codigo } = req.params;
  // Simulando dados de rastreio
  res.json({ codigo, status: 'Em trânsito', previsao_entrega: '3 dias úteis' });
});

module.exports = router;
