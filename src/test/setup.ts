import { db } from '../config/database';

beforeAll(async () => {
//   process.env.JWT_KEY = 'm6wmokDLXinYLtmVJu1sJn65TEa9fao4';
  try {
    await db.sequelize.authenticate();
    console.log(`Connection to ${db.sequelize.getDatabaseName()} has been established successfully.`);
  } catch (error) {
    console.error(`Unable to connect to the database ${db.sequelize.getDatabaseName()}.`, error);
    throw error;
  }

  await db.sequelize.sync({ alter: true }).catch((e) => {
    throw new Error(e);
  });
});
