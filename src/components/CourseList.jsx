import React from "react";

function CourseCard() {
  const courseData = [
    {
      title: "Standard One",
      description:
        "Standard 1 is a foundation Standard that reflects 7 important concepts...",
      image: require("../assets/number-1.png"),
    },
    {
      title: "Standard Two",
      description:
        "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
      image: require("../assets/number-2.png"),
    },
    {
      title: "Standard Three",
      description:
        "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...",
      image: require("../assets/number-3.png"),
    },
    {
      title: "Standard Four",
      description:
        "Standard 4 of the Aged Care Quality Standards focuses on services and supports...",
      image: require("../assets/number-4.png"),
    },
    {
      title: "Standard Five",
      description:
        "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
      image: require("../assets/number-5.png"),
    },
    {
      title: "Standard Six",
      description:
        "Standard 6 requires an organization to have a system to resolve complaints...",
      image: require("../assets/number-6.png"),
    },
    {
      title: "Standard Seven",
      description:
        "Standard 7 Blood Management mandates that leaders of health service organizations...",
      image: require("../assets/number-7.png"),
    },
    {
      title: "Standard Eight",
      description:
        "Standard 8 Course from NCERT Solutions help students to understand...",
      image: require("../assets/number-8.png"),
    },
  ];

  return (
    <div>
      <h3 className="font-bold justify-center flex flex-wrap items-center py-2 text-3xl text-[#0A033C]">
        Qualified lessons for students
      </h3>
      <h3 className="font-bold text-3xl text-center text-[#0A033C] py-2">
        Courses
      </h3>

      <p className="flex flex-wrap items-center justify-center px-4 sm:px-8 md:px-20 text-xl">
        Explore our range of courses designed to suit your language learning
        needs. Whether you are a beginner or an advanced learner, we have
        courses that cater to all levels. Choose from Amharic, Oromo, Tigrinya,
        Somali, and more!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 sm:px-8 md:px-20">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-xl p-4 dark:bg-[#FFFFFF]"
          >
            <img
              className="w-16 h-16 rounded-full mx-auto"
              src={course.image}
              alt={`images ${index + 1}`}
              width="64"
              height="64"
            />
            <div className="pt-4 text-center space-y-2">
              <blockquote>
                <p className="text-sm font-medium">
                  <h4 className="font-bold text-xl">{course.title}</h4>
                  {course.description}
                </p>
              </blockquote>
              <button
                type="submit"
                className="border border-[#9C4DF4] text-[#9C4DF4] hover:bg-[#9C4DF4] hover:text-white py-2 px-4 rounded-lg md:bg-white md:text-[#9C4DF4] md:hover:bg-[#9C4DF4] md:hover:text-white"
              >
                Class Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-4 sm:px-8 md:px-20">
        <button
          type="submit"
          className="flex-none rounded-md bg-[#20053E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9C4DF4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          View More Class
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
