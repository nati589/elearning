import React from 'react';
import Pricecard from "../components/Pricecard";


function CourseDetails() {
  return (
    <div className="mr-96 bg-[#f7f5fa] w-full">
      <div className="flex flex-col mr-96">
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Course Details</h3>
      <div className="flex-1 flex items-end justify-end mt-10 mr-5"><Pricecard/></div>
      <div className="mt-10 ml-10">
      <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-10 w-[400px] h-[60px] mr-0">
          Purchase Course
        </button>
        </div>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Certification</h3>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Who this course is for</h3>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">What you'll learn in this course:</h3>
      <ul className="list-none ml-10">
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
    </div>
    <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Similar Courses</h3>

   
    </div>
    
    
  );
}

export default CourseDetails;
