import Joi from "joi";

const configSchema = Joi.object({
  SERVER_PORT: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_TEST: Joi.string().required(),

})
  .unknown()
  .required();

export default configSchema;
