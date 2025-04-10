const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const produtosRoutes = require('./produtos');
const vendasRoutes = require('./vendas');
const rastreioRoutes = require('./rastreio');
const pagamentoRoutes = require('./pagamento');

router.use('/auth', authRoutes);
router.use('/produtos', produtosRoutes);
router.use('/vendas', vendasRoutes);
router.use('/rastreio', rastreioRoutes);
router.use('/pagamento', pagamentoRoutes);

module.exports = router;