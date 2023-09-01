import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

function UserProfile() {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600 p-5 pt-8 w-72">
        <BsArrowLeftShort
          className="bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-800 cursor-pointer"
          // onClick={() => StereoPannerNode(!open)}
        />
      </div>
      <div className="p-7">
        <div className="text-2xl font"></div>
      </div>
    </div>
  );
}
export default UserProfile;
