const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tf = require('@tensorflow/tfjs-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const data = req.body; // financing data
  // AI model processing here (pseudo-code)
  const result = aiModel.predict(data);
  res.json({ success: true, result });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const aiModel = require('./ai-model/model');  // Path to your AI model
