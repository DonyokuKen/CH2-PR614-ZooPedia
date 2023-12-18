import os
import uvicorn
import traceback
import tensorflow as tf
import numpy as np
from fastapi import FastAPI, Response, UploadFile
from utils import load_image_into_numpy_array  # Ensure the load_image_into_numpy_array function is correctly imported
import cv2  # Ensure cv2 is correctly imported

model = tf.keras.models.load_model("./model-zoopedia.hdf5")
classes = ['cane', 'cavallo', 'elefante', 'farfalla', 'gallina', 'gatto', 'mucca', 'pecora', 'ragno', 'scoiattolo']
translate = ["dog", "horse", "elephant", "butterfly", "chicken", "cat", "cow", "sheep", "spider", "squirrel"]

app = FastAPI()

@app.post("/predict")
def predict(uploaded_file: UploadFile, response: Response):
    try:
        if uploaded_file.content_type not in ["image/jpeg", "image/png"]:
            response.status_code = 400
            return "File is Not an Image"
        
        image = load_image_into_numpy_array(uploaded_file.file.read())
        
        # Placeholder for image preprocessing function
        processed_image = preprocess_image(image)
        
        # Placeholder for data preparation function
        img_batch = prepare_data(processed_image)
        
        # Predict using the model
        result = model.predict(img_batch)
        
        # Determine prediction class
        predicted_class = classes[np.argmax(result[0])]
        prediction = translate[np.argmax(result[0])]
        
        return {"prediction_class": predicted_class, "prediction": prediction}
    
    except Exception as e:
        traceback.print_exc()
        response.status_code = 500
        return "Internal Server Error"

# Placeholder functions for image processing and data preparation
def preprocess_image(image):
    # Replace with your actual image preprocessing logic
    # Resize, normalize, adjust color channels, etc.
    resized_image = cv2.resize(image, (224, 224))
    processed_image = custom_preprocessing(resized_image)  # Replace with actual preprocessing
    return processed_image

def prepare_data(image):
    # Replace with your actual data preparation logic
    # Ensure the data is formatted as expected by your model
    img_batch = np.expand_dims(image, axis=0)
    processed_data = additional_data_processing(img_batch)  # Replace with actual data preparation
    return processed_data

# Dummy placeholder functions (Replace these with your actual processing logic)
def custom_preprocessing(image):
    # Placeholder for custom preprocessing
    return image

def additional_data_processing(data):
    # Placeholder for additional data processing
    return data

port = os.environ.get("PORT", 8080)
print(f"Listening to http://localhost:{port}")
uvicorn.run(app, host='localhost', port=port)
