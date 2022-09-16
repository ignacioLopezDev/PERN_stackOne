const express = require("express");
const router = express.Router()

const taskRoutes = require("./taskRoutes")
const authRoutes = require("./authRoutes")

router.use("/Routes/", taskRoutes);
router.use("/", authRoutes)


module.exports = router;
