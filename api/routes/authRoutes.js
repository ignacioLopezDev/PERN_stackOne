const express = require("express");
const  {signIn, signUp} =require("../controllers/authController")

const authRoutes = express.Router();


authRoutes.use("/",signIn)
authRoutes.use("/signUp",signUp)

module.exports = authRoutes
