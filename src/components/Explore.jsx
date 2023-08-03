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
    </div>
  );
};

const Explore = () => {
  return (
    <div className="flex">
      <img src={Image} />
      <TextComponent />
    </div>
  );
};

export default Explore;
