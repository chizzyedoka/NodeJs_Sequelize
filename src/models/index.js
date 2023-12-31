const dbConfig = require("../config/db-config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: dbConfig.DATABASE,
  username: dbConfig.USER,
  password: dbConfig.PASSWORD,
  dialect: dbConfig.DIALECT,
  host: dbConfig.HOST,
});

const Users = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
});
module.exports = {
  sequelize,
  Users,
};
