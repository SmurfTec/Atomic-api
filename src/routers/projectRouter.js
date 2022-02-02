const express = require('express');
const projectController = require('../controllers/projectController');
const protect = require('../middlewares/protect');
const restrictTo = require('../middlewares/restrictTo');

const router = express.Router();
router.use(protect);

router
  .route('/')
  .get(projectController.getAllProjects)
  .post(restrictTo('admin'), projectController.createProject);

router
  .route('/:id')
  .get(projectController.getProject)
  .patch(restrictTo('admin'), projectController.updateProject)
  .delete(restrictTo('admin'), projectController.deleteProject);

router
  .route('/:id/tests')
  .get(projectController.getAllTests)
  .post(projectController.createTest);

router
  .route('/test/:id')
  .get(projectController.getTest)
  .patch(projectController.updateTest)
  .delete(restrictTo('qaManager', 'admin'), projectController.deleteTest);

router
  .route('/tests/:tid/scenario')
  .get(projectController.getAllScenarios)
  .post(projectController.createScenario);

router
  .route('/scenario/:id')
  .get(projectController.getScenario)
  .patch(projectController.updateScenario)
  .delete(projectController.deleteScenario);

module.exports = router;
