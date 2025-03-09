from typing import Optional
from fastapi import FastAPI, Path
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

tryouts = {
    1: {
        "title": "Try Out UTBK SNBT 1 2025",
        "time": 195,
        "question": 160,
        "date_start": "28 Feb 2025 - 5 Maret 2025",
        "date_created": "99 Maret 2069"
    },
    # ... rest of the tryouts remain the same
}

class Tryout(BaseModel):
    title: str
    time: int
    question: int
    date_start: str
    date_created: str

@app.get("/get-tryout/{tryout_id}")
def get_tryout(tryout_id: int = Path(description="The ID of the tryout you want to view", gt=0, lt=8)):
    return tryouts[tryout_id]

@app.get("/get-by-title")
def get_tryout_by_title(title: Optional[str] = None):
    for tryout_id in tryouts:
        if tryouts[tryout_id]["title"] == title:
            return tryouts[tryout_id]
    return {"Data": "Not found"}

@app.post("/create-tryout/{tryout_id}")
def create_to(tryout_id: int, tryout: Tryout):
    if tryout_id in tryouts:
        return {"Error": "tryout exists"}
    tryouts[tryout_id] = tryout.dict()
    return tryouts[tryout_id]