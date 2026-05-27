from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.database.database import get_db
from app.models.usuario import Usuario
from app.schemas.usuario import UsuarioCreate

router = APIRouter(prefix="/api/auth", tags=["auth"])
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
def register(data: UsuarioCreate, db: Session = Depends(get_db)):
    # Verificar si email o username ya existen
    if db.query(Usuario).filter(Usuario.email == data.email).first():
        raise HTTPException(status_code=400, detail="El email ya está registrado")
    if db.query(Usuario).filter(Usuario.username == data.username).first():
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    nuevo = Usuario(
        nombres   = data.nombres,
        apellidos = data.apellidos,
        email     = data.email,
        username  = data.username,
        password  = pwd_context.hash(data.password),  # 🔒 encriptada
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return {"mensaje": "Usuario creado correctamente", "id": nuevo.id}