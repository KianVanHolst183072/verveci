from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.mount("/static", StaticFiles(directory="/usr/src/app/app"), name="static")

@app.get("/", include_in_schema=False)
async def root():
    return RedirectResponse(url="/docs")


origins = [
    "http://localhost",
    "http://localhost:80",
    "http://127.0.0.1",
    "http://127.0.0.1:80",
    "http://192.168.65.1"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

models.Base.metadata.create_all(bind=engine)


class DataBase(BaseModel):
    date: str
    name: str
    mail: str
    company: str
    branch: str
    role: str
    lang: str

    # A1 - A10
    A1: int
    A2: int
    A3: int
    A4: int
    A5: int
    A6: int
    A7: int
    A8: int
    A9: int
    A10: int

    # B1 - B10
    B1: int
    B2: int
    B3: int
    B4: int
    B5: int
    B6: int
    B7: int
    B8: int
    B9: int
    B10: int

    # C1 - C3
    C1: int
    C2: int
    C3: int

    # D1 - D9
    D1: int
    D2: int
    D3: int
    D4: int
    D5: int
    D6: int
    D7: int
    D8: int
    D9: int

    # E1 - E6
    E1: int
    E2: int
    E3: int
    E4: int
    E5: int
    E6: int

    # F1 - F3
    F1: int
    F2: int
    F3: int

   # CHANGE, G1 - G3
    change:str
    G1: int
    G2: int
    G3: int
    
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.post("/data/", status_code=status.HTTP_201_CREATED)
async def store_info(data: DataBase, db: db_dependency):
    db_data= models.Data(**data.dict())
    # Add and commit the record to the database
    db.add(db_data)
    db.commit()