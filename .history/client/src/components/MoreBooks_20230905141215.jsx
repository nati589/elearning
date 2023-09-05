import React from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import selam from "../../src/assets/Cardphoto10.png";

function MoreBooks() {
  return (
    <div>
      {" "}
      <div>
        <div className="relative bg-white rounded-lg border-t-8 border-x-1 min-h-[180px] lg:min-h-[380px] h-fit md:w-full  border-medium-purple p-2 shadow-md">
          <h1 className="text-xl font-semibold text-dark-purple">
            Popular Books
          </h1>
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
      </div>
      <div>
        <h1 className="text-xl font-semibold text-dark-purple">
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
        />
      </div>
    </div>
  );
}

export default MoreBooks;
