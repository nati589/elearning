import React from "react";

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
