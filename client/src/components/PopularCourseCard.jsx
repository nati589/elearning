import React, { useEffect, useState } from "react";
import PopularCourseImg from "../assets/PopularCourseImg.png";
// import courseImg from "../assets/courseImg.png"; // Adjust the path as needed
import ResponseMessage from "./ResponseMessage";
import axios from "axios";

function PopularCoursesCard({
  courseId,
  title,
  course_description,
  instructor,
  time,
  rating,
  price,
  courseImagePath,
}) {
  const images = require.context("../../../server/courses/thumbnails");
  console.log(courseImagePath, "courseImagePath");
  let course_image;
  try {
    if (courseImagePath !== null) {
      // console.log("is not null")
      course_image = images(`./${courseImagePath}`);
    } else {
      course_image = images("./default_course_image.png");
    }
  } catch (error) {
    course_image = images("./default_course_image.png");
  }
  const partialDesc = course_description ? course_description.slice(0, 80) : "";

  const [failure, setFailure] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [resMsg, setResMsg] = useState("");
  const addToCart = () => {
    axios
      .post("/cart/addToCart", {
        book_id: courseId,
        user_id: localStorage.getItem("user_id"),
        course_id: null,
      })
      .then((res) => {
        setAddSuccess(true);
        setFailure(false);
        setResMsg(res.data.message);
      })
      .catch((error) => {
        setResMsg(error.response.data.message);
        setAddSuccess(true);
        setFailure(true);
      });
  };
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
                src={course_image}
                className="max-w-16 max-h-16 rounded-full"
                alt="course Thumbnail"
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
          <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-center">
            {addSuccess && (
              <ResponseMessage failure={failure} message={resMsg} />
            )}

            {(!addSuccess || failure) &&
              localStorage.getItem("username") &&
              localStorage.getItem("user_id") && (
                <button
                  className="rounded-lg text-dark-purple font-bold bg-light-purple  py-1 px-3 text-sm w-fit h-fit mb-3"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
          </div>
        </a>
      </div>
    </div>
  );
}

export default PopularCoursesCard;
