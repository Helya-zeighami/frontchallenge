"use client"
import React, { useState, useEffect } from "react";
import Users from "./Users";
import CreateButton from "./CreateButton";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome!</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div>
            
            <Users />
            <CreateButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
