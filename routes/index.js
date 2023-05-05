const router = require('express').Router();
const apiRoutes = require('./api');
const Category = require('../models/Category');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
  console.log("get route hit")
  const categories = await Category.findAll();
  res.json(categories);
});
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;