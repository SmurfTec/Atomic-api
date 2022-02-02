const express = require('express');
const projectController = require('../controllers/projectController');
const protect = require('../middlewares/protect');
const restrictTo = require('../middlewares/restrictTo');

const router = express.Router();

router
  .route('/')
  .get(protect, projectController.getAllProjects)
  .post(protect, restrictTo('admin'), projectController.createProject);

router
  .route('/:id')
  .get(protect, restrictTo('admin'), projectController.updateProject)
  .post(protect, restrictTo('admin'), projectController.deleteProject);

router
  .route('/test')
  .get(protect, projectController.getAllTests)
  .post(protect, projectController.createTest);

router
  .route('/scenario')
  .get(protect, projectController.getScenarios)
  .post(protect, projectController.createScenario);

router
  .route('/test/:id')
  .get(protect, projectController.updateTest)
  .post(protect, projectController.deleteTest);

router
  .route('/scenario/:id')
  .get(protect, projectController.updateScenario)
  .post(protect, projectController.deleteScenario);

module.exports = router;
