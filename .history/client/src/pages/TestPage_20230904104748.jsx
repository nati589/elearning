import React from "react";
import PopularCourseCard from "../components/PopularCourseCard";
import selam from "../../src/assets/Cardphoto10.png";

function TestPage() {
  return (
    <div className="flex flex-col flex-nowrap w-full h-fit px-2 py-2 bg-slate-200">
      <h1 className=" font-bold tracking-tight text-[#0A033C] sm:text-6xl lg:text-start sm:text-center">
        Welcome to test page
      </h1>

      {/* <CourseCard course_id="1" /> */}
      <PopularCourseCard
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={selam}
        course_total_hour="3Hours"
        course_instructure="selam"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
      <PopularCourseCard
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={selam}
        course_total_hour="3Hours"
        course_instructure="selam"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
      <PopularCourseCard
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={selam}
        course_total_hour="3Hours"
        course_instructure="selam"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
      <PopularCourseCard
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={selam}
        course_total_hour="3Hours"
        course_instructure="selam"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
      <PopularCourseCard
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={selam}
        course_total_hour="3Hours"
        course_instructure="selam"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
    </div>
  );
}

export default TestPage;
