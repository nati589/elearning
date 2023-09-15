// src/components/BookDetails.js
import React, { useEffect, useState } from "react";

const ReadingDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint to fetch book details by bookId
    fetch(`/api/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <img src={book.coverImage} alt={book.title} />
      {/* Add more book details here */}
    </div>
  );
};

export default ReadingDetails;
