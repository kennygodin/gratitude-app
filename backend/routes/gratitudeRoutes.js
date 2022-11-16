const express = require('express');

const router = express.Router();

const {
  getGratitudes,
  getGratitude,
  createGratitude,
  deleteGratitude,
  updateGratitude,
} = require('../controllers/gratitudeController');

// get all the gratitude items listed out
router.get('/', getGratitudes);

// get a single gratitude item listed out
router.get('/:id', getGratitude);

// add a new gratitude item
router.post('/', createGratitude);

// delete a single gratitude item
router.delete('/:id', deleteGratitude);

// updates a single gratitude item
router.patch(':id', updateGratitude);

module.exports = router;
