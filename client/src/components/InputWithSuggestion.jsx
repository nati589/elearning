import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import CourseCard from "./CourseCard";

const InputWithSuggestion = ({ searchData }) => {
  // const suggestions = searchData;
  const [suggestions, setSuggestions] = useState(searchData);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show the suggestion modal when input is not empty
    setShowModal(true);

    setSuggestions(
      searchData.filter((course) =>
        course.course_name.toLowerCase().includes(value.toLowerCase())
      )
    );
    // Filter and set the search results
    const filteredResults = searchData.filter(
      (course) => course.course_name.toLowerCase() === value.toLowerCase()
    );

    setSearchResults(filteredResults);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.course_name);
    setShowModal(false);
  };

  const handleOnclick = () => {
    setShowModal(false);
    setShowSearch(true);
  };

  const renderCourses = () => {
    const coursesToRender =
      searchResults.length > 0 ? searchResults : searchData;

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {coursesToRender.map((course, index) => (
          <CourseCard
            key={index}
            courseId={course.course_id}
            course_name={course.course_title}
            course_description={course.course_details}
            courseImagePath="./Image.png"
            hoursNeeded={course.course_total_hour}
            teacherName={course.course_instructor}
            rating={course.course_rating}
            price={course.course_price}
            level={course.course_level}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className=" w-full flex h-fit  flex-row justify-between items-center mx-3 basis-1/2 my-3 ">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search title"
            className="w-full rounded-lg bg-transparent p-2 py-3 text-base font-normal border-2 border-purple "
            value={inputValue}
            onChange={handleInputChange}
            onBlur={() => setShowModal(false)}
          />
          {showModal && (
            <div className="absolute top-10 left-0 w-full bg-purple-50 border rounded shadow-md z-10">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.course_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          className="flex flex-row items-center justify-between ml-1  px-6 py-3 h-fit w-fit rounded-lg bg-dark-purple text-white hover:bg-medium-purple text-base "
          onClick={handleOnclick}>
          <BiSearch className="text-xl" />
          <div className="mx-2">Search</div>
        </button>

        <label
          htmlFor="sort"
          className=" w-full font-semibold text-base text-purple-700 opacity-50 flex flex-row mx-2 items-center justify-center  ">
          <span className="text-lg">Sort by :</span>
          <select
            name="sort"
            id="sort"
            className="rounded-md p-2 bg-transparent text-writing-dark pr-12 ">
            <option value="a">Latest</option>
            <option value="b">Oldest</option>
            <option value="c">c</option>
          </select>
        </label>
      </div>

      {renderCourses()}
    </div>
  );
};

export default InputWithSuggestion;
