import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CoursePreview from "./pages/CoursePreview";
import PricingPage from "./pages/PricingPage";
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
        <Route path="/elearning/coursepreview" element={<CoursePreview />} />
        <Route path="/elearning/login" element={<LoginPage />} />
        <Route path="/elearning/register" element={<RegistrationPage />} />
        <Route path="/elearning/pricing" element={<PricingPage />} />
      </Routes>
              
      
  
      <Subscription />

      <Footer />
    </div>
  );
}
