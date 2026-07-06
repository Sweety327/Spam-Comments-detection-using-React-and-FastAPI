from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model import model, vectorizer
from schemas import Comment

app = FastAPI(title="YouTube Spam Detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "YouTube Spam Detection API Running"
    }

@app.post("/predict")
def predict(data: Comment):

    transformed = vectorizer.transform([data.comment])

    prediction = model.predict(transformed)[0]

    result = "Spam" if prediction == 1 else "Not Spam"

    return {
        "comment": data.comment,
        "prediction": result,
        "label": int(prediction)
    }