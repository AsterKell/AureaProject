from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import auth

from app.database.database import engine, Base

from app.models.usuario import Usuario

app = FastAPI()

Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router
app.include_router(auth.router)

@app.get("/")
def root():
    return {"mensaje": "Backend funcionando"}