import React, { useState } from "react";
import Recommendations from "./Recommendations";
import "./BooksLayout.css";
import BookCard from "./BookCard";

import { NavLink } from "react-router-dom";
function BooksLayout() {
  const [filter, setFilter] = useState("all"); // Initial filter value, 'all' or any default value

  const handleFilterClick = (event, newFilter) => {
    event.preventDefault();
    setFilter(newFilter);
  };

  const isActive = (value) => {
    return value === filter ? "books-nav-active" : "books-nav";
  };

  return (
    <div className="grid md:grid-cols-4 gap-8 px-8 mt-4 xs:grid-cols-1">
      <div className="md:col-span-1 xs:col-span-1">
        <Recommendations />
      </div>
      <div className="md:col-span-3 xs:col-span-1">
        {/* Filters  */}
        <nav className="flex flex-row w-fit my-2">
          <NavLink
            to="#"
            onClick={(e) => handleFilterClick(e, "all")}
            className={isActive("all")}
          >
            All Books
          </NavLink>
          <NavLink
            to="#"
            onClick={(e) => handleFilterClick(e, "fiction")}
            className={isActive("fiction")}
          >
            Fiction
          </NavLink>
          <NavLink
            to="#"
            onClick={(e) => handleFilterClick(e, "journal")}
            className={isActive("journal")}
          >
            Journal
          </NavLink>
          <NavLink
            to="#"
            onClick={(e) => handleFilterClick(e, "kids")}
            className={isActive("kids")}
          >
            Kids
          </NavLink>
        </nav>
        {/* Search  */}
        <div className="flex w-full m-2 gap-8 justify-between xs:flex-wrap">
          <div className="flex items-center basis-1/2">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-400 p-2"
              placeholder="Search ..."
            />
            <button className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
              Search
            </button>
          </div>
          <div className="">
            <label htmlFor="sort" className="mr-2">
              Sort
            </label>
            <select name="sort" id="sort" className="rounded-md p-2">
              <option value="a">Latest</option>
              <option value="b">Oldest</option>
              <option value="c">c</option>
            </select>
          </div>
        </div>
        {/* Cards  */}
        <div className="grid lg:grid-cols-4 gap-4 my-4 xs:grid-cols-1 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 0].map((index) => (
            <BookCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BooksLayout;
