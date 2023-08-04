import React from "react";
import CoursesHero from "../components/CoursesHero";
import CoursesList from "../components/CourseList";
import OtherCourses from "../components/OtherCourses";
import { useNavigate } from "react-router-dom";

function CoursesPage() {
  const navigate = useNavigate();

  return (
    <>
    
      <CoursesHero />
      <CoursesList />
      <OtherCourses />
    </>
  );
}

export default CoursesPage;
