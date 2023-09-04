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
<<<<<<< Updated upstream
    <div className="my-4">
      <h3 className="text-center text-5xl text-[#20053E] font-bold mx-2">
        Qualified lessons for students
      </h3>

      <p className="text-center py-5 px-20 self-center lg:w-1/2 sm:w-full mx-auto text-md my-2 ">
        Explore our range of courses designed to suit your language learning
        needs. Whether you are a beginner or an advanced learner, we have
        courses that cater to all levels. Choose from Amharic, Oromo, Tigrinya,
        Somali, and more!
      </p>
      <h4 className="text-center text-4xl font-bold text-[#20053E]">Our Top Courses</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 px-4 sm:px-8 md:px-20 my-8">
        {courseData.map((course, index) => (
          <CourseCard key={index} course={course} course_name='Amharic For Beginners' course_description='Minim pariatur exercitation est aliquip deserunt id sit tempor voluptate.' courseImagePath="./Image.png" hoursNeeded='2 hours' teacherName='Abe Kebe' rating="3.7" price='40 ETB' level="3" />
        ))}
      </div>

      <div className="flex justify-center px-4 sm:px-8 md:px-20 my-4">
        <a
          href="  /courses"
          className="button-component px-4 py-2">
          View More Courses
        </a>
=======
    <div className="grid grid-cols-2 gap-1 md:gap-8">
      <div className="flex justify-center   md:px-20  flex flex-col pt-10">
        <h2 className=" text-center rounded-tl-lg rounded-tr-lg bg-[#796bd4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Popular Courses
        </h2>
        <div class="max-h-40 overflow-y-auto pt-5">
          <h4 className="text-center text-4xl font-bold text-[#20053E]">
            Other{" "}
          </h4>
        </div>
        <div class="pt-10">
          <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Trending Courses
          </h2>
          <div class="max-h-40 overflow-y-auto pt-5">
            <h4 className="text-center text-4xl font-bold text-[#20053E]">
              Other 2
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-8 md:px-20 my-4 flex flex-col ">
        <h4 className="text-center text-4xl font-bold text-[#20053E]">
          Other courses
        </h4>
        <div className="pt-10 flex gap- justify-between flex-wrap sm:flex-nowrap mx-8">
          {/* search  */}
          <div className="flex items-center basis-3/4">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-400 p-2"
              placeholder="Search ..."
            />
            <button className="ml-2 rounded-lg bg-dark-purple p-2 text-white hover:bg-blue-600">
              Search
            </button>
          </div>
          {/* sort  */}
          <div className="flex basis-1/4 items-center">
            <label htmlFor="sort" className="mr-2">
              Sort
            </label>
            <select name="sort" id="sort" className="rounded-md p-2 w-full">
              <option value="a">Latest</option>
              <option value="b">Oldest</option>
              <option value="c">c</option>
            </select>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default CourseList;
