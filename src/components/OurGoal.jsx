import React from "react";
import Image from "../assets/ourgoal-image.png";

function OurGoal() {
  return (
    <div className="mb-16">
      <h4 className="text-center text-3xl font-bold "> Our Goal</h4>
      <p className="text-center py-5 px-20 self-center lg:w-1/2 sm:w-full mx-auto text-lg">
        As we are passionate about promoting Ethiopian languages and bridging
        the linguistic gap for foreigners. Our team of experienced language
        experts and native speakers have developed a comprehensive curriculum to
        make learning Ethiopian languages accessible and enjoyable.
      </p>

      <div className="flex justify-center items-center px-20 pt-2 pb-6">
        <a
          // type="submit"
          href="/elearning/courses"
          className="flex-none rounded-md bg-[#20053E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ">
          Visit Courses
        </a>
      </div>
      <div className="py-5">
        <img src={Image} alt="images" className="rounded-lg w-1/2 mx-auto" />
      </div>
      {/* Colored Buttons  */}
      <div className="w-full">

      <div className="flex justify-between mx-auto w-1/2 flex-wrap">
        <div className="m-2">
          <button
            type="submit"
            className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Audio Classes
          </button>
        </div>
        <div className="m-2">
          <button
            type="submit"
            className="flex-none rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Live Classes
          </button>
        </div>
        <div className="m-2">
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Record Class
          </button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default OurGoal;
