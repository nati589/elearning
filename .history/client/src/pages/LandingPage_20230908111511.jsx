import React from "react";
import LandingHero from "../components/LandingHero";
import OurGoal from "../components/OurGoal";
import CoursesList from "../components/CourseList";
import Mentor from "../components/Mentor";
import Subscription from "../components/Subscription";
// import CoursesHero from "../components/CoursesHero";

// import Explore from "../components/Explore";
// import { useNavigate } from "react-router-dom";

function LandingPage() {
  // const navigate = useNavigate();
  return (
    <>
      <LandingHero
        hero_title="Learn Ethiopian Languages"
        hero_detail="Discover the beauty and diversity of Ethiopian languages through our immersive courses, interactive lessons, and cultural insights. Start your language learning journey today!"
      />
      <OurGoal
        goal_title="Our Goal"
        goal_detail="As we are passionate about promoting Ethiopian languages and bridging
        the linguistic gap for foreigners. Our team of experienced language
        experts and native speakers have developed a comprehensive curriculum to
        make learning Ethiopian languages accessible and enjoyable."
      />
      <CoursesList />
      <Mentor
        mentor_title="Want to share your knowledge? Join as a Mentor"
        mentor_detail="High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video."
      />
      {/* <Explore /> */}
      <div className="p-10">
        <Subscription />
      </div>
    </>
  );
}

export default LandingPage;
