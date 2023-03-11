import React from "react";

const Logout = ({ setToken }) => {
  const handleLogout = async () => {
    await fetch("https://zadkinder-production.up.railway.app/admin/login", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <button className="m-5 btn btn-danger text-center" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
