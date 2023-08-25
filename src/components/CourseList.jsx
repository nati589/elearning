import React from "react";
import CourseCard from "./CourseCard";

function CourseList() {
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
    <div className="my-4">
      <h3 className="text-center text-5xl font-bold mx-2">
        Qualified lessons for students
      </h3>

      <p className="text-center py-5 px-20 self-center lg:w-1/2 sm:w-full mx-auto text-md my-2 ">
        Explore our range of courses designed to suit your language learning
        needs. Whether you are a beginner or an advanced learner, we have
        courses that cater to all levels. Choose from Amharic, Oromo, Tigrinya,
        Somali, and more!
      </p>
      <h4 className="text-center text-4xl font-bold">Courses</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 sm:px-8 md:px-20 my-8">
        {courseData.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className="flex justify-center px-4 sm:px-8 md:px-20 my-4">
        <a
          href="/elearning/courses"
          className="flex-none rounded-md bg-[#20053E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9C4DF4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          View More Courses
        </a>
      </div>
    </div>
  );
}

export default CourseList;
