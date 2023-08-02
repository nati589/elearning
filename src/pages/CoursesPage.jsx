import React from "react";
import CoursesHero from "../components/CoursesHero";
import CoursesList from "../components/CoursesList";
import OtherCourses from "../components/OtherCourses";
import { useNavigate } from "react-router-dom";

function CoursesPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/coursedetails");
        }}>
        course details
      </button>
      <CoursesHero />
      <CoursesList />
      <OtherCourses />
    </>
  );
}

export default CoursesPage;
