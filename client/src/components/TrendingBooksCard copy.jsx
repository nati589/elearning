import React from "react";

const TrendingBooksCard = ({
  book_title,
  book_details,
  book_thumbnail,
}) => {
  return (
    <div className="card bg-white border-l-8 border-medium-purple rounded-lg shadow-md my-4 p-6 h-88 w-80">
      <h1 className=" text-lg md:text-xl mb-4 font-bold">{book_title}</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <img className="w-32 h-16 " src={book_thumbnail} alt="books" />
        </div>
        <div className="col-span-3">
          <p className="text-xs md:text-sm">{book_details}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingBooksCard;

