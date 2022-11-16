require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' });
});

// listening for requests
app.listen(process.env.PORT, () => {
  console.log('App listening on port', process.env.PORT);
});
