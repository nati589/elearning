import React from "react";
import image from "../assets/MentorImage.png";
// import Background from "../assets/mentor-bg-1.png";
// import Background1 from "../assets/mentor-bg-2.png";
// import Background2 from "../assets/mentor-bg-3.png";

const TextComponent = () => {
  return (
    <div>
      <h1
        className="text-3xl font-bold text-[#0A033C] sm:text-6xl md:text-start text-center
            ">
        Want to share your knowledge? Join as a Mentor{" "}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 md:text-start text-center">
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video.
      </p>
      {/* <div className="py-10">
        <a
          href="/"
          className="rounded-md bg-[#0A033C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9C4DF4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 s"
        >
          Career Information
        </a>
      </div> */}
    </div>
  );
};

const Mentor = () => {
  return (
    
    <div className="w-full"> 
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center px-8 py-10 w-3/4 mx-auto">
      <img
        src={image}
        alt=""
        className="lg:w-80 sm:w-64 mb-8 lg:mb-0 lg:mr-8"
      />

      <div>
        <TextComponent />
      </div>
      {/* <div>
        <div className="py-5">
          <img
            src={Background}
            alt=""
            className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
          />
        </div>

        <div className="py-5 items-end">
          <img
            src={Background1}
            alt=""
            className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
          />
        </div>

        <div className="py-5">
          <img
            src={Background2}
            alt=""
            className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
          />
        </div>
      </div> */}
    </div>
    </div>

  );
};

export default Mentor;
