const UserModel = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    "UserModel",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: null,
        unique: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
        },
      },
    },
    {
      tableName: "users",
    }
  );
  return UserModel;
};

module.exports = UserModel;
