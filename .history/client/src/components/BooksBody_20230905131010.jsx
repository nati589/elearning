import React from "react";
import { NavLink, useState } from "react-router-dom";

const [filter, setFilter] = useState("all"); // Initial filter value, 'all' or any default value

const handleFilterClick = (event, newFilter) => {
  event.preventDefault();
  setFilter(newFilter);
};

const isActive = (value) => {
  return value === filter ? "books-nav-active" : "books-nav";
};
export default function BooksBody() {
  return (
    <div>
      <h1 className="text-dark-purple font-bold text-3xl text-center">
        General Books
      </h1>
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
  );
}
