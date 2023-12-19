const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const app = express();
const PORT = 3000; // Choose a suitable port

app.use(express.json());

app.post('/predict', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'Uploaded file is missing' });
    }

    const file = req.files['file']; // Assuming the uploaded file is sent as 'file'

    const formData = new FormData();
    formData.append('uploaded_file', fs.createReadStream(file.tempFilePath)); // Adjust 'uploaded_file' to match the field name expected by FastAPI

    const fastAPIResponse = await axios.post('http://localhost:8080/predict', formData, {
      headers: formData.getHeaders()
    });

    const predictionData = fastAPIResponse.data;
    return res.json(predictionData);
  } catch (error) {
    console.error('Error:', error);

    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});