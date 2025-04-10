// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Importando rotas
const authRoutes = require('./routes/auth');
const produtosRoutes = require('./routes/produtos');
const vendasRoutes = require('./routes/vendas');
const rastreioRoutes = require('./routes/rastreio');
const pagamentoRoutes = require('./routes/pagamento');

app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/rastreio', rastreioRoutes);
app.use('/api/pagamento', pagamentoRoutes);

app.get('/', (req, res) => {
  res.send('API ND Cosméticos rodando...');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
