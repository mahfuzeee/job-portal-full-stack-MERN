import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import useAuthStore from "../store/auth.store";
import toast from "react-hot-toast";

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    type: "Full-time",
    category: "IT & Software",
    deadline: "",
    createdBy: user?._id,
  });

  useEffect(() => {
    if (isEdit) {
      api.get(`/jobs/${id}`).then((res) => {
        // Format date for input type="date"
        const jobData = res.data;
        if (jobData.deadline)
          jobData.deadline = jobData.deadline.substring(0, 10);
        setFormData(jobData);
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/jobs/${id}`, formData);
        toast.success("Job updated successfully.");
      } else {
        // Add createdBy
        formData["createdBy"] = user?._id;
        console.log(`Job data: ${JSON.stringify(formData)}`);

        await api.post("/jobs", formData);
        toast.success("Job saved successfully.");
      }

      navigate("/dashboard");
    } catch (err) {
      toast.error(`Error saving job. ${err.response?.data?.message || ""}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isEdit ? "Edit Job Post" : "Create New Job Post"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Salary (Optional)
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                placeholder="e.g. $50k - $70k"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option>IT & Software</option>
                <option>Marketing</option>
                <option>Design</option>
                <option>Finance</option>
                <option>HR</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                name="deadline"
                required
                value={formData.deadline}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Job Description</label>
            <textarea
              name="description"
              required
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              placeholder="Describe the role..."
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Requirements</label>
            <textarea
              name="requirements"
              required
              rows="4"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              placeholder="List skills, experience needed..."
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700"
            >
              {isEdit ? "Update Job" : "Publish Job"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded font-semibold hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
