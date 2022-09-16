const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require("volleyball");

const routes = require("./routes/index.routes");
const db = require("./db/index.db");
const models = require("./models/index.models");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);

// error middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(505 || error.status).send({ error: err.message });
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(505 || error.status).send({ status: "error", error: err.message });
});

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
