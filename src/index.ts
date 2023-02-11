import app from "./app";
import { db } from "./config/database";
import config from "./config/index";
const port = config.serverPort || 9000;

const start = async () => {
  try {
    //  db connection
    db.sequelize.sync({ force: false });
    console.log(`Database ${db.sequelize.getDatabaseName()} is connected`);
    //  server connection
    app.listen(port, () => {
      console.log(`Server connected on port: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`Something went wrong with the database: ${error}`);
  }
};

start();
