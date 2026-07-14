const jobService = require("../services/job.service");

//Job controller class
class jobController {
  // Get all jobs (with search & filter)
  async getAllJobs(req, res) {
    const { search, category } = req.query;
    let query = {};
    if (search) query.title = new RegExp(search, "i");
    if (category && category !== "All") query.category = category;

    const jobs = await jobService.getAllJobs(query);

    res.json(jobs);
  }

  // Get single job
  async getJobById(req, res) {
    const job = await jobService.getJobById(req.params.id);

    res.status(200).json(job);
  }

  // Create job
  async createJob(req, res) {
    const job = await jobService.createJob({
      ...req.body,
    });
    res.status(201).json(job);
  }

  // Update job
  async updateJob(req, res) {
    const userId = req.user._id;
    const jobId = req.params.id;
    const job = await jobService.getJobById(jobId);
    if (job.createdBy.toString() !== userId.toString())
      throw new Error("Unauthorized");

    const updatedJob = await jobService.updateJob(jobId, req.body);
    res.json(updatedJob);
  }

  // Delete job
  async deleteJob(req, res) {
    const userId = req.user._id;
    const jobId = req.params.id;
    const job = await jobService.getJobById(jobId);
    if (job.createdBy.toString() !== userId.toString())
      throw new Error("Unauthorized");

    const deletedJob = await jobService.deleteJob(jobId);

    res.json({ message: `${job.title} Job deleted` });
  }

  // Get jobs posted by logged in user
  async getMyJobs(req, res) {
    const jobs = await jobService.getMyJobs(req.user._id);
    res.json(jobs);
  }
}
module.exports = new jobController();
