import React from 'react'
import dollar from "../assets/icons/dollar.svg";
import person from "../assets/icons/person.svg"
import timer from "../assets/icons/timer.svg"
import fullstar from "../assets/icons/full_star.svg";
import stickynote from "../assets/icons/stickynote.svg";

const Selam1 = ({ course_title, course_details, course_thumbnail, course_total_hour, course_instructure, course_level, course_rate, course_price }) => {
  return (
    <div className=" rounded-lg shadow-md p-4">
  <div className=" p-4"><h2 className="text-xl font-bold mb-2">{ course_title}</h2></div>

        <div className="grid grid-rows-2 gap-4">
  <div className="grid grid-cols-2 gap-2">
  <div className="bg-gray-200 p-4"><img src={course_thumbnail} alt="" className="w-full h-auto" /></div>
  <div className="bg-gray-300 p-4">{course_details}</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div class="grid grid-rows-3">
<div class="grid grid-cols-2">
  <div class="bg-red-500">Column 1</div>
  <div class="bg-blue-500">Column 2</div>
</div>
<div class="grid grid-cols-2">
  <div class="bg-red-500">Column 1</div>
  <div class="bg-blue-500">Column 2</div>
</div>
<div class="grid grid-cols-2">
  <div class="bg-red-500">Column 1</div>
  <div class="bg-blue-500">Column 2</div>
</div>
</div>
<div class="grid grid-rows-3">
<div class="grid grid-cols-2">
  <div class="bg-red-500">Column 1</div>
  <div class="bg-blue-500">Column 2</div>
</div>
<div class="grid grid-cols-2">
  <div class="bg-red-500">Column 1</div>
  <div class="bg-blue-500">Column 2</div>
</div>
  <div class="row-span-1 bg-green-500">Row 3</div>
</div>
</div>
</div>
    {/* 
    <img
      src={course_thumbnail}
      alt="Card Image"
      className="w-full h-auto rounded-lg mb-4"
    />
    
    <p className="text-gray-700">{course_details}</p> */}
  </div>
  );
}

export default Selam1