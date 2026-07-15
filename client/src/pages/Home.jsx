import { useJobs } from "../hooks/useMyJobPost";
import { Link } from "react-router-dom";
import api from "../api";

const Home = () => {
  const { data, isLoading } = useJobs();

  const jobs = Array.isArray(data) ? data.slice(0, 4) : [];

  return (
    <div>
      {/* 1. Hero Banner */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl mb-8">
            Thousands of opportunities are waiting for you.
          </p>
          <Link
            to="/jobs"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* 2. Latest Job Listings */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Job Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-blue-600 mb-2">{job.company}</p>
                <p className="text-gray-600">
                  {job.location} - {job.type}
                </p>
                <Link
                  to={`/jobs/${job._id}`}
                  className="text-blue-500 mt-4 inline-block hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 3. Popular Job Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["IT & Software", "Marketing", "Design", "Finance"].map((cat) => (
              <div
                key={cat}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-700">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Companies</h3>
            <p className="text-gray-600">
              We ensure all companies are legitimate.
            </p>
          </div>
          <div>
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Application</h3>
            <p className="text-gray-600">Apply with just one click.</p>
          </div>
          <div>
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              🔒
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Data</h3>
            <p className="text-gray-600">Your information is safe with us.</p>
          </div>
        </div>
      </section>

      {/* 5. Statistics */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">10k+</h2>
            <p>Active Jobs</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">5k+</h2>
            <p>Companies</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">50k+</h2>
            <p>Job Seekers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
