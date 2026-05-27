from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.servidor import Servidor

router = APIRouter(
    prefix="/api/servidores",
    tags=["servidores"]
)

@router.post("/")
def crear_servidor(
    nombre: str,
    host: str,
    database: str,
    usuario: str,
    password: str,
    db: Session = Depends(get_db)
):

    nuevo = Servidor(
    nombre=nombre,
    host=host,
    database=database,
    usuario=usuario,
    password=password
)

    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)

    return {
        "mensaje": "Servidor guardado",
        "id": nuevo.id
    }