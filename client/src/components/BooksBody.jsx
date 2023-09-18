import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PopularBooksCard from "./PopularBooksCard";
import PopularBooksImg from "../../src/assets/PopularBookImg.png";
import TrendingBookImg from "../../src/assets/TrendingBooksImg.png";
import TrendingBooksCard from "./TrendingBooksCard";
import booksData from "./booksData";
import BookSearch from "./BookSearch";
import axios from "axios";
import BookImg from "../../src/assets/BookImg.png"; // Adjust the path as needed

export default function BooksBody() {
  const [books, setBooks] = useState([...booksData]);

  useEffect(() => {
    axios
      .get("/books/getBooks")
      .then((res) => {
        // console.log()
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
      <div className="w-full md:w-1/4 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-center items-center">
        <div className="flex flex-col flex-nowrap ">
          <div className="my-2 shadow-md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-medium-purple px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Trending Books
            </h2>
            <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
              <PopularBooksCard
                bookId="1"
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBooksImg}
                book_total_hour="3Hours"
                book_instructure="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <PopularBooksCard
                bookId="1"
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBooksImg}
                book_total_hour="3Hours"
                book_instructure="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <PopularBooksCard
                bookId="1"
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBooksImg}
                book_total_hour="3Hours"
                book_instructure="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <PopularBooksCard
                bookId="1"
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBooksImg}
                book_total_hour="3Hours"
                book_instructure="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
            </div>

            <div className="flex flex-col flex-nowrap ">
              <div className="my-2 shadow-md">
                <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-medium-purple px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  Trending Books
                </h2>
                <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
                  <TrendingBooksCard
                    course_title="new course"
                    course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    course_thumbnail={TrendingBookImg}
                  />
                  <TrendingBooksCard
                    course_title="new course"
                    course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    course_thumbnail={TrendingBookImg}
                  />
                  <TrendingBooksCard
                    course_title="new course"
                    course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    course_thumbnail={TrendingBookImg}
                  />
                  <TrendingBooksCard
                    course_title="new course"
                    course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    course_thumbnail={TrendingBookImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-center">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
          Our Books
        </h4>

        <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-center sm:justify-between">
          <BookSearch searchData={books} />
        </div>
      </div>
    </div>
  );
}
