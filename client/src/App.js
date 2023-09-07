import React,{useEffect} from "react";
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
import Dashboard from "./components/Dashboard";

export default function App() {


  return (
    <div
      className="App"
      style={{ backgroundColor: "#F7F5FA", minHeight: "100vh" }}>
      {/* <Background /> */}
      
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />}>
          <Route exact index element={<UserProfileDashboard />} />
          <Route exact path="/profile/privacy" element={<ProfilePrivacy />} />
          <Route exact path="/profile/setting" element={<Setting />} />
          <Route exact path="/profile/support" element={<Support />} />
        </Route>
        <Route exact path="password-reset" element={<PasswordResetPage />} />
      </Routes>

      {/* <Subscription /> */}

      <Footer />
    </div>
  );
}
