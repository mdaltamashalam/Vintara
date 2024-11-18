import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Placeholder user data (can be fetched from API or Context)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@workemail.com",
    bio: "Passionate developer and avid learner. I enjoy building scalable applications and exploring new technologies.",
  });

  const handleLogout = () => {
    // Clear session data or token (if stored in localStorage/sessionStorage)
    setTimeout(() => {
      navigate("/signin"); // Redirect to SignIn after logout
    }, 1000); // Simulate a delay
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[500px] h-[90%] bg-white rounded-md shadow-lg p-6 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <BsPersonCircle size={60} className="text-primeColor" />
          <div>
            <h1 className="text-2xl font-semibold font-titleFont">
              Welcome, {user.name}
            </h1>
            <p className="text-sm text-gray-600 font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-lg text-gray-800">About</h2>
            <p className="text-gray-600 text-base">{user.bio}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-gray-800">Account Details</h2>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link to="/edit-profile">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-300">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
