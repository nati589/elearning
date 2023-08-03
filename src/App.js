import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
<<<<<<< HEAD
import CourseList from "./components/CourseList";
import CoursesHero from "./components/CoursesHero.jsx"
=======
import Background from "./components/Background";
>>>>>>> 27fc8d7bb6be53aedd4bffe1aece213032afd6ed

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

      <Subscription />

      <Footer />
    </div>
  );
}
