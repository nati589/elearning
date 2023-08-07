import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
<<<<<<< HEAD
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";

import CourseList from "./components/CourseList";
import CoursesHero from "./components/CoursesHero.jsx";
import OtherCourses from "./components/OtherCourses.jsx";

=======
import CourseDetailsPage from "./pages/CourseDetailsPage";
>>>>>>> 00cb1e2496142dce125b0f6e4778301ffe17b677
import Background from "./components/Background";
import CoursesPage from "./pages/CoursesPage";
import DetailsHero from "./components/DetailsHero";
import CourseDetails from "./components/CourseDetails";

export default function App() {
  return (
    <div>
      <Background />
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/books" element={<BooksPage />} />
<<<<<<< HEAD

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
      </Routes>

=======
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
      </Routes>
              
      
  
>>>>>>> 00cb1e2496142dce125b0f6e4778301ffe17b677
      <Subscription />

      <Footer />
    </div>
  );
}
