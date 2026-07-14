const jobRepository = require("../repositories/job.repository");

class jobService {
  // Get all jobs (with search & filter)
  async getAllJobs(query) {
    return await jobRepository.getAllJobs(query);
  }

  // Get single job
  async getJobById(id) {
    const job = await jobRepository.getJobById(id);
    if (!job) throw new Error("Job not found");

    return job;
  }

  // Create job
  async createJob(job) {
    return await jobRepository.createJob(job);
  }

  // Update job
  async updateJob(id, body) {
    const job = await jobRepository.updateJob(id, body);

    return job;
  }

  // Delete job
  async deleteJob(id) {
    const job = await jobRepository.deleteJob(id);

    return job;
  }

  // Get jobs posted by logged in user
  async getMyJobs(id) {
    return await jobRepository.getMyJobs(id);
  }
}

module.exports = new jobService();
