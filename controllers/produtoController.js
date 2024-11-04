import db from '../config/db.js';

/* CRUD - PRODUTOS CONTROLLER */
const addProduto = (req, res) => {
    const { nome, quantidade, preco_unitario, descricao } = req.body;
    const queryProduto = `INSERT INTO produtos (nome, quantidade, preco_unitario, descricao) VALUES (?, ?, ?, ?)`;

    db.query(queryProduto, [nome, quantidade, preco_unitario, descricao], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Produto criado com sucesso!" });
    });
};

const getProduto = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM produtos WHERE id = ?`;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
};

const getProdutos = (req, res) => {
    const query = `SELECT * FROM produtos`;

    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

const updateProduto = (req, res) => {
    const { id } = req.params; // ID do produto a ser editado
    const { nome, quantidade, preco_unitario, descricao } = req.body;

    const queryUpdateProduto = `UPDATE produtos SET nome = ?, quantidade = ?, preco_unitario = ?, descricao = ? WHERE id = ?`;

    // Atualiza o produto
    db.query(queryUpdateProduto, [nome, quantidade, preco_unitario, descricao, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Produto atualizado com sucesso!" });
    });
};

const deleteProduto = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM produtos WHERE id = ?`;

    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Produto deletado com sucesso!" });
    });
};

export default { addProduto, getProduto, getProdutos, updateProduto, deleteProduto };
