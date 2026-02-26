from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI(title="Barcelona Team API") # Forced reload

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data from the JSON file
DB_FILE = os.path.join(os.path.dirname(__file__), "db.json")

def load_data():
    try:
        with open(DB_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except Exception:
        return {}

@app.get("/api/club-info")
def get_club_info():
    db = load_data()
    if "clubInfo" in db:
        return db["clubInfo"]
    raise HTTPException(status_code=404, detail="Club info not found")

@app.get("/api/jugadores")
def get_jugadores():
    db = load_data()
    if "jugadores" in db:
        return db["jugadores"]
    return []

@app.get("/api/jugadores/{jugador_id}")
def get_jugador(jugador_id: int):
    db = load_data()
    jugadores = db.get("jugadores", [])
    for j in jugadores:
        if j.get("id") == jugador_id:
            return j
    raise HTTPException(status_code=404, detail="Jugador not found")

@app.get("/api/trofeos")
def get_trofeos():
    db = load_data()
    # Try root first, then clubInfo
    if "trofeos" in db:
        return db["trofeos"]
    return db.get("clubInfo", {}).get("trofeos", [])

@app.get("/api/estadisticas")
def get_estadisticas():
    db = load_data()
    if "estadisticas" in db:
        return db["estadisticas"]
    estadisticas = db.get("clubInfo", {}).get("estadisticas_actuales")
    if estadisticas:
        return estadisticas
    raise HTTPException(status_code=404, detail="Estadisticas not found")

@app.get("/api/estadio")
def get_estadio():
    db = load_data()
    if "estadio" in db:
        return db["estadio"]
    estadio = db.get("clubInfo", {}).get("estadio")
    if estadio:
        return estadio
    raise HTTPException(status_code=404, detail="Estadio not found")

@app.get("/api/entrenador")
def get_entrenador():
    db = load_data()
    if "entrenador" in db:
        return db["entrenador"]
    entrenador = db.get("clubInfo", {}).get("entrenador")
    if entrenador:
        return entrenador
    raise HTTPException(status_code=404, detail="Entrenador not found")

@app.get("/api/historia")
def get_historia():
    db = load_data()
    if "historia" in db:
        return db["historia"]
    historia = db.get("clubInfo", {}).get("historia")
    if historia:
        return historia
    raise HTTPException(status_code=404, detail="Historia not found")
