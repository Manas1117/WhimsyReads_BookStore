import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      sessionStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };
  return (
    <div>
      <a
        className="btn bg-slate-900 text-white hover:text-black"
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  );
}

export default Logout;
