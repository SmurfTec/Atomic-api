const Project = require('../models/Project');
const Test = require('../models/Test');
const Scenario = require('../models/Scenario');

const catchAsync = require('../helpers/catchAsync');
const {
  projectValidation,
  testValidation,
  scenarioValidation,
} = require('../validations/projectValidations');
const AppError = require('../helpers/appError');

//* PROJECTS

exports.getAllProjects = catchAsync(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    results: projects.length,
    projects,
  });
});

exports.createProject = catchAsync(async (req, res) => {
  const validate = projectValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }
  const project = await Project.create(req.body);

  res.status(200).json({
    status: 'success',
    results: project.length,
    project,
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await project.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    project,
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const validate = projectValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }

  const updatedproject = await Project.findByIdAndUpdate(
    req.user._id,
    { ...req.body },
    {
      runValidators: true,
      new: true,
    }
  );

  if (!updatedproject)
    return next(
      new AppError(`Can't find any project with id ${projectId}`, 404)
    );

  res.status(200).json({
    status: 'success',
    project: updatedproject,
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const deletedproject = await Project.findByIdAndDelete(req.params.id);

  if (!deletedproject)
    return next(new AppError(`No project found against id ${projectId}`, 404));

  res.status(200).json({
    status: 'success',
    project: deletedproject,
  });
});

//* TESTS

exports.getAllTests = catchAsync(async (req, res) => {
  const tests = await Test.find();

  res.status(200).json({
    status: 'success',
    results: tests.length,
    tests,
  });
});

exports.createTest = catchAsync(async (req, res) => {
  const validate = testValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }

  const project = await Project.findById(req.params.id);
  if (!project)
    return next(new AppError(`No project found against id ${projectId}`, 404));

  const test = await Test.create(req.body);

  project.tests.push(test._id);
  await project.save();

  res.status(200).json({
    status: 'success',
    test,
  });
});

exports.getTest = catchAsync(async (req, res, next) => {
  const test = await Test.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    test,
  });
});

exports.updateTest = catchAsync(async (req, res, next) => {
  const validate = testValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }

  const updatedtest = await Test.findByIdAndUpdate(
    { ...req.body },
    {
      runValidators: true,
      new: true,
    }
  );

  if (!updatedtest)
    return next(new AppError(`Can't find any test with id ${testId}`, 404));

  res.status(200).json({
    status: 'success',
    test: updatedtest,
  });
});

exports.deleteTest = catchAsync(async (req, res, next) => {
  const deletedtest = await Test.findByIdAndDelete(req.params.id);

  if (!deletedtest)
    return next(new AppError(`No test found against id ${testId}`, 404));

  res.status(200).json({
    status: 'success',
    test: deletedtest,
  });
});

//* SCENARIOS

exports.getAllProjects = catchAsync(async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    results: projects.length,
    projects,
  });
});

exports.createProject = catchAsync(async (req, res) => {
  const validate = projectValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }
  const project = await Project.create(req.body);

  res.status(200).json({
    status: 'success',
    results: project.length,
    project,
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await project.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    project,
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const validate = projectValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }

  const updatedproject = await Project.findByIdAndUpdate(
    req.user._id,
    { ...req.body },
    {
      runValidators: true,
      new: true,
    }
  );

  if (!updatedproject)
    return next(
      new AppError(`Can't find any project with id ${projectId}`, 404)
    );

  res.status(200).json({
    status: 'success',
    project: updatedproject,
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const deletedproject = await Project.findByIdAndDelete(req.params.id);

  if (!deletedproject)
    return next(new AppError(`No project found against id ${projectId}`, 404));

  res.status(200).json({
    status: 'success',
    project: deletedproject,
  });
});
