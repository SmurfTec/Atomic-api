const Joi = require('joi');

module.exports = {
  scnarioValidation: Joi.object({
    action: Joi.string(),
    inputs: Joi.string(),
    expectedOutput: Joi.string(),
    actualOutput: Joi.string(),
    testResults: Joi.string(),
    testComments: Joi.string(),
  }),
};
