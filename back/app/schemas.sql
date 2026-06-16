CREATE DATABASE IF NOT EXISTS got_it;
USE got_it;

CREATE TABLE categorias_plantas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    frequencia_rega_sugerida VARCHAR(100)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    tipo_usuario ENUM('administrador', 'prestador', 'usuario') NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE perfis_prestador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL UNIQUE,
    bio TEXT,
    experiencia_anos INT DEFAULT 0,
    capacidade_max_plantas INT DEFAULT 10,
    stripe_account_id VARCHAR(100),
    status_verificacao ENUM('pendente', 'aprovado', 'rejeitado') DEFAULT 'pendente',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE contas_bancarias_prestador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prestador_id INT NOT NULL,
    banco_codigo VARCHAR(10) NOT NULL,
    agencia VARCHAR(20) NOT NULL,
    conta_numero VARCHAR(30) NOT NULL,
    tipo_conta ENUM('corrente', 'poupanca') NOT NULL,
    FOREIGN KEY (prestador_id) REFERENCES perfis_prestador(id) ON DELETE CASCADE
);

CREATE TABLE plantas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dono_id INT NOT NULL,
    categoria_id INT,
    nome VARCHAR(100) NOT NULL,
    apelido VARCHAR(100),
    observacoes TEXT,
    data_nascimento DATE,
    FOREIGN KEY (dono_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias_plantas(id) ON DELETE SET NULL
);

CREATE TABLE diario_planta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    planta_id INT NOT NULL,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_acao ENUM('rega', 'adubacao', 'poda', 'observacao') NOT NULL,
    descricao TEXT,
    foto_url VARCHAR(255),
    FOREIGN KEY (planta_id) REFERENCES plantas(id) ON DELETE CASCADE
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prestador_id INT NOT NULL,
    nome_servico VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco_base DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (prestador_id) REFERENCES perfis_prestador(id) ON DELETE CASCADE
);

CREATE TABLE cupons_desconto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    valor_desconto DECIMAL(10, 2) NOT NULL,
    tipo_desconto ENUM('fixo', 'porcentagem') NOT NULL,
    data_expiracao DATE NOT NULL
);

CREATE TABLE solicitacoes_servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    prestador_id INT NOT NULL, 
    cupom_id INT,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    status ENUM('pendente', 'aceito', 'recusado', 'em_andamento', 'concluido', 'cancelado') DEFAULT 'pendente',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (prestador_id) REFERENCES perfis_prestador(id),
    FOREIGN KEY (cupom_id) REFERENCES cupons_desconto(id) ON DELETE SET NULL
);

CREATE TABLE itens_solicitacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitacao_id INT NOT NULL,
    planta_id INT NOT NULL,
    servico_id INT NOT NULL,
    preco_cobrado DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id) ON DELETE CASCADE,
    FOREIGN KEY (planta_id) REFERENCES plantas(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);

CREATE TABLE faturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitacao_id INT NOT NULL UNIQUE,
    valor_bruto DECIMAL(10, 2) NOT NULL,
    valor_desconto DECIMAL(10, 2) DEFAULT 0.00,
    valor_liquido DECIMAL(10, 2) NOT NULL,
    status_pagamento ENUM('pendente', 'pago', 'falhou', 'estornado') DEFAULT 'pendente',
    gateway_invoice_id VARCHAR(100),
    data_pagamento DATETIME,
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id) ON DELETE CASCADE
);

CREATE TABLE transacoes_split (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fatura_id INT NOT NULL,
    valor_plataforma DECIMAL(10, 2) NOT NULL,
    valor_prestador DECIMAL(10, 2) NOT NULL,
    status_transferencia ENUM('retido', 'transferido', 'estornado') DEFAULT 'retido',
    gateway_transfer_id VARCHAR(100),
    data_transferencia DATETIME,
    FOREIGN KEY (fatura_id) REFERENCES faturas(id) ON DELETE CASCADE
);

CREATE TABLE mensagens_chat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitacao_id INT NOT NULL,
    remetente_id INT NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    visualizada BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id) ON DELETE CASCADE,
    FOREIGN KEY (remetente_id) REFERENCES usuarios(id)
);

CREATE TABLE configuracoes_sistema (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave VARCHAR(50) NOT NULL UNIQUE,
    valor VARCHAR(255) NOT NULL,
    descricao TEXT
);

-- POPULANDO O BANCO DE DADOS

-- 1. Categorias de Plantas
INSERT INTO categorias_plantas (nome, descricao, frequencia_rega_sugerida) VALUES 
('Suculentas', 'Plantas que retêm muita água, precisam de sol direto.', '1 vez por semana'),
('Samambaias', 'Gostam de umidade constante e sombra.', '3 vezes por semana'),
('Folhagens Tropicais', 'Plantas de interior como Jiboia e Antúrio.', '2 vezes por semana');

-- 2. Usuários (1 Admin, 2 Prestadores, 2 Usuários comuns)
INSERT INTO usuarios (nome, email, senha_hash, telefone, tipo_usuario) VALUES 
('Carlos Admin', 'admin@BrotoCare.com', 'hash_segura_admin', '11999999999', 'administrador'),
('Alice Silva (Prestadora)', 'alice.cuidadora@gmail.com', 'hash_segura_prestador1', '11988888888', 'prestador'),
('Bruno Costa (Prestador)', 'bruno.jardim@gmail.com', 'hash_segura_prestador2', '21977777777', 'prestador'),
('Mariana Souza (Cliente)', 'mari.usuario@outlook.com', 'hash_segura_user1', '11966666666', 'usuario'),
('Diego Lima (Cliente)', 'diego.lima@outlook.com', 'hash_segura_user2', '21955555555', 'usuario');

-- 3. Endereços
INSERT INTO enderecos (usuario_id, logradouro, numero, bairro, cidade, estado, cep) VALUES 
(1, 'Av. Paulista', '1000', 'Bela Vista', 'São Paulo', 'SP', '01310-100'),
(2, 'Rua das Flores', '123', 'Pinheiros', 'São Paulo', 'SP', '05422-010'),
(3, 'Av. Atlântica', '500', 'Copacabana', 'Rio de Janeiro', 'RJ', '22020-002'),
(4, 'Rua Augusta', '2500', 'Consolação', 'São Paulo', 'SP', '01412-100'),
(5, 'Rua Voluntários da Pátria', '89', 'Botafogo', 'Rio de Janeiro', 'RJ', '22270-010');

-- 4. Perfis de Prestador (Vinculados à Alice [id 2] e Bruno [id 3])
INSERT INTO perfis_prestador (usuario_id, bio, experiencia_anos, capacidade_max_plantas, stripe_account_id, status_verificacao) VALUES 
(2, 'Bióloga e apaixonada por botânica. Cuido do seu apartamento verde com amor.', 5, 15, 'acct_1NzX82FjK', 'aprovado'),
(3, 'Especialista em recuperação de samambaias e plantas ornamentais.', 3, 8, 'acct_2MzL91GkP', 'aprovado');

-- 5. Contas Bancárias dos Prestadores
INSERT INTO contas_bancarias_prestador (prestador_id, banco_codigo, agencia, conta_numero, tipo_conta) VALUES 
(1, '341', '0190', '45321-0', 'corrente'), -- Conta da Alice (Perfil 1)
(2, '001', '4210', '10987-6', 'corrente'); -- Conta do Bruno (Perfil 2)

-- 6. Plantas (Pertencentes à Mariana [id 4] e Diego [id 5])
INSERT INTO plantas (dono_id, categoria_id, nome, apelido, observacoes, data_nascimento) VALUES 
(4, 1, 'Echeveria Elegans', 'Sula', 'Não molhar as folhas diretamente.', '2025-01-10'),
(4, 2, 'Samambaia Americana', 'Verdinha', 'Borrifar água nas folhas nos dias secos.', '2024-06-15'),
(5, 3, 'Costela de Adão', 'Monstera', 'Limpar o pó das folhas uma vez por mês.', '2023-11-20');

-- 7. Diário da Planta
INSERT INTO diario_planta (planta_id, tipo_acao, descricao) VALUES 
(1, 'rega', 'Rega matinal leve feita antes do sol forte.'),
(2, 'poda', 'Remoção de galhos secos na base da samambaia.'),
(3, 'adubacao', 'Adicionado NPK 10-10-10 diluído na água.');

-- 8. Serviços Oferecidos pelos Prestadores
INSERT INTO servicos (prestador_id, nome_servico, descricao, preco_base) VALUES 
(1, 'Hospedagem de Pequeno Porte', 'Cuido da sua planta na minha casa (Ideal para suculentas).', 15.00),
(1, 'Visita de Rotina Domiciliar', 'Vou até a sua casa regar e tratar das plantas.', 45.00),
(2, 'Consultoria de Recuperação', 'Tratamento intensivo para plantas murchas ou doentes.', 60.00);

-- 9. Cupons de Desconto
INSERT INTO cupons_desconto (codigo, valor_desconto, tipo_desconto, data_expiracao) VALUES 
('BOASVINDAS10', 10.00, 'fixo', '2026-12-31'),
('PRIMAVERA15', 15.00, 'porcentagem', '2026-09-30');

-- 10. Solicitações de Serviço (Mariana contrata Alice)
INSERT INTO solicitacoes_servico (usuario_id, prestador_id, cupom_id, data_inicio, data_fim, status) VALUES 
(4, 1, 1, '2026-07-01 09:00:00', '2026-07-05 18:00:00', 'aceito');

-- 11. Itens da Solicitação
INSERT INTO itens_solicitacao (solicitacao_id, planta_id, servico_id, preco_cobrado) VALUES 
(1, 1, 1, 15.00),
(1, 2, 1, 15.00);

-- 12. Faturas
INSERT INTO faturas (solicitacao_id, valor_bruto, valor_desconto, valor_liquido, status_pagamento, gateway_invoice_id, data_pagamento) VALUES 
(1, 30.00, 10.00, 20.00, 'pago', 'ch_3MvY21Lkd9', '2026-06-15 14:00:00');

-- 13. Transações de Split (Retenção de 15% de taxa do app)
INSERT INTO transacoes_split (fatura_id, valor_plataforma, valor_prestador, status_transferencia, gateway_transfer_id, data_transferencia) VALUES 
(1, 3.00, 17.00, 'transferido', 'tr_1NzB90Klo2', '2026-06-15 14:05:00');

-- 14. Mensagens de Chat
INSERT INTO mensagens_chat (solicitacao_id, remetente_id, mensagem) VALUES 
(1, 4, 'Olá Alice! Deixei as recomendações de rega no perfil de cada planta.'),
(1, 2, 'Perfeito, Mariana! Fique tranquila que elas serão muito bem cuidadas por aqui.');

-- 15. Configurações do Sistema
INSERT INTO configuracoes_sistema (chave, valor, descricao) VALUES 
('taxa_plataforma_porcentagem', '15', 'Porcentagem cobrada pelo app sobre cada serviço prestado.'),
('limite_alertas_diarios', '3', 'Máximo de notificações automáticas enviadas por usuário por dia.');
