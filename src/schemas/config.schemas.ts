import Joi from "joi";

const configSchema = Joi.object({
  SERVER_PORT: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME_TEST: Joi.string().required(),
  DIALECT: Joi.string().required()

})
  .unknown()
  .required();

export default configSchema;
