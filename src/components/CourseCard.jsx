import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-slate-100 rounded-xl p-4 dark:bg-[#FFFFFF] border-2">
      <img
        className="w-16 h-16 rounded-full mx-auto"
        src={course.image}
        alt={`images`}
        width="64"
        height="64"
      />
      <div className="">
        <h4 className="font-bold text-xl text-center">{course.title}</h4>
        <p className="text-sm font-medium mx-4 text-center">
          {course.description}
        </p>
        <div className="flex justify-center my-2">
          <a
            href="/elearning/coursedetails"
            className="border border-[#9C4DF4] text-[#9C4DF4] hover:bg-[#9C4DF4] hover:text-white py-2 px-4 rounded-lg md:bg-white md:text-[#9C4DF4] md:hover:bg-[#9C4DF4] md:hover:text-white">
            Class Details
          </a>
        </div>
      </div>
    </div>
  );
}
