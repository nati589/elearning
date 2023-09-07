import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import CourseCard from "./CourseCard";

const InputWithSuggestion = ({ searchData }) => {
  const suggestions = searchData;
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show the suggestion modal when input is not empty
    setShowModal(value !== "");

    // Filter and set the search results
    const filteredResults = searchData.filter((course) =>
      course.course_name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.course_name);
    setShowModal(false);
  };

  const renderCourses = () => {
    const coursesToRender =
      searchResults.length > 0 ? searchResults : searchData;

    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {coursesToRender.map((course, index) => (
          <CourseCard
            key={index}
            courseId={course.course_id}
            course_name={course.course_name}
            course_description="Minim pariatur exercitation est aliquip deserunt id sit tempor voluptate."
            courseImagePath="./Image.png"
            hoursNeeded="2 hours"
            teacherName="Abe Kebe"
            rating="3.7"
            price="40 ETB"
            level="3"
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex sm:h-20 h-10 flex-row justify-between mx-3 basis-1/2 my-2 sm:mt-6">
        <div className="relative ">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full rounded-lg bg-transparent p-2 text-lg font-light pr-4 border-2 border-purple md:pr-28 sm:w-fit"
            value={inputValue}
            onChange={handleInputChange}
          />
          {showModal && (
            <div className="absolute top-10 left-0 w-full bg-purple-50 border rounded shadow-md z-10">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.course_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          className="ml-1 h-fit rounded-lg bg-dark-purple px-8 py-3 text-white hover:bg-blue-600 flex flex-row text-[1rem] sm:px-16 sm:py-2 "
          onClick={() => handleInputChange({ target: { value: inputValue } })}
        >
          <BiSearch className="mr-3 text-[1.5rem]" />
          <div className="my-auto sm:my-1">Search</div>
        </button>
      </div>

      {renderCourses()}
    </div>
  );
};

export default InputWithSuggestion;
