import React from "react";

export default function CoursePreview() {
  return (
    <div>
      <h3 className="font-extrabold text-4xl text-[#0A033C] my-4 mx-8">
        Learn Amharic Lesson 1
      </h3>
      <div className="overflow-hidden relative h-screen mx-8 my-4 rounded-lg">
        <iframe
          src="https://www.youtube.com/embed/osfqvSD4Nps"
          title="Learn Amharic Lesson 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="left-0 top-0 h-full w-full absolute"></iframe>
      </div>
      <div>
        <div className="px-4 sm:px-8 md:px-10 text-xl max-w-full">
          <h3 className="font-extrabold text-4xl text-[#0A033C] mb-4">
            Course Details
          </h3>
          <p className="whitespace-normal md:whitespace-pre-line mb-4 max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>

          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
            Certification
          </h3>

          <p className="whitespace-normal md:whitespace-pre-line mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
