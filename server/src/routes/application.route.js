const auth = require("../middlewares/auth");
const applicationController = require("../controllers/application.controller");

const express = require("express");
const router = express.Router();

// Apply for a job
router.post("/:jobId", auth, applicationController.applyForJob);

// Get my applications
router.get("/myapplications", auth, applicationController.getMyApplications);

module.exports = router;
