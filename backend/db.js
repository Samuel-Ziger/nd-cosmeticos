const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ou 'suaSenha' se você tiver colocado uma
  database: 'nd_cosmeticos'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;
