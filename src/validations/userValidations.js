const { string } = require('joi');
const Joi = require('joi');

module.exports = {
  signUpValidation: Joi.object({
    firstName: Joi.string().max(20).min(3).required(),
    lastName: Joi.string().max(20).min(3).required(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    password: Joi.string().min(8).required(),
    passwordConfirm: Joi.string().min(8).required(),
  }),
  loginValidation: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
  updateValidation: Joi.object({
    firstname: Joi.string().max(20).min(2),
    lastname: Joi.string().max(20).min(2),
    email: Joi.string().email(),
    info: Joi.string(),
    phoneNumber: Joi.number(),
    bannerImage: Joi.string(),
    address: Joi.string(),
  }),
  contactValidation: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().min(50).required(),
  }),
  categoryValidation: Joi.object({
    name: Joi.string().required(),
  }),
  subCategoryValidation: Joi.object({
    name: Joi.string().required(),
  }),
  reviewValidation: Joi.object({
    rating: Joi.number().required(),
    comment: Joi.string().required(),
  }),
  subscribeValidation: Joi.object({
    email: Joi.string().email().required(),
  }),
};
