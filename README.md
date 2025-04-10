# 💄 ND Cosméticos

Sistema web completo para rastreamento de pedidos da loja ND Cosméticos. Desenvolvido com Vue 3 no frontend e Node.js + MySQL no backend. O objetivo é permitir que clientes consultem o status de seus pedidos de forma rápida e eficiente.

---

## 📌 Sobre o sistema

Este sistema é dividido em duas partes:

- **Frontend:** Desenvolvido em Vue 3 com Vite e TailwindCSS. Apresenta páginas como Home, Rastreio e Pagamento.
- **Backend:** Feito em Node.js com Express, integra-se ao banco de dados MySQL para fornecer dados dos pedidos.

---

## 🔧 Requisitos

Antes de instalar, verifique se possui:

- Node.js (v18 ou superior)
- NPM (gerenciador de pacotes do Node)
- MySQL ou XAMPP (para rodar o banco de dados localmente)

---

## 📦 Instalação de dependências

### 📁 Frontend

```bash
cd frontend
npm install
npm install vue vue-router axios
npm install -D vite tailwindcss postcss autoprefixer @tailwindcss/postcss
npx tailwindcss init -p
cd ..
npm install --save-dev concurrently
```

### 📁 Backend

Na raiz do projeto, execute:

```bash
npm install express mysql2 cors nodemon
```

---

## 🗃️ Banco de Dados

Crie o banco no MySQL com:

```sql
CREATE DATABASE nd_cosmeticos;
```

Crie a tabela de pedidos:

```sql
CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo_rastreio VARCHAR(100),
  status VARCHAR(100),
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Configure a conexão no arquivo `backend/server.js`:

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sua senha
  database: 'nd_cosmeticos'
});
```

---

## ⚙️ Scripts do projeto

Adicione no `package.json` da raiz do projeto:

```json
"scripts": {
  "serve": "concurrently \"npm run backend\" \"npm run frontend --prefix frontend\"",
  "backend": "nodemon backend/server.js",
  "frontend": "npm run dev --prefix frontend"
}
```

---

## 🧪 Rodando o projeto

Para rodar tudo junto (backend + frontend):

```bash
npm run serve
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

---

## 🧠 Como funciona

1. O usuário entra na página de rastreamento e digita o código.
2. O frontend envia uma requisição via Axios para o backend.
3. O backend consulta o banco de dados MySQL.
4. A resposta com o status do pedido é exibida ao cliente.

---

## 🧱 Estrutura de Pastas

```
nd-cosmeticos/
├── backend/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.vue
│   │   │   ├── Rastreio.vue
│   │   │   └── Pagamento.vue
│   │   └── App.vue
│   └── vite.config.js
├── package.json
└── README.md
```

---

## 👨‍💻 Desenvolvido por

**Samuel**  
Militar, desenvolvedor web full stack, apaixonado por tecnologia, segurança da informação e projetos práticos com impacto real.
