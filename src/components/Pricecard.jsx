import React from 'react';

const Pricecard = () => {
  return (
    <div className="flex flex-col md:p-8">
      <div className="w-[400px] h-[470px] text-xl text-midnightblue-200 font-poppins bg-white rounded-lg shadow-md p-6">
        <div className="grid gap-y-4 space-y-0">
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Price</div>
            <div className="w-[20%] font-black text-red-500">$49.00</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Instructor</div>
            <div className="w-[20%] font-black">Wade Warren</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Ratings</div>
            <img src="star.png"/> {/* Replace with your StarIcon component */}
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Durations</div>
            <div className="flex w-[20%] font-black">10 Days</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Lessons</div>
            <div className="w-[20%] font-black">30</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Quizzes</div>
            <div className="w-[20%] font-black">5</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">
              Certificate
            </div>
            <div className="w-[20%] font-black">Yes</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Language</div>
            <div className="w-[20%] font-black">English</div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 font-black text-dimgray-100">Access</div>
            <div className="w-[20%] font-black">Lifetime</div>
          </div>
        </div>
        </div>
        <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-10 w-[400px] h-[60px] mr-0 mt-4">
          Purchase Course
        </button>
    </div>
  );
};

export default Pricecard;
