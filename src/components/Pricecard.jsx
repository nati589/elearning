import React from "react";
import star from "../assets/star.png";

const Pricecard = () => {
  return (
    <div className="flex flex-col md:p-8 w-full">
      <div className=" text-xl text-midnightblue-200 font-poppins bg-white rounded-lg shadow-md p-6 w-full">
        <div className="grid gap-y-4 space-y-0 w-full">
          <div className="flex items-center justify-between">
            <div className="flex-1 font-black text-dimgray-100">Price</div>
            <div className="  font-black text-red-500">$49.00</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex-1 font-black text-dimgray-100">Instructor</div>
            <div className="  font-black">Wade Warren</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Ratings</div>
            <img src={star} alt="star" />{" "}
            {/* Replace with your StarIcon component */}
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Durations</div>
            <div className="flex   font-black">10 Days</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Lessons</div>
            <div className="  font-black">30</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Quizzes</div>
            <div className="  font-black">5</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">
              Certificate
            </div>
            <div className="  font-black">Yes</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Language</div>
            <div className="  font-black">English</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Access</div>
            <div className="  font-black">Lifetime</div>
          </div>
        </div>
      </div>
      <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-10 mr-0 mt-4">
        <a href="/coursepreview">Purchase Course</a>
      </button>
    </div>
  );
};

export default Pricecard;
