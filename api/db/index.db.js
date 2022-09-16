const S = require("sequelize");
const {
  db,
  user,
  password,
  dialect,
  host,
} = require("../config/db.config");

const sequelize = new S(db, user, password, {
  dialect,
  host,
  logging : false,
});

module.exports = sequelize;
