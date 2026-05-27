from sqlalchemy import create_engine, text
from app.core.config import settings

try:

    # Conexion
    engine = create_engine(
        settings.DATABASE_URL,
        connect_args={"sslmode": "require"}
    )

    print("Conectando a Neon...")

    with engine.connect() as connection:

        print("Conexion exitosa")

        # Consulta
        result = connection.execute(text("SELECT * FROM usuarios"))

        usuarios = result.fetchall()

        print("\nUSUARIOS:\n")

        for usuario in usuarios:
            print(usuario)

except Exception as e:

    print("Error de conexion:")
    print(e)