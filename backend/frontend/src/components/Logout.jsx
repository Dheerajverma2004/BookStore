import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser(null);  // Simplified to directly set authUser to null
      localStorage.removeItem("Users");
      toast.success("Logout successfully!");

    // Optionally redirect or handle post-logout logic here
    setTimeout(() => {
      window.location.reload(); // Reload after 3 seconds
    }, 3000);
  } catch (error) {
    toast.error("Error: " + error.message); // Ensure you handle the error message properly
  }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}  // Added onClick to call handleLogout
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
