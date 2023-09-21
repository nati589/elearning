import { React, useEffect, useState } from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCoursesCard from "./TrendingCoursesCard";
import TrendingCourseImg from "../assets/TrendingCourseImg.png";

import PopularCourseImg from "../assets/PopularCourseImg.png";

import CoursesSearch from "./CoursesSearch";
import courseData from "./courseData";
import axios from "axios";
import SampleCard from "../components/SampleCard";

function CoursesBody() {
  const [courses, setCourses] = useState([...courseData]);
  const [popCourses, setPopCourses] = useState([...courseData]);

  useEffect(() => {
    axios
      .get("/courses/getCourses")
      .then((res) => {
        setCourses([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        // navigate("/");
      });
  }, []);

  useEffect(() => {
    // console.log("sec");
    axios
      .get(`/courses/getPopularCourse`)
      .then((res) => {
        setPopCourses([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full">
      <div className="w-full md:w-1/4 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        <div className="flex flex-col flex-nowrap ">
          <div className="my-2 -md">
            <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-medium-purple px-3 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Popular Courses
            </h2>
            <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
              {popCourses.map((course, index) => (
                <PopularCourseCard
                  key={index}
                  courseId={course.course_id}
                  course_title={course.course_title}
                  course_details={course.course_details}
                  course_total_hour={course.course_total_hour}
                  course_instructor={course.course_instructor}
                  course_rate={course.course_rating}
                  course_price={course.course_price}
                  course_level={course.course_level}
                />
              ))}
         
             
            </div>
          </div>
          <div className="flex flex-col flex-nowrap ">
            <div className="my-2 shadow-md">
              <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-medium-purple px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Trending Courses
              </h2>
              <div className="flex flex-col items-center flex-nowrap max-h-[700px] overflow-y-auto pt-5">
                <TrendingCoursesCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={TrendingCourseImg}
                />
                <TrendingCoursesCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={TrendingCourseImg}
                />
                <TrendingCoursesCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={TrendingCourseImg}
                />
                <TrendingCoursesCard
                  course_title="new course"
                  course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  course_thumbnail={TrendingCourseImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-center items-center">
        <h4 className="text-2xl md:text-4xl font-bold text-writing-dark text-center">
          Our Courses
        </h4>

        <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
          <CoursesSearch searchData={courses} />
        </div>
      </div>
    </div>
  );
}
export default CoursesBody;
