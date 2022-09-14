const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require("volleyball");
const models = require("./models/index.models");

const router = require("./routes/index.routes");
const db = require("./db/index.db");

const app = express();


// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// connect db an start port
db.sync({ force: false })
  .then(() => {
    console.log("connected to db");
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("listening Port 3000");
    });
  })
  .catch(console.error);
