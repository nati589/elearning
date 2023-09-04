import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import {
  // FaDashboard,
  FaBell,
  FaLock,
  FaShieldAlt,
  FaFlag,
  FaCog,
  FaLifeRing,
} from "react-icons/fa";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboard2Fill, riDashboardFill } from "react-icons/ri";
import Profile from "../components/Profile";
import PopularCourseCard from "../components/PopularCourseCard";

function UserProfile() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", spacing: true },
    { title: "Notifications", icon: <FaBell /> },
    { title: "Privacy & Security", icon: <FaLock /> },
    { title: "Setting", icon: <FaCog /> },
    { title: "Report", icon: <FaFlag /> },
    { title: "Support", icon: <FaLifeRing /> },
  ];

  return (
    <div className="flex">
      <div
        className={`h-screen bg-gradient-to-b from-dark-purple via-medium-purple to-light-purple p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-800 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-rounded cursor-pointer block float-left mr-2 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Profile
          </h1>
        </div>
        <div className="flex items-center rounded-md bg-white mt-6 px-4 py-2">
          <BsSearch className="text-black text-lg block float-left cursor-pointer mr-2" />
          <input
            type={"search"}
            placeholder="Search"
            className="text-base bg-transparent w-full text-white focus:outline-none"
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2 `}
              >
                <span>
                  <RiDashboard2Fill className="text-2xl block float-left" />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>
        <div className="p-7">
          <div className="text-2xl font"></div>
        </div>
      </div>
      <div>
        <Profile />
      </div>
      <PopularCourseCard />
    </div>
  );
}
export default UserProfile;
