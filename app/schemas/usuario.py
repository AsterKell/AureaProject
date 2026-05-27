from pydantic import BaseModel, EmailStr

class UsuarioCreate(BaseModel):
    nombres:   str
    apellidos: str
    email:     EmailStr
    username:  str
    password:  str