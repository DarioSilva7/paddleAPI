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
  serverPort: envVars.SERVER_PORT
}

export default config;