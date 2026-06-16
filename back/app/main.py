from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import SolicitacaoServico
from app.payment import PaymentService
from app.config import settings

app = FastAPI(title="Got it")

# Configuração do Middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "online", "ambiente": "Docker ou Local funcionando!"}

@app.post("/api/pagamento/split", status_code=status.HTTP_201_CREATED)
def processar_pagamento(dados: SolicitacaoServico):
    resultado = PaymentService.criar_pagamento_com_split(
        valor_total=dados.valor_total,
        token_cartao=dados.token_cartao,
        conta_cuidador_id=dados.cuidador_id_gateway
    )
    
    # Valida se o retorno do payment.py foi bem sucedido
    if resultado is None or not resultado.get("sucesso", False):
        erro_msg = resultado.get("erro", "Erro ao processar o pagamento no gateway.") if resultado else "Erro desconhecido."
        raise HTTPException(status_code=400, detail=erro_msg)
        
    return {"mensagem": "Pagamento e split realizados com sucesso!", "detalhes": resultado}