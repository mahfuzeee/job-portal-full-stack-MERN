const applicationRepository = require("../repositories/application.repository");

//Application Service class
class applicationService {
  // Get a job application by id
  async getJobById(jobId) {
    return await applicationRepository.getJobById(jobId);
  }

  //Create a job application
  async applyForJob(application) {
    const job = await applicationRepository.getJobById(application.job);
    if (!job) throw new Error("Job not found");

    const existingApp = await applicationRepository.getApplicationByJobAndUser(
      application.job,
      application.applicant,
    );
    if (existingApp) throw new Error("Already applied for this job");

    return await applicationRepository.applyForJob(application);
  }

  //get all appication by a user
  async getMyApplications(userId) {
    return await applicationRepository.getMyApplications(userId);
  }
}

module.exports = new applicationService();
