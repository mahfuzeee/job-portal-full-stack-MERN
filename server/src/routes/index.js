const jobRoutes = require("./jobs.route");
const authRoutes = require("./auth.route");
const applicationRoutes = require("./application.route");

const express = require("express");
const router = express.Router();

router.use("/jobs", jobRoutes);
router.use("/auth", authRoutes);
router.use("/applications", applicationRoutes);

module.exports = router;
