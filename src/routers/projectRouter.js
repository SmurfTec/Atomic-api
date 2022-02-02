const express = require('express');
const projectController = require('../controllers/projectController');
const protect = require('../middlewares/protect');

const router = express.Router();

// router
//   .route('/')
//   .get(protect, projectController.getProjects)
//   .post(protect, projectController.createProject);

module.exports = router;
