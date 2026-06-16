from pydantic import BaseModel, Field

class SolicitacaoServico(BaseModel):
    cuidador_id_gateway: str = Field(..., description="ID da conta do cuidador no gateway")
    valor_total: float = Field(..., description="Valor total cobrado em Reais")
    token_cartao: str = Field(..., description="Token do cartão gerado pelo Frontend")