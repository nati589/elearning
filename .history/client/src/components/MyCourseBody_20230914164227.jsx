import { React, useEffect, useState } from "react";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import BookImg from "../../src/assets/Image.png";
import CoursesSearch from "./CoursesSearch";
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
        <div className="flex flex-col flex-nowrap w-full"></div>
      </div>
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-center">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
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
