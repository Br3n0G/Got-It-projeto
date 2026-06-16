USE got_it;

INSERT INTO clientes (nome, email, senha, telefone, endereco, status)
VALUES
('João Silva', 'joao@email.com', '123456', '(11) 98765-4321', 'Rua das Flores, São Paulo', 'Ativo'),
('Maria Oliveira', 'maria@email.com', '123456', '(11) 91234-5678', 'Av. Paulista, São Paulo', 'Ativo'),
('Carlos Souza', 'carlos@email.com', '123456', '(21) 99999-8888', 'Copacabana, Rio de Janeiro', 'Bloqueado');

INSERT INTO prestadores (
    nome, email, senha, telefone, especialidade, cargo, descricao,
    sobre_mim, sobre_trabalho, valor_visita, cidade, status, avaliacao,
    trabalhos, tempo_resposta, disponivel, foto
)
VALUES
('Ana Paula Lima', 'ana@email.com', '123456', '(11) 90000-1111', 'Plantas Raras', 'Especialista em Plantas Raras', 'Trabalho com colecionadores de plantas raras. Cuidado premium e especializado.', 'Sou apaixonada por plantas raras.', 'Visitas, diagnóstico e plano de cuidado.', 120.00, 'Itaim Bibi, São Paulo', 'Aprovado', 5.0, 167, 'Responde em 1 hora', true, 'https://api.dicebear.com/9.x/adventurer/svg?seed=Ana'),
('Mariana Costa', 'mariana@email.com', '123456', '(11) 90000-2222', 'Plantas Tropicais', 'Especialista em Plantas Tropicais', 'Cuido de plantas tropicais e jardins internos.', 'Tenho experiência com ambientes internos.', 'Poda, adubação e diagnóstico.', 150.00, 'Vila Mariana, São Paulo', 'Aprovado', 5.0, 220, 'Responde em 2 horas', true, 'https://api.dicebear.com/9.x/adventurer/svg?seed=Mariana'),
('Carlos Silva', 'carlos.prestador@email.com', '123456', '(11) 90000-3333', 'Suculentas', 'Especialista em Suculentas', 'Cuido de suculentas e cactos.', 'Sou especialista em suculentas.', 'Ajuste de iluminação, rega e substrato.', 80.00, 'Pinheiros, São Paulo', 'Aprovado', 4.8, 256, 'Responde em 2 horas', true, 'https://api.dicebear.com/9.x/adventurer/svg?seed=Carlos');

INSERT INTO admins (nome, email, senha, telefone)
VALUES ('Admin Admin', 'admin@gotit.com', 'admin123', '(11) 90000-0000');

INSERT INTO contratos (cliente_id, prestador_id, titulo, valor, status)
VALUES
(1, 2, 'Manutenção de Ficus', 150.00, 'Em Andamento'),
(2, 3, 'Cuidados com Suculentas', 80.00, 'Finalizado');

INSERT INTO pagamentos (contrato_id, valor_total, taxa_plataforma, valor_prestador, metodo, status)
VALUES
(1, 150.00, 22.50, 127.50, 'cartao', 'LIQUIDADO'),
(2, 80.00, 12.00, 68.00, 'pix', 'LIQUIDADO');
