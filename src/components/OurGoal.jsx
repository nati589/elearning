import React from "react";
import Image from "../assets/ourgoal-image.png";

function OurGoal() {
  return (
    <div>
      <h4 className="text-center text-2xl font-bold "> OurGoal</h4>
      <p className="text-center py-5 px-20">
        At , we are passionate about promoting Ethiopian languages and bridging
        the linguistic gap for foreigners. Our team of experienced language
        experts and native speakers have developed a comprehensive curriculum to
        make learning Ethiopian languages accessible and enjoyable.
      </p>

      <div>
        <img src={Image} alt='' />
      </div>

      <div className=" flex justify-center ">
        <div className="px-20">
          <button
            type="submit"
            className="flex-none rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Audio Classes
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="flex-none rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Live Classes
          </button>
        </div>
        <div className="px-20">
          <button
            type="submit"
            className="flex-none rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Record Class
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center px-20 py-10">
        <button
          type="submit"
          className="flex-none rounded-md bg-[#20053E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 "
        >
          Visit Courses
        </button>
      </div>
    </div>
  );
}

export default OurGoal;
