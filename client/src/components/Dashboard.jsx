import ProgressPage from "../pages/TestPage";
import ProgressCard from "./ProgressCard";
import selam from "../../src/assets/Cardphoto10.png";
import PopularCourseCard from "./PopularCourseCard";
import { useState } from "react";

function Dashboard() {
  const assignArray = [5, 4, 10, 8];
  const quizArray = [5, 4, 10, 8];

  return (
    <div className="   flex flex-col  items-center gap-3  h-full overflow-y-scroll  mx-auto my-auto py-5">
      <div className="py-5">
        <ProgressCard
          assignment={assignArray}
          quiz={quizArray}
          mid="20"
          final="45"
          totalCourseContents="30"
        />
      </div>
      <div className="py-5">
        <ProgressCard
          assignment={assignArray}
          quiz={quizArray}
          mid="20"
          final="45"
          totalCourseContents="30"
        />
      </div>
    </div>
  );
}

export default Dashboard;
