# backend/python/pagamento.py
import mercadopago
import sys
import json
import os
from dotenv import load_dotenv

load_dotenv()

ACCESS_TOKEN = os.getenv("MP_ACCESS_TOKEN")

sdk = mercadopago.SDK(ACCESS_TOKEN)

if len(sys.argv) > 1:
    try:
        dados = json.loads(sys.argv[1])
        preference_data = {
            "items": [{
                "title": dados.get("produto", "Produto ND Cosméticos"),
                "quantity": int(dados.get("quantidade", 1)),
                "unit_price": float(dados.get("valor", 0.0))
            }],
            "payer": {
                "email": dados.get("email", "comprador@email.com")
            },
            "back_urls": {
                "success": "http://localhost:5173/sucesso",
                "failure": "http://localhost:5173/erro",
                "pending": "http://localhost:5173/pendente"
            },
            "auto_return": "approved"
        }

        preference_response = sdk.preference().create(preference_data)
        print(json.dumps(preference_response["response"]))
    except Exception as e:
        print(json.dumps({"erro": str(e)}), file=sys.stderr)
        sys.exit(1)
else:
    print(json.dumps({"erro": "Nenhum dado recebido"}), file=sys.stderr)
    sys.exit(1)
