const Joi = require('joi');

module.exports = {
  projectValidation: Joi.object({
    name: Joi.string().required(),
    tests: Joi.array(),
  }),
  testValidation: Joi.object({
    name: Joi.string().required(),
    language: Joi.string().required(),
    preRequiste: Joi.string().required(),
    priority: Joi.string().required(),
    difficultyLevel: Joi.number().required(),
  }),
  scenarioValidation: Joi.object({
    action: Joi.string(),
    inputs: Joi.string(),
    expectedOutput: Joi.string(),
    actualOutput: Joi.string(),
    testResults: Joi.string(),
    testComments: Joi.string(),
  }),
};
