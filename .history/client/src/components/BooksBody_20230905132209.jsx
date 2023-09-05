import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BooksCard from "./BooksCard";

export default function BooksBody() {
  const [filter, setFilter] = useState("all"); // Initial filter value, 'all' or any default value

  const handleFilterClick = (event, newFilter) => {
    event.preventDefault();
    setFilter(newFilter);
  };

  const isActive = (value) => {
    return value === filter ? "books-nav-active" : "books-nav";
  };
  return (
    <div className=" ">
      <h1 className="text-dark-purple font-bold text-3xl text-center">
        General Books
      </h1>
      <div className="flex items-center justify-center ">
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
        <BooksCard />
      </div>
    </div>
  );
}
