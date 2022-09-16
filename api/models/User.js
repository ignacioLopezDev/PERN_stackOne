const S = require("sequelize");
const db = require("../db/index.db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      unique:true,
      allowNull: false,
      validate: {
        len: {
          args: [2, 45],
          msg: "tiene que contener minimo 2 caracteres",
        },
        isAlpha: {
          msg: "username only use words",
        },
      },
    },
    email: {
      type: S.STRING,
      unique:true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
