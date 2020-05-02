const { celebrate, Segments, Joi } = require('celebrate');

const headers = {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
};

const IncidentValidator = {
  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().min(1),
    }),
  }),

  create: celebrate({
    ...headers,
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().max(256),
      description: Joi.string().required(),
      value: Joi.number().required().greater(0.01)
    })
  }),

  delete: celebrate({
    ...headers,
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
};

module.exports = IncidentValidator;