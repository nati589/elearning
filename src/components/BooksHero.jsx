import React from "react";
import { useNavigate } from "react-router-dom";
import BooksHeroImage from "../assets/booksheroimage.jpg";
import booksIcon from "../assets/booksicon.png";

function BooksHero() {
  const navigate = useNavigate();
  return (
    <div className="mx-8 bg-violet-50 rounded-3xl px-8 py-2">
      <div className="">
        <button
          className="text-gray-400"
          onClick={() => {
            navigate("/elearning/");
          }}>
          Home
        </button>
        <span className="text-gray-400"> | </span>
        <button
          className="text-fuchsia-700"
          onClick={() => {
            navigate("/elearning/books");
          }}>
          Books
        </button>
      </div>
      <div className="flex items-center justify-around py-4 flex-wrap-reverse lg:flex-nowrap">
        <>
        <span className="flex gap-4">
          <img src={booksIcon} alt="Books Icon" className="w-16 h-16" />
        <h2 className="text-4xl sm:text-6xl font-bold">
          {" "}
          Online <span className="text-fuchsia-500">Books</span> Shop
        </h2>
        </span>
        </>
        <img src={BooksHeroImage} alt="" className="w-96 rounded-2xl" />
      </div>
    </div>
  );
}

export default BooksHero;
