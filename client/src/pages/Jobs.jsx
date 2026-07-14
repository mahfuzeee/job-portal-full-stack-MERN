import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    api
      .get("/jobs", { params: { search, category } })
      .then((res) => setJobs(res.data));
  }, [search, category]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Job Openings</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by job title..."
          className="w-full md:w-1/2 p-3 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 p-3 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>IT & Software</option>
          <option>Marketing</option>
          <option>Design</option>
          <option>Finance</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <p className="text-blue-600 mb-2">{job.company}</p>
            <div className="text-gray-600 text-sm space-y-1">
              <p>📍 {job.location}</p>
              <p>⏱ {job.type}</p>
              {job.salary && <p>💰 {job.salary}</p>}
            </div>
            <Link
              to={`/jobs/${job._id}`}
              className="block mt-4 text-center bg-blue-50 text-blue-600 py-2 rounded hover:bg-blue-100"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
