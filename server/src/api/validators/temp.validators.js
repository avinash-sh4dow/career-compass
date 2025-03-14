const Joi = require('joi');

const tempValidator = {
    create: {
        body: Joi.object({
            product: Joi.string().trim().required(),
            quantity: Joi.number().min(0).required()
        }).required()
    }
};

module.exports = tempValidator;