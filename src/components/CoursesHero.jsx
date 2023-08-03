import React from 'react';
import  Image from "../assets/Image.png"
import { Link, useLocation } from 'react-router-dom';

function CoursesHero() {
  const location = useLocation();

  return (
    <div className="w-1280 h-270 bg-efebf5 relative flex flex-col justify-between">
      <div className="absolute top-4 left-4 flex space-x-4">
        <Link to="/" className={`text-gray-700 hover:text-gray-900 ${location.pathname === '/' ? 'text-9C4DF4' : ''}`}>Home</Link>
        <Link to="/courses" className={`text-gray-700 hover:text-gray-900 ${location.pathname === '/courses' ? 'text-9C4DF4' : ''}`}>Courses</Link>
      </div>
      <div className="flex flex-col items-start justify-end h-full p-8 ml-24 mt-8">
        <div className="font-extrabold text-4xl mb-4 mt-8">Our Courses</div>
        <div className="font-extrabold text-4xl mt-0">For All Standards</div>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <img src={Image} alt="Image" className="w-40 h-40 object-cover mr-64"/>
      </div>
    </div>
  );
}

export default CoursesHero;
