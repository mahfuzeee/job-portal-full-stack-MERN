import { useMyJobPost } from "../../hooks/useMyJobPost";
import { Link } from "react-router-dom";
import api from "../../api";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyJobPost = () => {
  let { data = [], isLoading } = useMyJobPost();
  const queryClient = useQueryClient();

  const handleDeleteJob = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await api.delete(`/jobs/${id}`);
        // update the cached 'jobs' query to remove the deleted job so UI updates
        queryClient.setQueryData(["jobs"], (old = []) =>
          old.filter((j) => j._id !== id),
        );
        toast.success("Job deleted successfully");
      } catch (err) {
        toast.error("Failed to delete job", err);
        console.error("Failed to delete job:", err);
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">My Job Posts</h3>
      <div className="space-y-4">
        {data.map((job) => (
          <div
            key={job._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h4 className="font-bold">{job.title}</h4>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
            <div className="space-x-2">
              <Link
                to={`/dashboard/edit-job/${job._id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteJob(job._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {data.length === 0 && <p>You haven't posted any jobs yet.</p>}
      </div>
    </div>
  );
};

export default MyJobPost;
