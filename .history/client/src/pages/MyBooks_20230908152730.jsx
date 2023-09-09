import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BooksCard from "../components/BooksCard";
import InputWithSuggestion from "../components/InputWithSuggestion";

import booksData from "../components/booksData";
import BookSearch from "../components/BookSearch";

export default function MyBooks() {
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
  const [books, setBooks] = useState([...booksData]);
  return (
    <div className="flex flex-col flex-nowrap w-full bg-off-white">
      <div className="flex flex-col md:flex-row flex-nowrap ">
        <div className="w-full text-xs md:text-sm px-8 md:px-4 pt-2 my-4 flex flex-col justify-start items-center">
          <div className="flex flex-col flex-nowrap w-full">
            <div className="flex flex-col flex-nowrap my-3 bg-off-white rounded-lg shadow-md py-5 w-full justify-center items-center ">
              <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
                My Courses
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-6">
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
          <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
            <BookSearch searchData={books} />
            <div className="flex flex-row mx-3 items-center justify-center pl-3 mt-8">
              <label
                htmlFor="sort"
                className="mr-2 text-lg font-semibold text-purple-700 opacity-50  "
              >
                <pre className="sm:text-[1.5rem]">Sort by : </pre>
              </label>
              <select
                name="sort"
                id="sort"
                className="rounded-md p-2 font-semibold bg-transparent pr-12 text-lg "
              >
                <option className="" value="a ">
                  Latest
                </option>
                <option value="b">Oldest</option>
                <option value="c">c</option>
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
