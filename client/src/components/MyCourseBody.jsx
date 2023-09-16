import { React, useEffect, useState } from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import PopularBookImg from "../assets/PopularBookImg.jpeg";
import TrendingBookImg from "../assets/RecomendationsImg.jpeg";

import MyCoursesSearch from "./MyCoursesSearch";
import courseData from "./courseData";
import axios from "axios";

function CoursesBody() {
  const [courses, setCourses] = useState([...courseData]);

  useEffect(() => {
    axios
      .get("/courses/getTotalCourses")
      .then((res) => {
        setCourses([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        // navigate("/");
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full">
      <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        <div className="flex flex-col flex-nowrap w-full">
          <div className="my-2 shadow-md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Popular Courses
            </h2>
            <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={PopularBookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={PopularBookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={PopularBookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={PopularBookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
            </div>
          </div>
          <div className="my-2 shadow-md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Trending Courses
            </h2>
            <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
              <TrendingCard
                course_title="new course"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={TrendingBookImg}
              />
              <TrendingCard
                course_title="new course"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={TrendingBookImg}
              />
              <TrendingCard
                course_title="new course"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={TrendingBookImg}
              />
              <TrendingCard
                course_title="new course"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={TrendingBookImg}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-center">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
          Our Courses
        </h4>
        <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
          <MyCoursesSearch searchData={courses} />
        </div>
      </div>
    </div>
  );
}
export default CoursesBody;
