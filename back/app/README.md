## Funcionalidades

- Cadastro e gerenciamento de cuidadores de plantas.
- Armazenamento de informações em banco de dados relacional.
- Integração com a plataforma Stripe para processamento de pagamentos.
- Registro das transações realizadas.
- Documentação automática dos endpoints através do Swagger.
- Execução local ou em ambiente Docker.

## Tecnologias Utilizadas

- Python 3.11
- FastAPI
- Uvicorn
- PostgreSQL / MySQL
- Docker
- Docker Compose
- Stripe SDK

## Instalação

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/got-it-backend.git
cd got-it-backend
```

### Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=got_it_db

STRIPE_SECRET_KEY=sua_chave_stripe
```

### Instalação das Dependências

```bash
pip install -r requirements.txt
```
```bash
pip install stripe
```

### Execução da Aplicação

```bash
../.venv/Scripts/activate
```
```bash
uvicorn app.main:app --reload
```

Caso queir testar o schema.sql com o docker
```
docker exec -i got_it_mysql mysql -u root -pJanjao2004*** < schemas.sql
```
Caso queira apagar o banco de dados criado
```
docker exec -i got_it_mysql mysql -u root -pJanjao2004*** -e "DROP DATABASE IF EXISTS got_it;"
```
A aplicação estará disponível em:

```text
http://127.0.0.1:8000
```

## Execução com Docker

Para executar a aplicação juntamente com o banco de dados em containers Docker:

```bash
docker compose up -d --build
```

O Docker Compose será responsável por criar e iniciar todos os serviços necessários para o funcionamento da aplicação.

## Documentação da API

A documentação automática pode ser acessada em:

```text
http://127.0.0.1:8000/docs
```

Através dessa interface é possível visualizar e testar todos os endpoints disponíveis.

## Exemplo de Pagamento

### Endpoint

```http
POST /api/pagamento/split
```

### Corpo da Requisição

```json
{
  "cuidador_id_gateway": "acct_1NzX82FjK",
  "valor_total": 45.00,
  "token_cartao": "tok_visa"
}
```

### Resposta Esperada

```json
{
  "mensagem": "Pagamento realizado com sucesso",
  "detalhes": {
    "sucesso": true,
    "charge_id": "ch_3Tj2GuIYQh0wtHNq0Y26MjKU",
    "status": "succeeded"
  }
}
```
