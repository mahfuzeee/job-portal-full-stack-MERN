const Job = require("../models/job.model");

// Job repository class
class jobRepository {
  // Get all jobs (with search & filter)
  async getAllJobs(query) {
    const jobs = await Job.find(query).populate("createdBy", "name");
    return jobs;
  }

  // Get single job
  async getJobById(id) {
    const job = await Job.findById(id);
    return job;
  }

  // Create job
  async createJob(job) {
    return await Job.create(job);
  }

  // Update job
  async updateJob(id, job) {
    return await Job.findByIdAndUpdate(id, job, { returnDocument: "after" });
  }

  // Delete job
  async deleteJob(id) {
    return await Job.findByIdAndDelete(id);
  }
  // Get jobs posted by logged in user
  async getMyJobs(id) {
    return await Job.find({ createdBy: id });
  }
}

module.exports = new jobRepository();
