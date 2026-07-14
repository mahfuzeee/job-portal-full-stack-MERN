import { useMyApplication } from "../../hooks/useMyApplication";
import { Link } from "react-router-dom";

const MyApplication = () => {
  const { data, isLoading } = useMyApplication();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">My Applications</h3>
      <div className="space-y-4">
        {data.map((app) => (
          <div key={app._id} className="border p-4 rounded">
            <h4 className="font-bold">{app.job.title}</h4>
            <p className="text-sm text-gray-500">
              {app.job.company} - {app.job.location}
            </p>
            <span
              className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${app.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
            >
              {app.status}
            </span>
          </div>
        ))}
        {data.length === 0 && <p>You haven't applied for any jobs yet.</p>}
      </div>
    </div>
  );
};

export default MyApplication;
