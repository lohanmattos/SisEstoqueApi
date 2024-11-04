import { Router } from "express";
import ProdutosController from "../controllers/produtoController.js";

const router = Router();

// CRUD para Produtos
router.post('/', ProdutosController.addProduto); // Create
router.get('/:id', ProdutosController.getProduto); // Read one
router.get('/', ProdutosController.getProdutos); // Read all
router.put('/:id', ProdutosController.updateProduto); // Update
router.delete('/:id', ProdutosController.deleteProduto); // Delete

export default router;
