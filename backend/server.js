require('dotenv').config();
const express = require('express');
const gratitudeRoutes = require('./routes/gratitudeRoutes');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

// routes
app.use('/api/gratitudes', gratitudeRoutes);

// listening for requests
app.listen(process.env.PORT, () => {
  console.log('App listening on port', process.env.PORT);
});
