import React, { useState } from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import BookImg from "../../src/assets/Cardphoto10.png";

function MoreBooks() {
  const [open, setOpen] = useState(true);

  return (
    <div className="grid-cols-1">
      <div className="h-6/12 ">
        <div
          className={`h-12 w-24 bg-dark-purple pt-3 py-10 ${
            open ? "w-80" : "w-20"
          } duration-300 relative rounded-lg`}
        >
          <h1 className="text-xl font-semibold text-white text-center p-0">
            Popular Books
          </h1>

          <div className="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
        </div>
        {/* <div className="h-6/12">
          <div
            className={`h-12 w-24 bg-dark-purple pt-3 py-10 ${
              open ? "w-80" : "w-20"
            } duration-300 relative rounded-lg`}
          >
            <h1 className="text-xl font-semibold text-white text-center p-0">
              New Arrivals{" "}
            </h1>
            <TrendingCard
              course_title="Course Title"
              course_details="Course Details go here."
              course_thumbnail="URL_to_course_thumbnail_image"
            />
            <TrendingCard
              course_title="Course Title"
              course_details="Course Details go here."
              course_thumbnail="URL_to_course_thumbnail_image"
            />{" "}
            <TrendingCard
              course_title="Course Title"
              course_details="Course Details go here."
              course_thumbnail="URL_to_course_thumbnail_image"
              
            /> */}
        <div className="my-2 shadow-md">
          <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Trending Courses
          </h2>
          <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
            <TrendingCard
              course_title="new course"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={BookImg}
            />
            <TrendingCard
              course_title="new course"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={BookImg}
            />
            <TrendingCard
              course_title="new course"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={BookImg}
            />
            <TrendingCard
              course_title="new course"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={BookImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreBooks;
