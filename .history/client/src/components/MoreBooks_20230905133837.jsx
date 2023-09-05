import React from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
function MoreBooks() {
  return (
    <div>
      {" "}
      <div>
        <h1 className="text-xl font-semibold text-dark-purple">
          Recommended Books
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
      <div>
        <h1 className="text-xl font-semibold text-dark-purple">
          Trending Books
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
