const { celebrate, Segments, Joi } = require('celebrate');

const SessionValidator = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    })
  }),
};

module.exports = SessionValidator;