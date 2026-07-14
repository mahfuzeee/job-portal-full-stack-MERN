const applicationService = require("../services/application.service");

//Application Controller class
class applicationController {
  async applyForJob(req, res, next) {
    try {
      const jobId = req.params.jobId;
      const userId = req.user._id;

      if (!jobId || !userId) throw new Error("JobId and userId are required");

      const appicationData = {
        job: jobId,
        applicant: userId,
      };

      const applyedJob = await applicationService.applyForJob(appicationData);

      res.status(201).json(applyedJob);
    } catch (err) {
      next(err);
    }
  }

  // Get my applications
  async getMyApplications(req, res) {
    const applications = await applicationService.getMyApplications(
      req.user._id,
    );

    res.json(applications);
  }
}
module.exports = new applicationController();
