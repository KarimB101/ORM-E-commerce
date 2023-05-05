const router = require('express').Router();
const apiRoutes = require('./api');
const Category = require('../models/Category');


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

module.exports = router;