import sequelize from "./connection.js";
import "../features/users/user.model.js";

const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false });
    console.log("The database has been synced.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectionDB, sequelize };
