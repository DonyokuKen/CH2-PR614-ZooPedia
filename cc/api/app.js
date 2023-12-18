const express = require('express');
const predictionRoute = require('./routes/prediction');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/predict', predictionRoute);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
