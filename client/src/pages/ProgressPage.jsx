import React from "react";
import ProgressCard from "../components/ProgressCard";
 function ProgressPage() {
    const assignArray=[5, 4, 10, 8]
    const quizArray=[5, 4, 10, 8]

    return (
        <ProgressCard assignment={assignArray} quiz={quizArray} mid='20' final='45' totalCourseContents='30'/>
    );
    
  }
  export default ProgressPage;
  