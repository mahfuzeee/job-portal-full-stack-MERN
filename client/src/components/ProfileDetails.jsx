import useAuthStore from "../store/auth.store";
const ProfileDetails = () => {
  const { user, startEditing } = useAuthStore();

  return (
    <>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Bio:</strong> {user.profile?.bio || "No bio"}
      </p>
      <p>
        <strong>Skills:</strong>{" "}
        {user.profile?.skills?.join(", ") || "No skills"}
      </p>
      <button
        onClick={() => startEditing()}
        className="bg-blue-600 text-white px-4 py-2 rounded w-[200px] self-center cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out"
      >
        Edit Profile
      </button>
    </>
  );
};

export default ProfileDetails;
