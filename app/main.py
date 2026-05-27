from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.auth import router as auth_router
from app.routers.servidor import router as servidor_router

from app.models.usuario import Usuario
from app.models.servidor import Servidor

from app.database.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router
app.include_router(auth_router)
app.include_router(servidor_router)

@app.get("/")
def root():
    return {"mensaje": "Backend funcionando"}