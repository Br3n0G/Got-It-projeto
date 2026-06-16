import os
from dotenv import load_dotenv

# Deteta o .env na pasta 'back'
if os.path.exists(".env"):
    load_dotenv(".env")
elif os.path.exists("../.env"):
    load_dotenv("../.env")

class Settings:
    DATABASE_URL: str = os.getenv("MYSQL_URL", "mysql+pymysql://root:Janjao2004***@127.0.0.1:3306/got_it")
    STRIPE_SECRET_KEY: str = os.getenv("STRIPE_SECRET_KEY", "sk_test_mock_key")

settings = Settings()