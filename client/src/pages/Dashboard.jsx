import { Link } from "react-router-dom";
import api from "../api";
import useAuthStore from "../store/auth.store";
import useDashboardStore from "../store/dashboard.store";
import EditProfile from "../components/EditProfile";
import ProfileDetails from "../components/ProfileDetails";
import Sidebar from "../components/Sidebar";
import MyJobPost from "./tabs/MyJobPost";
import MyApplications from "./tabs/MyApplications";

const Dashboard = () => {
  const { user, isEditing } = useAuthStore();
  const { tab, setTab } = useDashboardStore();

  if (!user)
    return (
      <div className="text-center py-20">Please login to view dashboard.</div>
    );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="w-full md:w-3/4">
          {tab === "profile" && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">User Profile</h3>
              <div className="flex flex-col gap-4">
                {isEditing ? <EditProfile /> : <ProfileDetails />}
              </div>
            </div>
          )}

          {/*My job post componetnts*/}
          {tab === "myjobs" && (
            <div>
              <MyJobPost />
            </div>
          )}

          {tab === "applications" && (
            <div>
              <MyApplications />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
