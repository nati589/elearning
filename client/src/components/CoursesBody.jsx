import { React ,useState} from "react";
import CourseCard from "./CourseCard";
import PopularCourseCard from "./PopularCourseCard";
import TrendingCard from "./TrendingCoursesCard";
import BookImg from "../../src/assets/Cardphoto10.png";
import { BiSearch } from "react-icons/bi";
import SearchComponent from "./search";
import InputWithSuggestion from "./InputWithSuggestion";
import courseData from "./courseData";


function CoursesBody() {
  const [courses,setCourses]=useState([...courseData])
  
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
                course_thumbnail={BookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={BookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={BookImg}
                course_total_hour="3Hours"
                course_instructure="selam"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                course_thumbnail={BookImg}
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
      <div className="w-full md:w-8/12 text-xs md:text-base px-4 md:px-20 my-4 flex flex-col justify-start items-center">
        <h4 className="text-center text-2xl md:text-4xl font-bold text-writing-dark">
          Other courses
        </h4>
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
  );
}
export default CoursesBody;
