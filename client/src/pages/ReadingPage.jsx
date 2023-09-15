import React from "react";
import { useParams } from "react-router-dom";
import ReadingDetails from "../components/BooksComponents/ReadingDetails";

const ReadingPage = () => {
  const { bookId } = useParams();
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-center p-4">
        Book Reader App
      </h1>
      <ReadingDetails bookId={bookId} />
    </div>
  );
};

export default ReadingPage;
