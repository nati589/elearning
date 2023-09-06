import React from "react";
import ProgressCard from "../components/ProgressCard";
import selam from "../../src/assets/Cardphoto10.png";
import PopularCourseCard from "./PopularCourseCard";

function ProgressPage() {
  const assignArray = [5, 4, 10, 8];
  const quizArray = [5, 4, 10, 8];

  return (
    <>
      <ProgressCard
        assignment={assignArray}
        quiz={quizArray}
        mid="20"
        final="45"
        totalCourseContents="30"
      />
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
    </>
  );
}
export default ProgressPage;
