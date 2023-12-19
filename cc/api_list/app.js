const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const app = express();

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST endpoint to handle file uploads and forward them
app.post('/predict', upload.single('uploaded_file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    // Create form data
    const formData = new FormData();
    formData.append('uploaded_file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Forward the file to another endpoint
    const response = await axios.post('https://festpi-5jpwdiy2zq-uc.a.run.app/predict', formData, {
      headers: formData.getHeaders(),
    });

    // Send the response from the other endpoint back to the client
    return res.send(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
