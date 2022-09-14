const S = require("sequelize");

const sequelize = new S("pern_stack1", "postgres", "34179205", {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = sequelize