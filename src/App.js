import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";
// import Course from "./pages/Course";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CourseList from "./components/CourseList";
import CoursesHero from "./components/CoursesHero.jsx"
import OtherCourses from "./components/OtherCourses.jsx"
import Background from "./components/Background";
import CoursesHero from "./components/CoursesHero";
import OtherCourses from "./components/OtherCourses";
import CoursesList from "./components/CourseList";

export default function App() {
  return (
    <div>
      <Background />
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
      </Routes>
              
      
      <CoursesHero/>
      <CourseList/>
      <OtherCourses/>
      <Subscription />
<<<<<<< HEAD
      <CoursesHero />
      <CoursesList />
      <OtherCourses />

=======
>>>>>>> dbaf64163718d17eee2ed19e014f40c61a658b1d
      <Footer />
    </div>
  );
}
