from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent

model = joblib.load(BASE_DIR / "spam_model.pkl")
vectorizer = joblib.load(BASE_DIR / "vectorizer.pkl")
