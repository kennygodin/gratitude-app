// get all the gratitude items listed out
const getGratitudes = (req, res) => {
  res.json({ mssg: 'Get all gratitude items' });
};

// get a single gratitude item listed out
const getGratitude = (req, res) => {
  res.json({ mssg: 'Get a single gratitude item' });
};

// Create a new gratitude item
const createGratitude = (req, res) => {
  res.json({ mssg: 'Add new gratitude item' });
};

// delete a gratitude item
const deleteGratitude = (req, res) => {
  res.json({ mssg: 'Delete a gratitude item' });
};

// update a gratitude item
const updateGratitude = (req, res) => {
  res.json({ mssg: 'Update gratitude item' });
};

module.exports = {
  getGratitudes,
  getGratitude,
  createGratitude,
  deleteGratitude,
  updateGratitude,
};
