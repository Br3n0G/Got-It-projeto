CREATE DATABASE IF NOT EXISTS got_it;
USE got_it;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(30),
    endereco VARCHAR(255),
    status VARCHAR(30) DEFAULT 'Ativo',
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prestadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(30),
    especialidade VARCHAR(120),
    cargo VARCHAR(120),
    descricao TEXT,
    sobre_mim TEXT,
    sobre_trabalho TEXT,
    valor_visita DECIMAL(10,2),
    cidade VARCHAR(120),
    status VARCHAR(30) DEFAULT 'Pendente',
    avaliacao DECIMAL(3,2) DEFAULT 0,
    trabalhos INT DEFAULT 0,
    tempo_resposta VARCHAR(80),
    disponivel BOOLEAN DEFAULT TRUE,
    foto TEXT
);

CREATE TABLE IF NOT EXISTS contratos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    prestador_id INT NOT NULL,
    titulo VARCHAR(120),
    valor DECIMAL(10,2),
    status VARCHAR(40) DEFAULT 'Em Andamento',
    data_contratacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (prestador_id) REFERENCES prestadores(id)
);

CREATE TABLE IF NOT EXISTS pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contrato_id INT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    taxa_plataforma DECIMAL(10,2) NOT NULL,
    valor_prestador DECIMAL(10,2) NOT NULL,
    metodo VARCHAR(30),
    status VARCHAR(40),
    data_pagamento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contrato_id) REFERENCES contratos(id)
);

CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(30)
);
