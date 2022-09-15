const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/index.models")


// Sign In
const signIn = async(req, res, next) => {
    let {username, password} = req.body

    const findUser = await User.findOne({where:{username}})

    if(!findUser) return res.status(203).send("The username does not exists");

    try {
        
    } catch (error) {
        
    }
}





// SignUp
const signUp = async(req, res, next) => {}

module.exports = {signIn, signUp}