import React from "react";
import Image from "../assets/number-1.png";

function CourseCard() {
  const cardImages = [
    "../assets/Cardphoto.png",
    "../assets/Cardphoto2.png",
    "../assets/Cardphoto3.png",
    "../assets/Cardphoto4.png",
    "../assets/Cardphoto5.png",
  ];

  return (
    
        
        
      <OtherCourses />
    
  );
}

function OtherCourses() {
  return (
    <div className="flex">
      <div className="w-160 h-103 mr-4 ml-20">
      
      </div>
      <div className="w-820 bg-white p-4">
        <div className="font-extrabold text-2xl mb-4">Other Courses For Beginners</div>
        <div className="flex space-x-4 mb-4">
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-96 px-3 py-2 border rounded-lg"
              placeholder="Search..."
            />
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">Search</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-medium">Sort by:</span>
          <select className="px-3 py-2 border rounded-lg">
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
