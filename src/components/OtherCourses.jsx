import React from 'react';

function OtherCourses() {
  return (
    <div className="w-820 h-133 bg-white rounded-lg shadow-lg p-4 ml-20">
      <div className="font-extrabold text-4xl mb-4">Other Courses For Beginners</div>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="w-1/2 px-3 py-2 border rounded-lg"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Search</button>
      </div>
      <div className="flex space-x-4">
        <span className="font-medium">Sort by:</span>
        <select className="px-3 py-2 border rounded-lg">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  );
}

export default OtherCourses;
