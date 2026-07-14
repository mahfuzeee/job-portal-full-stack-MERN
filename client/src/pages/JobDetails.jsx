import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import useAuthStore from "../store/auth.store";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [job, setJob] = useState(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    api.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  const handleApply = async () => {
    if (!user) return navigate("/login");
    try {
      await api.post(`/applications/${id}`);
      setApplied(true);
      toast.success("Application submitted successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error applying");
    }
  };

  if (!job)
    return (
      <div className="container mx-auto py-20 text-center">Loading...</div>
    );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <h2 className="text-xl text-blue-600 mb-4">{job.company}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm border-y py-4">
          <div>
            <strong>Location:</strong> {job.location}
          </div>
          <div>
            <strong>Type:</strong> {job.type}
          </div>
          <div>
            <strong>Salary:</strong> {job.salary || "Negotiable"}
          </div>
          <div>
            <strong>Deadline:</strong>{" "}
            {new Date(job.deadline).toLocaleDateString()}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Job Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Requirements</h3>
          <p className="text-gray-700 whitespace-pre-line">
            {job.requirements}
          </p>
        </div>

        <button
          onClick={handleApply}
          disabled={applied}
          className={`w-full md:w-auto px-8 py-3 rounded font-semibold ${applied ? "bg-green-100 text-green-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          {applied ? "Applied Successfully" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
