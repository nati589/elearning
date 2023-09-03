import React from "react";
import Image from "../assets/Logo.png";

function ProgressCard({ courseName, quiz, mid, final, total, assignment }) {
  return (
    <div className="bg-white rounded-lg p-4 max-w-xl shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-lg">CN</div>
          <h2 className="text-xl font-bold ml-2">{courseName} Course Name</h2>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">Progress:</span>
          <div className="bg-gray-200 h-2 flex-grow rounded-full">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <h3 className="font-bold text-gray-700">Assessments</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <p className="font-bold mr-2">Quiz:</p>
          <p className="text-gray-500">{quiz}</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold mr-2">Assignment:</p>
          <p className="text-gray-500">{assignment}</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold mr-2">Mid:</p>
          <p className="text-gray-500">{mid}</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold mr-2">Final:</p>
          <p className="text-gray-500">{final}</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold mr-2">Total:</p>
          <p className="text-gray-500">{total}</p>
        </div>
      </div>
    </div>
  );
}
export default ProgressCard;