import React from "react";
import Recommendations from "./Recommendations";
import BookCard from "./BookCard";

function BooksLayout() {
  return (
    <div className="grid md:grid-cols-4 gap-8 px-8 mt-4 xs:grid-cols-1">
      <div className="md:col-span-1 xs:col-span-1">
        <Recommendations />
      </div>
      <div className="md:col-span-3 xs:col-span-1">
        {/* Filters  */}
        <div class="">
          <button
            type="button"
            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
            All Books
          </button>
          <button
            type="button"
            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            Fiction
          </button>
          <button
            type="button"
            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            Journal
          </button>
          <button
            type="button"
            class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            Kids
          </button>
        </div>
        {/* Search  */}
        <div className="flex w-full m-2 gap-8 justify-between xs:flex-wrap">
          <div class="flex items-center basis-1/2">
            <input
              type="text"
              class="w-full rounded-lg border border-gray-400 p-2"
              placeholder="Search ..."
            />
            <button class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 0].map((item) => (
            <BookCard />
          ))}
        </div>
        <div className="w-full mx-auto flex justify-center items-center gap-4 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p className="text-lg items-center text-violet-500">
          5 of 20
          </p>
            
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BooksLayout;
