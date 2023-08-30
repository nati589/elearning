import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
// import Background from "./components/Background";

export default function App() {
  return (
    <div>
      {/* <Background /> */}
      <Header />

      <Routes>
        <Route exact path="/elearning/" element={<LandingPage />} />
        <Route path="/elearning/books" element={<BooksPage />} />
        <Route path="/elearning/courses" element={<CoursesPage />} />
        <Route path="/elearning/coursedetails" element={<CourseDetailsPage />} />
      </Routes>
              
      
  
      <Subscription />

      <Footer />
    </div>
  );
}
