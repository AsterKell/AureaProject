from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Servidor(Base):
    __tablename__ = "servidores"

    id = Column(Integer, primary_key=True, index=True)

    nombre = Column(String(100), nullable=False)
    host = Column(String(100), nullable=False)
    puerto = Column(String(10), nullable=False)

    usuario = Column(String(100), nullable=False)
    password = Column(String(255), nullable=False)

    database = Column(String(100), nullable=False)