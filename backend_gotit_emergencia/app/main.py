from datetime import datetime
from typing import Literal, Optional
from uuid import uuid4

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field


app = FastAPI(
    title="Got It API",
    description="Backend emergencial para demonstração do projeto Got It.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# BANCO FAKE EM MEMÓRIA
# Depois dá para trocar essas listas por consultas no MySQL.
# ============================================================

clientes = [
    {
        "id": "1",
        "nome": "João Silva",
        "email": "joao@email.com",
        "senha": "123456",
        "telefone": "(11) 98765-4321",
        "endereco": "Rua das Flores, 120 - São Paulo",
        "status": "Ativo",
        "dataCadastro": "10/05/2026",
    },
    {
        "id": "2",
        "nome": "Maria Oliveira",
        "email": "maria@email.com",
        "senha": "123456",
        "telefone": "(11) 91234-5678",
        "endereco": "Av. Paulista, 1000 - São Paulo",
        "status": "Ativo",
        "dataCadastro": "12/05/2026",
    },
    {
        "id": "3",
        "nome": "Carlos Souza",
        "email": "carlos@email.com",
        "senha": "123456",
        "telefone": "(21) 99999-8888",
        "endereco": "Copacabana - Rio de Janeiro",
        "status": "Bloqueado",
        "dataCadastro": "14/05/2026",
    },
]

prestadores = [
    {
        "id": "1",
        "nome": "Andreas",
        "email": "ana@email.com",
        "senha": "123456",
        "telefone": "(11) 90000-1111",
        "especialidade": "Plantas Raras",
        "status": "Aprovado",
        "avaliacao": 5.0,
        "cargo": "Especialista em Plantas Raras",
        "descricao": "Trabalho com colecionadores de plantas raras. Cuidado premium e especializado.",
        "sobreMim": "Sou apaixonada por plantas raras e coleções especiais.",
        "sobreTrabalho": "Realizo visitas, avaliação da saúde da planta e plano de cuidado.",
        "valorVisita": 120.0,
        "cidade": "Itaim Bibi, São Paulo",
        "tags": ["Plantas Raras", "Aroides", "Coleções Especiais"],
        "trabalhos": 167,
        "tempoResposta": "Responde em 1 hora",
        "disponivel": True,
        "foto": "https://api.dicebear.com/9.x/adventurer/svg?seed=Ana",
    },
    {
        "id": "2",
        "nome": "Breno",
        "email": "mariana@email.com",
        "senha": "123456",
        "telefone": "(11) 90000-2222",
        "especialidade": "Plantas Tropicais",
        "status": "Aprovado",
        "avaliacao": 5.0,
        "cargo": "Especialista em Plantas Tropicais",
        "descricao": "Cuido de plantas tropicais, folhagens e jardins internos.",
        "sobreMim": "Tenho experiência com ambientes internos e externos.",
        "sobreTrabalho": "Faço manutenção, poda, adubação e diagnóstico.",
        "valorVisita": 150.0,
        "cidade": "Vila Mariana, São Paulo",
        "tags": ["Plantas Tropicais", "Jardins Internos", "Folhagens"],
        "trabalhos": 220,
        "tempoResposta": "Responde em 2 horas",
        "disponivel": True,
        "foto": "https://api.dicebear.com/9.x/adventurer/svg?seed=Mariana",
    },
    {
        "id": "3",
        "nome": "Gleiciany",
        "email": "carlos.prestador@email.com",
        "senha": "123456",
        "telefone": "(11) 90000-3333",
        "especialidade": "Suculentas",
        "status": "Aprovado",
        "avaliacao": 4.8,
        "cargo": "Especialista em Suculentas",
        "descricao": "Apaixonado por suculentas há 8 anos. Cuido de coleções especiais com dedicação.",
        "sobreMim": "Sou especialista em suculentas e cactos.",
        "sobreTrabalho": "Ajusto iluminação, rega, substrato e recuperação de plantas.",
        "valorVisita": 80.0,
        "cidade": "Pinheiros, São Paulo",
        "tags": ["Suculentas", "Cactos", "Plantas Desérticas"],
        "trabalhos": 256,
        "tempoResposta": "Responde em 2 horas",
        "disponivel": True,
        "foto": "https://api.dicebear.com/9.x/adventurer/svg?seed=Carlos",
    },
    {
        "id": "4",
        "nome": "Joao Lucas",
        "email": "anasantos@email.com",
        "senha": "123456",
        "telefone": "(11) 90000-4444",
        "especialidade": "Bonsai",
        "status": "Pendente",
        "avaliacao": 0,
        "cargo": "Cuidadora de Bonsai",
        "descricao": "Especialista em bonsai e técnicas japonesas de cultivo.",
        "sobreMim": "Estudo bonsai e técnicas orientais de cultivo.",
        "sobreTrabalho": "Poda, manutenção, aramação e orientação de cuidado.",
        "valorVisita": 110.0,
        "cidade": "Liberdade, São Paulo",
        "tags": ["Bonsai", "Plantas Japonesas", "Poda Artística"],
        "trabalhos": 145,
        "tempoResposta": "Responde em 3 horas",
        "disponivel": False,
        "foto": "https://api.dicebear.com/9.x/adventurer/svg?seed=AnaSantos",
    },
]

contratos = [
    {
        "id": "101",
        "clienteId": "1",
        "prestadorId": "2",
        "cliente": "João Silva",
        "especialista": "Mariana Costa",
        "titulo": "Manutenção de Ficus",
        "valor": "R$ 150,00",
        "valorNumero": 150.0,
        "status": "Em Andamento",
        "data": "14/06/2026",
    },
    {
        "id": "102",
        "clienteId": "2",
        "prestadorId": "3",
        "cliente": "Maria Oliveira",
        "especialista": "Carlos Silva",
        "titulo": "Cuidados com Suculentas",
        "valor": "R$ 80,00",
        "valorNumero": 80.0,
        "status": "Finalizado",
        "data": "10/06/2026",
    },
    {
        "id": "103",
        "clienteId": "3",
        "prestadorId": "4",
        "cliente": "Carlos Souza",
        "especialista": "Ana Santos",
        "titulo": "Poda de Bonsai",
        "valor": "R$ 200,00",
        "valorNumero": 200.0,
        "status": "Cancelado",
        "data": "05/06/2026",
    },
]

pagamentos = [
    {
        "id": "TX-19028",
        "contratoId": "101",
        "data": "14/06/2026",
        "valorTotal": 150.0,
        "taxaPlataforma": 22.5,
        "valorPrestador": 127.5,
        "status": "LIQUIDADO",
        "metodo": "cartao",
    },
    {
        "id": "TX-19027",
        "contratoId": "102",
        "data": "10/06/2026",
        "valorTotal": 80.0,
        "taxaPlataforma": 12.0,
        "valorPrestador": 68.0,
        "status": "LIQUIDADO",
        "metodo": "pix",
    },
]

admins = [
    {
        "id": "1",
        "nome": "Admin Admin",
        "email": "admin@gotit.com",
        "senha": "admin123",
        "telefone": "(11) 90000-0000",
    }
]


# ============================================================
# SCHEMAS
# ============================================================

class LoginRequest(BaseModel):
    email: EmailStr
    senha: str
    tipo: Optional[Literal["CLIENTE", "PRESTADOR", "ADMIN"]] = None


class ClienteCreate(BaseModel):
    nome: str
    email: EmailStr
    senha: str
    telefone: Optional[str] = ""
    endereco: Optional[str] = ""


class PrestadorCreate(BaseModel):
    nome: str
    email: EmailStr
    senha: str
    telefone: Optional[str] = ""
    especialidade: str
    cargo: Optional[str] = ""
    descricao: Optional[str] = ""
    valorVisita: float = Field(default=0, ge=0)
    cidade: Optional[str] = ""


class ContratoCreate(BaseModel):
    cliente_id: str
    prestador_id: str
    titulo: Optional[str] = "Visita de cuidado de plantas"


class TransacaoCartao(BaseModel):
    valorTotal: float = 150.0
    tipo: Optional[str] = "credito"


class TransacaoPix(BaseModel):
    valorTotal: float = 150.0


# ============================================================
# HELPERS
# ============================================================

def gerar_id() -> str:
    return str(uuid4())[:8]


def hoje_br() -> str:
    return datetime.now().strftime("%d/%m/%Y")


def valor_formatado(valor: float) -> str:
    return f"R$ {valor:.2f}".replace(".", ",")


def buscar_por_email(lista, email: str):
    return next((item for item in lista if item["email"].lower() == email.lower()), None)


def profissional_para_front(p: dict) -> dict:
    return {
        "id": int(p["id"]) if str(p["id"]).isdigit() else p["id"],
        "name": p["nome"],
        "title": p.get("cargo") or p.get("especialidade", "Especialista"),
        "rating": p.get("avaliacao", 0),
        "reviews": 73,
        "bio": p.get("descricao", ""),
        "tags": p.get("tags", [p.get("especialidade", "Plantas")]),
        "jobs": p.get("trabalhos", 0),
        "responseTime": p.get("tempoResposta", "Responde em 2 horas"),
        "location": p.get("cidade", ""),
        "price": p.get("valorVisita", 0),
        "available": p.get("disponivel", True),
        "image": p.get("foto", ""),
    }


# ============================================================
# ROTAS BÁSICAS
# ============================================================

@app.get("/")
def health_check():
    return {
        "status": "online",
        "mensagem": "Backend Got It funcionando",
        "docs": "Acesse /docs para testar as rotas",
    }


@app.get("/api/health")
def api_health_check():
    return {"status": "online", "api": "Got It"}


# ============================================================
# AUTENTICAÇÃO SIMPLES
# ============================================================

@app.post("/api/auth/login")
def login(dados: LoginRequest):
    bases = []

    if dados.tipo in (None, "CLIENTE"):
        bases.append(("CLIENTE", clientes))
    if dados.tipo in (None, "PRESTADOR"):
        bases.append(("PRESTADOR", prestadores))
    if dados.tipo in (None, "ADMIN"):
        bases.append(("ADMIN", admins))

    for tipo, base in bases:
        usuario = buscar_por_email(base, dados.email)
        if usuario and usuario.get("senha") == dados.senha:
            return {
                "token": f"fake-token-{tipo.lower()}-{usuario['id']}",
                "user": {
                    "id": usuario["id"],
                    "nome": usuario["nome"],
                    "email": usuario["email"],
                },
                "type": tipo,
            }

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email ou senha inválidos")


@app.post("/api/clientes", status_code=status.HTTP_201_CREATED)
@app.post("/api/auth/register/cliente", status_code=status.HTTP_201_CREATED)
def criar_cliente(dados: ClienteCreate):
    if buscar_por_email(clientes, dados.email):
        raise HTTPException(status_code=400, detail="Email já cadastrado")

    novo = {
        "id": gerar_id(),
        "nome": dados.nome,
        "email": dados.email,
        "senha": dados.senha,
        "telefone": dados.telefone,
        "endereco": dados.endereco,
        "status": "Ativo",
        "dataCadastro": hoje_br(),
    }
    clientes.append(novo)

    return {
        "mensagem": "Cliente cadastrado com sucesso",
        "cliente": {k: v for k, v in novo.items() if k != "senha"},
    }


@app.post("/api/prestadores", status_code=status.HTTP_201_CREATED)
@app.post("/api/auth/register/prestador", status_code=status.HTTP_201_CREATED)
def criar_prestador(dados: PrestadorCreate):
    if buscar_por_email(prestadores, dados.email):
        raise HTTPException(status_code=400, detail="Email já cadastrado")

    novo = {
        "id": gerar_id(),
        "nome": dados.nome,
        "email": dados.email,
        "senha": dados.senha,
        "telefone": dados.telefone,
        "especialidade": dados.especialidade,
        "status": "Pendente",
        "avaliacao": 0,
        "cargo": dados.cargo or f"Especialista em {dados.especialidade}",
        "descricao": dados.descricao,
        "sobreMim": "",
        "sobreTrabalho": "",
        "valorVisita": dados.valorVisita,
        "cidade": dados.cidade,
        "tags": [dados.especialidade],
        "trabalhos": 0,
        "tempoResposta": "Responde em até 24 horas",
        "disponivel": True,
        "foto": "https://api.dicebear.com/9.x/adventurer/svg?seed=NovoPrestador",
    }
    prestadores.append(novo)

    return {
        "mensagem": "Prestador cadastrado com sucesso",
        "prestador": {k: v for k, v in novo.items() if k != "senha"},
    }


# ============================================================
# ESPECIALISTAS / PRESTADORES
# ============================================================

@app.get("/api/especialistas")
def listar_especialistas():
    return [profissional_para_front(p) for p in prestadores]


@app.get("/api/especialistas/{prestador_id}")
def obter_especialista(prestador_id: str):
    prestador = next((p for p in prestadores if p["id"] == prestador_id), None)
    if not prestador:
        raise HTTPException(status_code=404, detail="Prestador não encontrado")
    return profissional_para_front(prestador)


@app.get("/api/prestadores")
def listar_prestadores():
    return [{k: v for k, v in p.items() if k != "senha"} for p in prestadores]


@app.get("/api/prestadores/contratos")
def listar_contratos_prestador():
    return [
        {
            "id": int(c["id"]) if str(c["id"]).isdigit() else c["id"],
            "title": c["titulo"],
            "price": c["valor"].replace(",00", ""),
            "client": c["cliente"],
            "status": "Em andamento" if c["status"] == "Em Andamento" else c["status"],
        }
        for c in contratos
    ]


# ============================================================
# CLIENTES
# ============================================================

@app.get("/api/clientes")
def listar_clientes():
    return [{k: v for k, v in c.items() if k != "senha"} for c in clientes]


@app.get("/api/clientes/contratos")
def listar_contratos_cliente():
    return [
        {
            "id": int(c["id"]) if str(c["id"]).isdigit() else c["id"],
            "title": c["titulo"],
            "price": c["valor"].replace(",00", ""),
            "provider": c["especialista"],
            "status": "Em andamento" if c["status"] == "Em Andamento" else c["status"],
        }
        for c in contratos
    ]


# ============================================================
# CONTRATOS
# ============================================================

@app.post("/api/contratos", status_code=status.HTTP_201_CREATED)
def criar_contrato(dados: ContratoCreate):
    cliente = next((c for c in clientes if c["id"] == dados.cliente_id), None)
    prestador = next((p for p in prestadores if p["id"] == dados.prestador_id), None)

    if not cliente:
        raise HTTPException(status_code=404, detail="Cliente não encontrado")
    if not prestador:
        raise HTTPException(status_code=404, detail="Prestador não encontrado")

    valor = float(prestador.get("valorVisita", 0))

    novo = {
        "id": gerar_id(),
        "clienteId": cliente["id"],
        "prestadorId": prestador["id"],
        "cliente": cliente["nome"],
        "especialista": prestador["nome"],
        "titulo": dados.titulo,
        "valor": valor_formatado(valor),
        "valorNumero": valor,
        "status": "Em Andamento",
        "data": hoje_br(),
    }
    contratos.append(novo)

    return {"mensagem": "Contrato criado com sucesso", "contrato": novo}


@app.patch("/api/contratos/{contrato_id}/status")
def atualizar_status_contrato(contrato_id: str, status_contrato: Literal["Em Andamento", "Finalizado", "Cancelado"]):
    contrato = next((c for c in contratos if c["id"] == contrato_id), None)
    if not contrato:
        raise HTTPException(status_code=404, detail="Contrato não encontrado")

    contrato["status"] = status_contrato
    return {"mensagem": "Status atualizado", "contrato": contrato}


# ============================================================
# PAGAMENTOS / TRANSAÇÕES
# ============================================================

@app.post("/api/transacoes/cartao", status_code=status.HTTP_201_CREATED)
def pagar_cartao(dados: TransacaoCartao):
    valor = float(dados.valorTotal)
    taxa = round(valor * 0.15, 2)
    transacao = {
        "id": f"TX-{gerar_id()}",
        "contratoId": None,
        "data": hoje_br(),
        "valorTotal": valor,
        "taxaPlataforma": taxa,
        "valorPrestador": round(valor - taxa, 2),
        "status": "LIQUIDADO",
        "metodo": dados.tipo or "cartao",
    }
    pagamentos.append(transacao)

    return {
        "mensagem": "Pagamento por cartão processado com sucesso",
        "transacao": transacao,
    }


@app.post("/api/transacoes/pix", status_code=status.HTTP_201_CREATED)
def gerar_pix(dados: TransacaoPix):
    valor = float(dados.valorTotal)
    taxa = round(valor * 0.15, 2)
    transacao = {
        "id": f"PIX-{gerar_id()}",
        "contratoId": None,
        "data": hoje_br(),
        "valorTotal": valor,
        "taxaPlataforma": taxa,
        "valorPrestador": round(valor - taxa, 2),
        "status": "AGUARDANDO_PAGAMENTO",
        "metodo": "pix",
        "qrCode": "GotItMarketplacePixSimulation",
    }
    pagamentos.append(transacao)

    return {
        "mensagem": "Pix gerado com sucesso",
        "transacao": transacao,
        "qrCode": transacao["qrCode"],
    }


@app.get("/api/pagamentos")
def listar_pagamentos():
    return pagamentos


# Compatibilidade com a rota antiga enviada no backend anterior.
@app.post("/api/pagamento/split", status_code=status.HTTP_201_CREATED)
def pagamento_split(dados: dict):
    valor = float(dados.get("valor_total", dados.get("valorTotal", 150)))
    taxa = round(valor * 0.15, 2)
    return {
        "mensagem": "Pagamento e split simulados com sucesso",
        "detalhes": {
            "sucesso": True,
            "charge_id": f"ch_fake_{gerar_id()}",
            "status": "succeeded",
            "valor_total": valor,
            "taxa_plataforma": taxa,
            "valor_prestador": round(valor - taxa, 2),
        },
    }


# ============================================================
# ADMIN
# ============================================================

@app.get("/api/admin/clientes")
def admin_listar_clientes():
    return [
        {
            "id": c["id"],
            "nome": c["nome"],
            "email": c["email"],
            "telefone": c.get("telefone", ""),
            "status": c.get("status", "Ativo"),
            "dataCadastro": c.get("dataCadastro", ""),
        }
        for c in clientes
    ]


@app.get("/api/admin/especialistas")
def admin_listar_especialistas():
    return [
        {
            "id": p["id"],
            "nome": p["nome"],
            "especialidade": p.get("especialidade", ""),
            "status": p.get("status", "Pendente"),
            "avaliacao": p.get("avaliacao", 0),
        }
        for p in prestadores
    ]


@app.get("/api/admin/contratos")
def admin_listar_contratos():
    return [
        {
            "id": c["id"],
            "cliente": c["cliente"],
            "especialista": c["especialista"],
            "valor": c["valor"],
            "status": c["status"],
            "data": c["data"],
        }
        for c in contratos
    ]


@app.get("/api/admin/pagamentos")
def admin_listar_pagamentos():
    return pagamentos


@app.get("/api/admin/dashboard")
def admin_dashboard():
    receita_total = sum(p["valorTotal"] for p in pagamentos if p["status"] in ["LIQUIDADO", "PAGO"])
    taxa_total = sum(p["taxaPlataforma"] for p in pagamentos if p["status"] in ["LIQUIDADO", "PAGO"])
    contratos_ativos = len([c for c in contratos if c["status"] == "Em Andamento"])

    return {
        "clientes": len(clientes),
        "prestadores": len(prestadores),
        "contratosAtivos": contratos_ativos,
        "totalContratos": len(contratos),
        "receitaTotal": receita_total,
        "taxaPlataforma": taxa_total,
        "pagamentos": len(pagamentos),
    }
