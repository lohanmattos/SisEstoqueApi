-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS controle_estoque;

-- Seleciona o banco de dados
USE controle_estoque;

-- Cria a tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    preco_unitario DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Índices para otimizar busca por nome e quantidade
CREATE INDEX idx_nome ON produtos(nome);
CREATE INDEX idx_quantidade ON produtos(quantidade);

-- Insere dados de exemplo na tabela produtos
INSERT INTO produtos (nome, quantidade, preco_unitario, descricao) VALUES
('Caneta Esferográfica Azul', 150, 1.50, 'Caneta esferográfica com tinta azul, ideal para escrita suave e uniforme.'),
('Caderno Universitário 100 Folhas', 80, 12.90, 'Caderno espiral universitário com 100 folhas pautadas.'),
('Pacote de Folhas A4 500 Unidades', 50, 20.00, 'Pacote com 500 folhas de papel tamanho A4, gramatura 75g/m².'),
('Mouse Óptico USB', 40, 25.00, 'Mouse óptico com conexão USB, compatível com Windows e Mac.'),
('Teclado Mecânico RGB', 30, 150.00, 'Teclado mecânico com iluminação RGB personalizável e layout ABNT2.');
