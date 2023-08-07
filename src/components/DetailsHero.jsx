import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/ourgoal-image.png";

function DetailsHero() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f7f5fa]" >
      <div className="bg-violet-50 rounded-3xl ml-20">
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
      <div>
            <img src={Image}/>
      </div>
    </div>
  );
}

export default DetailsHero;
