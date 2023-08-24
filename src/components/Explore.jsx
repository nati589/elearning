import React from "react";
import Image from "../assets/explore-bg.png";

const TextComponent = () => {
  return (
    <div className="text-center lg:text-left lg:w-1/2 lg:pl-10">
      <h3 className="font-bold text-3xl text-[#0A033C]">Explore Ethiopia</h3>
      <p className="px-4 lg:px-0 py-4">
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video.
      </p>
      <div className="flex justify-center lg:justify-start">
        <a
          href="/"
          className="rounded-md bg-[#0A033C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9C4DF4]"
        >
          Career Information
        </a>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-5 lg:px-10 py-10">
      <img
        src={Image}
        alt="Explore Ethiopia"
        className="w-40 h-auto lg:w-1/4 lg:mr-10"
      />
      <TextComponent />
    </div>
  );
};

export default Explore;
