import React from "react";
import { useNavigate } from "react-router-dom";
import DetailsHero from "../components/DetailsHero";
import CourseDetails from "../components/CourseDetails";
import SimilarCourses from "../components/SimilarCourses";
import CoursesHero from "../components/CoursesHero";

function CourseDetailsPage() {
  const navigate = useNavigate();

  return (
    <>

      <DetailsHero />
      <CourseDetails />
      <SimilarCourses />
    </>
  );
}

export default CourseDetailsPage;
