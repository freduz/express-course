const express = require('express');
const pageController = require('../controllers/page');

const router = express.Router();

router.get('/add-course', pageController.addCoursePage);

module.exports = router;
