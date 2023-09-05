import React from "react";
import TimerIcon from "../assets/icons/timer.svg";
import PersonIcon from "../assets/icons/person.svg";
import NoteIcon from "../assets/icons/stickynote.svg";
import DollarIcon from "../assets/icons/dollar.svg";
import EmptyStarIcon from "../assets/icons/empty_star.svg";
import FullStarIcon from "../assets/icons/full_star.svg";

function BooksCard({
  course_name,
  courseImagePath,
  course_description,
  teacherName,
  rating,
  hoursNeeded,
  price,
  level,
}) {
  const images = require.context("../assets");

  const course_image = images(courseImagePath);
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="relative bg-white rounded-lg border-t-8 border-x-2 min-h-[180px] lg:min-h-[380px] h-fit md:w-full  border-medium-purple p-2 shadow-md">
      <div className="flex flex-col px-1 items-center justify-center mb-2">
        <span className=" self-start mb-2 text-sm lg:text-xl font-semibold font-sans">
          {course_name}
        </span>
        <span className=" self-start text-xs lg:text-sm font-light font-sans">
          {course_description}
        </span>

        <img
          src={course_image}
          alt="Course thumbnail"
          className="my-4 h-32 md:h-48 lg:h-52 w-auto"
        />
      </div>
      <div className="grid px-2 md:grid-cols-2 lg:gap-2 text-xs lg:text-sm">
        <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
          <img src={TimerIcon} alt="icon" className="h-4 w-auto" />
          <span className="ml-2">{hoursNeeded}</span>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
          {rating}&nbsp;
          {numbers.map((number) => {
            if (number <= Math.floor(rating)) {
              return (
                <img
                  key={number}
                  src={FullStarIcon}
                  alt="full star icon"
                  className="h-4 w-auto mr-1"
                />
              );
            } else {
              return (
                <img
                  key={number}
                  src={EmptyStarIcon}
                  alt="empty star icon"
                  className="h-4 w-auto mr-1"
                />
              );
            }
          })}
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
          <img src={PersonIcon} alt="icon" className="h-4 w-auto" />
          <span className="ml-2">{teacherName}</span>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
          <img
            src={DollarIcon}
            alt="icon"
            className="h-4 w-auto fill-current text-writing-dark"
          />
          <span className="ml-2">{price}</span>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
          <img src={NoteIcon} alt="icon" className="h-4 w-auto" />
          <span className="ml-2">level {level}</span>
        </div>
      </div>
      <div className="flex w-full justify-center mt-4">
        <button className="button-component-stroke py-2 px-4 mb-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
// export default ;
export default BooksCard;
