const express = require('express');
const courseController = require('../controllers/course');
const router = express.Router();

router.get('', courseController.getAllCourse);
router.get('/:id', courseController.getCourse);

router.post('', courseController.createCourse);

module.exports = router;
