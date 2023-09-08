import React, { useState } from "react";

// Sample course data
const course = {
  title: "Sample Course Title",
  sections: [
    {
      id: 1,
      title: "Section 1: Introduction",
      lectures: [
        {
          id: 1,
          title: "Welcome to the course",
          videoUrl: "https://www.example.com/video1.mp4",
        },
        {
          id: 2,
          title: "Course overview",
          videoUrl: "https://www.example.com/video2.mp4",
        },
      ],
    },
    {
      id: 2,
      title: "Section 2: Core Concepts",
      lectures: [
        {
          id: 3,
          title: "Lecture 1: Introduction to React",
          videoUrl: "https://www.youtube.com/watch?v=osfqvSD4Nps",
        },
        {
          id: 4,
          title: "Lecture 2: Components and Props",
          videoUrl: "https://www.example.com/video4.mp4",
        },
      ],
    },
    // Add more sections and lectures as needed
  ],
};

const LearningPage = () => {
  const [currentSection, setCurrentSection] = useState(course.sections[0]);
  const [currentLecture, setCurrentLecture] = useState(
    currentSection.lectures[0]
  );
  const [selectedTab, setSelectedTab] = useState("overview"); // Default to 'overview'

  const changeSection = (section) => {
    setCurrentSection(section);
    setCurrentLecture(section.lectures[0]);
    setSelectedTab("overview"); // Reset to 'overview' when changing sections
  };

  const changeLecture = (lecture) => {
    setCurrentLecture(lecture);
  };

  const selectTab = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <p>This is the course overview.</p>;
      case "reviews":
        return <p>This is the reviews section.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">{course.title}</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* Move the course section list to the right side */}
          <div className="col-span-9">
            {" "}
            {/* Changed from col-span-3 to col-span-9 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">
                {currentSection.title}
              </h2>
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2">Lectures</h3>
                <ul>
                  {currentSection.lectures.map((lecture) => (
                    <li
                      key={lecture.id}
                      className={`cursor-pointer p-2 hover:bg-blue-100 ${
                        lecture === currentLecture ? "font-semibold" : ""
                      }`}
                      onClick={() => changeLecture(lecture)}
                    >
                      {lecture.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* Make the video display smaller */}
                <h3 className="text-base font-semibold mb-2">Video Player</h3>
                <div className="w-96 h-54">
                  {" "}
                  {/* Adjust the width and height as needed */}
                  <iframe
                    src={currentLecture.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 mt-4 rounded-lg shadow">
              <ul className="flex space-x-4">
                <li
                  className={`cursor-pointer ${
                    selectedTab === "overview" ? "font-semibold" : ""
                  }`}
                  onClick={() => selectTab("overview")}
                >
                  Overview
                </li>

                <li
                  className={`cursor-pointer ${
                    selectedTab === "reviews" ? "font-semibold" : ""
                  }`}
                  onClick={() => selectTab("reviews")}
                >
                  Reviews
                </li>
              </ul>
              {renderTabContent()}
            </div>
          </div>
          {/* Render the course section list on the right side */}
          <div className="col-span-3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Course Sections</h2>
              <ul>
                {course.sections.map((section) => (
                  <li
                    key={section.id}
                    className={`cursor-pointer p-2 hover:bg-blue-100 ${
                      section === currentSection ? "font-semibold" : ""
                    }`}
                    onClick={() => changeSection(section)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
