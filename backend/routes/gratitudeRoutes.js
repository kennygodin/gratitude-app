const express = require('express');

const {
  getGratitudes,
  getGratitude,
  createGratitude,
  deleteGratitudes,
  deleteGratitude,
  updateGratitude,
} = require('../controllers/gratitudeController');

const requireUser = require('../middleware/requireUser');

const router = express.Router();

// require authentication for all user for all workout routes.
router.use(requireUser);

// get all the gratitude items listed out
router.get('/', getGratitudes);

// get a single gratitude item listed out
router.get('/:id', getGratitude);

// add a new gratitude item
router.post('/', createGratitude);

// delete all single gratitude item
router.delete('/', deleteGratitudes);

// delete a single gratitude item
router.delete('/:id', deleteGratitude);

// updates a single gratitude item
router.patch('/:id', updateGratitude);

module.exports = router;
