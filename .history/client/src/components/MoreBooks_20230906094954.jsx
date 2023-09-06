import React, { useState } from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import selam from "../../src/assets/Cardphoto10.png";

function MoreBooks() {
  const [open, setOpen] = useState(true);

  return (
    <div className="grid-cols-1">
      <div className="flex justify-between">
        {/* Popular Books Section */}
        <div
          className={`${
            open ? "w-2/3" : "w-1/5"
          } bg-dark-purple p-5 rounded-lg`}
        >
          <div class="card-body">
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
          <div class="card-body">
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
          <div class="card-body">
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

        {/* New Arrivals Section */}
        <div
          className={`${
            open ? "w-1/3" : "w-4/5"
          } bg-dark-purple p-5 rounded-lg`}
        >
          <h1 className="text-xl font-semibold text-white text-center">
            New Arrivals
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
          />
          <TrendingCard
            course_title="Course Title"
            course_details="Course Details go here."
            course_thumbnail="URL_to_course_thumbnail_image"
          />
          {/* Add more TrendingCard components here if needed */}
        </div>
      </div>
    </div>
  );
}

export default MoreBooks;
