import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import ProgressPage from "./pages/ProgressPage";

import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import BooksDetailsPage from "./pages/BooksDetailsPage";

import TestPage from "./pages/TestPage";
import UserProfile from "./pages/UserProfile";
import Support from "./components/Support";
import Setting from "./components/Setting";
import ProfilePrivacy from "./components/PrivacyAndSecurity";
import UserProfileDashboard from "./components/UserProfileDashboard";
// import Background from "./components/Background";
import "./styles/App.css";
import Cart from "./pages/Cart";
import PasswordResetPage from "./pages/PasswordResetPage";
import LearningPage from "./pages/LearningPage";
import SectionContent from "./components/LearningPageComponents/SectionContent";
import CourseSectionList from "./components/LearningPageComponents/CourseSectionList";
// import MyBooks from "./pages/MyBooks";
// import MyCourses from "./pages/MyCourses";
import MyBooksPage from "./pages/MyBooksPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import ReadingPage from "./pages/ReadingPage";
import FaqandHelp from "./pages/FaqandHelp";

export default function App() {
  const [renderSubscription, setRender] = useState(
    !(localStorage.getItem("username") && localStorage.getItem("user_id"))
  );
  const isLoggedOut = () => {
    // console.log("logout update");

    setRender(
      !(localStorage.getItem("username") && localStorage.getItem("user_id"))
    );
  };

  useEffect(() => {
    // console.log("renderSubscription");
    setRender(
      !(localStorage.getItem("username") && localStorage.getItem("user_id"))
    );
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#F7F5FA", minHeight: "100vh" }}
    >
      {/* <Background /> */}

      <Header logoutUpdate={isLoggedOut} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/bookdetails/:id" element={<BooksDetailsPage />} />
        <Route path="/readingpage" element={<ReadingPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails/:id" element={<CourseDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/learning" element={<LearningPage />}>
          {/* Nested route for sections */}
          <Route index element={<CourseSectionList />} />
          <Route
            path="/learning/section/:sectionId"
            element={<SectionContent />}
          />
        </Route>
        <Route path="/profile" element={<UserProfile />}>
          <Route exact index element={<UserProfileDashboard />} />
          <Route exact path="/profile/privacy" element={<ProfilePrivacy />} />
          <Route exact path="/profile/setting" element={<Setting />} />
          <Route exact path="/profile/support" element={<Support />} />
        </Route>
        <Route exact path="password-reset" element={<PasswordResetPage />} />
        <Route path="/mybooks" element={<MyBooksPage />}></Route>
        <Route path="/mycourses" element={<MyCoursesPage />}></Route>
        <Route path="/faq-and-help" element={<FaqandHelp/>} />
      </Routes>

      {renderSubscription && <Subscription />}

      <Footer />
    </div>
  );
}
