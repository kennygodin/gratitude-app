require('dotenv').config();
const express = require('express');
const gratitudeRoutes = require('./routes/gratitudeRoutes');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const path = require('path');

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
app.use('/api/user', userRoutes);

// loading the static files for production
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend>/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(
        'Connected Server to DB & listening on port',
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
