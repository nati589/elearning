import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursesSearch from "./CoursesSearch";

function MyCoursesBody() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("/courses/getTotalCourses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        // Handle the error as needed.
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row flex-nowrap w-full">
      <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        {/* Your content for the left column */}
      </div>
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-8 my-4 flex flex-col justify-start items-center">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
          Our Courses
        </h4>
        <div className="flex flex-wrap justify-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              {/* Render your course card here */}
            </div>
          ))}
        </div>
        <div className="flex w-full m-2 my-3 flex-col sm:flex-row items-start sm:justify-between">
          <CoursesSearch searchData={courses} />
          <CoursesSearch searchData={courses} />
          <CoursesSearch searchData={courses} />
          <CoursesSearch searchData={courses} />
        </div>
      </div>
    </div>
  );
}

export default MyCoursesBody;
