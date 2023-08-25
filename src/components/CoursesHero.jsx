import React from "react";
import CourseHeroImage from "../assets/booksheroimage.jpg";
import { useNavigate } from "react-router-dom";

function CoursesHero() {
  const navigate = useNavigate();

  return (
    <div className="mx-8 bg-violet-50 rounded-3xl px-8 py-2 mb-16">
      <div className="">
        <button
          className="text-gray-400"
          onClick={() => {
            navigate("/elearning/");
          }}>
          Home
        </button>
        <span className="text-gray-400"> | </span>
        <button
          className="text-fuchsia-700"
          onClick={() => {
            navigate("/elearning/courses");
          }}>
          Courses
        </button>
      </div>
      <div className="flex items-center justify-around py-4 flex-wrap-reverse lg:flex-nowrap">
        <>
          <span className="flex gap-4">
            <h2 className="text-4xl sm:text-6xl font-bold text-center my-2">
               <span className="text-fuchsia-500">Courses</span> for All Standards
            </h2>
          </span>
        </>
        <img src={CourseHeroImage} alt="" className="w-96 rounded-2xl" />
      </div>
    </div>
  );
}

export default CoursesHero;
