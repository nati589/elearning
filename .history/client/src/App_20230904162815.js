import React from "react";
import Header from "./components/Header";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
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

export default function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#F7F5FA", minHeight: "100vh" }}
    >
      {/* <Background /> */}
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/profile" element={<UserProfile />}>
          <Route exact index element={<UserProfileDashboard />} />
          <Route exact path="/profile/privacy" element={<ProfilePrivacy />} />
          <Route exact path="/profile/setting" element={<Setting />} />
          <Route exact path="/profile/support" element={<Support />} />
        </Route>
      </Routes>

      {/* <Subscription /> */}

      <Footer />
    </div>
  );
}
