import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BooksCard from "./BooksCard";
import PopularCourseCard from "./PopularCourseCard";

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
    <div className="flex flex-row flex-nowrap w-full">
      <div className="flex flex-col md:flex-row flex-nowrap w-4/12">
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
      <div className="w-8/12 ">
        <h1 className="text-dark-purple font-bold text-3xl text-center">
          General Books
        </h1>
        <div className="flex items-center justify-center ">
          <nav className="flex flex-row w-fit my-2">
            <div className="px-3">
              <NavLink
                to="#"
                onClick={(e) => handleFilterClick(e, "all")}
                className={`${
                  isActive("all")
                    ? "bg-medium-purple  text-white"
                    : "bg-white text-gray-700"
                } px-4 py-2 rounded-md block w-36 h-10 text-center`}
              >
                All Books
              </NavLink>
            </div>
            <div className="px-3">
              <NavLink
                to="#"
                onClick={(e) => handleFilterClick(e, "fiction")}
                className={`${
                  isActive("fiction")
                    ? "bg-white text-gray-700"
                    : "bg-medium-purple  text-white"
                } px-4 py-2 rounded-md block w-24 h-10 text-center`}
              >
                Fiction
              </NavLink>
            </div>

            <div className="px-3">
              <NavLink
                to="#"
                onClick={(e) => handleFilterClick(e, "journal")}
                className={`${
                  isActive("journal")
                    ? "bg-white text-gray-700"
                    : "bg-medium-purple  text-white"
                } px-4 py-2 rounded-md block w-24 h-10 text-center`}
              >
                Journal
              </NavLink>
            </div>

            <div className="px-3">
              <NavLink
                to="#"
                onClick={(e) => handleFilterClick(e, "kids")}
                className={`${
                  isActive("kids")
                    ? "bg-white text-gray-700"
                    : "bg-medium-purple  text-white"
                } px-4 py-2 rounded-md block w-24 h-10 text-center`}
              >
                Kids
              </NavLink>
            </div>
          </nav>
        </div>
        <div>
          {" "}
          <div className="flex w-full m-2 gap-8 justify-between xs:flex-wrap">
            <div className="flex items-center basis-1/2">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-400 p-2 text-sm"
                placeholder="Search ..."
              />
              <button className="ml-2 rounded-lg text-sm bg-dark-purple p-2 text-white hover:bg-light-purple">
                Search
              </button>
            </div>
            <div className="">
              <label htmlFor="sort" className="mr-2 text-sm">
                Sort
              </label>
              <select
                name="sort"
                id="sort"
                className="rounded-md p-2 text-sm bg-light-purple "
              >
                <option value="a">Latest</option>
                <option value="b">Oldest</option>
                <option value="c">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4  my-8">
            {BooksData.map((Book, index) => (
              <BooksCard
                key={index}
                Book={Book}
                Book_name="Amharic For Beginners"
                Book_description="Minim pariatur exercitation est aliquip deserunt id sit tempor voluptate."
                BookImagePath="./Image.png"
                hoursNeeded="2 hours"
                teacherName="Abe Kebe"
                rating="3.7"
                price="40 ETB"
                level="3"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
