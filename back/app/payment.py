import stripe
from app.config import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

class PaymentService:
    @staticmethod
    def criar_pagamento_com_split(valor_total: float, token_cartao: str, conta_cuidador_id: str):
        try:
           
            amount_cents = int(valor_total * 100)
            
            taxa_plataforma = int(amount_cents * 0.15)
            
            charge = stripe.Charge.create(
                amount=amount_cents,
                currency="brl",
                source=token_cartao,
                description="Serviço de Cuidador de Plantas",
                application_fee_amount=taxa_plataforma,
                transfer_data={
                    "destination": conta_cuidador_id,
                },
            )
            # Retorna um dicionário estruturado para bater com a validação do main.py
            return {"sucesso": True, "charge_id": charge.id, "status": charge.status}
            
        except stripe.error.StripeError as e:
            print(f"Erro na transação Stripe: {e}")
            return {"sucesso": False, "erro": str(e)}