const { celebrate, Segments, Joi } = require('celebrate');

const ProfileValidator = {
  index: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().min(1),
    }),
  }),
};

module.exports = ProfileValidator;