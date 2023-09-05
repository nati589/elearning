import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
import Subscription from "../components/Subscription";
import BookCard from "../components/BookCard";

function BooksPage() {
  return (
    <>
      <BooksHero />
      <BooksLayout />
      <BookCard />
      <Subscription />
    </>
  );
}

export default BooksPage;
