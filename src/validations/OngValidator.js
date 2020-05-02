const { celebrate, Segments, Joi } = require('celebrate');

const OngValidator = {
  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().min(1),
    }),
  }),

  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11).regex(/^[0-9]+$/),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
};

module.exports = OngValidator;