import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PopularCourseCard from "./PopularCourseCard";
import BookImg from "../../src/assets/Cardphoto10.png";
import TrendingCard from "./TrendingCoursesCard";
import booksData from "./booksData";
import BookSearch from "./BookSearch";
import axios from "axios";

export default function BooksBody() {
  const [books, setBooks] = useState([...booksData]);

  useEffect(() => {
    axios
      .get("/books/getTotalBooks")
      .then((res) => {
        setBooks([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        // navigate("/");
      });
  }, []);

  const [filter, setFilter] = useState("all"); // Initial filter value, 'all' or any default value

  const handleFilterClick = (event, newFilter) => {
    event.preventDefault();
    setFilter(newFilter);
  };

  const isActive = (value) => {
    return value === filter ? "books-nav-active" : "books-nav";
  };

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full">
      <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        <div className="flex flex-col flex-nowrap w-full">
          <div className="my-2 shadow-md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Popular Books
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
              Trending Books
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
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-start">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
          Our Books
        </h4>

        <nav className="flex flex-row w-full my-2 items-center justify-center">
          <div className="px-3">
            <NavLink
              to="#"
              onClick={(e) => handleFilterClick(e, "all")}
              className={`${
                isActive("all")
                  ? "bg-medium-purple  text-white"
                  : "bg-white text-gray-700"
              } px-4 py-2 rounded-md block w-36 h-10 text-center`}>
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
              } px-4 py-2 rounded-md block w-24 h-10 text-center`}>
              Grammar
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
              } px-4 py-2 rounded-md block w-24 h-10 text-center`}>
              Idioms
            </NavLink>
          </div>
        </nav>

        <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
          <BookSearch searchData={books} />
        </div>
      </div>
    </div>
  );
}
