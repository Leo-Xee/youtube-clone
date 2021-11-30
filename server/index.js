const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const { mongoURI } = require('./config/key.js');

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected!!'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
