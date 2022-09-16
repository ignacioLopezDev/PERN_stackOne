const { config } = require("dotenv");
config();

module.exports = {
  db: process.env.DB_DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  logging: process.env.DB_LOGGING,
};
