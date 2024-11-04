import express from 'express';
import produtosRouter from './routes/produtoRouter.js';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const app = express();

// Configurando CORS para permitir todas as origens
app.use(cors());
app.use(express.json());

// Usar as rotas de produtos
app.use('/produtos', produtosRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
