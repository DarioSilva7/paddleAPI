import pathLib from 'path';
import dotenv  from "dotenv";
import configSchema from '../schemas/config.schemas';

const { CONFIG_FILE } = process.env;
const path = CONFIG_FILE || pathLib.join(process.cwd(), '.env');

dotenv.config({ path });

const { error, value: envVars } = configSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  nodeEnv: envVars.NODE_ENV,
  serverPort: envVars.SERVER_PORT,
  db_user: envVars.DB_USER,
  db_host: envVars.DB_HOST,
  db_name: envVars.DB_NAME,
  db_password: envVars.DB_PASSWORD,
  db_test: envVars.DB_NAME_TEST,
  db_dialect: envVars.DIALECT
}

export default config;