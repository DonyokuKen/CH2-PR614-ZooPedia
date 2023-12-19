const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Uploaded file is missing' });
    }

    const formData = new FormData();
    formData.append('uploaded_file', req.file.buffer.toString('base64'), {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const fastAPIResponse = await axios.post('http://localhost:8080/predict', formData, {
      headers: headers,
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
