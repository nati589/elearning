import { React, useEffect, useState } from "react";
import PopularBooksCard from "./PopularBooksCard";
import PopularBookImg from "../assets/PopularBookImg.png";

import MyBooksSearch from "./MyBookSearch";
import bookData from "./booksData";
import axios from "axios";
import BookRecommendationCard from "./BookRecommendationCard";

function MyBooksBody() {
  const [books, setBooks] = useState([...bookData]);

  useEffect(() => {
    axios
      .get("books/getBooks")
      .then((res) => {
        setBooks([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        // navigate("/");
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full">
      <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        <div className="flex flex-col flex-nowrap">
          <div className="my-2 shadow-md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Recommended books
            </h2>
            <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
              <BookRecommendationCard
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBookImg}
                book_total_hour="3Hours"
                book_author="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <BookRecommendationCard
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBookImg}
                book_total_hour="3Hours"
                book_author="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <BookRecommendationCard
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBookImg}
                book_total_hour="3Hours"
                book_author="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
              <BookRecommendationCard
                book_title="interaction"
                book_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                book_thumbnail={PopularBookImg}
                book_total_hour="3Hours"
                book_author="selam"
                book_level="level"
                book_rate="4.7"
                book_price="price"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-center">
        <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
          <MyBooksSearch searchData={books} />
        </div>
      </div>
    </div>
  );
}
export default MyBooksBody;
