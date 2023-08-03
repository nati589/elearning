import React from "react";
import Image from "../assets/number-1.png";

function CourseCard() {
  const cardImages = [
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
    "../assets/number-1.png",
  ];
  return (
    <div>
      <h3 className="font-bold text-3xl text-center text-[#0A033C]">Courses</h3>
      <h3 className="font-bold justify-center flex flex-wrap items-center py-5 text-3xl text-[#0A033C]">
        {" "}
        Qualified lessons for students
      </h3>
      <p className="flex flex-wrap items-center justify-center px-40 text-xl">
        Explore our range of courses designed to suit your language learning
        needs. Whether you are a beginner or an advanced learner, we have
        courses that cater to all levels. Choose from Amharic, Oromo, Tigrinya,
        Somali, and more!
      </p>
      <div className="flex flex-wrap items-center justify-center py-10">
        {cardImages.map((card) => (
          <figure class="bg-slate-100 rounded-xl max-w-xs p-4 dark:bg-[#FFFFFF] ">
            <img
              class="w-16 h-16 rounded-full mx-auto"
              src={Image}
              alt="image"
              width="64"
              height="64"
            />
            <div class="pt-4 text-center space-y-2">
              <blockquote>
                <p class="text-sm font-medium">
                  <h4 className="font-bold text-xl"> Standard One</h4>
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <button
                type="submit"
                className="flex-none rounded-md bg-[#9C4DF4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Class Details
              </button>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
export default CourseCard;
