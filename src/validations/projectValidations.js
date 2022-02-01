const Joi = require('joi');

module.exports = {
  productValidation: Joi.object({
    name: Joi.string().min(5).required(),
    description: Joi.string().min(30).required(),
    info: Joi.string().min(5),
    images: Joi.array().min(1),
    price: Joi.number().required(),
    discount: Joi.number(),
    countInStock: Joi.number().required(),
    category: Joi.required(),
    subCategory: Joi.required(),
  }),
  productUpdateValidation: Joi.object({
    name: Joi.string().min(5),
    description: Joi.string().min(30),
    info: Joi.string().min(5),
    images: Joi.array().min(1),
    price: Joi.number(),
    discount: Joi.number(),
    countInStock: Joi.number(),
  }),
  discountValidation: Joi.object({
    sale: Joi.bool().required(),
    discount: Joi.number(),
  }),
};
