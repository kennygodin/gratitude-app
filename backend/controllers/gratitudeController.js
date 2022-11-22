const Gratitude = require('../models/gratitudeModel');
const mongoose = require('mongoose');

// get all the gratitude items listed out
const getGratitudes = async (req, res) => {
  try {
    const gratitude = await Gratitude.find({}).sort({ createdAt: -1 });
    // const value = await Gratitude.count();
    res.status(200).json(gratitude);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// get a single gratitude item listed out
const getGratitude = async (req, res) => {
  // res.json({ mssg: 'Get a single gratitude item' });
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such gratitude id' });
  }

  const gratitude = await Gratitude.findById(id);
  if (!gratitude) {
    return res.status(404).json({ error: 'No such gratitude item' });
  } else {
    res.status(200).json(gratitude);
  }
};

// Create a new gratitude item
const createGratitude = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(404).json({ error: 'Gratitude item cannot be empty' });
  }
  try {
    const gratitude = await Gratitude.create({ content });
    res.status(200).json(gratitude);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// delete all gratitude items
const deleteGratitudes = async (req, res) => {
  try {
    const gratitude = await Gratitude.deleteMany({});
    res.status(200).json(gratitude);
  } catch (error) {
    res.json({ error: error.message });
  }
};
// delete a gratitude item
const deleteGratitude = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such gratitude id' });
  }

  const gratitude = await Gratitude.findOneAndDelete({ _id: id });
  if (!gratitude) {
    return res.json({ mssg: 'No such gratitude item to delete' });
  } else {
    res.status(200).json(gratitude);
  }
};

// update a gratitude item
const updateGratitude = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such item to update' });
  }
  const gratitude = await Gratitude.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!gratitude) {
    return res.json({ mssg: 'Update gratitude item' });
  } else {
    res.status(200).json(gratitude);
  }
};

module.exports = {
  getGratitudes,
  getGratitude,
  createGratitude,
  deleteGratitudes,
  deleteGratitude,
  updateGratitude,
};
