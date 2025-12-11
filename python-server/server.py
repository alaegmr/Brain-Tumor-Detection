from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from PIL import Image
import io
import joblib

# 🔹 Charger le modèle RandomForest
rf_model = joblib.load("rf_tumor_model.pkl")

IMG_SIZE = 224

app = FastAPI()

# 🔹 Autoriser CORS pour le frontend Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Prétraitement de l'image
def preprocess_image(file) -> np.ndarray:
    img = Image.open(file).convert("RGB")
    img = img.resize((IMG_SIZE, IMG_SIZE))
    img_array = np.array(img) / 255.0
    return img_array.flatten().reshape(1, -1)  # aplati et 2D

# 🔹 Route de prédiction
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        img_array = preprocess_image(io.BytesIO(await file.read()))
        pred = rf_model.predict(img_array)

        return {
            "success": True,
            "prediction": int(pred[0]),
            "rawOutput": pred.tolist()
        }
    except Exception as e:
        return {"success": False, "error": str(e)}
