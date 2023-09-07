import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaLock, FaCog, FaLifeRing, FaDashcube } from "react-icons/fa";
import DefaultProfile from "../assets/default_profile.svg";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

function UserProfile() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      icon: <FaDashcube />,
      spacing: true,
      to: "/profile/dashboard",
    },
    // { title: "Notifications", icon: <FaBell /> },
    { title: "Privacy & Security", icon: <FaLock />, to: "/profile/privacy" },
    { title: "Setting", icon: <FaCog />, to: "/profile/setting" },
    // { title: "Report", icon: <FaFlag /> },
    { title: "Support", icon: <FaLifeRing />, to: "/profile/support" },
  ];

  return (
    <div className="flex flex-row flex-nowrap ">
      {" "}
      <div
        className={`h-screen flex flex-col flex-nowrap items-center bg-gradient-to-b from-dark-purple via-medium-purple to-light-purple px-2 pt-8 ${
          open ? "w-3/12" : "w-1/12"
        } duration-300 relative`}>
        <BsArrowLeftShort
          className={`bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-800 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <img
          src={DefaultProfile}
          alt="Circular profile"
          className="inline-flex rounded-full px-4 h-20 w-auto mb-5"
        />

        <h1
          className={`inline-flex font-bold ${
            open ? "text-2xl" : "text-sm"
          } px-10`}>
          {" "}
          John Doe
        </h1>

        <nav className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <NavLink
                key={index}
                to={menu.to}
                className={`text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2 `}>
                <span>{menu.icon}</span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}>
                  {menu.title}
                </span>
              </NavLink>
            </>
          ))}
        </nav>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
export default UserProfile;
