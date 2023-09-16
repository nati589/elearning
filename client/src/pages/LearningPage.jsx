import React, { useState } from "react";

const LearningPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { id: 1, title: "Section 1", content: "Content for Section 1" },
    { id: 2, title: "Section 2", content: "Content for Section 2" },
    { id: 3, title: "Section 3", content: "Content for Section 3" },
  ];
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };
  const course = {
    title: "Course Title",
    details:
      "Course Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    students: 5000,
    totalHours: 10,
  };

  return (
    <div className="">
      {/* Sections  */}
      <div className="flex my-4 h-screen">
        <div className="w-3/4 p-4">
          {/* Left side content */}
          <div className="bg-gray-200 p-4">
            {/* Content goes here */}
            {sections.map((section) => (
              <div key={section.id} className="my-4">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                {/* {activeSection === section.id && (
                  <p className="mt-2">{section.content}</p>
                )} */}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4 p-4">
          {/* Right side sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sections</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.id} className="cursor-pointer mb-4">
                  <div className="" onClick={() => toggleSection(section.id)}>
                    <div class=" rounded-lg shadow-sm py-2 px-5 border border-dark-purple flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                      <div class="flex flex-col sm:flex-row justify-start items-center gap-4">
                        <div class="flex p-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-dark-purple"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fill-rule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <div class="text-center sm:text-left">
                          <h1 class="text-dark-purple font-bold tracking-wider">
                            {section.title}
                          </h1>
                        </div>
                      </div>
                      <div>
                        <svg
                          className={`w-6 h-6 transition-transform transform ${
                            activeSection === section.id
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path
                            className="fill-current text-dark-purple"
                            d="M19.293 8.293l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 5.293 6.707L12 13.414l6.707-6.707a1 1 0 1 1 1.414 1.414z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {activeSection === section.id && (
                    <div className="ml-4 mt-2">
                      <p>{section.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Course Details  */}
      <div className="m-4 rounded-lg bg-white py-2 px-4">
        <h1 className="text-2xl font-bold mb-2">About this Course</h1>
        {/* Course details section */}
        <div className="p-4 mb-4">
          <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-2">{course.details}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-gray-600">{course.rating}</span>
          </div>
          <p className="text-gray-600 mb-2">
            {course.students} students &bull; {course.totalHours} total hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
