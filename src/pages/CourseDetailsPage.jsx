import React from 'react'
import { useNavigate } from "react-router-dom";
import DetailsHero from '../components/DetailsHero';
import CourseDetails from '../components/CourseDetails';
import SimilarCourses from '../components/SimilarCourses';


function CourseDetailsPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}>
        home
      </button>
      <DetailsHero />
      <CourseDetails />
      <SimilarCourses />
    </>
  )
}

export default CourseDetailsPage