// InputWithSuggestion.js
import React, { useState } from 'react';

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const InputWithSuggestion = () => {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show the suggestion modal when input is not empty
    setShowModal(value !== '');
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowModal(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        value={inputValue}
        onChange={handleInputChange}
      />
      {showModal && (
        <div className="absolute top-10 left-0 w-full bg-purple border rounded shadow-md z-10">
          <ul>
            {suggestions
              .filter((suggestion) =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputWithSuggestion;
