# 🌱 Got It!

## 📖 Descrição do Projeto

O **Got It!** é uma plataforma inovadora de marketplace que conecta proprietários de plantas a especialistas da área, como jardineiros, paisagistas e botânicos.

A plataforma oferece:

* Vitrine de profissionais especializados;
* Histórico de serviços realizados;
* Painel administrativo dinâmico;
* Simulação de lógica de split de pagamentos para prestadores de serviço;
* Sistema de autenticação para diferentes perfis de usuários.

---

# 👥 Integrantes e Atribuições

| Integrante    | Matrícula                  | Responsabilidades                                                                                                   |
| ------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Breno dos Santos Guimarães**     | `UC24101685`          | Desenvolvimento Frontend (React, Vite e Tailwind CSS), Integração de APIs, Lógica de Autenticação e Design UI/UX    |
| **João Lucas Dutra Gomes**      | `UC24101698`      | Desenvolvimento Backend (FastAPI e Python), Modelagem de Banco de Dados (MySQL) e Integração de Pagamentos (Stripe) |
| **Gleyciane Oliveira Pereira** | `UC24100425` | Estruturação de Dados, Validação e Garantia de Qualidade  | Desenvolvimento Frontend       
| **Andreas Gomes Marchi**   | `UC24101536`   | Suporte Frontend/Backend e Organização da Estrutura do Repositório                                                  |

---

# 💻 Como Executar o Frontend

## Pré-requisitos

* Node.js instalado

## Passos

1. Abra um terminal na pasta raiz do frontend.

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. A aplicação estará disponível no endereço informado pelo terminal, normalmente:

```text
http://localhost:5173
```

---

# ⚙️ Como Executar o Backend

## Pré-requisitos

* Python instalado

## Passos

### 1. Acesse a pasta do backend

```bash
cd backend_gotit_emergencia
```

### 2. Crie um ambiente virtual

#### Windows

```bash
python -m venv venv
```

#### Linux / macOS

```bash
python3 -m venv venv
```

### 3. Ative o ambiente virtual

#### Windows (PowerShell)

```bash
.\venv\Scripts\Activate.ps1
```

#### Windows (CMD)

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

### 4. Instale as dependências

```bash
pip install -r requirements.txt
```

### 5. Inicie o servidor

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 3000
```

> A porta **3000** é utilizada para manter compatibilidade com as chamadas Axios configuradas no frontend.

### 6. Acesse a documentação da API

```text
http://localhost:3000/docs
```

---

# 🗄️ Dados Iniciais (Seed)

Para facilitar demonstrações e apresentações, o backend inicia com um banco de dados **fake em memória**, contendo registros previamente cadastrados:

* Clientes;
* Prestadores de serviço;
* Contratos;
* Usuários administrativos.

> **Observação:** O script oficial para implantação em banco relacional MySQL 5.7 encontra-se disponível no arquivo:

```text
seed_mysql.sql
```

---

# 🔑 Credenciais de Teste

## Cliente

**Email**

```text
joao@email.com
```

**Senha**

```text
123456
```

---

## Prestador

**Email**

```text
ana@email.com
```

**Senha**

```text
123456
```

---

## Administrador

**Email**

```text
admin@gotit.com
```

**Senha**

```text
admin123
```

---

# ⚠️ Observações Importantes

O backend atual utiliza armazenamento em memória para agilizar testes e apresentações.

Isso significa que:

* Todos os dados adicionados manualmente durante a execução serão perdidos ao reiniciar o servidor;
* Ao reiniciar o Uvicorn, o sistema será restaurado para o estado inicial definido no seed;
* Nenhuma alteração realizada durante a sessão será persistida.

---

# 🚀 Tecnologias Utilizadas

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Python
* FastAPI
* Uvicorn

### Banco de Dados

* MySQL 5.7

### Integrações

* Stripe (simulação de pagamentos e split de valores)

---

Desenvolvido para o projeto **Got It! 🌱**
