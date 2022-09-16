const { config } = require("dotenv");
config();

module.exports = {
  secret: process.env.AUTH_SECRET || "clave_secreta",
  expires: process.env.AUTH_EXPIRES || 60 * 15,
  saltRounds: process.env.AUTH_SALTROUNDS || 10,
};
