import { Sequelize, Op } from "sequelize";
import config from ".";

console.log(config.nodeEnv, "????????????")

const db = {
  sequelize: new Sequelize(
    config.nodeEnv === "testing" ? config.db_test : config.db_name,
    config.db_user,
    config.db_password,
    {
      host: config.db_host,
      dialect: config.db_dialect,
    }
  ),
  Sequelize,
  Op,
};
db.Sequelize = Sequelize;
db.Op = Op;

export { db };
