const express = require('express');

const router = express.Router();

// get all the gratitude items listed out
router.get('/', (req, res) => res.json({ mssg: 'Welcome to the app' }));

// get a single gratitude item listed out
router.get('/:id', (req, res) => {});

// add a new gratitude item
router.post('/', (req, res) => {});

// delete a single gratitude item
router.delete('/:id', (req, res) => {});

// updates a single gratitude item
router.patch(':id', (req, res) => {});

module.exports = router;
