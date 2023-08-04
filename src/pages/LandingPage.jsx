import React from "react";
import LandingHero from "../components/LandingHero";
import OurGoal from "../components/OurGoal";
import CoursesList from "../components/CourseList";
import Mentor from "../components/Mentor";

import Explore from "../components/Explore";

function LandingPage() {
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
