const Joi = require('joi');

const tempValidator = {
    create: {
        body: Joi.object({
            product: Joi.string().required(),
            quantity: Joi.number().required()
        })
    }
}

module.exports = tempValidator;