import sequelize from "../config/connection.js";
import User from "../feature/user/user.model.js";
import Post from "../feature/post/post.model.js";

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false }); // make it false after you have the database
    console.log("The database has been synced.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectionDB, sequelize };
