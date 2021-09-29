const { Deferrable } = require("sequelize");
const UserModel = require("./UserModel");

const MessageModel = (sequelize, DataTypes) => {
  const MessageModel = sequelize.define(
    "MessageModel",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: UserModel,
        //   key: "id",
        // //   deferrable: Deferrable.INITIALLY_IMMEDIATE
        // }
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'Anonymous'
      },
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "messages",
    }
  );
  return MessageModel;
};

module.exports = MessageModel;
