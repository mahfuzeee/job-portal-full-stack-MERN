const Application = require("../models/application.model");
const Job = require("../models/job.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//Application Repository
class applicationRepository {
  //Get a job application by id
  async getJobById(jobId) {
    if (!ObjectId.isValid(jobId)) throw new Error("Invalid ObjectId");
    const job = await Job.findOne({ _id: jobId });
    return job;
  }

  //Get an application by job and user
  async getApplicationByJobAndUser(jobId, userId) {
    return await Application.findOne({ job: jobId, applicant: userId });
  }

  //Create a new job application
  async applyForJob(application) {
    const app = await Application.create(application);

    return app;
  }

  //Get all appication by a user
  async getMyApplications(userId) {
    return await Application.find({ applicant: userId })
      .populate("job", "title company location type")
      .sort({ createdAt: -1 });
  }
}

module.exports = new applicationRepository();
