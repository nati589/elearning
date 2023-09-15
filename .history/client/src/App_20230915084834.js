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
import MyBooks from "./pages/MyBooks";
import MyCourses from "./pages/MyCourses";
import MyBooksPage from "./pages/MyBooksPage";
import MyCoursesPage from "./pages/MyCoursesPage";

export default function App() {
  const [renderSubscription, setRender] = useState(true);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#F7F5FA", minHeight: "100vh" }}
    >
      {/* <Background /> */}

      <Header subscription={setRender} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="/books" element={<BooksPage />} />
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
      </Routes>

      {renderSubscription && <Subscription />}

      <Footer />
    </div>
  );
}
