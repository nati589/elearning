import React from "react";
import Image from "../assets/explore-bg.png";

const TextComponent = () => {
  return (
    <div>
      <div className="justify-right">
        <h3 className="font-bold text-3xl text-center text-[#0A033C]">
          Explore Ethiopia
        </h3>
        <p className="justify-center text-center px-10">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </p>
      </div>
      <div className="flex justify-center py-5">
        <a
          href="#"
          className="rounded-md bg-[#0A033C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9C4DF4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 s"
        >
          Career Information
        </a>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <div>
      <div className="flex">
        <img src={Image} />
        <TextComponent />
      </div>
    </div>
  );
};

export default Explore;
