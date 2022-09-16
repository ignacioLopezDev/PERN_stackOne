const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/index.models");
const {secret, saltRounds, expires} = require("../config/auth.config");


// Sign In
const signIn = async (req, res, next) => {
  let { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) return res.status(203).send("The username does not exists");

  try {

    console.log("userpassword", user.password)
    console.log("password", password)

    if (bcrypt.compare(password, user.password)) {
      let token = jwt.sign({ user: user }, secret, {
        expiresIn: expires,
      });
      res.send({
        user: user,
        token: token,
      });
    } else {
      res.status(401).send({ msg: "Contraseña incorrecta" });
    }
  } catch (error) {
    next(error);
  }
};


// SignUp
const signUp = async (req, res, next) => {
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(saltRounds)
  );

  // Creamos el usuario
  const user = await User.create({
    username:req.body.username,
    email:req.body.email,
    password: password
  })

  // pasamos los parametros jwt de token
  let token = jwt.sign({user:user}, secret, {expiresIn: expires})

  try {
    res.json({
      username:user.username,
      email:user.username,
      token:token
    })
  } catch (error) { next(error)}
}
  

module.exports = { signIn, signUp }
