const Joi = require('joi');

module.exports = {
  testValidation: Joi.object({
    name: Joi.string().required(),
    language: Joi.string().required(),
    preRequiste: Joi.string().required(),
    priority: Joi.string().required(),
    difficultyLevel: Joi.number().required(),
  }),
};
