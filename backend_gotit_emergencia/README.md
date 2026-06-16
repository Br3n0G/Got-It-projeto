# Backend emergencial - Got It

Este backend foi feito para funcionar com o frontend React do projeto Got It.

## O que ele entrega

- FastAPI funcionando
- CORS liberado para o frontend
- Endpoints em `/api`
- Dados fake em memória
- Clientes
- Prestadores/especialistas
- Contratos
- Pagamentos
- Dashboard admin
- Rotas compatíveis com as chamadas Axios do frontend

## Como instalar

Dentro desta pasta:

```bash
python -m venv venv
```

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Windows CMD:

```cmd
venv\Scripts\activate
```

Depois:

```bash
pip install -r requirements.txt
```

## Como rodar

O frontend está configurado para chamar:

```txt
http://localhost:3000/api
```

Então rode o backend na porta 3000:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 3000
```

Abra no navegador:

```txt
http://localhost:3000/docs
```

## Endpoints principais

```txt
GET  /api/especialistas
GET  /api/admin/clientes
GET  /api/admin/especialistas
GET  /api/admin/contratos
GET  /api/clientes/contratos
GET  /api/prestadores/contratos
POST /api/transacoes/cartao
POST /api/transacoes/pix
GET  /api/admin/dashboard
POST /api/auth/login
POST /api/auth/register/cliente
POST /api/auth/register/prestador
POST /api/contratos
```

## Logins de teste

Cliente:

```txt
email: joao@email.com
senha: 123456
```

Prestador:

```txt
email: ana@email.com
senha: 123456
```

Admin:

```txt
email: admin@gotit.com
senha: admin123
```

## Observação importante

Este backend usa banco fake em memória. Quando reiniciar o servidor, os dados criados durante a execução são perdidos.

Para a apresentação, isso é suficiente para demonstrar as telas consumindo dados reais via API.

Depois, as listas `clientes`, `prestadores`, `contratos` e `pagamentos` podem ser trocadas por consultas no MySQL.
