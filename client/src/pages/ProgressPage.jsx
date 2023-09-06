import React from "react";
import ProgressCard from "../components/ProgressCard";
function ProgressPage() {
  const assignArray = [5, 4, 10, 8];
  const quizArray = [5, 4, 10, 8];

  return (
    <div className="py-20 bg-slate-400">
      <ProgressCard
        assignment={assignArray}
        quiz={quizArray}
        mid="20"
        final="45"
        totalCourseContents="30"
      />
    </div>
  );
}
export default ProgressPage;
