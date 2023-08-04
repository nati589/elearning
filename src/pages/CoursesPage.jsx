import React from "react";
import CoursesHero from "../components/CoursesHero";
import CoursesList from "../components/CourseList";
import OtherCourses from "../components/OtherCourses";

function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <CoursesList />
      <OtherCourses />
    </>
  );
}

export default CoursesPage;
