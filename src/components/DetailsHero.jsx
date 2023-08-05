import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/ourgoal-image.png";


function DetailsHero() {
  const navigate = useNavigate();
  return (
    <div className="mx-8 bg-violet-50 rounded-3xl px-8 py-2">
      <div className="">
        <button
          className="text-gray-400"
          onClick={() => {
            navigate("/");
          }}>
          Home
        </button>
        <span className="text-gray-400"> | </span>
        <button
          className="text-gray-400"
          onClick={() => {
            navigate("/books");
          }}>
          Courses
        </button>
        <span className="text-gray-400"> | </span>
         <button
          className="text-purple-700"
          onClick={() => {
            navigate("/CourseDetails");
          }}>
          Course Details
        </button> 
      </div>
      <div className="flex items-center justify-around py-4 flex-wrap-reverse lg:flex-nowrap">
        <>
        <span className="flex gap-4 ml- 5">
          <img src={Image} alt="" className="w-837 h-529" />
        <h2 className="text-4xl sm:text-6xl font-bold">
          {" "}
        </h2>
        </span>
        </>
      </div>
    </div>
  );
}

export default DetailsHero;
