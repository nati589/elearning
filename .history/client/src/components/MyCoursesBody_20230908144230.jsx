import { React, useState } from "react";
import CourseCard from "./CourseCard";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import BookImg from "../../src/assets/Cardphoto10.png";
import { BiSearch } from "react-icons/bi";
import SearchComponent from "./search";
import InputWithSuggestion from "./InputWithSuggestion";
import courseData from "./courseData";

function MyCoursesBody() {
  const [courses, setCourses] = useState([...courseData]);

  return (
    <div className="flex flex-col justify-center flex-nowrap w-full">
      <div className="bg-white px-5">
        <div className="flex flex-col flex-nowrap my-3 bg-light-purple rounded-lg shadow-md py-5 w-full justify-center items-center ">
          <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
            My Courses
          </h2>
        </div>
      </div>
      <div className="w-full md:w-4/12 text-xs md:text-sm px-8 md:px-2 pt-2 my-4 flex flex-col justify-start items-center">
        <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-20 my-4 flex flex-col justify-start items-center">
          <div className="flex  w-full m-2 my-3 flex-col sm:flex-row  items-start sm:justify-between">
            <InputWithSuggestion searchData={courses} />
            <div className="flex flex-row mx-3 items-center justify-center pl-3 mt-8">
              <label
                htmlFor="sort"
                className="mr-2 text-lg font-semibold text-purple-700 opacity-50  "
              >
                <pre className="sm:text-[1.5rem]">Sort by : </pre>
              </label>
              <select
                name="sort"
                id="sort"
                className="rounded-md p-2 font-semibold bg-transparent pr-12 text-lg "
              >
                <option className="" value="a ">
                  Latest
                </option>
                <option value="b">Oldest</option>
                <option value="c">c</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyCoursesBody;
