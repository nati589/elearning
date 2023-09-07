import React from "react";
import Profile from "../components/Profile";
import PopularCourseCard from "../components/PopularCourseCard";
import selam from "../../src/assets/Cardphoto10.png";
import Dashboard from "./Dashboard";

function UserProfileDashboard() {
  return (
    <div className="w-full flex flex-col flex-nowrap  ">
      <div class="bg-white  px-5">
        <div class="flex flex-col flex-nowrap my-3 bg-light-purple rounded-lg shadow-md py-5 w-full justify-center items-center ">
          <h2 class="text-center  text-subscribe-purple text-2xl font-semibold ">
            Your Courses
          </h2>
        </div>
      </div>
      {/* <Profile /> */}
      <Dashboard />
    </div>
  );
}

export default UserProfileDashboard;
