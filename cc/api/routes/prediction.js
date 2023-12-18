const express = require('express');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const uploaded_file = req.files['uploaded_file']; // Assuming the uploaded file is sent as 'uploaded_file'

    if (!uploaded_file) {
      return res.status(400).json({ error: 'Uploaded file data is missing' });
    }

    const formData = new FormData();
    formData.append('uploaded_file', uploaded_file.data, {
      filename: uploaded_file.name,
      contentType: uploaded_file.mimetype,
    });

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

module.exports = router;
