import React, { useState } from "react";
import ProgressCard from "../components/ProgressCard";
import selam from "../../src/assets/Cardphoto10.png";
import PopularCourseCard from "../components/PopularCourseCard";

function ProgressPage() {
  const assignArray = [5, 4, 10, 8];
  const quizArray = [5, 4, 10, 8];
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex flex-row flex-nowrap ">
        <div className="w-4/12 ">
          <div
            className={`h-12 w-24 bg-dark-purple pt-3 py-10 ${
              open ? "w-80" : "w-20"
            } duration-300 relative rounded-lg`}
          >
            <h1 className="text-xl font-semibold text-white text-center p-0">
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
        <div class="card-body w-8/12">
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
    </>
  );
}
export default ProgressPage;
