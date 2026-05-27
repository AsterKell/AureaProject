from sqlalchemy import Column, Integer, String
from app.database.database import Base

class Servidor(Base):
    __tablename__ = "servidores"

    id = Column(Integer, primary_key=True, index=True)

    nombre = Column(String)
    host = Column(String)
    database = Column(String)
    usuario = Column(String)
    password = Column(String)