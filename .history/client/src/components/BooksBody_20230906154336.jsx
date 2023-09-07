import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BooksCard from "./BooksCard";

export default function BooksBody() {
  const BooksData = [
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
  const [filter, setFilter] = useState("all"); // Initial filter value, 'all' or any default value

  const handleFilterClick = (event, newFilter) => {
    event.preventDefault();
    setFilter(newFilter);
  };

  const isActive = (value) => {
    return value === filter ? "books-nav-active" : "books-nav";
  };
  return (
    <div className="flex flex-row flex-nowrap">
      <div className="flex flex-col md:flex-row flex-nowrap w-full">
        <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
          <div className="flex flex-col flex-nowrap w-full">
            <div className="my-2 shadow-md">
              <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Popular Courses
              </h2>
              <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
                <PopularCourseCard
                  course_title="interaction"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                  course_total_hour="3Hours"
                  course_instructure="selam"
                  course_level="level"
                  course_rate="4.7"
                  course_price="price"
                />
              </div>
              <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
                <PopularCourseCard
                  course_title="interaction"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                  course_total_hour="3Hours"
                  course_instructure="selam"
                  course_level="level"
                  course_rate="4.7"
                  course_price="price"
                />
              </div>{" "}
              <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
                <PopularCourseCard
                  course_title="interaction"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                  course_total_hour="3Hours"
                  course_instructure="selam"
                  course_level="level"
                  course_rate="4.7"
                  course_price="price"
                />
              </div>{" "}
              <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
                <PopularCourseCard
                  course_title="interaction"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                  course_total_hour="3Hours"
                  course_instructure="selam"
                  course_level="level"
                  course_rate="4.7"
                  course_price="price"
                />
              </div>
            </div>

            <div className="my-2 shadow-md">
              <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Trending Courses
              </h2>
              <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
                <TrendingCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                />
                <TrendingCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                />
                <TrendingCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                />
                <TrendingCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={BookImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
