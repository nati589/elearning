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
// import Background from "./components/Background";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F7F5FA", minHeight: "100vh" }}>
      {/* <Background /> */}
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/coursedetails" element={<CourseDetailsPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      {/* <Subscription /> */}

      <Footer />
    </div>
  );
}
