import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
import { useNavigate } from "react-router-dom";

function BooksPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/courses");
        }}>
        courses
      </button>
      <BooksHero />
      <BooksLayout />
    </>
  );
}

export default BooksPage;
