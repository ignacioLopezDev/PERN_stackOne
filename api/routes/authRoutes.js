const express = require("express");
const  {signIn, signUp} =require("../controllers/authController")

const authRoutes = express.Router();


authRoutes.post("/",signIn)
authRoutes.post("/signUp",signUp)

module.exports = authRoutes
