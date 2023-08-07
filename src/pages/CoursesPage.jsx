import React from "react";
import { useNavigate } from "react-router-dom";
import DetailsHero from "../components/DetailsHero";
import CourseDetails from "../components/CourseDetails";
import SimilarCourses from "../components/SimilarCourses";
import CoursesHero from "../components/CoursesHero";
import CoursesList from "../components/CourseList";
import OtherCourses from "../components/OtherCourses";

function CourseDetailsPage() {
  const navigate = useNavigate();

  return (
    <>
<<<<<<< HEAD
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
      {/* <DetailsHero />
      <CourseDetails />
      <SimilarCourses /> */}
=======
>>>>>>> cd33a3b742440baea22a664aac5000966a267518
      <CoursesHero />
      <CoursesList />
      <OtherCourses />
    </>
  );
}

export default CourseDetailsPage;
