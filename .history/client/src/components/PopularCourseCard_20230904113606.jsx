import React from "react";
import dollar from "../assets/icons/dollar.svg";
import person from "../assets/icons/person.svg";
import timer from "../assets/icons/timer.svg";
import fullstar from "../assets/icons/full_star.svg";
import stickynote from "../assets/icons/stickynote.svg";

const PopularCourseCard = ({
  course_title,
  course_details,
  course_thumbnail,
  course_total_hour,
  course_instructure,
  course_level,
  course_rate,
  course_price,
}) => {
  return (
    <div class="card bg-white border-l-4 border-l-dark-purple rounded-lg shadow-md h-32 my-4 p-4">
      <h1 class="text-lg mb-2 font-bold">{course_title}</h1>
      <div class="grid grid-cols-2 gap-2">
        <div class="col-span-1">
          <img class="w-16 h-10" src={course_thumbnail} alt="books" />
        </div>
        <div class="col-span-1">
          <p class="text-2xs">{course_details}</p>
        </div>
      </div>

      <div class="flex flex-row mt-4">
        <div class="flex-grow">
          <div class="grid grid-rows-3">
            <div class="flex flex-row">
              <img class="w-4 h-4" src={timer} alt="" />
              <p class="ml-2 text-sm">{course_total_hour}</p>
            </div>
            <div class="flex flex-row">
              <img class="w-4 h-4" src={person} alt="" />
              <p class="ml-2 text-sm">{course_instructure}</p>
            </div>
            <div class="flex flex-row">
              <img class="w-4 h-4" src={stickynote} alt="" />
              <p class="ml-2 text-sm">{course_level}</p>
            </div>
          </div>
        </div>
        <div class="flex-grow">
          <div class="grid grid-rows-3">
            <div class="flex flex-row">
              <p class="ml-2 text-sm">{course_rate}</p>
              <img class="w-3 h-3" src={fullstar} alt="" />
              <img class="w-3 h-3" src={fullstar} alt="" />
              <img class="w-3 h-3" src={fullstar} alt="" />
              <img class="w-3 h-3" src={fullstar} alt="" />
              <img class="w-3 h-3" src={fullstar} alt="" />
            </div>
            <div class="flex flex-row">
              <img class="w-4 h-4" src={dollar} alt="" />
              <p class="ml-2 text-sm">{course_price}</p>
            </div>
            <div class="flex flex-row-m">
              <button class="button-component-stroke text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;
