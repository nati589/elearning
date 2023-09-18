import React from "react";
import PopularCourseImg from "../assets/PopularCourseImg.png"
import BookImg from "../../src/assets/BookImg.png"; // Adjust the path as needed

function PopularCourseCard({ title, instructor, time, rating, price }) {
  return (
    <div>
      {/* <!-- component --> */}
      <div className="flex flex-col gap-4 items-center justify-center">
        {/* <!-- Card 1 --> */}
        <a
          href="#"
          className="w-full border-2 border-b-4 bg-white border-medium-purple mt-3 rounded-xl hover:bg-gray-50"
        >
          <div className="grid grid-cols-6 p-5 gap-y-2">
            {/* <!-- Profile Picture --> */}
            <div>
              <img
                src={PopularCourseImg}
                className="max-w-16 max-h-16 rounded-full"
                alt="Book Thumbnail"
              />
            </div>

            {/* <!-- Description --> */}
            <div className="col-span-5 md:col-span-4 ml-4">
              <p className="text-dark-purple font-bold text-sm">{title}</p>

              <p className="text-gray-600 font-bold text-xs">{instructor}</p>
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-1">
                  <p className="text-gray-400">Time: {time}</p>
                  <p className="text-gray-400">Rating: {rating}</p>
                </div>
                <div className="grid grid-cols-1">
                  <p className="text-gray-400">Price: {price}</p>
                  <p className="text-gray-400">Rating: {rating}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-center mb-2">
            <p className="rounded-lg text-dark-purple font-bold bg-light-purple py-1 px-3 text-sm w-fit h-fit">
              Add to Cart
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PopularCourseCard;
