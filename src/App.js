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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
              
      
  
      <Subscription />

      <Footer />
    </div>
  );
}
