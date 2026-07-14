const express = require("express");

const auth = require("../middlewares/auth");
const jobController = require("../controllers/jobs.controller");

const router = express.Router();

// Get all jobs (with search & filter)
router.get("/", jobController.getAllJobs);

// Get single job
router.get("/:id", auth, jobController.getJobById);

// Create job
router.post("/", auth, jobController.createJob);

// Update job
router.put("/:id", auth, jobController.updateJob);

// Delete job
router.delete("/:id", auth, jobController.deleteJob);

// Get jobs posted by logged in user
router.get("/user/myjobs", auth, jobController.getMyJobs);

module.exports = router;
