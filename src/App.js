import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CourseList from "./components/CourseList";
import CoursesHero from "./components/CoursesHero.jsx";
import OtherCourses from "./components/OtherCourses.jsx";
import Background from "./components/Background";

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

      {/* <CoursesHero />
      <CourseList />
      <OtherCourses /> */}
      <Subscription />

      <Footer />
    </div>
  );
}
