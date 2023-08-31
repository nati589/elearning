import React from "react";
import CourseCard from "../components/CourseCard";

function TestPage() {
  return (
    <div className="flex flex-col w-full h-screen px-2 py-2 bg-slate-200">
      <h1 className=" font-bold tracking-tight text-[#0A033C] sm:text-6xl lg:text-start sm:text-center">Welcome to test page</h1>


      <CourseCard/>
    </div>
  );
}

export default TestPage;
