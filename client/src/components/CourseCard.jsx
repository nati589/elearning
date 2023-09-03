import React from "react";
import Image from "../assets/Logo.png";

function CourseCard({ courseName, teacherName, rating, hoursNeeded, price,level }) {
  return (
    <div className="relative bg-white rounded-lg border-t-8 border-x-2 min-h-[380px] border-medium-purple p-2 w-64" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
      {/* <div className="absolute top-0 left-0 w-full h-4 bg-medium-purple rounded-t-lg"></div> */}
      <div className="flex justify-center mb-4">
        <img src={Image} alt="Course" className="w-32 h-32 rounded-lg" />
      </div>
      <div className="grid  bg-blue-400 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <span className="ml-2">{courseName}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{teacherName}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{rating}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{hoursNeeded}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{price}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{level}</span>
          </div>
        </div>
      <div className="flex w-full justify-center mt-4">
        <button className="button-component-stroke py-2 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
    }
// export default ;
export default CourseCard;