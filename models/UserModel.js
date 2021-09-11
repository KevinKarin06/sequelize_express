const { Sequelize, DataTypes } = require("sequelize");

const constants = require("../constants");
const sequelize = new Sequelize(
    constants.database,
    constants.user,
    constants.password,
    {
      dialect: "mariadb",
    }
  );

const UserModel = sequelize.define(
  "UserModel",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = UserModel;
