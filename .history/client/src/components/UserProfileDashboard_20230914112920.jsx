import React from "react";
import Dashboard from "./Dashboard";

function UserProfileDashboard() {
  return (
    <div className="w-full h-full flex flex-col flex-nowrap  ">
      <div className="bg-off-white px-5">
        <div className="flex flex-col flex-nowrap my-3 bg-white rounded-lg shadow-md py-5 w-full justify-center items-center ">
          <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
            Enrolled Courses
          </h2>
        </div>
      </div>
      {/* <Profile /> */}
      <Dashboard />
    </div>
  );
}

export default UserProfileDashboard;
