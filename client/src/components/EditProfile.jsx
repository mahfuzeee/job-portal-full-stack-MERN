import { useState } from "react";
import useAuthStore from "../store/auth.store";
import toast from "react-hot-toast";

// EditProfile component
const EditProfile = () => {
  const { user, updateProfile, startEditing, stopEditing } = useAuthStore();

  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    bio: user.profile?.bio || "",
    skills: user.profile?.skills || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const updatedData = {
      name: profileData.name,
      email: profileData.email,
      profile: {
        bio: profileData.bio,
        skills: profileData.skills,
      },
    };

    updateProfile(updatedData);
    toast.success("Profile updated successfully.");
    stopEditing(); // Stop editing
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Edit Profile</h3>
      <form onSubmit={handleProfileUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            value={profileData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Save Changes
          </button>

          <button
            type="button"
            className="bg-red-600 text-white px-6 py-2 rounded"
            onClick={() => stopEditing()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
