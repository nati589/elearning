import React from "react";
import LandingHero from "../components/LandingHero";
import OurGoal from "../components/OurGoal";
import CoursesList from "../components/CourseList";
import Mentor from "../components/Mentor";
// import CoursesHero from "../components/CoursesHero";

import Explore from "../components/Explore";
// import { useNavigate } from "react-router-dom";

function LandingPage() {
  // const navigate = useNavigate();
  return (
    <>
      <LandingHero />
      <OurGoal />
      <CoursesList />
      <Mentor />
      <Explore />
    </>
  );
}

export default LandingPage;
