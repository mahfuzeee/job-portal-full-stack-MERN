import useDashboardStore from "../store/dashboard.store";
import useAuthStore from "../store/auth.store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { tab, setTab } = useDashboardStore();
  const { user, logout } = useAuthStore();

  return (
    <>
      <div className="w-full md:w-1/4">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-xl">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="bg-slate-100 shadow-sm p-3 rounded">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setTab("profile")}
                className={`w-full text-left p-3 rounded ${tab === "profile" ? "bg-blue-600 text-white" : "bg-white cursor-pointer hover:bg-amber-100"}`}
              >
                Profile
              </button>
            </li>
            {user && (
              <>
                <li>
                  <button
                    onClick={() => setTab("myjobs")}
                    className={`w-full text-left p-3 rounded ${tab === "myjobs" ? "bg-blue-600 text-white" : "bg-white cursor-pointer hover:bg-amber-100"}`}
                  >
                    My Job Posts
                  </button>
                </li>
                <li>
                  <Link
                    to="/dashboard/create-job"
                    className="block p-3 rounded bg-white hover:bg-amber-100"
                  >
                    Create New Job
                  </Link>
                </li>
              </>
            )}
            <li>
              <button
                onClick={() => setTab("applications")}
                className={`w-full text-left p-3 rounded ${tab === "applications" ? "bg-blue-600 text-white" : "bg-white cursor-pointer hover:bg-amber-100"}`}
              >
                My Applications
              </button>
            </li>
            <li>
              <button
                onClick={logout}
                className="w-full text-left p-3 rounded text-red-500 bg-white cursor-pointer hover:bg-amber-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
